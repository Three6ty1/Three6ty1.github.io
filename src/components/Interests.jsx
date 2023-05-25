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
      }
    }
    
    readInterests();
  }, []);

  return (
    <section id='Interests'>
      <Typography variant='h4' sx={{color: '#1BA098', justifySelf: 'center'}}>Interests</Typography>
      <br />
      <br />
      <br />
      <div id='interest-items'>
        {interests.map((i) => (
          <div key={i.name} className='interest-item'>
            <Interest interest={i} />
          </div>
        ))
        }
      </div>
    </section>
    
  )
}

export default Interests;
