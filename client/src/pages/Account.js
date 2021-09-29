import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

import AccountNav from '../components/AccountNav';

function Account() {
    // return components for updating Account and order history
    const { data } = useQuery(QUERY_USER);
    let user;
    if (data) {
        user = data.user;
        console.log(user);
    }
    return (
        <div className="lg:px-60 md:px-36 sm:px-20">
            <AccountNav />
        </div>
    );
}

export default Account;