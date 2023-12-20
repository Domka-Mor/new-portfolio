import React,{Suspense,lazy} from 'react';
import Main from './Main';
// import Tech from './Tech';
// import Tube from './Tube';
// import MobileRoute from './MobileRoute';
import AboutNav from './AboutNav';
import Footer from './Footer';
import PreLoader from './PreLoader';

const Tech = lazy(() => import('./Tech'));
const Tube = lazy(() => import('./Tube'));
const MobileRoute = lazy(() => import('./MobileRoute'));

export default function Home() {

	return (
		<>	
			<AboutNav/>						
			<Suspense fallback={<PreLoader/>}>
				<Main/>	
			  	<Tech/>
				<Tube/>
				<MobileRoute/>
			</Suspense>
			<Footer/>
    	</>
	)
}