import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
//import { skull } from '.../img/skull-icon.png';
import './Navbar.css';




function MyNavbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () =>{
     setClick(!click);
     return click;
     console.log(click);
  }
  const closeMobileMenue = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth >= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenue}>
            PP Ink TattooStudio <i className="fas fa-sharp fa-solid fa-skull" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to={"/"} className="nav-links" onClick={closeMobileMenue}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/uebermich" className="nav-links" onClick={closeMobileMenue}>
                Über mich
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-links" onClick={closeMobileMenue}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/kontakt" className="nav-links" onClick={closeMobileMenue}>
                Kontakt
              </Link>
            </li>    
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default MyNavbar;
