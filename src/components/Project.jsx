import { Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

function Project(props) {
  const project = props.project;

  let img;

  try {
    img = require(project.image);
  } catch {
    img = require('../images/default.png');
  }

  return (
    <Card id={'props' + project.name} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title={project.name + 'image'}
      />
      <CardContent>
        <Typography sx={{fontWeight: 'light'}} variant='h5'>{project.name}</Typography>
        <Typography sx={{fontWeight: 'light'}} variant='body1'>{project.description}</Typography>
        <Typography sx={{fontWeight: 'bold'}} variant='body1'>{project.skills}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
  </Card>
  )
}

export default Project;
