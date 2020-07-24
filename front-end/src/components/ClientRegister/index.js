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

export default function ClientRegister() {
  const styles = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  async function clientRegister() {
    try {
      await api
      .post('clients', {
        name,
        email,
      }).then(result => phoneRegister(result.data.idClient))
      toast.info('Client register with success!')
      setName("")
      setEmail("")
      setPhone("")
    } catch (err) {
      toast.error('Failed register client!');
    }
  }

  async function phoneRegister(idClient) {
    try {
      await api.post('phones', {
        number: phone,
        owner: {
          idClient,
        }
      })
    } catch (err) {
      toast.error('Failed register phone!');
    }
  }

  async function handleClientRegister(event) {

    event.preventDefault();
    clientRegister();

  }

  return (
    <form className={styles.root} noValidate autoComplete="off" onSubmit={handleClientRegister}>
      <h2>Register Clients</h2>
      <div>
        <TextField
          id="standard"
          label="Name"
          placeholder="John Doe"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      <TextField
        id="standard"
        label="E-mail"
        placeholder="johndoe@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
          id="standard"
          label="Phone"
          placeholder="(83) 99988-7766"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
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
