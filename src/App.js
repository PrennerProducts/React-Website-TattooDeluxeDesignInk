import  React,  {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import UeberMich from './components/pages/UeberMich';
import MyNavbar from './components/Navbar';
import Home from "./components/pages/Home";
import Gallerie from "./components/pages/Gallerie.js";
import Contact from './components/pages/Contact.js';
import Footer from './components/pages/Footer.js';
import ErrorPage from './error-page.js';
import HeroSection from './components/HeroSection';
import { Navbar } from 'react-bootstrap';
import Impressum from './components/pages/impressum.js';
import './index.css';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);    
    }, 5000);
  }, []);
  return (
    <div className='App'>
      {
        loading ?
       <div className='spinner'>
            <ClimbingBoxLoader
            color={'#ffffff'}
            loading={loading}
            size={30}
            cssOverride={{  alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '20%', marginBottom: 'auto', display: 'fit',}}
            aria-label="Loading Spinner"
            data-testid="loader"
             />
       </div>
      :
      <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uebermich" element={<UeberMich />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
   
  }
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <MyNavbar />
      
     

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
      
    </div>
  );
}





function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}