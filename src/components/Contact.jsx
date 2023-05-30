import React from 'react';
import Discord from '../images/icons/discord.svg';
import Email from '../images/icons/envelope-solid.svg';
import GitHub from '../images/icons/github.svg';
import LinkedIn from '../images/icons/linkedin.svg';

const contacts = [GitHub, LinkedIn, Email, Discord];

function Contact() {
  return (
    <section id='Contact'>
      <div id='app-logos'></div>
        {contacts.map((contact) => (
          <img key={contact} className='app-logo' src={contact} alt={{contact} + ' logo'} />
        ))
        }
    </section>
  )
}

export default Contact;
