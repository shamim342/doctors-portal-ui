import { Alert, Container, Grid } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        _id: 1,
        name: "Teeth Orthodontics",
        time:
            "08.00 AM - 08.30 AM",
        spaces: 10

    },
    {
        id: 2,
        name: "Cosmetic Dentistry",
        time:
            "09.00 AM - 9.30 AM",
        spaces: 10
    },
    {
        id: 3,
        name: "Teeth Cleaning",
        time: "07.00 AM - 7.30 AM",
        spaces: 10
    },
    {
        id: 4,
        name: "Cavity Protection",
        time: "10.00 AM - 10.30 AM",
        spaces: 10
    },
    {
        id: 5,
        name: "Pediatric Dental",
        time:
            "08.30 AM - 09.00 AM",
        spaces: 10
    },
    {
        id: 6,
        name: "Oral Surgery",
        time:
            "09.30 AM - 10.00 AM",
        spaces: 10

    }
]

const AvailableAppoinment = ({ date , setBookingSuccess , bookingSuccess }) => {

    return (
        <>
            <Container>
                <h1 style={{color:"#05ebc0"}}>{date.toDateString()}</h1>
                {
                    bookingSuccess && <Alert severity="success">Booking Successful</Alert>
                }
                <Grid container spacing={2}>
                    {
                        bookings.map(booking => <Booking
                            key={booking.id}
                            booking={booking}
                            date={date}
                            setBookingSuccess={setBookingSuccess}
                        >

                        </Booking>)
                    }
                </Grid>
            </Container>
        </>
    );
};

export default AvailableAppoinment;