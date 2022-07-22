import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import './DentalCare.css'

const DentalCare = () => {
    return (
        <div style={{margin:' 2em 0'}}>
            <Container>
                <Grid container >
                    <Grid item xs={12} md={5}>
                        <img height='auto' width="100%" src={treatment}
                        style={{borderRadius:"4em 1em"}} alt="" />
                    </Grid>
                    <Grid item xs={0} md={1}></Grid>
                    <Grid item xs={12} md={6} sx={{my:'auto'}}>
                        <Typography variant='h3' sx={{mb:"2em"}}>
                        Exceptional Dental Care, on Your Terms
                        </Typography>
                        <Typography variant='h6'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default DentalCare;