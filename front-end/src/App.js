import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Tabs, Tab, Typography, Box,
} from '@material-ui/core';
import ClientRegister from './components/ClientRegister';
import AuthorRegister from './components/AuthorRegister';
import BookRegister from './components/BookRegister';
import Scheduling from './components/Scheduling';
import CancelScheduling from './components/CancelScheduling';
import Rent from './components/Rent';
import Devolution from './components/Devolution';
import Dashboard from './components/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={5}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Registers" {...a11yProps(0)} />
          <Tab label="Scheduling" {...a11yProps(1)} />
          <Tab label="Rent" {...a11yProps(2)} />
          <Tab label="Devolution" {...a11yProps(3)} />
          <Tab label="Dashboard" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <ToastContainer autoClose={3000}/>
      <TabPanel value={value} index={0}>
        <ClientRegister />
        <AuthorRegister />
        <BookRegister />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CancelScheduling />
        <Scheduling />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Rent />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Devolution />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Dashboard />
      </TabPanel>
    </div>
  );
}
