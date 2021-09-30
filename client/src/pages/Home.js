import React from "react";
import Cart from '../components/Cart';
import Hero from '../components/Hero';
import FeaturedItems from "../components/FeaturedItems";
import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  return (
  <div>
    <Hero />
    <Cart /> 
    <FeaturedItems />
  </div>
  );
};

export default Home;
