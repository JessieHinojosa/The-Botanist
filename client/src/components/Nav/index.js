import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo_red_on_white_horizontal_2.jpg'

const Nav = () => {
  return (
    <header>
      <nav className="pl-10">
        <ul>
            <li>
              <Link to="/" className='text-blue-500'>
                <img src={logo} alt="name-logo" />
              </Link>
            </li>

            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <li>
              <Link to="categories">Categories</Link>
            </li> 
            <li>
              <Link to="/cart">Cart</Link>
            </li>       
            <li>
              <Link to="/login">Login</Link>
            </li>    
            <li>
              <Link to="/signup">Sign-Up</Link>
            </li>    
        </ul> 
      </nav>
    </header>
  )
}

export default Nav;
