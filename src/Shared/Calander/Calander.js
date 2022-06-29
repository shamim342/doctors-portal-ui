import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/lab';

export default function Calander({ date, setDate }) {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                displayStaticWrapperAs='desktop'
                value={date}
                onChange={(newValue) => {
                    setDate(newValue);
                }}
                //   renderInput={(parems)= <TextField {...parems} />}
                renderInput={(params) => <TextField {...params} />}

            />
        </LocalizationProvider>
    );
}
