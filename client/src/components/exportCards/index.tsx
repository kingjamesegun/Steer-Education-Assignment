import React from 'react';
import { Props } from '../../types/dataType';
import Card from './Card';

const ExportChart = ({ data }: Props) => {
	return (
		<>
			{data.map(({ reports }) => {
				return (
					<div className='grid md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-10'>
						{reports.map(({ image, name }) => {
							return <Card image={image} name={name} />;
						})}
					</div>
				);
			})}
		</>
	);
};

export default ExportChart;
