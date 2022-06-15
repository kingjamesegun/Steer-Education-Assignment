import React from 'react';
import Card from './Card';

const ExportChart = () => {
	return (
		<div className='grid md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-10'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
		</div>
	);
};

export default ExportChart;
