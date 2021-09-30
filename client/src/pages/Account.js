import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import AccountNav from '../components/AccountNav';
import Cart from '../components/Cart';
// import { useSelector, useDispatch } from 'react-redux'
// import CartItem from '../components/CartItem';
// import Auth from '../utils/auth';
// import { idbPromise } from "../utils/helpers";
// import { useLazyQuery } from '@apollo/client';
// import { QUERY_CHECKOUT } from '../utils/queries';
// import {  ADD_MULTIPLE_TO_CART } from "../utils/actions";
// import { loadStripe } from '@stripe/stripe-js';
// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');



function Account() {
    // const state = useSelector(state => state);
    // const dispatch = useDispatch();
    // const [getCheckout, { checkoutData }] = useLazyQuery(QUERY_CHECKOUT);
    

    // return components for updating Account and order history
    const { data } = useQuery(QUERY_USER);
        let user;
    if (data) {
        user = data.user;
    }
    // useEffect(() => {
    //     async function getCart() {
    //       const cart = await idbPromise('cart', 'get');
    //       dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    //     };

    //     if (!state.cart.length) {
    //       getCart();
    //     }
    //   }, [state.cart.length, dispatch]);
    
    // useEffect(() => {
    //     if (checkoutData) {
    //         stripePromise.then((res) => {
    //         res.redirectToCheckout({ sessionId: checkoutData.checkout.session });
    //       });
    //     }
    //   }, [checkoutData]);


    // ****WAS INSIDE RETURN STATEMENT****
    //  <section>
    //                 <h2>Current Items in Your Cart</h2>
    //             {state.cart.length ? (
    //                 <div>
    //                 {state.cart.map(item => (
    //                     <CartItem key={item._id} item={item} />
    //                 ))}
    //                 <div className="flex-row space-between">
    //                     <strong>Total: ${calculateTotal()}</strong>
    //                     {
    //                     Auth.loggedIn() ?
    //                         <button onClick={submitCheckout}>
    //                         Checkout
    //                         </button>
    //                         :
    //                         <span>(log in to check out)</span>
    //                     }
    //                 </div>
    //                 </div>
    //             ) : (
    //                 <h3>
    //                 You haven't added anything to your cart yet!
    //                 </h3>
    //             )}
    //             </section> 
    
    
    return (
        <div className="lg:px-60 md:px-36 sm:px-20 h-screen mt-8">
            <Cart />
            <AccountNav />
            {user ? (
                <div className="flex flex-col items-center pt-10">
                <h2 className="text-lg font-bold pb-8">Hello {user.firstName} {user.lastName}!</h2>
                <p className="py-2">Welcome to your user dashboard.</p>
                <p className="py-2 ">Here you may manage your 
                <Link to='/account-details' className="underline pl-1">account details</Link>
                , and view your  
                <Link to='/orderhistory' className="underline pl-1">order history</Link>.</p>
                
                </div>
                ) : null}

        </div>
    );
}

export default Account;