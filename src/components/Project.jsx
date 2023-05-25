import { Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Default from '../images/default.png';
// import { keyframes } from '@mui/system';

// const push = keyframes`
//   0% {
//     transform: translateX(0);
//     transform: translateY(0);
//   }
//   33% {
//     transform: rotate(2deg);
//   }
//   66% {
//     transform: rotate(-2deg);
//   }
//   90% {
//     transform: rotate(1deg);
//   }
// `;

function Project(props) {
  const project = props.project;
  // const [animated, setAnimated] = React.useState(false);

  let img;
  let valid = false;

  try {
    img = require(project.image);
    valid = true;
  } catch {
    img = Default;
  }

  return (
    <div
      style={{
        width: '50%',
        maxheight: '200px',
        display: 'flex',
      }}
    >
      <Card
        className='project-card'
        sx={{
          display: 'flex',
          backgroundColor: '#070707',
          zIndex: 1,
        }}
        elevation={0}
        >
        <CardMedia
          className={'card-image'}
          sx={{ height: 200, minWidth: 300, alignSelf: 'center', borderRadius: '10px'}}
          image={valid ? Default : img}
          name={project.name + ' image'}
        />
        <CardContent
          sx={{
            color: '#DEB992',
          }}
        >
          <Typography sx={{fontWeight: 'light'}} variant='h5' gutterBottom>
            <Link
              underline='hover'
              sx={{ color: 'inherit', font: 'inherit', '&:hover': { cursor: 'pointer' }}}
            >
              {project.name}
            </Link>
          </Typography>
          <Typography sx={{fontWeight: 'light'}} style={{whiteSpace: 'pre-line'}} variant='body1'>{project.description}</Typography>
          <br />
          {project.skills.map((skill) => (
            <Typography
              key={skill}
              sx={{
                display: 'inline', 
                fontWeight: 'light', 
                fontStyle: 'italic', 
                position: 'relative', 
                bottom: '0'}} 
              variant='body1'>
              {skill}
              &nbsp;
              &nbsp;
              &nbsp;
            </Typography>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}


/*

*/
export default Project;
