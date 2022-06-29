import React from 'react';
import { Container, Grid } from '@mui/material';
import chair from '../../../assets/images/chair.png'
import Calander from '../../../Shared/Calander/Calander';

const AppoinmentHeader = ({date,setDate}) => {

    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Calander date={date} setDate={setDate}></Calander>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={chair} style={{width:"100%"}} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AppoinmentHeader;