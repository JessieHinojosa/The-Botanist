import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
// import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
// import { idbPromise } from "../../utils/helpers";
// import { useSelector, useDispatch } from 'react-redux'



export const ProductItem = ({product}) => {
//   const {
//     image,
//     name,
//     _id,
//     price,
//     quantity
//   } = item;
//   const state = useSelector(state => state);
//   const dispatch = useDispatch();

//   const { cart } = state;

//   const addToCart = () => {
//     const itemInCart = cart.find((cartItem) => cartItem._id === _id)
//     if (itemInCart) {
//       dispatch({
//         type: UPDATE_CART_QUANTITY,
//         _id: _id,
//         purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
//       });
//       idbPromise('cart', 'put', {
//         ...itemInCart,
//         purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
//       });
//     } else {
//       dispatch({
//         type: ADD_TO_CART,
//         product: { ...item, purchaseQuantity: 1 }
//       });
//       idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
//     }
//   };
    return (
    <div className="card px-1 py-1">
      <Link to={`/products/${product._id}`}>
        <img
          alt={product.name}
          src={product.image}
        />
        <p>{product.name}</p>
      </Link>
      <div>
        <div>{product.countInStock} {pluralize("item", product.countInStock)} in stock</div>
        <span>${product.price}</span>
      </div>
      <button >Add to cart</button>
    </div>
  );
}

