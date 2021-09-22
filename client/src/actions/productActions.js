import { useQuery } from '@apollo/client';
import {
    QUERY_ALL_PRODUCTS
} from '../utils/queries'

import {
     PRODUCT_LIST_SUCCESS, 
     PRODUCT_LIST_REQUEST, 
     PRODUCT_LIST_FAIL
    } from '../constants/productConstants'


export const listProducts = () => async(dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const { data } = useQuery(QUERY_ALL_PRODUCTS)

        dispatch({ 
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch(error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
       
    }
}