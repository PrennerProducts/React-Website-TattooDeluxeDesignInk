import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Button } from './Button';
import { FaBars, FaTimes} from 'react-icons/fa'
import {GiRocketThruster} from 'react-icons/gi'
import {IconContext} from 'react-icons/lib'
import './Navbar.css';




function MyNavbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
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
          <img src="/images/baseIcon.png" alt="bug" height={50} />
          <img src="/images/white_text-logoname_transparent_background.png" alt="bug" height={140} />

          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}
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
