import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './spinner.scss';

function Spinner() {
    return (
        <Box className="centered-spinner">
            <CircularProgress />
        </Box>
    );
}

export default Spinner;
