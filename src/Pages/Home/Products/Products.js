import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

const Products = () => {
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
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        pagination={true}
        mousewheel={true}
        loop={true}
        autoplay={{
          delay: 1000,
        }}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      >
        {products.map((pro) => (
          <SwiperSlide className="p-3 my-8 shadow-xl" key={pro._id}>
            <div className="flex justify-center">
              <img className="h-28" src={pro?.picture} alt="" />
            </div>
            <div className="mt-4">
              <h2 className="text-xl text-black font-semibold">{pro?.name}</h2>
              <h2 className="text-xl">Price: ${pro?.price}</h2>
              <p>Rating: {pro?.ratting}</p>
              <div className="absolute bg-green-400 text-center cursor-pointer w-12 h-12 rounded-full text-4xl font-bold text-white bottom-2 right-2">
                +
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
