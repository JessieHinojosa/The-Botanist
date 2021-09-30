import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import ProductItem from '../ProductItem';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from "../../utils/helpers";
import { useSelector, useDispatch } from 'react-redux'


function ProductList() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  
  const { currentCategory } = state;
  
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  
  useEffect(() => {
    if(data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });
      
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
      // add else if to check if `loading` is undefined in `useQuery()` Hook
    } else if (!loading) {
      // since we're offline, get all of the data from the `products` store
      idbPromise('products', 'get').then((products) => {
        // use retrieved data to set global state for offline browsing
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products
        });
      });
    }
  }, [data, loading, dispatch]);  

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }
    return state.products.filter(product => product.category._id === currentCategory);
  }
  
    return (
    <div className="py-2">
      {state.products.length ? (
        <div className="px-8 pb-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-24 sm:gap-12">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              countInStock={product.countInStock}
            />
          ))}
        </div>
      ) : (
        <h3>Looks like we're out of stock!</h3>
      )} 
      {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
    </div>
  );
}

export default ProductList;
