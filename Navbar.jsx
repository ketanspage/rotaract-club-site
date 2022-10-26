import React from 'react'
import rotaractlogo from '../images/rotaractlogo.webp'
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <nav style={{backgroundColor:'white',boxShadow:'10px',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}>
    
        <a className='logo' style={{textDecoration:'none'}}>
          <Link to="/" style={{textDecoration:'none'}}>
            <img src={rotaractlogo} /><h12>Rotaract Club VITCC</h12>
          </Link>
        </a>
        <input type='checkbox' className='menu-btn' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to="/" style={{textDecoration:'none'}}>Home</Link></li>
            <li><Link to="/events"style={{textDecoration:'none'}}>Events</Link></li>
            <li ><Link to="/about" style={{textDecoration:'none'}}>About us</Link></li>
            <li><Link to="/board" style={{textDecoration:'none'}}>Board</Link></li>
            <li><Link to="/newsletter" style={{textDecoration:'none'}}>Newsleter</Link></li>
        </ul>
    
    </nav>
  )
}

export default Navbar

