import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Products = () => {
	const [products, setProducts]=useState([])


	useEffect(() => {
		fetch("https://api.hiring.masterkey.tech/api/v1/product/get").then(res => res.json()).then(data => {
			if (data?.products) {
				setProducts(data.products)
			}
		})
	}, [])
	console.log(products)

	return (
    <div className="my-12">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products.map((pro) => (
          <SwiperSlide className="p-3 max-h-52 shadow-xl" key={pro._id}>
            <div >
              <img className='h-24' src={pro?.picture} alt="" />
            </div>
            <div>
              <h2>{pro?.name}</h2>
              <p>Price: ${pro?.price}</p>
              <p>Rating: {pro?.ratting}</p>
              <div className="absolute bg-gray-200 text-center cursor-pointer px-2 rounded-full text-4xl font-bold text-green-400 bottom-2 right-2">
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