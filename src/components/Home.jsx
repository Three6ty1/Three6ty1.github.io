import React from 'react';
import About from './About';
// import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Interests from './Interests';

/*
TODO: On hover and backwards effect for DP
TODO: Mobile responsiveness (Maybe)
TODO: Add proper images
TODO: Add wavey celeste like bobbing to my name text
TODO: Add flair to the plain background 
TODO: Set up actual links for the project (make it bob?) and contact section

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
