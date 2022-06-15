import React from 'react';
import { DataDetailsProps } from '../../types/dataType';

interface Props {
	data: Array<DataDetailsProps>;
}

function RepotTable({ data }: Props) {
	return (
		<div className='pt-10'>
			{data.map(({ id, reports }) => (
				<table key={id} className='w-full'>
					<tbody>
						{Object.values(reports).map((obj, index) => {
              
							return <tr key={index} className='border-t-2 border-gray-300 '>
								{Object.values(obj).map((value, index2) => {
                  console.log({value});
                  
									return (
										<td key={index2} className='py-5'>
											{value}
										</td>
									);
								})}
							</tr>})}
					</tbody>
				</table>
			))}
		</div>
	);
}

export default RepotTable;
