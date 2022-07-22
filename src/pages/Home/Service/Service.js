import { CardMedia, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const { img , name} = props.service;
    return (
        <>
            <Grid item xs={12} md={4}>
                <Card sx={{ minWidth: 275 , boxShadow:"3" , height:"200px" , background:"#fff" , padding:"1em"}}>
                    <CardMedia
                        component="img"
                        style={{width:"auto" , height:"80px" ,margin:" 1em auto"}}
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {name}
                        </Typography>
                        <Typography variant="h5" component="div">
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    
                </Card>
            </Grid>
        </>
    );
};

export default Service;