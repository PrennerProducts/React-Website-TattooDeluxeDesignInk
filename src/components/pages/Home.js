import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Contact from './Contact';
import Gallerie from './Gallerie';
import UeberMich from './UeberMich';




function Home() {
    const componentDidMount = () =>  {
        window.scrollTo(0, 0);
    };
    return (
        componentDidMount(),
       
        <div className="home-container">
        <HeroSection />
        <div className="home-grid">
        <UeberMich className="uebermich" />
        <Contact className="contact" />
        <Gallerie className="gallerie" />
      </div>
    </div>
  );
}

export default Home;