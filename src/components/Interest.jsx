import React, { Fragment } from 'react';
import Default from '../images/default.png';
import { Typography } from '@mui/material';

function Interest (prop) {
  const [hovered, setHovered] = React.useState(false);
  const interest = prop.interest;

  let img;
  let valid = false;

  try {
    img = require(interest.image);
    valid = true;
  } catch {
    img = Default;
  }

  return (
    <Fragment>
      <Typography variant='h5' sx={{color: '#1BA098'}}>{interest.name}</Typography>
      <br />
      <br />
      <div className='interest-image' onMouseOver={() => setHovered(() => true)}>
        <img src={valid ? img : Default} alt={prop.name + ' image'}/>
      </div>
      <div className={'interest-quote ' + (hovered ? 'hovered' : '')}>
        <Typography variant='h6' sx={{fontWeight: 'light'}}>{interest.quote}</Typography>
      </div>
    </Fragment>
  )
}

export default Interest;