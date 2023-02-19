import React, { useEffect, useState } from "react";
import frame3 from "../../../Assets/Frame3.png";
import ProductCard from "./ProductCard";

const Sidenavbar = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.hiring.masterkey.tech/api/v1/product/get")
      .then((res) => res.json())
      .then((data) => {
        if (data?.products) {
          setProducts(data.products);
        }
      });
  }, []);

  return (
    <div>
      <div>
        <img className="w-full" src={frame3} alt="" />
      </div>
      <div className="mt-4 p-3">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">Daily Deals</h3>
          <button className="text-xl font-semibold">View All</button>
        </div>
			  <div>
				  {
					  products.map(pro=><ProductCard key={pro._id} product={pro}></ProductCard>)
				  }
		</div>
      </div>
    </div>
  );
};

export default Sidenavbar;
