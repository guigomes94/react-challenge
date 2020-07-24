import React, { useState } from 'react';
import {
  TextField,
  Button,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { toast } from 'react-toastify';
import api from '../../services/api';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Devolutions() {
  const styles = useStyles();

  const [rent, setRent] = useState("");
  const [idRent, setIdRent] = useState("");
  const [devolution, setDevolution] = useState("");

  async function searchRent() {
    try {
      const result = await api.get(`rents/${idRent}`);
      setRent(result.data);
      setDevolution("");
    } catch (err) {
      toast.error('Failed to get rent!');
    }
  }

  async function devolutionAction() {
    try {
      await api
        .put(`rents/${idRent}`, {
          client: {
            "idCliente": rent.client.idClient,
          },
          book: {
            "idBook": rent.book.idBook,
          },
          rentDate: rent.rentDate,
          devolutionDate: rent.devolutionDate,
        }).then(result => setDevolution(result.data));
      toast.info('Success!')
      setIdRent("")
    } catch (err) {
      toast.error('Failed');
    }
  }

  async function handleSearchRent(event) {
    event.preventDefault();
    searchRent();

  }

  async function handleDevolutionAction(event) {
    event.preventDefault();
    devolutionAction();

  }

  function devolutionTemplate() {
    return (
      <form className={styles.root} noValidate autoComplete="off" onSubmit={handleDevolutionAction}>
        <TextField
          id="standard"
          label="Client"
          placeholder=""
          value={rent.client.name}
        />
        <TextField
          id="standard"
          label="Book"
          placeholder=""
          value={rent.book.title}
        />
        <TextField
          id="date"
          label="Rent Date"
          type="date"
          value={rent.rentDate}
          className={styles.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="date"
          label="Devolution Date"
          type="date"
          value={rent.devolutionDate}
          className={styles.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          endIcon={<Icon>send</Icon>}
          type="submit"
        >
          DEVOLUTION
      </Button>
      </form>
    )
  }

  function devolutionResponse() {
    return (
      <TableContainer>
      <TableHead>
          <TableRow>
              <TableCell>RENT ID</TableCell>
              <TableCell align="right">Client</TableCell>
              <TableCell align="right">Book</TableCell>
              <TableCell align="right">Rent Date</TableCell>
              <TableCell align="right">Devolution Date</TableCell>
              <TableCell align="right">Rent Value</TableCell>
              <TableCell align="right">Late Fee</TableCell>
              <TableCell align="right">Total</TableCell>
          </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
              <TableCell align="right">{devolution.id}</TableCell>
              <TableCell align="right">{devolution.client}</TableCell>
              <TableCell align="right">{devolution.book}</TableCell>
              <TableCell align="right">{devolution.rentDate}</TableCell>
              <TableCell align="right">{devolution.devolutionDate}</TableCell>
              <TableCell align="right">{devolution.rentValue.toFixed(2)}</TableCell>
              <TableCell align="right">{devolution.lateFee.toFixed(2)}</TableCell>
              <TableCell align="right">{devolution.totalPayment.toFixed(2)}</TableCell>
          </TableRow>
      </TableBody>
  </TableContainer>
    )
  }

  return (
    <>
      <h2>Devolution</h2>
      <form className={styles.root} noValidate autoComplete="off" onSubmit={handleSearchRent}>
        <TextField
          id="standard"
          label="ID RENT"
          placeholder=""
          value={idRent}
          onChange={e => setIdRent(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          endIcon={<Icon>send</Icon>}
          type="submit"
        >
          SEARCH
      </Button>
      </form>
      { rent ? devolutionTemplate() : null }
      { devolution ? devolutionResponse() : null}
    </>
  );
}
