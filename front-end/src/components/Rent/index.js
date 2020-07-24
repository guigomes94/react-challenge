import React, { useState, useEffect } from 'react';
import { TextField, Button, FormHelperText, Select, MenuItem } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { Container } from './styles';

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

export default function Rents() {
  const styles = useStyles();

  const [clients, setClients] = useState([]);
  const [idClient, setIdClient] = useState("");
  const [books, setBooks] = useState([]);
  const [idBook, setIdBook] = useState("");
  const [rentDate, setRentDate] = useState("");
  const [devolutionDate, setDevolutionDate] = useState("");

  useEffect(() => {
    async function getClients() {
      try {
        const res = await api.get('clients');
        setClients(res.data);
      } catch (err) {
        toast.error('Failed load clients!');
      }
    }
    getClients();
  }, []);

  useEffect(() => {
    async function getBooks() {
      try {
        const res = await api.get('books');
        setBooks(res.data);
      } catch (err) {
        toast.error('Failed load books!');
      }
    }
    getBooks();
  }, []);

  async function newRent() {
    try {
      await api
      .post('rents', {
        client: {
          "idClient": idClient
        },
        book: {
          "idBook": idBook
        },
        rentDate,
        devolutionDate,
      })
      toast.info('Success!')
      setIdClient("")
      setIdBook("")
      setRentDate("")
      setDevolutionDate("")
    } catch (err) {
      toast.error('Failed!');
    }
  }

  async function handleNewRent(event) {

    event.preventDefault();
    newRent();

  }

  return (
    <form className={styles.root} noValidate autoComplete="off" onSubmit={handleNewRent}>
      <h2>New Rent</h2>
      <Container>
      <FormHelperText>Client</FormHelperText>
        <Select
          value={idClient}
          onChange={e => setIdClient(e.target.value)}
          displayEmpty
          className={styles.selectEmpty}>
          {clients.map(client =>
          <MenuItem key={client.idClient} value={client.idClient}>
            {client.name}
          </MenuItem>)}
        </Select>
        <FormHelperText>Book</FormHelperText>
        <Select
          value={idBook}
          onChange={e => setIdBook(e.target.value)}
          displayEmpty
          className={styles.selectEmpty}>
          {books.map(book =>
          <MenuItem key={book.idBook} value={book.idBook}>
            {book.title}
          </MenuItem>)}
        </Select>
        <TextField
          id="date"
          label="Rent Date"
          type="date"
          value={rentDate}
          onChange={e => setRentDate(e.target.value)}
          className={styles.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="date"
          label="Devolution Date"
          type="date"
          value={devolutionDate}
          onChange={e => setDevolutionDate(e.target.value)}
          className={styles.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Container>
      <Button
        variant="contained"
        color="primary"
        className={styles.button}
        endIcon={<Icon>send</Icon>}
        type="submit"
      >
        SAVE
      </Button>
    </form>
  );
}
