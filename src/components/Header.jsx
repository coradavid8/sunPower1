import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../images/home.png';
import sunflowerImage from '../images/sunflower.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className='shimano'>
        <h4>SHIMANO SRL</h4>
        <img src={sunflowerImage}/>
      </div>
      <nav>
        <div className="burger-menu" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={menuOpen ? 'active' : ''}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              <img src={homeIcon} alt="Home" style={{ width: '24px', height: '24px' }} />
            </Link>
          </li>
          <li><Link to="/despre-noi" onClick={toggleMenu}>Despre Noi</Link></li>
          <li><Link to="/produse" onClick={toggleMenu}>Produse</Link></li>
          <li><Link to="/casa-verde" onClick={toggleMenu}>Casa Verde</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;