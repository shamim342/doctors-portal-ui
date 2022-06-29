import { useEffect, useState } from "react";
import initializFirebase from "../pages/Login/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, updateProfile , getIdToken} from "firebase/auth";


initializFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isAdmin , setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [token , setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // register or sign up
    const registerUser = (email, password, name, navigate, location) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser);
                saveUser(email , name , 'POST')

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                navigate(location?.state?.from || "/");
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // google 
    const googleUser = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email , user.displayName, 'PUT')
                navigate(location?.state?.from || "/");
                // ...
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));

    }

    // login
    const login = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate(location?.state?.from || "/");
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }

    // manage login -out 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                .then(idToken =>{
                    setToken(idToken)
                })
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])

    // logout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    useEffect(()=>{
        fetch(`https://afternoon-chamber-70192.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setIsAdmin(data.isAdmin))
    },[user?.email , user.email])

    const saveUser = (email , displayName , method)=>{
        const user ={email , displayName};
        fetch('https://afternoon-chamber-70192.herokuapp.com/users', {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        // .then(data => console.log(data))
    }

    return { user, registerUser, login, logOut, isLoading, authError, googleUser , isAdmin , token }
}
export default useFirebase;