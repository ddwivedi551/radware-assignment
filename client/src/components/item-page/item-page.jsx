import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, Avatar } from '@mui/material';
import useFetchData from '../../hooks/useFetchData';
import ErrorMessage from '../error/error';
import Spinner from '../spinner/spinner';
import { API_URLS } from '../../constants/url-constants';

import './item-page.scss';

function ItemPage() {
    const { id } = useParams();
    const { data: user, loading, error } = useFetchData(API_URLS.GET_USER_BY_ID(id));

    // Function to extract initials
    const getInitials = (name) => {
        const nameParts = name.split(' ');
        return nameParts.map(part => part[0]).join('').toUpperCase();
    };

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <ErrorMessage error={error} />
    }

    return user ? (
        <Grid container spacing={2} className="item-page-container">
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <div className='profile-container'>
                            <Avatar className="user-avatar">
                                {getInitials(user.name)}
                            </Avatar>
                            <Typography variant="h5" gutterBottom className='profile-name'>
                                {user.name}
                            </Typography>
                        </div>
                        <Typography variant="body2" color="textSecondary">
                            <strong>Username:</strong> {user.username}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            <strong>Email:</strong> {user.email}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            <strong>Phone:</strong> {user.phone}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            <strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a>
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            <strong>Company:</strong> {user.company.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            <strong>Address:</strong> {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    ) : (
        <Spinner />
    );
}

export default ItemPage;
