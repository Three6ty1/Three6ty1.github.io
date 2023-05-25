import { Typography } from '@mui/material';
import React from 'react';

function Project(props) {
  return (
    <section id={'props' + {props}}>
      <Typography sx={{fontWeight: 'bold'}} variant='h5'>Projects</Typography>
      discord unscramble bot
      tbd wordle react clone
      tbd webscraper for project sekai
    </section>
  )
}

export default Project;
