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
       
            <div className='hero-container'><HeroSection  /> </div>
           
      
=======
        <HeroSection />
        
>>>>>>> parent of e4783bd (before gpt)

        </>
    );
    }

export default Home;