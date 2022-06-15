import React from 'react';
import Services from '../../images/computer-table.svg';

function Card() {
	return (
		<div className='border-2 border-gray-300 mt-10 drop-shadow-md rounded-lg py-5'>
			<img src={Services} alt='report i' className='mx-auto' />
			<h5 className='text-center'>Professional Services</h5>
		</div>
	);
}

export default Card;
