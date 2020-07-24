import React, { useState, useEffect } from 'react';
import {
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import api from '../../services/api';

export default function Dashboard() {
  const [schedulings, setSchedulings] = useState([]);
  const [rents, setRents] = useState([]);

  useEffect(() => {
    async function loadSchedulings() {
      await api.get('schedulings').then(res => {
        setSchedulings(res.data);
        console.log(res.data)
      });
    }
    loadSchedulings();
  }, []);

  useEffect(() => {
    async function loadRents() {
      await api.get('rents').then(res => {
        setRents(res.data);
        console.log(res.data)
      });
    }
    loadRents();
  }, []);

  function schedulingsTable() {
    return (
      <TableContainer>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Client</TableCell>
            <TableCell align="right">Book</TableCell>
            <TableCell align="right">Rent Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            schedulings.map(scheduling => (
              <TableRow key={scheduling.idScheduling}>
                <TableCell align="right">{scheduling.idScheduling}</TableCell>
                <TableCell align="right">{scheduling.client.name}</TableCell>
                <TableCell align="right">{scheduling.book.title}</TableCell>
                <TableCell align="right">{scheduling.rentDate}</TableCell>
              </TableRow>
            ))}
        </TableBody>
        </Table>
      </TableContainer>
    )
  }

  function rentsTable() {
    return (
      <TableContainer>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Client</TableCell>
            <TableCell align="right">Book</TableCell>
            <TableCell align="right">Rent Date</TableCell>
            <TableCell align="right">Devolution Date</TableCell>
            <TableCell align="right">Rent Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rents.map(rent => (
              <TableRow key={rent.id}>
                <TableCell align="right">{rent.id}</TableCell>
                <TableCell align="right">{rent.client}</TableCell>
                <TableCell align="right">{rent.book}</TableCell>
                <TableCell align="right">{rent.rentDate}</TableCell>
                <TableCell align="right">{rent.devolutionDate}</TableCell>
                <TableCell align="right">{rent.totalPayment.toFixed(2)}</TableCell>
              </TableRow>
            ))}
        </TableBody>
        </Table>
      </TableContainer>
    )
  }

  return (
    <>
    <h2>Schedulings</h2>
    {schedulings ? schedulingsTable() : null}
    <h2>Rents</h2>
    {rents ? rentsTable() : null}
    </>
  )
}
