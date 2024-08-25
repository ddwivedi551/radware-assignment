import React from 'react';
import { Typography } from '@mui/material';

import './error.scss';

function ErrorMessage({ error = 'Something went wrong, please try again later.' }) {
    return (
        <div className="centered-container">
            <Typography className="error-text">{error}</Typography>
        </div>
    );
}

export default ErrorMessage;
