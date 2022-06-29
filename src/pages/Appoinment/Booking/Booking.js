import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking ,date ,setBookingSuccess}) => {
    const [bookingopen, setBookingopen] = React.useState(false);
    const handleBookingOpen = () => {
        setBookingopen(true);
      };
      const handleBookingClose = () => {
        setBookingopen(false);
      };
    const { name, time, spaces } = booking;
    return (
        <>
            <Grid item xs={12} sm={6} md={4} >
                <Paper elevation={3} sx={{ padding: "2em 0", color: 'Background'}}>
                    <Typography variant='h5' gutterBottom component="div" sx={{ color: "Highlight", fontWeight: "700" }}>
                        {name}
                    </Typography>
                    <Typography variant='h6' gutterBottom component="div" sx={{color:"darkcyan"}}>
                        {time}
                    </Typography>
                    <Typography variant='caption' gutterBottom component="div" sx={{color:"darkcyan"}}>
                        Available appoinment {spaces}
                    </Typography>
                    <Button variant='contained' onClick={handleBookingOpen} >
                            BOOking
                    </Button>
                </Paper>
            </Grid>
            <BookingModal bookingopen={bookingopen} setBookingopen={setBookingopen} handleBookingClose={handleBookingClose} booking={booking} date={date} setBookingSuccess={setBookingSuccess}></BookingModal>
        </>
    );
};

export default Booking;