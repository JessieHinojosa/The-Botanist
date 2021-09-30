import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { useSelector, useDispatch } from 'react-redux'
import AccountNav from '../components/AccountNav';
import CartItem from '../components/CartItem';
import Auth from '../utils/auth';
import { idbPromise } from "../utils/helpers";
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';
import {  ADD_MULTIPLE_TO_CART } from "../utils/actions";
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');



function Account() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [getCheckout, { checkoutData }] = useLazyQuery(QUERY_CHECKOUT);
    
  
    // return components for updating Account and order history
    const { data } = useQuery(QUERY_USER);
        let user;
    if (data) {
        user = data.user;
    }
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
        if (checkoutData) {
            stripePromise.then((res) => {
            res.redirectToCheckout({ sessionId: checkoutData.checkout.session });
          });
        }
      }, [checkoutData]);
    
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
    
    return (
        <div className="lg:px-60 md:px-36 sm:px-20">
            <AccountNav />
            {user ? (
                <>
                <h1>{user.firstName} {user.lastName}</h1>
                <ul>
                    <li>{user.email}</li>
                    <li>shipping address</li>
                </ul>
                <section>
                    <h2>Current Items in Your Cart</h2>
                {state.cart.length ? (
                    <div>
                    {state.cart.map(item => (
                        <CartItem key={item._id} item={item} />
                    ))}
                    <div className="flex-row space-between">
                        <strong>Total: ${calculateTotal()}</strong>
                        {
                        Auth.loggedIn() ?
                            <button onClick={submitCheckout}>
                            Checkout
                            </button>
                            :
                            <span>(log in to check out)</span>
                        }
                    </div>
                    </div>
                ) : (
                    <h3>
                    You haven't added anything to your cart yet!
                    </h3>
                )}
                </section>
                </>
                ) : null}

        </div>
    );
}

export default Account;