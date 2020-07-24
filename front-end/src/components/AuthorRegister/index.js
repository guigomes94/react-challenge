import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
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

export default function AuthorRegister() {
  const styles = useStyles();

  const [author, setAuthor] = useState("");

  async function authorRegister() {
    try {
      await api
      .post('authors', {
        name: author,
      })
      toast.info('Author register with success!')
      setAuthor("")
    } catch (err) {
      toast.error('Não foi possível cadastrar!');
    }
  }

  async function handleAuthorRegister(event) {

    event.preventDefault();
    authorRegister();

  }

  return (
    <form className={styles.root} noValidate autoComplete="off" onSubmit={handleAuthorRegister}>
      <h2>Register Authors</h2>
      <div>
        <TextField
          id="standard"
          label="Name"
          placeholder="John Doe"
          value={author}
          onChange={e => setAuthor(e.target.value)} />
      </div>
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
