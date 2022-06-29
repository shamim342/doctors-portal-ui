import * as React from 'react';
import { Grid } from '@mui/material';
import Calander from '../../../Shared/Calander/Calander';
import BookedAppoinment from '../BookedAppoinment/BookedAppoinment';

const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());

    return (
        <Grid container spacing={1}>
        <Grid item xs={12} md={5} sm={6}>
            <Calander date={date} setDate={setDate}></Calander>
            <h4>{date.toLocaleDateString()}</h4>
        </Grid>
        <Grid item xs={12} md={7} sm={6}>
            <BookedAppoinment date={date}></BookedAppoinment>
        </Grid>
    </Grid>
   
    );
};

export default DashboardHome;