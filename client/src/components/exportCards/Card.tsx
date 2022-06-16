import React from 'react';
import Services from '../../images/computer-table.svg';

interface CardProps{
	image: string,
	name: string
}

function Card({image, name}: CardProps) {
	console.log({image});
	return (
		<div className='border-2 border-gray-300 mt-10 drop-shadow-lg shadow-yellow-300 rounded-lg py-5'>
			<img src={require(`../../images/card.svg`).default} alt='report i' className='mx-auto' />
			<h5 className='text-center'>{name}</h5>
		</div>
	);
}

export default Card;
