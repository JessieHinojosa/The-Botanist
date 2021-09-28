import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { useSelector, useDispatch } from 'react-redux'

import AccountNav from '../components/AccountNav';

function Account() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    
    
    const { data } = useQuery(QUERY_USER);
    
    useEffect(() => {
      if(data) {
          console.log(data);
      }
      console.log('query failed');
    }, [data]);  
      return (
        <div className="lg:px-60 md:px-36 sm:px-20">
            <AccountNav />

            
        
        </div>
    );
}

export default Account;