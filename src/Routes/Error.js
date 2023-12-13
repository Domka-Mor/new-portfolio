import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Error() {
	return (
		<div className='err'>
				<NavLink to='/' id='home'>
					<img src='/Images/406.png' alt='img' id='skriatok'/>				
				</NavLink>  			
		</div>
	)
}