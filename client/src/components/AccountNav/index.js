import React from 'react'
import { Link } from 'react-router-dom';

const AccountNav = () => {
    return (
        <div className="border-b py-6 flex items-center">
            <Link to="/account" className="text-green-600 text-lg hover:underline font-medium">
                Account Dashboard
            </Link>
            <span className="px-3 text-gray-400"> /</span>
            <Link to='/orderhistory' className="text-green-600 text-lg hover:underline font-medium">Order History</Link>
            <span className="px-3 text-gray-400"> /</span>
            <Link to='/account-details' className="text-green-600 text-lg hover:underline font-medium">Account Details</Link>
        </div>
    )
}

export default AccountNav;
