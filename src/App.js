import './App.css';
import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Routes/Home';
import BeachResortWrapper from './Routes/BeachResort/BeachResortWrapper';
import PhoneStoreWrapper from './Routes/PhoneStore/PhoneStoreWrapper';
import BridalSalonWrapper from './Routes/BridalSalon/BridalSalonWrapper';
import Error from './Routes/Error';
// import PreLoader from './Routes/PreLoader';
import React, {useState, useEffect} from "react";

// function App() {

//   const [isLoading, setIsLoading] = useState(true);

//   const handleLoading = () => {
//     setIsLoading(false);
//   }

//   useEffect(()=>{
//     window.addEventListener("load",handleLoading);
//     return () => window.removeEventListener("load",handleLoading);
//   },[])

//   return !isLoading ? (
//     <>           
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/projects/beachresort"  element={<BeachResortWrapper/>}/> 
//           <Route path="/projects/phonestore"  element={<PhoneStoreWrapper/>}/> 
//           <Route path="/projects/bridalsalon"  element={<BridalSalonWrapper/>}/> 
//           <Route path='*' element={<Error/>}/>     
//         </Routes>
//         </div>
//     </>
//   ) : (<PreLoader/>);
// }

function App() {

  return(
    <>           
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/beachresort"  element={<BeachResortWrapper/>}/> 
          <Route path="/projects/phonestore"  element={<PhoneStoreWrapper/>}/> 
          <Route path="/projects/bridalsalon"  element={<BridalSalonWrapper/>}/> 
          <Route path='*' element={<Error/>}/>     
        </Routes>
        </div>
    </>
  )
}

export default App;
