import React from 'react';
import Typography from '@mui/material/Typography';
import AboutIcon from '../images/about-icon.png';

function About() {
  return (
    <section id='About'>
      <br />
      <br />
      <div className='about-info'>
        <Typography display='inline' variant='h3'>Hello! I'm </Typography>
        <Typography sx={{color: '#1BA098'}} display='inline' variant='h3'>Wen Kai</Typography>
        <Typography display='inline' variant='h3'> Zhang</Typography>
      </div>
      <br />
      <div>
        <div id='dp-ring'>
          <span style={{'--i':0}}></span>
          <span style={{'--i':1}}></span>
          <span style={{'--i':2}}></span>
          <span style={{'--i':3}}></span>
        </div>
        <div id='about-image-div'>
          <img style={{height: '300px', width: '300px'}} src={AboutIcon} alt="About me" />
        </div>
      </div>
      <br />
      <div className='about-info'>
        <Typography display="block" variant='h5'>I'm a 4th year Computer Science student studying at UNSW</Typography>
      </div>
    </section>
  )
}

export default About;
