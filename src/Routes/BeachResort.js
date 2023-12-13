import React,{useEffect} from 'react';
import './beachResort.css';
import BackNav from './BackNav';
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function BeachResort() {

	gsap.registerPlugin(ScrollTrigger);

	useEffect(()=>{
		ScrollTrigger.defaults({
		  scroller: ".parallax2-container"
		});

		ScrollTrigger.matchMedia({
		  "(min-width: 2560px)": function () {		    
			gsap.to('#beach2', {scrollTrigger: {trigger:'#beach2'},y: '-3500px',duration:6,delay:2,ease: "power1"});
			gsap.to('#bea2', {scrollTrigger: {trigger:'#bea2'},y: '-730px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 2559px)": function () {		    
			gsap.to('#beach2', {scrollTrigger: {trigger:'#beach2'},y: '-3500px',duration:6,delay:2,ease: "power1"});
			gsap.to('#bea2', {scrollTrigger: {trigger:'#bea2'},y: '-730px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 2000px)": function () {		    
			gsap.to('#beach2', {scrollTrigger: {trigger:'#beach2'},y: '-3200px',duration:6,delay:2,ease: "power1"});
			gsap.to('#bea2', {scrollTrigger: {trigger:'#bea2'},y: '-530px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 1600px)": function () {		   
			gsap.to('#bea2', {scrollTrigger: {trigger:'#bea2'},y: '-450px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 1500px)": function () {		   
			gsap.to('#beach2', {scrollTrigger: {trigger:'#beach2'},y: '-2130px',duration:6,delay:2,ease: "power1"});
		  },

		  "(max-width: 1250px)": function () {		   
			gsap.to('#bea2', {scrollTrigger: {trigger:'#bea2'},y: '-350px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 1020px)": function () {		   
			gsap.to('#bea2', {scrollTrigger: {trigger:'#bea2'},y: '-330px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 850px)": function () {
			gsap.to('#beach2', {scrollTrigger: {trigger:'#beach2'},y: '-1740px',duration:6,delay:2,ease: "power1"});
		  },

		  "(max-width: 800px)": function () {		   
			gsap.to('#bea2', {scrollTrigger: {trigger:'#bea2'},y: '-280px',duration:5,delay:2,ease: "power1"});
		  },

		   "(max-width: 600px)": function () {		   
			gsap.to('#bea2', {scrollTrigger: {trigger:'#bea2'},y: '-180px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 550px)": function () {
			gsap.to('#beach2', {scrollTrigger: {trigger:'#beach2'},y: '-1150px',duration:6,delay:2,ease: "power1"});
			gsap.to('#bea2', {scrollTrigger: {trigger:'#bea2'},y: '-165px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 500px)": function () {
			gsap.to('#bea2', {scrollTrigger: {trigger:'#bea2'},y: '-125px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 400px)": function () {
		  	gsap.to('#beach2', {scrollTrigger: {trigger:'#beach2'},y: '-995px',duration:6,delay:2,ease: "power1"});
			gsap.to('#bea2', {scrollTrigger: {trigger:'#bea2'},y: '-110px',duration:5,delay:2,ease: "power1"});
		  },

		  all: function () {
		    gsap.to('.parallax2-container .parallax2-section:nth-child(1)', {scrollTrigger: {trigger:'.parallax2-container .parallax2-section:nth-child(1)'},backgroundPosition: 'center 15%',delay:0.5,duration:2});
			gsap.to('.parallax2-container .parallax2-section:nth-child(2)', {scrollTrigger: {trigger:'.parallax2-container .parallax2-section:nth-child(2)'},backgroundPosition: 'center 35%',delay:0.5,duration:2});
			gsap.to('.parallax2-container .parallax2-section:nth-child(3)', {scrollTrigger: {trigger:'.parallax2-container .parallax2-section:nth-child(3)'},backgroundPosition: 'center 55%',delay:0.5,duration:2});
			gsap.to('.parallax2-container .parallax2-section:nth-child(4)', {scrollTrigger: {trigger:'.parallax2-container .parallax2-section:nth-child(4)'},backgroundPosition: 'center 75%',delay:0.5,duration:2});

			gsap.fromTo('.links1,.links2', {scrollTrigger: {trigger:'.links1,.links2'},opacity:0, y: '100'},{opacity:1, duration:1,delay:1.5,y:0});
			gsap.fromTo('.contLoader', {scrollTrigger: {trigger:'.contLoader'},opacity:0, y: '100'},{opacity:1, duration:1,delay:1,y:0});

			gsap.to('#beachDiv2', {scrollTrigger: {trigger:'#beachDiv2'},y: 0, opacity:1,duration:2,delay:0.1});
		    gsap.to('#beachText3 h3', {scrollTrigger: {trigger:'#beachText3'},y: 0, opacity:1,duration:2,delay:0.2});
			gsap.to('#beachText3 p', {scrollTrigger: {trigger:'#beachText3'},y: 0, opacity:1,duration:2,delay:0.6});
			
			gsap.to('#beachDiv3', {scrollTrigger: {trigger:'#beachDiv3'},y: 0, opacity:1,duration:2,delay:0.1});
			gsap.to('#beachText4 h3', {scrollTrigger: {trigger:'#beachText4'},y: 0, opacity:1,duration:2,delay:0.2});
			gsap.to('#beachText4 p', {scrollTrigger: {trigger:'#beachText4'},y: 0, opacity:1,duration:2,delay:0.6});
			
			gsap.to('#beachDiv4', {scrollTrigger: {trigger:'#beachDiv4'},y: 0, opacity:1,duration:2,delay:0.1});
			gsap.to('#beachText5 h3', {scrollTrigger: {trigger:'#beachText5'},y: 0, opacity:1,duration:2,delay:0.2});
			gsap.to('#beachText5 p', {scrollTrigger: {trigger:'#beachText5'},y: 0, opacity:1,duration:2,delay:0.6});
		  },
		});

		return () => {
		  	ScrollTrigger.defaults({
			  scroller: null
			});
		}
	});

	
	return (
		<>
			<BackNav/>
	     	<div className='parallax2-body'>     					
		  		<div className='links1'>  			
					<a href='https://github.com/Domka-Mor/Beach-Resort'>
				    	<i className="fa fa-brands fa-github"></i>
				    </a>
				    <a href='https://beachresort-hotel.netlify.app/'>
				    	<i className="fa fa-solid fa-link"></i>
				    </a>
				    <p></p>
		  		</div>							
				<div className="parallax2-container" id='mainBody'>
				  	<section className='parallax2-section' id='beachSec'>							
					    <div className="contLoader">
					      <span className="text-wrapper1">Beach Resort</span>
					    </div>
						<div className='links2'>
							<ul>
								<li>Hotel Website</li>
								<li>Bootstrap / styled-components</li>
								<li>React / Node / Express</li>
								<li>GraphQL / MongoDB</li>
							</ul>
						    <p></p>
				  		</div>			
					</section>
		
					<section className='parallax2-section' id='beachSec3'>		
						<div id='beachText3'>
							<h3>Modern Design</h3>
							<p>Smooth scrolling, component's reveal on scroll and custom carousels for better UI/UX experience.</p>
						</div>											
						<div id='beachDiv2'>								
							<div className="content4">
								<div className='overlayBea'>
									<img src='/Images/beach1.png' alt='img' id='beach2'/>						
								</div>	
							    <img src='/paralax/phone.png' alt='img' id='beach1'/>	
							    <img src='/Images/c5.png' alt='img' id='b3'/>	 
						    </div> 															
						</div>	
					</section>

					<section className='parallax2-section' id='beachSec4'>	
						<div id='beachText4'>
							<h3>Booking system</h3>
							<p>Opportunity of booking a room for a selected number of days with information about the price and parameters of the room.</p>
						</div>									
						<div id='beachDiv3'>
							<div className="content5">
								<div className='overlayBeach'>
									<img src='/Images/beach2.png' alt='img' id='bea2'/>
								</div>		
							    <img src='/Images/lap.png' alt='img' id='bea1'/>
							    <img src='/Images/c6.png' alt='img' id='b4'/>	
						    </div> 			
						</div>						 
					</section>

					<section className='parallax2-section' id='beachSec5'>		
						<div id='beachText5'>
							<h3 className='d-xl-none'>User section</h3>
							<h3 className='d-none d-xl-block'>User <br/> section</h3>
							<p>User profile showing all user's bookings with the possibility of cancellation.</p>
						</div>		 						
						<div id='beachDiv4'>
							<div className="content6">
								<div className='overlayBeach2'>
									<img src='/Images/beach3.png' alt='img' id='bea6'/>
								</div>		
							    <img src='/Images/lap.png' alt='img' id='bea5'/>
							    <img src='/Images/c6.png' alt='img' id='b4'/>	
						    </div> 	
						</div>						
					</section>
				</div>
	        </div>
        </>		
	)
}