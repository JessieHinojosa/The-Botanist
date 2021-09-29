// Create and export the Redux store
//
import { applyMiddleware, createStore } from 'redux'
import {reducer} from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: '',
  currentUser: ''
}

export default createStore(reducer, initialState, composeWithDevTools(applyMiddleware()))