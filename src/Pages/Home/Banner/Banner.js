import React from "react";
import headphone1 from "../../../Assets/headphone1.png";
import { RiStarFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";

const Banner = () => {
  return (
    <section className="flex justify-between items-center mr-4 p-6 rounded-lg shadow-2xl">
      <div >
        <img  src={headphone1} alt="" />
      </div>
      {/* banner about section  */}
      <div>
        <h2 className="text-2xl font-bold">Beats Studio3 Wireless Headphone</h2>
        <div className="flex items-center">
          <span className="flex">
            <RiStarFill className="text-yellow-300 mr-1" />
            <RiStarFill className="text-yellow-300 mr-1" />
            <RiStarFill className="text-yellow-300 mr-1" />
            <RiStarFill className="text-yellow-300 mr-1" />
            <RiStarFill className="text-yellow-300" />
          </span>
          <span className="ml-2">( 200+ Reviews )</span>
        </div>
        <p className="my-2">
          Ergonomic or cupe with on-oor controls up to 22 hours of tening time.
          Apple Wi crip & Closs{" "}
        </p>
        <p className="text-teal-500 mb-2">Price $ 450.55</p>
        <div className="flex items-center">
          <h4 className="mr-2 text-black font-semibold">Color:</h4>
          <div className="w-4 h-4 rounded-full bg-green-400 mx-1"></div>
          <div className="w-4 h-4 rounded-full bg-teal-400 mx-1"></div>
          <div className="w-4 h-4 rounded-full bg-blue-400 mx-1"></div>
          <div className="w-4 h-4 rounded-full bg-purple-400 mx-1"></div>
        </div>
        <div className="mt-5 flex">
          <span className="cursor-pointer">
            <AiFillHeart className="text-green-400 text-5xl border border-green-400 p-1 rounded-lg" />
          </span>
          <div className=" cursor-pointer text-2xl font-semibold border border-green-400 px-3 py-1 rounded-lg mx-3">
            Add to card
          </div>
          <div className="text-black cursor-pointer text-2xl font-semibold border bg-green-400 px-3 py-1 rounded-lg mx-3">
            Buy Now
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
