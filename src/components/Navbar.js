import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import { skull } from '.../img/skull-icon.png';

function MyNavbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TATTOO <i className="fas fa-sharp fa-solid fa-skull" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default MyNavbar;
