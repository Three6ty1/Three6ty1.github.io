import React from 'react';
import About from './About';
// import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Interests from './Interests';

/*
Important
TODO: Set up actual links for the project and contact section
TODO: Mobile responsiveness (Maybe)

Misc
TODO: Redo the react scroll section to fix lag.
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
