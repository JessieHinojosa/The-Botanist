import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      image
      numReviews
      countInStock
      price
      category {
        _id
      }
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql `
query allProducts {
      _id
      name
      description
      image
      numReviews
      countInStock
      price
      category
    }
  

`
