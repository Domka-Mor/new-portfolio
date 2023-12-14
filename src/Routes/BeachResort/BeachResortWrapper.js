import React,{Suspense,lazy} from 'react';
import PreLoader from '../PreLoader';

const BeachResort = lazy(() => import('./BeachResort'));

export default function BeachResortWrapper() {
	return (
		<Suspense fallback={<PreLoader/>}>
		  <BeachResort/>
		</Suspense>
	)
}