import React from 'react';
import {Link} from 'react-router-dom';

const Dropdown = () => {
    return (
        <div className="grid grid-rows-5 text-center items-center bg-green-200">
            <Link to="categories" className="py-4 px-5 text-green-600">Categories</Link>
            <Link to="/cart" className="py-4 px-5 text-green-600 ">Cart</Link>
            <Link to="/login" className="py-4 px-5 text-green-600">Login</Link>
            <Link to="/signup" className="py-4 px-5 text-green-600">Sign-Up</Link>
            <Link to="/user" className="py-4 px-5 text-green-600 bg-gray-200 rounded-full hover:bg-yellow-200">
                User
            </Link>
        </div>
    )
}

export default Dropdown;
