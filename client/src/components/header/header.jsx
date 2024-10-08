import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                    Radware
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
