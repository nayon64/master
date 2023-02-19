import React from 'react';
import icon1 from "../../../Assets/CategoryIcon/icon1.png"
import icon2 from "../../../Assets/CategoryIcon/icon2.png"
import icon3 from "../../../Assets/CategoryIcon/icon3.png"
import icon4 from "../../../Assets/CategoryIcon/icon4.png"
import icon5 from "../../../Assets/CategoryIcon/icon5.png"
import icon6 from "../../../Assets/CategoryIcon/icon6.png"
import CategoryCard from './CategoryCard';

const Categroy = () => {

	const categorys = [
    {
      title: "Popular top 10 brand",
      order: 400,
      icons: [icon1, icon2, icon3],
    },
    {
      title: "Newest Sellers",
      order: 460,
      icons: [icon4, icon5, icon6],
    },
	];
	// <CategoryCard key={i} categroy={categroy} />
	return (
		<section className='grid grid-cols-2 gap-10 mt-10'>
			{
				categorys.map((category, i) =><CategoryCard key={i} category={category} /> )
			}
		</section>
	);
};

export default Categroy;