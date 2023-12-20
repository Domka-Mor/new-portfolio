import './App.css';
import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Routes/Home';
import BeachResortWrapper from './Routes/BeachResort/BeachResortWrapper';
import PhoneStoreWrapper from './Routes/PhoneStore/PhoneStoreWrapper';
import BridalSalonWrapper from './Routes/BridalSalon/BridalSalonWrapper';
import Error from './Routes/Error';
import React from "react";

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
