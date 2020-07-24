import React, { useState, useEffect } from 'react';
import { TextField, Button, MenuItem, Select }
from '@material-ui/core';
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

export default function BookRegister() {
  const styles = useStyles();

  const [authors, setAuthors] = useState([]);
  const [idAuthor, setIdAuthor] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function getAuthors() {
      try {
        const res = await api.get('authors');
        setAuthors(res.data);
      } catch (err) {
        toast.error('Failed load authors!');
      }
    }
    getAuthors();
  }, []);

  async function bookRegister() {
    try {
      await api
      .post('books', {
        title,
        author: {
          idAuthor: idAuthor,
        },
      })
      toast.info('Book register with success!')
      setTitle("")
      setIdAuthor("")
    } catch (err) {
      toast.error('Failed!');
    }
  }

  async function handleBookRegister(event) {

    event.preventDefault();
    bookRegister();

  }

  return (
    <form className={styles.root} noValidate autoComplete="off" onSubmit={handleBookRegister}>
      <h2>Register Books</h2>
      <Container>
        <TextField
          style={{width: 200}}
          id="standard"
          label="Title"
          placeholder="Um estudo em vermelho"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Select
          style={{width: 200, marginLeft: 20}}
          value={idAuthor}
          onChange={e => setIdAuthor(e.target.value)}
          displayEmpty
          className={styles.selectEmpty}>
          {authors.map(author =>
          <MenuItem key={author.idAuthor} value={author.idAuthor}>
            {author.name}
          </MenuItem>)}
        </Select>
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
