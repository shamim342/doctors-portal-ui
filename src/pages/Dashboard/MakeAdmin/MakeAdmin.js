import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [successAdmin, setSuccessAdmin] = useState(false);
    const [errorAdmin, setErrorAdmin] = useState(false);
    const {token} = useAuth();


    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleSubmit = e => {
        const user = { email };
        fetch('https://afternoon-chamber-70192.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization' : `Bearer ${token}`,
                 'Content-Type': 'application/json'
                 },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    // console.log(data);
                    setSuccessAdmin(true)
                    setEmail('')
                }else{
                    setErrorAdmin(true)
                }
            }
            )
            e.preventDefault();
    }
    return (
        <div>
            <h2>admin</h2>
            <form onSubmit={handleSubmit}>
                <TextField id="standard-basic" label="Make Admin" variant="standard" onBlur={handleOnBlur} sx={{ width: "50%" }} name='email' /><br />
                <Button type='submit' sx={{ margin: "1em 0", background: "#12c424" }} variant="outlined">Make Admin</Button>
            </form>
            {
                successAdmin && <Alert severity="success">Make Admin Successful</Alert>
            }
            {
                errorAdmin && <Alert severity="error">'Not User , Try Again'</Alert>
            }
        </div>
    );
};

export default MakeAdmin;