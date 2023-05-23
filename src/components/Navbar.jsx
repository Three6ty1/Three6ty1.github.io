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
        hover: '#F1F1F1',
      }
    }
  })

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static" sx={{bgcolor: 'inherit', color: '#1BA098'}}>
        <Toolbar>
          <MenuItem theme={hoverTheme}>
            <Link to='/Page' className='navbar-link'>
             <Typography variant='h6' textAlign="center">Home</Typography>
            </Link>
          </MenuItem>

          {sections.map((section) => (
              <MenuItem theme={hoverTheme}>
                <Link to={'#' + section} className='navbar-link'>
                  <Typography variant='h6' textAlign="center">{section}</Typography>
                </Link>
              </MenuItem>
          ))
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
