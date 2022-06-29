import { TextField } from '@mui/material';
import React from 'react';

const AddDoctor = () => {

    const handleSubmit = e => {

    }
    return (
        <div>
            <h5>add a doctor</h5>
            <form onSubmit={handleSubmit}>
                <TextField id="standard-basic" label="Add Doctor" variant="standard" sx={{width:"50%"}} />

            </form>
        </div>
    );
};

export default AddDoctor;