import React, {useEffect} from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import ProductItem from '../ProductItem';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";
import { useSelector, useDispatch } from 'react-redux'


const FeaturedItems = () => {
    
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    
    
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
      return state.products.filter(product => product.isFeatured === true);
    }
      return (
        <section>
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

         
            
        </section>
    )
}

export default FeaturedItems
