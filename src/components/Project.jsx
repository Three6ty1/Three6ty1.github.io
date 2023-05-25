import { Box, Typography } from '@mui/material';
import React, { Component } from 'react';
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
    <>
      <Card 
        id={'props' + project.name} 
        sx={{
          width: '50%',
          height: '200px', 
          display: 'flex', 
          backgroundColor: '#070707',
          borderRadius: '10px',
          borderColor: '#1BA098',
          borderStyle: 'solid',
          borderWidth: '1px',
          zIndex: 1,
        }}
        elevation={0}
        >
        <CardMedia
          sx={{ height: 200, minWidth: 300, alignSelf: 'center'}}
          image={img}
          title={project.name + 'image'}
        />
        <CardContent
          sx={{
            color: '#DEB992',
          }}
        >
          <Typography sx={{fontWeight: 'light'}} variant='h5' gutterBottom>{project.name}</Typography>
          <Typography sx={{fontWeight: 'light'}} style={{whiteSpace: 'pre-line'}} variant='body1'>{project.description}</Typography>
          <br />
          <Typography sx={{fontWeight: 'bold', position: 'relative', bottom: '0'}} variant='body1'>{project.skills}</Typography>
        </CardContent>
      </Card>
      <Box
        sx={{
          border: 'solid', 
          borderRadius: '10px',
          borderColor:'#1BA098',
          borderWidth: '2px',
          height: 200,
          width: '50%',
          position: 'relative',
          marginTop: '-185px',
          marginLeft: '2%',
          zIndex: 0,
        }}
      >
      </Box>
    </>
    
  )
}

export default Project;
