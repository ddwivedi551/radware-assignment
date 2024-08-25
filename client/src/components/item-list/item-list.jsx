import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import useFetchData from '../../hooks/useFetchData';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../error/error';
import { API_URLS } from '../../constants/url-constants';

import './item-list.scss';

function ItemsList() {
  const navigate = useNavigate();
  const { data, loading, error } = useFetchData(API_URLS.GET_USER);

  const handleClick = (id) => {
    navigate(`/items/${id}`);
  };

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage error={error} />
  }

  return (
    <TableContainer component={Paper} className="table-container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="table-header">Name</TableCell>
            <TableCell className="table-header">Email</TableCell>
            <TableCell className="table-header">Username</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="table-row"
              hover={true}
            >
              <TableCell className="table-cell">{item.name}</TableCell>
              <TableCell className="table-cell">{item.email}</TableCell>
              <TableCell className="table-cell">{item.username}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ItemsList;
