import { CardMedia, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const { description, img } = props.service;
    return (
        <div>
            <Grid item xs={12} md={4}>
                <Card sx={{ minWidth: 275 , boxShadow:"0" }}>
                    <CardMedia
                        component="img"
                        style={{width:"auto" , height:"80px" ,margin:" 0 auto"}}
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" sx={{margin:"0 auto" , backgroundColor:"#04e064"}}>Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
        </div>
    );
};

export default Service;