import React from 'react';
import Main from './Main';
import Tech from './Tech';
import Tube from './Tube';
import MobileRoute from './MobileRoute';
import AboutNav from './AboutNav';
import Footer from './Footer';

export default function Home() {

	return (
		<>	
			<AboutNav/>	
			<Main/>	
			<Tech/>
			<Tube/>
			<MobileRoute/>
			<Footer/>
    	</>
	)
}