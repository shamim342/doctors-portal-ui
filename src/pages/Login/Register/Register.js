import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import bg from '../../../assets/images/login.png'
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../../Shared/Navigation/Navigation';
import Footer from '../../../Shared/Footer/Footer';

const Resister = () => {
    const [loginData, setLoginData] = useState({})
    const navigate = useNavigate();
    const {user , registerUser , isLoading  , authError} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2)
        {
            alert('password did not match')
            return
        }
         registerUser(loginData.email , loginData.password , loginData.name , navigate)
        e.preventDefault()
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container sx={{mt:"8em"}}>
                <Grid container spacing={2}>
                    <Grid item md={6}>

                        <div style={{ marginTop: "20%" }}>
                            <Typography variant='h5'>
                                Register
                            </Typography>
                       {
                           !isLoading &&      <form onSubmit={handleLoginSubmit}>
                           <TextField
                               label="Name"
                               sx={{ width: "90%" }}
                               id="outlined-size-small"
                               size="small"
                               type="text"
                               name="name"
                               onBlur={handleOnBlur}
                               variant="standard"
                           />
                           <TextField
                               label="Email"
                               sx={{ width: "90%", margin: "2em 0" }}
                               id="outlined-size-small"
                               size="small"
                               type="email"
                               name="email"
                               onBlur={handleOnBlur}
                               variant="standard"
                           />
                           <TextField
                               label="Password"
                               sx={{ width: "90%", mb: "1em" }}
                               id="outlined-size-small"
                               size="small"
                               name="password"
                               variant="standard"
                               onBlur={handleOnBlur}
                               type="password"
                           />
                           <TextField
                               label="Re-type Password"
                               sx={{ width: "90%", mb: "1em" }}
                               id="outlined-size-small"
                               size="small"
                               name="password2"
                               variant="standard"
                               onBlur={handleOnBlur}
                               type="password"
                           />
                           <br />
                           <NavLink to="/login" style={{ textDecoration: "none" }}>
                               Already registered ? login here
                           </NavLink>
                           <Button type='submit' variant='contained'
                               sx={{ width: "90%", background: "#05ebc0", mt: "1em" }}
                           >
                               Sign Up
                           </Button>
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
                        </div>
                    </Grid>
                    <Grid item md={6}>
                        <img src={bg} style={{ width: "100%" }} alt="" />
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Resister;