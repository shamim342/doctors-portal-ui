import { Button, Fade, Modal, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Backdrop from '@mui/material/Backdrop';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const style = {
    position: 'absolute',
    zIndex: '11',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    border: '2px solid #fff',
    borderRadius:"1em",
    boxShadow: 24,
    p: 4,

};

const BookingModal = ({ bookingopen, handleBookingClose, booking, date ,setBookingSuccess }) => {
    const { name, time} = booking;
    const {user} = useAuth();
    const defualtInfo = { patientName: user.displayName , email: user.email , phone :''}
    const [bookingInfo , setBookingInfo] = useState(defualtInfo);

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo}
        newInfo[field]= value;
        setBookingInfo(newInfo);
    }

    const handleBookedSubmit = e => {
        e.preventDefault();
        // collected data
        const appoinment ={
            ...bookingInfo,
            serviceName:name, 
            time ,
            date : date.toLocaleDateString()
        }
        // send to server
        fetch('https://afternoon-chamber-70192.herokuapp.com/appoinments' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(appoinment)
        })
        .then(res => res.json())
        .then(data => {
           if(data.insertedId){
            setBookingSuccess(true)
            handleBookingClose();
           }
        })
        e.preventDefault();

    }
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={bookingopen}
                onClose={handleBookingClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={bookingopen}>
                    <Box sx={style}>
                        <Typography variant='h5' sx={{ fontWeight: "700", color: "#05ebc0", display: "flex", justifyContent: "center", margin: '0.6em 0' }}>
                            {name}
                        </Typography>
                        <form onSubmit={handleBookedSubmit}>
                            <TextField
                                disabled
                                id="outlined-size-small"
                                defaultValue={time}
                                size="small"
                                sx={{ width: "100%" }}
                            />
                            <TextField
                                id="outlined-size-small"
                                defaultValue={user.displayName}
                                onBlur={handleOnBlur}
                                name="patientName"
                                size="small"
                                sx={{ width: "100%", margin: ".6em 0" }}
                            />
                            <TextField
                                id="outlined-size-small"
                                defaultValue={user.email}
                                onBlur={handleOnBlur}
                                name="email"
                                size="small"
                                sx={{ width: "100%", mb: ".5em" }}
                            />
                            <TextField
                                id="outlined-size-small"
                                defaultValue='phone'
                                onBlur={handleOnBlur}
                                name="phone"
                                size="small"
                                sx={{ width: "100%", mb: ".5em" }}
                            />
                            <TextField
                                disabled
                                id="outlined-size-small"
                                defaultValue={date.toDateString()}
                                size="small"
                                sx={{ width: "100%" }}
                            />
                            <Button type='submit' variant='contained'
                             sx={{ background:"#05ebc0", m:".5em 0" , width:"100%"}}
                             >
                                Submit
                            </Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;