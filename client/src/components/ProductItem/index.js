import React from "react";
import { Link } from "react-router-dom";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";
import { useSelector, useDispatch } from 'react-redux'



function ProductItem(item) {
  const {
    image,
    name,
    _id,
    price,
    countInStock
  } = item;
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  };
  
    return (
    <div className="px-1 py-1">
      <div className="relative">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
      </Link>
      <div className="absolute bottom-2 left-2 ...">
      <p className="lg:text-xl md:text-lg sm:text-md font-medium bg-yellow-300 p-4 rounded-full">${price}</p> 
      </div>
      </div>
      <div className="grid grid-cols-3">
        <p className="font-bold text-2xl  col-span-2 pt-1 pl-1">{name}</p>
        <button onClick={addToCart} className="bg-green-500 py-3 px-5 rounded-b-lg text-white hover:bg-green-400 focus:ring-1 focus:ring-green-800 font-medium">Add to cart</button>
      </div>
      <div className="flex justify-end">
        <p className="text-gray-400 font-medium text-sm p-2">{countInStock} in stock</p>
      </div>
    </div>
  );
}

export default ProductItem;
