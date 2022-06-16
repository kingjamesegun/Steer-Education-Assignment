import React from 'react';

interface CardProps{
	image: string,
	name: string
}

function Card({image, name}: CardProps) {
	return (
		<div className='border-2 border-gray-300 mt-10 drop-shadow-lg shadow-yellow-300 rounded-lg py-5'>
			<img src={image} alt="report i" className="mx-auto" />
			<h5 className='text-center'>{name}</h5>
		</div>
	);
}

export default Card;
