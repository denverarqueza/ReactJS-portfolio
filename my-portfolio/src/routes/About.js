import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" 
      text="I'm an aspiring Front-end Developer" />
      <Footer />
    </div>
  );
}

export default About;
