import React from 'react';
import './preloader.css';

export default function PreLoader() {
  return (
    <div className='preloader-body'>   
      <div className='preloader'>                 
        <div className='circles circles1'></div>       
        <div className='circles circles2'></div>                              
        <svg>
          <filter id='gooey'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='10' />
            <feColorMatrix values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 20 -10
            "/>
          </filter>
        </svg>  
      </div>
    </div>
  )
}