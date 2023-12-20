import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Error() {
	return (
		<div className='err'>
				<NavLink to='/' id='home'>
					<img 
						src='https://ik.imagekit.io/9nwcjxetq/Images/tr:w-800/406.png' 
							srcSet= 'https://ik.imagekit.io/9nwcjxetq/Images/tr:w-400/406.png 400w, 
								https://ik.imagekit.io/9nwcjxetq/Images/tr:w-800/406.png 800w,
								https://ik.imagekit.io/9nwcjxetq/Images/tr:w-1200/406.png 1200w,
								https://ik.imagekit.io/9nwcjxetq/Images/tr:w-1600/406.png 1600w' 
						alt='img' 
						id='skriatok'
					/>				
				</NavLink>  			
		</div>
	)
}