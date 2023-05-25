import React from 'react';
import About from './About';
// import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Interests from './Interests';

function Home() {
  return (
    <section id='home-section'>
      <About />
      <Contact />
      <br />
      <br />
      <Projects />
      <Interests />
    </section>
  )
}

export default Home;
