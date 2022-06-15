import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
	},
    scales: {}
};

const labels = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug'];

export const data = {
	labels,
	datasets: [
		{
			label: "",
			data: [-50, 0, 100, 200, 250, 180, 150, 300, 400],
			borderColor: '#F9D34C',
			backgroundColor: '#FCDB72',
			fill: true,
			tension: 0.4,
		},
	],
};

export function ExportChart() {
	return <Line options={options} data={data} />;
}
