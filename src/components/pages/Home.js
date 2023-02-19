import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Gallerie from './Gallerie';
import UeberMich from './UeberMich';




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