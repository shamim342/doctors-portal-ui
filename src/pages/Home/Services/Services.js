import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import { Box, Grid, Typography } from '@mui/material';
import Service from '../Service/Service';
import { Container } from '@mui/system';

const services = [
    {
        _id: 1,
        name: 'Fluoride Treatment',
        description: 'loremiwhyfiwhef fwehyfowiefhoiwehfoiwf',
        img: fluoride
    },
    {
        _id: 2,
        name: 'Cavity Filling',
        description: ' gsaflkjgafiuf fiuwegyfiueyhfjchasf fuweiufh',
        img: cavity
    },
    {
        _id: 3,
        name: 'Teeth Whitening',
        description: 'iyhfoweihfw ofyiweoihfoiw iywefiywefi',
        img: whitening
    },
];

const Services = () => {

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography variant="h6" component="div" sx={{color:"success.main" , fontWeight:'700', m:'2'}}>
                        Our Service
                    </Typography>
                    <Typography variant="h4" component="div" sx={{fontWeight:"600" , mb:"2em"}}>
                         Service we provide
                    </Typography>
                    
                    <Grid container spacing={2} columns={{ xs: 4, md: 12 }}>
                        {services.map(service => <Service service={service}></Service>)}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Services;