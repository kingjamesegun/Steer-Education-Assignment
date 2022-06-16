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
	Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

export const options = {
	scales: {
		xAxes: []
	}
};

const labels = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug'];

export const data = {
	labels,
	datasets: [
		{
			label: "",
			data: [-50, 0, 100, 200, 250, 180, 150, 300, 400],
			borderColor: '#F9D34C',
			backgroundColor: '#FFF9E4',
			tension: 0.4,
			fill: true
		},
	],
};

export function ExportChart() {
	return <Line  data={data} />;
}
