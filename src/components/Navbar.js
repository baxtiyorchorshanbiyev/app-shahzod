import React,{useState, useEffect} from 'react';
import {FaTimes, FaBars} from 'react-icons/fa';
import {Link} from 'react-router-dom';
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleClick = () =>{
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);
  const changeBackground = () => {
    if(window.scrollY >= 20){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', changeBackground);
  return (
    <nav className={navbar ? 'navbar active' : 'navbar'}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">Shahzod</Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item"><Link to="/" onClick={closeMobileMenu} className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/about" onClick={closeMobileMenu} className="nav-link">About Me</Link></li>
          <li className="nav-item"><Link to="/portfolio" onClick={closeMobileMenu} className="nav-link">Portfolio</Link></li>
          <li className="nav-item"><Link to="/contact" onClick={closeMobileMenu} className="nav-link">Contact</Link></li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
