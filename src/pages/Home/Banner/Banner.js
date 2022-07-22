import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import chair from '../../../assets/images/chair.png';
import banner from '../../../assets/images/bg.png';
import { Container } from '@mui/system';
import './Banner.css'
import { NavLink } from 'react-router-dom';






const Banner = () => {
    return (
        <div style={{ width: "100%" }}>
            <div style={{ height: "100vh" }}>
                <Grid container sx={{ display: "flex", alignItems: "center", mt: "10%", justifyContent: "center", height: "80vh" }} >
                    <Grid item xs={12} md={5} className="banner-text">
                        <Typography variant='h3' sx={{ fontWeight: "700" }}>
                            Your new smill <br />
                            Start Here
                        </Typography>
                        <Typography sx={{ fontSize: "0.9em", color: "#333", my: "10px" }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptas deserunt aspernatur dolores sunt laborum eligendi accusamus magni? Nemo, neque.
                        </Typography>
                        <NavLink to="/appoinment">
                            <Button variant='contained' sx={{ backgroundColor: "red" }} >
                                Get Appoinment
                            </Button>
                        </NavLink>
                    </Grid>
                    <Grid item xs={0} md={2}></Grid>
                    <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: "center" }}>
                        <img className='banner-img' src={chair} alt="" />
                        <div
                            className='banner-background'
                        ></div>
                    </Grid>
                </Grid>
            </div>

            {/* <Grid container sx={{display:"flex" , alignItems:"center"}} >
                    <Grid item xs={12} md={5} sx={{textAlign:"left" , border:"1px solid blue"}}>
                        <Typography variant='h3' sx={{fontWeight:"700"}}>
                            Your new smill <br />
                            Start Here
                        </Typography>
                        <Typography sx={{fontSize:"0.9em", color:"#333" , my:"10px"}}> 
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptas deserunt aspernatur dolores sunt laborum eligendi accusamus magni? Nemo, neque.
                        </Typography>
                        <Button variant='contained' sx={{backgroundColor:"red"}} >
                                Get Appoinment
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{display:'flex' , alignItems:"center" , border:"1px solid red"}}>
                        <img style={{width:"300px" , height:"auto"}} src={chair} alt="" />
                    </Grid>
                </Grid> */}
        </div>
    );
};

export default Banner;