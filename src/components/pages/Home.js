import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
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

            <div className='hero-container'><HeroSection  /> </div>
            // place <UeberMich /> component  here to display it on the home page under the <HeroSection/>
           
      

        </>
    );
    }

    export default Home;