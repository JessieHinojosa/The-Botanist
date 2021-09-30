import React from "react";
import Cart from '../components/Cart';
import Hero from '../components/Hero';
import FeaturedItems from "../components/FeaturedItems";
import AccountDetails from "./AccountDetails";

const Home = () => {
  return (
  <div>
    <Hero />
    <Cart /> 
    <FeaturedItems />
    <AccountDetails />
  </div>
  );
};

export default Home;
