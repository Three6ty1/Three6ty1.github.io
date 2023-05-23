import React from 'react';
import Discord from '../images/discord.svg';
import Email from '../images/envelope-solid.svg';
import GitHub from '../images/github.svg';
import LinkedIn from '../images/linkedin.svg';

const contacts = [GitHub, LinkedIn, Email, Discord];

function Contact() {
  return (
    <section id='Contact'>
      <div id='app-logos'></div>
        {contacts.map((contact) => (
          <img className='app-logo'src={contact} />
        ))
        }
    </section>
  )
}

export default Contact;
