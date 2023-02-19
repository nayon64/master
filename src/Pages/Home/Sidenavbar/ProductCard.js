import React from 'react';

const ProductCard = ({ product }) => {
	console.log(product)
	return (
    <div className='flex justify-between items-center my-4'>
      <div className='w-20'>
        <img className='p-2 bg-gray-400 rounded-full' src={product?.picture} alt="" />
      </div>
      <div className='mx-2 text-black'>
        <h3 className='text-lg font-bold'>{product?.name}</h3>
        <p>
          {product?.review} Review And {product?.order} Order
        </p>
      </div>
      <div>
        <h2 className="text-sm">Price: ${product?.price}</h2>
      </div>
    </div>
  );
};

export default ProductCard;