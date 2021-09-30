import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations'
// import idbPromise()
import { idbPromise } from "../utils/helpers";
import Cart from '../components/Cart';

const Success = () => {
    // on Success load, read everything saved in indexedDB cart store
    const [addOrder] = useMutation(ADD_ORDER);

    useEffect(() => {
    async function saveOrder() {
        const cart = await idbPromise('cart', 'get');
        const products = cart.map(item => item._id);

        if (products.length) {
            const { data } = await addOrder({ variables: { products } });
            const productData = data.addOrder.products;
        
            productData.forEach((item) => {
                idbPromise('cart', 'delete', item);
            });
        }

        // relocate to homepage after 3 seconds
        setTimeout(() => {
            window.location.assign('/');
        }, 5000);
    }

    saveOrder();
    }, [addOrder]);

    return (
        <div className="flex flex-col justify-start items-center h-screen">
            <Cart />
            <h1 className="pt-20">Success!</h1>
            <h2>Thank you for your purchase!</h2>
            <h2>You will now be redirected to the homepage</h2>
        </div>
    );
}

export default Success