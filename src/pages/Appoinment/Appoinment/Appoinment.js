import React, { useState } from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import AvailableAppoinment from '../AvailableAppoinment/AvailableAppoinment';

const Appoinment = () => {
  const [date, setDate] = React.useState(new Date());
  const [bookingSuccess , setBookingSuccess] = useState(false);

    return (
        <div style={{position:"relative" , zIndex:10}}>
            <Navigation></Navigation>
            <AppoinmentHeader date={date} setDate={setDate}></AppoinmentHeader>
            <AvailableAppoinment date={date} bookingSuccess={bookingSuccess}  
            setBookingSuccess={setBookingSuccess}
            setDate={setDate}></AvailableAppoinment>
            <h2>appoinment</h2>
        </div>
    );
};

export default Appoinment;