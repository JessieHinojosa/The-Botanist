import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/vector-logo.png'

// to add animation class: "transition duration-300 ease-in-out flex items-center animate-bounce"

const Nav = ({toggleDropdown}) => {
  return (
    <header>
      <nav className="flex justify-between items-center h-22 bg-gray-300 bg-opacity-25 relative font-sans" role="navigation">
        <Link to="/" className="pl-24 py-2">
          <img src={logo} alt="name-logo" />
        </Link>

        <div className='px-4 cursor-pointer md:hidden' onClick={toggleDropdown}> 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        <div className='pr-24 md:block hidden'> 
          <Link to="categories" className="py-4 px-4 text-green-800 hover:underline font-medium">Products</Link>
          <Link to="/cart" className="py-4 px-4 text-green-800 hover:underline font-medium">Cart</Link>
          <Link to="/login" className="py-4 px-4 text-green-800 hover:underline font-medium">Login</Link>
          <Link to="/signup" className="py-4 px-4 text-green-800 hover:underline font-medium">Sign-Up</Link>
          <Link to="/user" className="py-4 px-4 text-green-800 hover:underline font-medium">
            User
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav;
