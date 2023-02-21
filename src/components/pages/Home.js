import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Contact from './Contact';
import Gallerie from './Gallerie';
import UeberMich from './UeberMich';
import './home.css'



function Home() {
    const componentDidMount = () =>  {
        window.scrollTo(0, 0);
    };
    return (
        componentDidMount(),
       
          
           
        <>
        <HeroSection />
        

        </>
    );
    }

export default Home;