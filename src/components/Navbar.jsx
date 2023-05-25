import React, { useRef } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Typography from "@mui/material/Typography";
import { createTheme } from '@mui/material/styles'
import { Link } from "react-scroll";

const sections = ['About', 'Contact', 'Projects', 'Interests'];

function Navbar() {

  const hoverTheme = createTheme({
    palette: {
      action: {
        hover: '#1F1F1F',
      }
    }
  })

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static" sx={{bgcolor: 'inherit', color: '#1BA098'}}>
        <Toolbar>
          <Link to='Home' spy={true} smooth={true} offset={-100} duration={750} className='navbar-link'>
            <MenuItem theme={hoverTheme}>
              <Typography variant='h6' sx={{fontWeight: 'bold'}} textAlign="center">Home</Typography>  
            </MenuItem>
          </Link>

          {sections.map((section) => (
              <Link key={section} to={section} spy={true} smooth={true} offset={-50} duration={750} className='navbar-link'>
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
