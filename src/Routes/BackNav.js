import React,{useEffect} from 'react';
import './aboutNav.css';
import {NavLink} from 'react-router-dom';
import { gsap } from "gsap";

export default function BackNav() {

	useEffect(()=>{
		var tl = gsap.timeline()
		tl.fromTo('.navbarAb2 li', {opacity:0, y: '-50'},{opacity:1, duration:1,delay:1.5,y:0});	
	},[]);

	return (
		<div className="navbarAb2">
		    <li>
		    	<NavLink to='/'>
		  			<i className="fa fa-backward"></i>
		  			Home
		  		</NavLink>
		  	</li> 		
	  	</div>
	)
}