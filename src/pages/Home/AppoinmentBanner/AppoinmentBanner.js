import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import bg from '../../../assets/images/appointment.png';

const appoinment = {
    background: `url(${bg})`,
    width: "90%",
    margin: "150px auto 0"
}

const AppoinmentBanner = () => {
    return (
        <div>
            <Box style={appoinment} sx={{ flexGrow: 1 }}>
                <Grid container >
                    <Grid item xs={12} md={6}>
                        <img src={doctor}
                            style={{ width: 400,height:"450px", marginTop: "-30%" }}
                            alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{display:"flex" , justifyContent:"flex-start" , flexDirection:'column' , textAlign:"left"}}>
                            <Typography variant='h6' sx={{margin:"2em 0" , backgroundColor:"red" , width:"30%"}}>
                                Appoinment
                            </Typography>
                            <Typography variant='h4' sx={{margin:"10px 0"}}>
                                Make a Appoinment
                            </Typography>
                            <Typography variant='h6' sx={{fontSize:"0.9em"}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem repellendus praesentium natus expedita reiciendis porro quas, officiis recusandae? Voluptas.
                            </Typography>
                            <Button sx={{backgroundColor:"#333" , width:"40%" , my:"20px"}}>
                                Learn More
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default AppoinmentBanner;