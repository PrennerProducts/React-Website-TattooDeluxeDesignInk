import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';

import UeberMich from './UeberMich';
import './home.css'
import Contact from './Contact';
import Gallerie from './Gallerie';



function Home() {
    const componentDidMount = () =>  {
        window.scrollTo(0, 0);
    };
    return (
        componentDidMount(),
        <div className="home-container">
            <div className="hero-container">
            <HeroSection />
            </div>
            <div className="about-container">
            <UeberMich />
            </div>
            <div className="contact-container">
            <Contact />
            </div>
            <div className="gallerie-container">
            <Gallerie />
            </div>
         </div>
    );
    }

    export default Home;