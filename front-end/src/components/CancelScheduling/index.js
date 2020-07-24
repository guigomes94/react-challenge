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

export default function CancelScheduling() {
  const styles = useStyles();

  const [scheduling, setScheduling] = useState("");
  const [idScheduling, setIdScheduling] = useState("");

  async function searchScheduling() {
    try {
      const result = await api.get(`schedulings/${idScheduling}`);
      setScheduling(result.data);
    } catch (err) {
      toast.error('Failed to get scheduling!');
    }
  }

  async function cancelAction() {
    try {
      await api.delete(`schedulings/${idScheduling}`)
      toast.info('Scheduling canceled!')
      setIdScheduling("")
    } catch (err) {
      toast.error('Failed');
    }
  }

  async function handleSearchScheduling(event) {
    event.preventDefault();
    searchScheduling();

  }

  async function handleCancelAction(event) {
    event.preventDefault();
    cancelAction();

  }

  function schedulingTemplate() {
    return (
      <form className={styles.root} noValidate autoComplete="off" onSubmit={handleCancelAction}>
        <TextField
          id="standard"
          label="Client"
          placeholder=""
          value={scheduling.client.name}
        />
        <TextField
          id="standard"
          label="Book"
          placeholder=""
          value={scheduling.book.title}
        />
        <TextField
          id="date"
          label="Rent Date"
          type="date"
          value={scheduling.rentDate}
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
          CANCEL
      </Button>
      </form>
    )
  }

  return (
    <>
      <h2>Cancel Scheduling</h2>
      <form className={styles.root} noValidate autoComplete="off" onSubmit={handleSearchScheduling}>
        <TextField
          id="standard"
          label="ID SCHEDULING"
          placeholder=""
          value={idScheduling}
          onChange={e => setIdScheduling(e.target.value)}
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
      { scheduling ? schedulingTemplate() : null }
    </>
  );
}
