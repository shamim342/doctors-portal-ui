import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const BookedAppoinment = ({ date }) => {
    const { user  } = useAuth();
    const [appoinments, setAppoinment] = useState([]);
   
    useEffect(()=>{
        const url = `https://afternoon-chamber-70192.herokuapp.com/appoinments?email=${user.email}&date=${date}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setAppoinment(data))
    },[date , date])

   

    return (
        <div>
            <h5 style={{ fontWeight: "900" }}>appoinments : {appoinments.length}</h5>
            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: 450 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appoinments.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } , background:"#333"  }}
                            >
                                <TableCell sx={{color:"#fff"}} component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell sx={{color:"#fff"}} align="right">{row.time}</TableCell>
                                <TableCell sx={{color:"#fff"}} align="right">{row.serviceName}</TableCell>
                                <TableCell  align="right"><Button>Update</Button></TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default BookedAppoinment;