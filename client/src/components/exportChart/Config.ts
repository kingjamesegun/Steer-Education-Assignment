export const options = {
	scales: {
		x: {
			grid: {
				display: false,
			},
		},
		y: {
			type: 'linear' as const,
			display: true,
			position: 'left' as const,
			grid: {
				display: false,
			},
			ticks: {
				stepSize: 100,
			},
		},
		legend: {
			display: false,
		},
	},
};

const LABELS = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug'];

export const data = {
	labels: LABELS,
	datasets: [
		{
            label: "Total Export",
			data: [0, 0, 100, 200, 250, 180, 150, 300, 400], //this should come from backend too
			borderColor: '#F9D34C',
			backgroundColor: '#FFF0C0',
			tension: 0.4,
			fill: true,
			yAxisID: 'y',
            borderWidth: 8,
		},
	],
};
