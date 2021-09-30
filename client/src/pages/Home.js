import React from "react";
import Cart from '../components/Cart';
import Hero from '../components/Hero';
import FeaturedItems from "../components/FeaturedItems";

const Home = () => {
  return (
  <div>
    <Cart /> 
    <Hero />
    <FeaturedItems />
  </div>
  );
};

export default Home;
