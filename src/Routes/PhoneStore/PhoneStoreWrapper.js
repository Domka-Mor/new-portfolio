import React,{Suspense,lazy} from 'react';
import PreLoader from '../PreLoader';

const PhoneStore = lazy(() => import('./PhoneStore'));

export default function PhoneStoreWrapper() {
	return (
		<Suspense fallback={<PreLoader/>}>
		  <PhoneStore/>
		</Suspense>
	)
}