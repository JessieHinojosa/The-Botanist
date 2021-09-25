import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
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
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
      </Link>
      <div className="grid grid-cols-3 gap-2">
        <p className="font-bold text-xl col-span-2">{name}</p>
        <button onClick={addToCart} className="bg-green-500 py-2 px-5 rounded-b-lg text-white hover:bg-green-800 focus:ring-1 focus:ring-green-800 ">Add to cart</button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <p>${price}</p> 
        <p>{countInStock}  in stock</p>
      </div>
    </div>
  );
}

export default ProductItem;
