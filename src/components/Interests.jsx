import { Typography } from '@mui/material';
import React, { Fragment } from 'react';
import Interest from './Interest';

function Interests() {
  const [interests, setInterests] = React.useState([]);

  React.useEffect(() => {
    async function readInterests () {
      const response = await fetch('./interests_info.json', 
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
        setInterests(data.interests);
        console.log(interests);
      }
    }
    
    readInterests();
  }, []);

  return (
    <section id='Interests'>
      <Typography variant='h4' sx={{color: '#1BA098'}}>Interests</Typography>
      <br />
      {interests.map((i) => (
        <Fragment key={i.name}>
          <Interest interest={i} />
          <br/>
          <br/>
        </Fragment>
      ))
      }
    </section>
  )
}

export default Interests;
