import React, {useState} from 'react';

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
import { Container, formHelperTextClasses } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import Tooltip from '@mui/material/Tooltip';

import CircularProgress from '@mui/material/CircularProgress';

import { useNavigate } from 'react-router-dom';


import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Avatar, Grid, ListItemText, Stack,ListItemIcon, Paper, Divider } from '@mui/material';
import {Button} from '@mui/material';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const useStyles = makeStyles((theme) => ({
    circularAppBar: {
      borderRadius: '30px',
      // width: '2px', // You can adjust the width to make it larger or smaller
      height: '80%', // Adjust the height accordingly
      display: 'flex',
      flexDirection:'column',
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
  

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

const getGPTResponse = () => {
    fetch(`/api/condense-ingredients?ingredients=${"['1Â½ lb. skinless, boneless chicken thighs (4â€“8 depending on size)', 'Kosher salt, freshly ground pepper', '3 Tbsp. unsalted butter, divided', '2 large or 3 medium leeks, white and pale green parts only, halved lengthwise, thinly sliced', 'Zest and juice of 1 lemon, divided', '1Â½ cups long-grain white rice, rinsed until water runs clear', '2Â¾ cups low-sodium chicken broth', '1 oil-packed anchovy fillet', '2 garlic cloves', '1 Tbsp. drained capers', 'Crushed red pepper flakes', '1 cup tender herb leaves (such as parsley, cilantro, and/or mint)', '4â€“5 Tbsp. extra-virgin olive oil']"}`).then((response)=>response.json()).then((data)=>
    {
      console.log("RECEIVED GPT INPUT:")
      console.log(data['answer'])
  })
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
    const classes = useStyles();
    return (
      <AppBar position="static" className={classes.circularAppBar} sx={{
        backgroundColor: "#FFFFFF", // You can adjust the shade (e.g., 200) to control the grey level
        marginTop:'5%'
     }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 , color:'#FFFFFF'}} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{color:'black'}}>
                  <Typography  variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: 'black',
                      textDecoration: 'none',
                    }}>{page}
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            //color="#003EB3"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box>
            <Button sx={{mx:2,my: 2, color: "#FFFFFF", backgroundColor:"#003EB3"}}
            style={{borderRadius:'40px'}} variant="contained" 
            // onClick={getGPTResponse}
            >Register</Button>
            <Button sx={{mx:2,my:2,color:"#000000"}} variant="outlined"
            style={{borderRadius:'40px',borderColor:"#003EB3"}}>Login</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}



function LandingPage() {
  const nav = useNavigate();

  const [imageFiles, setFiles] = useState(null)
  const [uploadedImage, setUploadedImage] = useState(false)

   function handleUpload(myFiles)
    {
        console.log("MY MAN"+myFiles)
        if (myFiles == null) {
            alert('Please select an image to upload.');
            return;
        }

        const formData = new FormData();
        // UPLOADS first image in the list of files
        formData.append('image', myFiles[0]);

      //  TODO: image processing
      fetch('/api/process-food-image',{
        method:'POST',
        body: formData
      }).then((response) => response.json()).then((data) => {
        console.log("IMAGE PROCESSED RETURNED DATA:")
        console.log(data)
        //after some validation
        setUploadedImage(true)
      })
    };
    //handles file change when uploading food images
    const handleFileChange = (event) => {
      setFiles(event.target.files);
      console.log(event.target.files+" FILES");
      handleUpload(event.target.files)
    };

    const mainPage = (
      <Box>
        <NavBar/>
        <center>
          <Container sx={{width:'45%',marginTop:'5%'}}>
            <Typography component="h2" variant="h2" color="white"
            sx={{marginTop:'5%', lineHeight: '1.5'}}>
            <Box fontWeight='fontWeightMedium' display='inline'>Discover the Environmental Impact of Your Food</Box>
            </Typography>
          </Container>
        </center>
        <center>
          <Typography component="h6" variant="h6" color="white">EcoFood</Typography>
        </center>
        <center>
          <div>
            <input
                type="file"
                multiple
                onChange={handleFileChange}
                id="fileInput"
                style={{display:'none'}}
            />
            <label htmlFor="fileInput">
                <Button
                    variant="contained"
                    component="span"
                    sx={{marginTop:'4vh',borderRadius:'20px'}}
                    style={{backgroundColor:"#291477",color:"#FFFFFF"}}
                    size="large"
                    // onClick={handleUpload}
                >
                    Upload Images
                </Button>
            </label>
          </div>
          </center>
      </Box>
    )

    const loadingScreen = (
      <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Make the Container take the full viewport height
      }}
    >
      <CircularProgress color="primary" size={100} /> {/* Adjust the size as needed */}
      <Typography component="h2" color="white" variant="h6" sx={{ marginTop: 2 }}>
        Loading...
      </Typography>
    </Container>
    )

    return (
      <div>
        {/* Top gradient section */}
        <Container style={{backgroundColor: "#FAACA8",
                backgroundImage: `linear-gradient(19deg, #003EB3 0%, #0074F0 100%)`,
                width:'100vw',maxWidth:'100%',height:'100vh',maxHeight:'100%',paddingTop:'0.5%'}}>
          
          {/* Changes to loading status when user uploads an image */}
          {uploadedImage? loadingScreen : mainPage}
          
        </Container>
      </div>
    );
}

export default LandingPage;
