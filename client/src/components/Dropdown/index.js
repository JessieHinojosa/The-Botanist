import React from 'react';
import {Link} from 'react-router-dom';
import Auth from "../../utils/auth";

const Dropdown = ({isOpen, toggleDropdown}) => {
    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <>
                <Link to="/account" className="py-4 px-5 text-white hover:bg-green-500">
                    Account
                </Link>
                {/* this is not using the Link component to logout our user and then refresh the application to the start */}
                <a href="/" onClick={() => Auth.logout()} className="py-4 px-5 text-white hover:bg-green-500">
                    Logout
                </a>
                </>
            );
            } else {
            return (
                <>
                <Link to="/login" className="py-4 px-5 text-white hover:bg-green-500">
                    Login
                </Link>
                <Link to="/signup" className="py-4 px-5 text-white hover:bg-green-500">
                    Sign-Up
                </Link>
                </>
            );
        }
    }
    
    return (
        <div className={isOpen ? "z-20 pt-3 sticky top-20 grid grid-rows-3 text-center items-center bg-gray-500" : "hidden"} onClick={toggleDropdown}>
            <Link to="categories" className="py-4 px-5 text-white hover:bg-green-500">Categories</Link>
            {showNavigation()}
        </div>
    )
}

export default Dropdown;
