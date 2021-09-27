import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import {
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    ADD_TO_CART,
    UPDATE_PRODUCTS,
} from '../utils/actions';

import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from "../utils/helpers";

import { useSelector, useDispatch } from 'react-redux';

const Detail = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const { id } = useParams();
    
    const [currentProduct, setCurrentProduct] = useState({})
    
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    
    const { products, cart } = state;
    
    useEffect(() => {
        // already in global store
        if (products.length) {
        setCurrentProduct(products.find(product => product._id === id));
        } 
        // retrieved from server
        else if (data) {
        dispatch({
            type: UPDATE_PRODUCTS,
            products: data.products
        });
    
        data.products.forEach((product) => {
            idbPromise('products', 'put', product);
        });
        }
        // get cache from idb
        else if (!loading) {
        idbPromise('products', 'get').then((indexedProducts) => {
            dispatch({
            type: UPDATE_PRODUCTS,
            products: indexedProducts
            });
        });
        }
    }, [products, data, loading, dispatch, id]);

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === id)
    
        if (itemInCart) {
        dispatch({
            type: UPDATE_CART_QUANTITY,
            _id: id,
            purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
        });
        // if we're updating quantity, use existing item data and increment purchaseQuantity value by one
        idbPromise('cart', 'put', {
            ...itemInCart,
            purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
        });
        } else {
        dispatch({
            type: ADD_TO_CART,
            product: { ...currentProduct, purchaseQuantity: 1 }
        });
        // if product isn't in the cart yet, add it to the current shopping cart in IndexedDB
        idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
        }
    }

    const removeFromCart = () => {
        dispatch({
        type: REMOVE_FROM_CART,
        _id: currentProduct._id
        });
    
        // upon removal from cart, delete the item from IndexedDB using the `currentProduct._id` to locate what to remove
        idbPromise('cart', 'delete', { ...currentProduct });
    };

    return (
        <>
            {currentProduct ? (
                <div className="lg:px-60 md:px-36 sm:px-20">
                    {/* Sub navigation*/}
                    <div className="border-b py-6 flex items-center">
                    <Link to="/categories" className="text-green-700 text-lg hover:underline">
                        Products
                    </Link>
                    <span className="px-3"> /</span>
                    <span className="text-green-700 text-lg">{currentProduct.name}</span>
                    </div>

                    {/* Product display*/}
                    <div className="py-10 grid lg:grid-cols-2 gap-36">
                        <img
                            src={`/images/${currentProduct.image}`}
                            alt={currentProduct.name}
                        />

                        <div className="grid grid-cols-1">
                            <div className="flex justify-between border-b">
                                <h2 className="text-4xl">{currentProduct.name}</h2>
                                <p className="text-4xl">${currentProduct.price}</p>
                            </div>

                            <div>
                                <p className="text-xl">{currentProduct.description}</p>
                                <button 
                                onClick={addToCart}
                                className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-400"
                                >
                                    Add to Cart
                                </button>
                                <button 
                                disabled={!cart.find(p => p._id === currentProduct._id)} 
                                onClick={removeFromCart}
                                className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-400"
                                >
                                    Remove from Cart
                                </button>
                            </div>
                            
                        </div>

                    </div>
                </div>
            ) : null}
            {loading ? <img src="" alt="loading" /> : null}
            <Cart />
        </>
    )
}

export default Detail
