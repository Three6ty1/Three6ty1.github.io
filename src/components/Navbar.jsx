import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Typography from "@mui/material/Typography";
import { createTheme } from '@mui/material/styles'
import { Link } from "react-router-dom";

const sections = ['About', 'Contact', 'Projects', 'Interests'];

function Navbar() {
  const hoverTheme = createTheme({
    palette: {
      action: {
        hover: '#0d2e46',
      }
    }
  })

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static" sx={{bgcolor: 'inherit', color: '#1BA098'}}>
        <Toolbar>
          <Link to='/Page' className='navbar-link'>
            <MenuItem theme={hoverTheme}>
              <Typography variant='h6' sx={{fontWeight: 'bold'}} textAlign="center">Home</Typography>  
            </MenuItem>
          </Link>

          {sections.map((section) => (
              <Link key={section} to={'#' + section} className='navbar-link'>
                <MenuItem theme={hoverTheme}>
                  <Typography variant='h6' sx={{fontWeight: 'bold'}} textAlign="center">{section}</Typography>
                </MenuItem>
              </Link>
          ))
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
