import React from 'react';
import Typography from '@mui/material/Typography';
import AboutIcon from '../images/about-icon.png';

function About() {
  return (
    <section id='About'>
      <br />
      <br />
      <div className='about-info'>
        <Typography display='block' variant='h3'>Hello! I'm Wen Kai Zhang</Typography>
      </div>
      <br />
      <div id='about-image-div'>
        <img style={{height: '300px', width: '300px'}} src={AboutIcon} alt="About me" />
      </div>
      <br />
      <div className='about-info'>
        <Typography display="block" variant='h6'>I'm a 4th year Computer Science student studying at UNSW</Typography>
      </div>
    </section>
  )
}

export default About;
