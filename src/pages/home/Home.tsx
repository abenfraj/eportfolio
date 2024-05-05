import React from 'react';
import IntroSection from '../../components/intro_section/IntroSection';
import AboutSection from '../../components/about_section/AboutSection';
import './Home.css';
import './../../components/scrollbar/Scrollbar.css';

const Home = (): JSX.Element => {
  return (
    <>
      <IntroSection />
      <AboutSection />
    </>
  );
}

export default Home;
