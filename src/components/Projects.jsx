import { Typography } from '@mui/material';
import React from 'react';
import Project from './Project'

function Projects() {
  const [projects, setProjects] = React.useState([]);

  

  React.useEffect(() => {
    async function readProjects () {
      const response = await fetch('../../projects.json');
      const data = await response.json();
      console.log("what");
      if (data.error) {
        alert(data.error);
      } else {
        console.log(data.projects);
        setProjects(data.projects);
      }
    }
    
    readProjects();
  }, []);

  return (
    <section id='Projects'>
      <Typography variant='h4'>Projects</Typography>
      discord unscramble bot
      tbd wordle react clone
      tbd webscraper for project sekai
    </section>
  )
}

export default Projects;
