import React from 'react';
	import classNames from 'classnames';
import { Props } from '../../types/dataType';


export enum Change {
	profit = 'profit',
	loss = 'loss',
	neutral = 'neutral',
}

function ReportTable({ data }: Props) {
	return (
		<div className='pt-10'>
			{data.map(({ id, reports }) => (
				<table key={id} className='w-full'>
					<tbody>
						{reports.map(({ name, price, percentage, performance }, index) => {
							return (
								<tr key={index} className='border-t-2 border-gray-300 '>
									<td>{name}</td>
									<td>
										<span className='bg-gray-200 px-3 py-1 rounded-md'>
											&euro;{price}B
										</span>
									</td>
									<td
										className={classNames('py-5', {
											'text-green-700 font-bold': performance === Change.profit,
											'text-red-500 font-bold': performance === Change.loss,
											'bg-gray-500 font-bold': performance === Change.neutral,
										})}
									>
										{`${percentage}%`}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			))}
		</div>
	);
}

export default ReportTable;
