import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <NavLink style={{textDecoration:"none"}} to={"/appoinment"}>
                            <Button color="inherit" style={{ color: '#fff'}}>Appoinment</Button>
                        </NavLink>
                        {
                           user.email && <NavLink to={'/dashboard'} style={{textDecoration:"none"}}>
                                <Button style={{ color: '#fff' }}>Dashboard</Button>
                                </NavLink>
                        }
                        {
                            user?.email ? <Button onClick={logOut}

                                color="inherit" style={{ color: '#fff', background: "#0dd64d" }}
                            > LogOut </Button> : <NavLink to={'/login'}>
                                <Button color="inherit" style={{ color: '#fff', background: "#0dd64d" }}>Login</Button>
                            </NavLink>
                        }
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navigation;