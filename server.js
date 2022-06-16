const express = require('express');
const cors = require('cors');

const app = express();

app.get('/api/data', cors(), (req, res) => {
	const data = [
		{
			id: 1,
			firstName: 'James',
			image:
				'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
			reports: [
				{
					name: 'Professional Services',
					price: 103,
					percentage: 12,
					performance: 'profit',
					image: '/images/computer-table.svg',
				},
				{
					name: 'Banking',
					price: 96,
					percentage: 8,
					performance: 'loss',
					image: '/images/e-banking.svg',
				},
				{
					name: 'Fintech',
					price: 56,
					percentage: 2.4,
					performance: 'profit',
					image: '/images/analytics.svg',
				},
				{
					name: 'Tech Hardware',
					price: 42,
					percentage: 10,
					performance: 'loss',
					image: '/images/card.svg',
				},
			],
		},
	];

	res.json(data);
});

const port = 5000;

app.listen(process.env.PORT || port, () => `Server running on port ${port}`);
