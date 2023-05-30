import React, { Fragment } from 'react';
import Default from '../images/default.png';
import { Typography } from '@mui/material';

function Interest (prop) {
  const [hovered, setHovered] = React.useState(false);
  const interest = prop.interest;

  let img;
  let logo;
  let validLogo = false;

  // Weird thing where it allows dynamic if the first thing is static...?
  try {
    img = require('./../images/' + interest.prefix + '.gif');
  } catch {
    try {
      img = require('./../images/' + interest.prefix + '.png');
    } catch {
      img = Default;
    }
  }

  try {
    logo = require('./../images/' + interest.prefix + '-logo.png');
    validLogo = true;
  } catch {
    logo = Default;
  }

  return (
    <Fragment>
      {validLogo ?
      (
        <img className='interest-logo' src={logo} alt={prop.name + ' logo'}/>
      )
      : 
      (
        <Typography variant='h5' sx={{color: '#1BA098'}}>{interest.name}</Typography>
      )}
      <br />
      <br />
      <div className='interest-image-div' onMouseOver={() => setHovered(() => true)}>
        <img src={img} alt={prop.name + ' image'} className='interest-image'/>
      </div>
      <div className={'interest-quote ' + (hovered ? 'hovered' : '')}>
        <Typography variant='h6' sx={{fontWeight: 'light'}}>{interest.quote}</Typography>
      </div>
    </Fragment>
  )
}

export default Interest;