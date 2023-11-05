import React from 'react';

import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import MenuItem from '@mui/material/MenuItem';

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Avatar, Grid, ListItemText, Stack,ListItemIcon, Paper, Divider } from '@mui/material';
import {Button} from '@mui/material';


const useStyles = makeStyles((theme) => ({
    circularAppBar: {
      borderRadius: '30px',
      width: '2px', // You can adjust the width to make it larger or smaller
      height: '80%', // Adjust the height accordingly
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '10 auto',
      boxShadow: theme.shadows[3],
    },
    greyIcon: {
        color: '#073B3A', // Change this to your desired color
      },
    
      hoverTextButton: {
        color: '#073B3A',
        '&:hover': {
          color: '#08A045'
        }
      }
  }));
  

const NavBar = () => {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{backgroundColor:'#FFFFFC'}} 
          className={classes.circularAppBar}
          justifyContent="center" alignItems="center">
            <Toolbar>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: '#073B3A',
                  textDecoration: 'none',
                }}
              >
                ENVIMPACT
              </Typography>
              <Box sx={{ flexGrow: 0.1 }} />
              {/* the &>* targets all direct children of the box */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap:'10%'}}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography className = {classes.hoverTextButton}><strong>TODOs</strong></Typography>
                </span>
                <IconButton size="large" color="inherit">
                  <FavoriteIcon className={classes.greyIcon}/>
                </IconButton>
                {/* Messages icon */}
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={4} color="error">
                    <MailIcon className={classes.greyIcon}/>
                  </Badge>
                </IconButton>
                {/* Notifications icon */}
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon className={classes.greyIcon}/>
                  </Badge>
                </IconButton>
                {/* Orders icon */}
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography className = {classes.hoverTextButton}><strong>Orders</strong></Typography>
                </span>
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>

        </Box>
      );
}

const CircularAppBar = () => {
    const classes = useStyles();
    const theme = useTheme();
  
    return (
      <div>
        <AppBar className={classes.circularAppBar} position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              {/* Your menu icon */}
            </IconButton>
            <Typography variant="h6" component="div">
              Circular AppBar
            </Typography>
            {/* You can add more AppBar contents here */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }

const LandingPage = () => {
    return (
        <NavBar/>
    );
}

export default LandingPage;
