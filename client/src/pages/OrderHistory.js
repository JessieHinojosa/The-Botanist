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
        <div className="lg:px-60 md:px-36 sm:px-20 mt-8">
            <Cart />
            <AccountNav />
            <div className="my-1">

                {user ? (
                <div className="py-4"> 
                    <h2 className="pb-16">Order History for {user.firstName} {user.lastName}</h2>
                    

                    {user.orders.map((order) => (
                    <div key={order._id} className="my-2 px-8 pb-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-24">
                        {/* <h3>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</h3> */}
                        <div className="orderGroup">
                        {order.products.map(({ _id, image, name, price }, index) => (
                            <div key={index} className="px-1 py-1">
                            <Link to={`/products/${_id}`}>
                                <img alt={name} src={`/images/${image}`} />
                                <p>{name}</p>
                            </Link>
                            <div>
                                <span>${price}</span>
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    ))}
                </div>
                ) : null}
            </div>
        </div>
    );
}

export default OrderHistory;