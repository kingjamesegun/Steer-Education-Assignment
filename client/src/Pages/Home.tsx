import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { DataDetailsProps } from '../types/dataType';
import ReportTable from '../components/reportTable';
import { ExportChart } from '../components/exportChart';
import ExportCards from '../components/exportCards';

const Home = () => {
	const [data, setdata] = useState<DataDetailsProps[]>([]);
	useEffect(() => {

		try {
			
			fetch('/api/data')
				.then((res) => res.json())
				.then((data) => setdata(data));
		} catch (error) {
		}
	}, [data]);

	return (
		<div className='mb-10'>
			<div className='bg-[#FCDB72] h-[50vh] px-2 md:px-5 lg:px-10 '>
				{/* Navbar */}
				<Navbar data={data} />
				<div className='py-5 md:py-10'>
					<h1 className='text-3xl lg:text-4xl text-black'>United Kingdom</h1>
					<div className='grid lg:gap-10 grid-cols-1 lg:grid-cols-3 my-5 md:absolute top-[30%] left-0 w-full px-2 md:px-5 lg:px-10 '>
						<div className='rounded-md bg-white drop-shadow-md p-5'>
							<div className='flex justify-between'>
								<h1 className='text-black text-xl'>Export Report</h1>
								<button className='text-white py-1 px-3 rounded-full bg-[#fcdb72]'>
									Download
								</button>
							</div>

							<ReportTable data={data} />
						</div>
						<div className='w-full col-span-2 '>
							<ExportChart />
						</div>
					</div>
				</div>
			</div>

			{/* KEY EXPORTS */}

			<div className='mt-[100%] md:mt-[90%] lg:mt-[35%]  px-2 md:px-5 lg:px-10'>
				<h2 className='text-xl md:text-2xl md:py-5 py-10'>Key Exports</h2>
				<ExportCards />
			</div>
		</div>
	);
};

export default Home;
