import React from 'react';
import {Link} from 'react-router-dom';

const Dropdown = ({isOpen, toggleDropdown}) => {
    return (
        <div className={isOpen ? "grid grid-rows-5 text-center items-center bg-gray-500" : "hidden"} onClick={toggleDropdown}>
            <Link to="categories" className="py-4 px-5 text-white hover:bg-green-500">Categories</Link>
            <Link to="/cart" className="py-4 px-5 text-white hover:bg-green-500">Cart</Link>
            <Link to="/login" className="py-4 px-5 text-white hover:bg-green-500">Login</Link>
            <Link to="/signup" className="py-4 px-5 text-white hover:bg-green-500">Sign-Up</Link>
            <Link to="/user" className="py-4 px-5 text-white hover:bg-green-500">
                User
            </Link>
        </div>
    )
}

export default Dropdown;
