import React, { useEffect } from "react";
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { idbPromise } from "../../utils/helpers";
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { useSelector, useDispatch } from 'react-redux'
import './style.css';

import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');


const Cart = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    };
  
    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  // Toggle cart modal open/close
  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach(item => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];
  
    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });
    getCheckout({
      variables: { products: productIds }
    });
  }

  // CART ICON
  if (!state.cartOpen) {
    return (
      <div className="cart-closed z-40" onClick={toggleCart}>
        {/* Heroicon Cart Icon */}
        <div className="h-16 w-16 bg-yellow-400 rounded-lg flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 cartIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="cart fixed z-50 bg-gray-50 overflow-y-auto h-full w-full">
      <div className="close" onClick={toggleCart}>[close]</div>
      <h2 className="font-medium text-yellow-600 px-8 pt-4 pb-6 text-2xl">Shopping Cart</h2>
      {state.cart.length ? (
        <div className="px-6">
          {state.cart.map(item => (
            <CartItem key={item._id} item={item} />
          ))}
          <div className="pt-6">
            <p className="font-medium text-xl pb-2">Total: ${calculateTotal()}</p>
            {
              Auth.loggedIn() ?
                <button 
                onClick={submitCheckout}
                className="w-full my-2 px-4 py-2 bg-yellow-300 hover:bg-yellow-200 font-medium text-lg rounded-full"
                >
                  Checkout ➜
                </button>
                :
                <Link to="/login" className="w-full my-2 px-4 py-2 bg-yellow-300 hover:bg-yellow-200 font-medium text-lg rounded-full">
                Login to check out ➜
                </Link>
            }
          </div>
        </div>
      ) : (
        <h3>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </div>  
  );
};

export default Cart;