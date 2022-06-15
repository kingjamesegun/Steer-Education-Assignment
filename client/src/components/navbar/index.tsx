import React from 'react';
import Logo from '../../images/logo.svg';
import { IoMdNotifications } from 'react-icons/io';
import { DataDetailsProps } from '../../types/dataType';

interface Props {
	data: Array<DataDetailsProps>;
}

const Navbar = ({ data }: Props) => {
	return (
		<div className='flex justify-between items-center  py-2'>
			<img src={Logo} alt='logo' />
			<div className='flex gap-3 items-center'>
				<IoMdNotifications color='white' size='25' />
				{data.map((user) => (
					<img
						src={user.image}
                        key={user.id}
						alt='Profile'
						className='rounded-full h-10 w-10 object-cover'
					/>
				))}
			</div>
		</div>
	);
};

export default Navbar;
