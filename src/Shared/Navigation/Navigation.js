import { Container } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'
import { Wave } from "react-animated-text";
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import useAuth from '../../hooks/useAuth';
import { useState } from 'react';

const Navigation = () => {
    const { user, logOut } = useAuth();
    const [navbar , setNavbar] = useState(false);

    const openNav=()=>{
        setNavbar(!navbar)
    }

    return (
        <>
            <div className='desktop-nav'>
                <div className="res-navbar">
                    <Container className="navbar-contain">
                        <div className="navbar-heading">
                            <h4>
                                <Wave
                                    text="Doctors Portal"
                                    effect="stretch"
                                    effectChange={3}
                                    style={{ fontSize: '2em!important' }}
                                />
                            </h4>
                        </div>
                        <div className="navbar-link">
                            <NavLink className='nav-link' to={"/home"}>
                                Home
                            </NavLink>
                            <NavLink className='nav-link' to={"/appoinment"}>
                                Appoinment
                            </NavLink>
                            {
                                user.email && <NavLink className='nav-link' to={'/dashboard'} >
                                    Dashboard
                                </NavLink>
                            }
                            {
                                user?.email ? <Button onClick={logOut}

                                    color="inherit" style={{ color: '#fff', background: "#0dd64d" , marginLeft:"1em" }}
                                > LogOut </Button> : <NavLink to={'/login'} style={{textDecoration:"none"}}>
                                    <Button color="inherit" style={{ color: '#fff', background: "#0dd64d",marginLeft:"1em" }}>Login</Button>
                                </NavLink>
                            }
                        </div>
                    </Container>
                </div>
            </div>
            <div className="mobile-nav">
                <div id="myNav" className={navbar ? "overlay openbar" : "overlay closebar" } >
                    <a href="javascript:void(0)" className="closebtn" onClick={openNav}>&times;</a>
                    <div className="overlay-content">
                       <NavLink to="/home">Home</NavLink>
                       <NavLink to="/appoinment">Appoinment</NavLink>
                       {
                                user.email && <NavLink  to={'/dashboard'} >
                                    Dashboard
                                </NavLink>
                            }
                            {
                                user?.email ? <Button onClick={logOut}

                                    color="inherit" style={{ color: '#fff', background: "#0dd64d" }}
                                > LogOut </Button> : <NavLink to={'/login'}>
                                    <Button color="inherit" style={{ color: '#fff', background: "#0dd64d" }}>Login</Button>
                                </NavLink>
                            }
                    </div>
                </div>
                <div className="mobile-nav-container">
                    <div className="mobile-nav-heading">
                        Doctors Portal
                    </div>
                    <div className="mobile-nav-icon">
                        <MenuIcon onClick={openNav}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigation;

