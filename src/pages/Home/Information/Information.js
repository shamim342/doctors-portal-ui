import { Grid } from '@mui/material';
import React from 'react';
import './Information.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import { Container } from '@mui/system';

const Information = () => {
    return (
        <div>
            <Container>
            <Grid container columnSpacing={2}>
                <Grid item xs={12} md={4} className="information-item" sx={{ background: "linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)" }}>
                    <div className='information-icon'>
                        <AccessTimeIcon sx={{ fontSize: '2em' }} />
                    </div>
                    <div style={{ textAlign: "left", marginLeft: "2em" }}>
                        <h5 >Opening Hours</h5>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde!</h6>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className="information-item" sx={{ background: "#3A4256" }}>
                    <div className='information-icon'>
                        <LocationOnIcon sx={{ fontSize: '2em' }} />
                    </div>
                    <div style={{ textAlign: "left", marginLeft: "2em" }}>
                        <h5 >Visit our location</h5>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde!</h6>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className="information-item" sx={{ background: "linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)" }}>
                    <div className='information-icon'>
                        <WifiCalling3Icon sx={{ fontSize: '2em' }} />
                    </div>
                    <div style={{ textAlign: "left", marginLeft: "2em" }}>
                        <h5 >Contact us now</h5>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, unde!</h6>
                    </div>
                </Grid>
            </Grid>
            </Container>
        </div>
    );
};

export default Information;