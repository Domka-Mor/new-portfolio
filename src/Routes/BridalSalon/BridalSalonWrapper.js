import React,{Suspense,lazy} from 'react';
import PreLoader from '../PreLoader';

const BridalSalon = lazy(() => import('./BridalSalon'));

export default function BridalSalonWrapper() {
	return (
		<Suspense fallback={<PreLoader/>}>
		  <BridalSalon/>
		</Suspense>
	)
}