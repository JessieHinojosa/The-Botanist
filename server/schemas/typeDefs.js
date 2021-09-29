const { gql } = require('apollo-server-express');
const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

// const ShippingAddress = new GraphQLObjectType({
//   name: 'shippingAddress',
//   fields: () => ({
//     address: {type: GraphQLString },
//     city: {type: GraphQLString },
//     postalCode: {type: GraphQLInt },
//     country: {type: GraphQLString },
//   })
// })

const typeDefs = gql`
type Category {
  _id: ID
  name: String
  description: String
  indoor: Boolean
  outdoor: Boolean
}

type Product {
  _id: ID
  name: String
  description: String
  price: Float
  image: String
  numReviews: Int
  countInStock: Int
  category: Category
  isFeatured: Boolean
}

type Order {
  _id: ID
  purchaseDate: String
  products: [Product]
}

type Checkout {
  session: ID
}

type User {
  _id: ID
  firstName: String
  lastName: String
  email: String
  orders: [Order]
}

type Auth {
  token: ID
  user: User
}

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    addProduct(name: String!, description: String!, image: String, price: Float!, countInStock: Int, isFeatured: Boolean!): Product
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
