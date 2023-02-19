import React from "react";
import Banner from "../Banner/Banner";
import Categroy from "../Category/Categroy";
import Header from "../Header/Header";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="col-span-4 p-4">
      <Header />
      <div className="grid grid-cols-3">
        <div className="col-span-2">
				  <Banner />
				  <Products/>
				  <Categroy/>
        </div>
        <aside>aside seciton</aside>
      </div>
    </div>
  );
};

export default Home;
