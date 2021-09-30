import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

import AccountNav from '../components/AccountNav';
import Cart from '../components/Cart';

function OrderHistory() {
    const { data } = useQuery(QUERY_USER);
    let user;

    if (data) {
        user = data.user;
    }

    return (
        <div className="lg:px-72 md:px-36 sm:px-20 mt-8">
            <Cart />
            <AccountNav />
            <div className="my-1">

                {user ? (
                <div className="py-4"> 
                    <h2 className="pb-12 flex justify-center text-xl">Order History for {user.firstName} {user.lastName}</h2>
                    

                    {user.orders.map((order) => (
                    <div key={order._id} className="border border-yellow-700 mb-10">
                        {/* <h3>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</h3> */}
                        {order.products.map(({ _id, image, name, price }, index) => (
                        <div className="orderGroup">
                            <div key={index} className="grid grid-cols-2 items-center">
                            <Link to={`/products/${_id}`} className="flex items-center">
                                <img alt={name} src={`/images/${image}`} className="w-28 p-4" />
                                <span className="text-lg font-medium">{name}</span>
                            </Link>
                                <span className="text-lg font-medium flex justify-end pr-10">${price}</span>
                            </div>
                        </div>
                        ))}
                    </div>
                    ))}
                </div>
                ) : null}
            </div>
        </div>
    );
}

export default OrderHistory;