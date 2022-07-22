import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import bg from '../../../assets/images/login.png'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../../Shared/Navigation/Navigation';
import Footer from '../../../Shared/Footer/Footer';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, login, isLoading, authError , googleUser} = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        login(loginData.email, loginData.password, location, navigate)
        e.preventDefault()
    }
    const handleWithGoogleSignIn = e=>{
        googleUser(location , navigate)
    }
    return (
        <>
        <Navigation></Navigation>
            <Container sx={{mt:"8em"}}>
                <Grid container spacing={2}>
                    <Grid item md={6}>

                        <div style={{ marginTop: "20%" }}>
                            <Typography variant='h5'>
                                Login
                            </Typography>
                            {
                                !isLoading && <form onSubmit={handleLoginSubmit}>
                                    <TextField
                                        label="Email"
                                        sx={{ width: "90%", margin: "2em 0" }}
                                        id="outlined-size-small"
                                        size="small"
                                        name="email"
                                        onBlur={handleOnChange}
                                        variant="standard"
                                        type="email"
                                    />
                                    <TextField
                                        label="Password"
                                        sx={{ width: "90%", mb: "1em" }}
                                        id="outlined-size-small"
                                        size="small"
                                        name="password"
                                        type='password'
                                        variant="standard"
                                        onBlur={handleOnChange}
                                    />
                                    <br />
                                    <NavLink to="/register" style={{ textDecoration: "none" }}>
                                        New user ? Register here
                                    </NavLink>
                                    <Button type='submit' variant='contained'
                                        sx={{ width: "90%", background: "#05ebc0", mt: "1em" }}
                                    >
                                        Sign In
                                    </Button>
                                    <br /><br />
                                </form>
                            }
                            {
                                isLoading && <CircularProgress></CircularProgress>
                            }
                            {
                                user?.email && <Alert severity="success">Register Successful</Alert>
                            }
                            {
                                authError && <Alert severity="error">{authError}</Alert>

                            }
                            <Typography variant='h6'>Or</Typography>
                            <Button
                                variant='contained'
                                sx={{ width: "90%", background: "#05ebc0", mt: "1em" }}
                                onClick={handleWithGoogleSignIn}
                            >
                                <GoogleIcon sx={{mx:".5em"}}/>
                                Sign in with Google</Button>
                        </div>
                    </Grid>
                    <Grid item md={6}>
                        <img src={bg} style={{ width: "100%" }} alt="" />
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Login;