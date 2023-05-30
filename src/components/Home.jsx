import React from 'react';
import About from './About';
// import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Interests from './Interests';

/*
Important
TODO: Set up actual links for the project and contact section
TODO: Fix meta data for website. Tab image and text. 
TODO: Fix up repo README and About section
TODO: Mobile responsiveness (Maybe)

Misc
TODO: Fix nav bar scroll delay...
TODO: Reorganise image folder
*/

function Home() {
  return (
    <section id='Home'>
      <About />
      <Contact />
      <br />
      <br />
      <Projects />
      <br />
      <br />
      <Interests />
    </section>
  )
}

export default Home;
