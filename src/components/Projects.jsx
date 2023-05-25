import { Typography } from '@mui/material';
import React from 'react';
import Project from './Project'

function Projects() {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    async function readProjects () {
      // Projects info gets put into public because thats what gets shipped out
      // If it were put into src, use 'import' instead
      const response = await fetch('/projects_info.json', 
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      const data = await response.json();

      if (data.error) {
        alert(data.error);
      } else {
        setProjects(data.projects);
      }
    }
    
    readProjects();
  }, []);

  return (
    <section id='Projects'>
      <Typography variant='h4' sx={{color: '#1BA098', textDecoration: 'underline'}}>Projects</Typography>
      <br />
      {projects.map((p) => (
        <>
          <Project key={p.name} project={p} />
          <br />
          <br />
        </>
      ))
      }
    </section>
  )
}

export default Projects;
