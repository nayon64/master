import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Shareds/Navbar/Navbar';

const Main = () => {
	return (
		<div className='grid grid-cols-5'>
			<Navbar />
			<Outlet className="col-span-4 bg-red"/>
		</div> 
	);
};

export default Main;