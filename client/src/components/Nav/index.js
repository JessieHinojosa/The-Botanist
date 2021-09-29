import React from 'react'
import { Link } from 'react-router-dom';
import Auth from "../../utils/auth";
import logo from '../../assets/icons/vector-logo.png'

// to add animation class: "transition duration-300 ease-in-out flex items-center animate-bounce"

const Nav = ({toggleDropdown}) => {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
          <Link to="/account" className="py-4 px-4 text-red-800 hover:underline font-medium text-xl">
            Account
          </Link>
          {/* this is not using the Link component to logout our user and then refresh the application to the start */}
          <a href="/" onClick={() => Auth.logout()} className="py-4 px-4 text-red-800 hover:underline font-medium text-xl">
            Logout
          </a>
        </>
      );
    } else {
      return (
        <>
          <Link to="/login" className="py-4 px-4 text-red-800 hover:underline font-medium text-xl">
            Login
          </Link>
          <Link to="/signup" className="py-4 px-4 text-red-800 hover:underline font-medium text-xl">
            Sign-Up
          </Link>
        </>
      );
    }
  }

  return (
    <header className="sticky top-0 z-30">
      <nav className=" flex justify-between items-center h-22 bg-gray-100  relative font-sans" role="navigation">
        <Link to="/" className="pl-24 py-2">
          <img src={logo} alt="name-logo" />
        </Link>

        <div className='px-4 cursor-pointer md:hidden' onClick={toggleDropdown}> 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        <div className='pr-24 md:block hidden'> 
          <Link to="/categories" className="py-4 px-4 text-red-800 hover:underline font-medium text-xl">Products</Link>
          {showNavigation()}
          {/* <Link to="/cart" className="py-4 px-4 text-red-800 hover:underline font-medium text-xl">Cart</Link> */}
        </div>
      </nav>
    </header>
  )
}

export default Nav;
