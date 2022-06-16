import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
  } from 'chart.js'
  import { Line } from 'react-chartjs-2'
  import { data, options } from './Config'
  
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)
  
  export function ExportChart() {
	return <Line data={data} options={options} />
  }
  