import React from 'react';


const CategoryCard = ({category}) => {


	return (
    <div className='flex items-center rounded-lg shadow-xl px-4 py-6'>
      <div className="flex items-center mr-4">
        {category?.icons.map((icon,i) => (
          <span key={i} className=' p-2 bg-gray-200 rounded-full'>
            <img src={icon} alt="" />
          </span>
        ))}
      </div>
      <div className='border-l-4 border-black pl-2'>
        <h3 className='text-xl font-bold'>{category?.title}</h3>
        <p>${category?.order}+ Orders & reviews</p>
      </div>
    </div>
  );
};

export default CategoryCard;