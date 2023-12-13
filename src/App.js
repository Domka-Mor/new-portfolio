import './App.css';
import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Routes/Home';
import BeachResort from './Routes/BeachResort';
import PhoneStore from './Routes/PhoneStore';
import BridalSalon from './Routes/BridalSalon';
import Error from './Routes/Error';
import PreLoader from './Routes/PreLoader';
import React, {useState, useEffect} from "react";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  }

  useEffect(()=>{
    window.addEventListener("load",handleLoading);
    return () => window.removeEventListener("load",handleLoading);
  },[])

  return !isLoading ? (
    <>           
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/beachresort"  element={<BeachResort/>}/> 
          <Route path="/projects/phonestore"  element={<PhoneStore/>}/> 
          <Route path="/projects/bridalsalon"  element={<BridalSalon/>}/> 
          <Route path='*' element={<Error/>}/>     
        </Routes>
        </div>
    </>
  ) : (<PreLoader/>);
}

export default App;
