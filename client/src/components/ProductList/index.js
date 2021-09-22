import React, { useEffect } from 'react'
import { ProductItem } from '../ProductItem/index'
import {useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../actions/productActions'



const ProductList = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (
        
    <div className="my-2">
      <h2>Our Products:</h2>
      {loading ? (
         <h2>Loading...</h2>
       ) : error ? (
       <h3>{error}</h3>
       ) : (
        <div className="flex-row">
          {products.map((product) => (
              <div>
            <ProductItem
            product={product}
            />
            </div>
          ))}
    
        </div>
        )}

    </div>
    )
}

export default ProductList
