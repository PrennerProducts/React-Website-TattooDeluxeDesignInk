import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Contact from './Contact';
import Gallerie from './Gallerie';
import UeberMich from './UeberMich';
import './home.css'
import { useMatch } from 'react-router-dom';


function Home() {
    const componentDidMount = () =>  {
        window.scrollTo(0, 0);
    };
        const match = useMatch('/');

        if (!match) {
            return null;
        }
   
    return (
        <div className="home">
          <HeroSection />
          <UeberMich />
          
        </div>
      );
    }

export default Home;