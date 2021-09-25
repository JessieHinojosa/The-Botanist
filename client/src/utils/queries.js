import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      numReviews
      countInStock
      image
      category {
        _id
      }
      isFeatured
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      reviews
      numReviews
      countInStock
      category {
        name
        description
        indoor
        outdoor
      }
      isFeatured
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
      description
      indoor
      outdoor
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      shippingAddress {
        address
        city
        postalCode
        country
      }
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;
