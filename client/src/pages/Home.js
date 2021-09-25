import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import Cart from '../components/Cart';
import ProductList from "../components/ProductList";

const Home = () => {
  return (
  <div>
    <CategoryMenu />
    <ProductList />
    <Cart />
  </div>
  );
};
export default Home;
