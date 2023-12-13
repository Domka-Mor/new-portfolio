import './App.css';
import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Routes/Home';
import BeachResort from './Routes/BeachResort';
import PhoneStore from './Routes/PhoneStore';
import BridalSalon from './Routes/BridalSalon';
import Error from './Routes/Error';
import React from "react";

function App() {
  
  return(
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
  );
}

export default App;
