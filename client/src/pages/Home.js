import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import Cart from '../components/Cart';
import ProductList from "../components/ProductList";
import FeaturedItems from "../components/FeaturedItems";

const Home = () => {
  return (
  <div className="container">
    {/* <CategoryMenu />
    <ProductList />
    <Cart /> */}
    <FeaturedItems />
  </div>
  );
};
export default Home;
