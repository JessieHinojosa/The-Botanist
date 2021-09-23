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
  image: String
  numReviews: Int
  countInStock: Int
  price: Float
  category: String
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
  isAdmin: Boolean
  orders: [Order]
}
  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    users: [User]
    user: User
    categories: [Category]
    allProducts: [Product]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, isAdmin: Boolean!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
