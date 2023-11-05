import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LineCharts from './LineChart';
import { Box } from '@mui/material';

import CircularProgress from '@mui/material/CircularProgress';
import { Line } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align vertically towards the top
    height: '100vh',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Center horizontally
  },
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress variant="determinate" value={30} style={{ color: 'red', width: '200px', height: '200px' }} />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h2" component="div" color="grey">
              {`${30}%`}
            </Typography>
          </Box>
        </Box>
        {/*  <PieChart /> */}
        <Typography variant="h5" component="div">
          Your Food's (Approximate) Carbon Emissions
        </Typography>
      </Paper>
      <LineCharts />
    </div>
  );
}

export default Dashboard;
