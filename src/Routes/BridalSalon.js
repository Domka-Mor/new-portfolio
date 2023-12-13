import React,{useEffect} from 'react';
import './bridalSalon.css';
import BackNav from './BackNav';
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function BridalSalon() {

	gsap.registerPlugin(ScrollTrigger);
	
	useEffect(()=>{
		ScrollTrigger.defaults({
		  scroller: ".parallax3-container"
		});

		ScrollTrigger.matchMedia({
		  "(min-width: 2561px)": function () {		    
			gsap.to('#bridal2', {scrollTrigger: {trigger:'#bridal2'},y: '-2750px',duration:15,delay:2,ease: "power1"});
			gsap.to('#brid2', {scrollTrigger: {trigger:'#brid2'},y: '-2150px',duration:5,delay:2,ease: "power1"});
		  },
		  "(max-width: 2560px)": function () {		    
			gsap.to('#bridal2', {scrollTrigger: {trigger:'#bridal2'},y: '-2500px',duration:15,delay:2,ease: "power1"});
			gsap.to('#brid2', {scrollTrigger: {trigger:'#brid2'},y: '-2140px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 2250px)": function () {		    
			gsap.to('#brid2', {scrollTrigger: {trigger:'#brid2'},y: '-1900px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 2200px)": function () {		    
			gsap.to('#bridal2', {scrollTrigger: {trigger:'#bridal2'},y: '-2450px',duration:15,delay:2,ease: "power1"});
		  },

		  "(max-width: 2000px)": function () {		    
			gsap.to('#brid2', {scrollTrigger: {trigger:'#brid2'},y: '-1700px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 1850px)": function () {		    
			gsap.to('#brid2', {scrollTrigger: {trigger:'#brid2'},y: '-1600px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 1600px)": function () {		    
			gsap.to('#brid2', {scrollTrigger: {trigger:'#brid2'},y: '-1450px',duration:5,delay:2,ease: "power1"});
		  },

		   "(max-width: 1500px)": function () {		    
			gsap.to('#bridal2', {scrollTrigger: {trigger:'#bridal2'},y: '-2310px',duration:15,delay:2,ease: "power1"});
		  },

		  "(max-width: 1400px)": function () {		    
			gsap.to('#brid2', {scrollTrigger: {trigger:'#brid2'},y: '-1250px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 1250px)": function () {		    
			gsap.to('#brid2', {scrollTrigger: {trigger:'#brid2'},y: '-1100px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 1200px)": function () {		    
			gsap.to('#bridal2', {scrollTrigger: {trigger:'#bridal2'},y: '-2070px',duration:15,delay:2,ease: "power1"});
		  },

		 "(max-width: 1000px)": function () {
		 	gsap.to('#bridal2', {scrollTrigger: {trigger:'#bridal2'},y: '-1950px',duration:15,delay:2,ease: "power1"});
		  },

		  "(max-width: 950px)": function () {		    
			gsap.to('#brid2', {scrollTrigger: {trigger:'#brid2'},y: '-980px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 850px)": function () {
			gsap.to('#bridal2', {scrollTrigger: {trigger:'#bridal2'},y: '-1420px',duration:15,delay:2,ease: "power1"});
		  },

		  "(max-width: 800px)": function () {		    
			gsap.to('#brid2', {scrollTrigger: {trigger:'#brid2'},y: '-840px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 700px)": function () {		    
			gsap.to('#brid2', {scrollTrigger: {trigger:'#brid2'},y: '-700px',duration:5,delay:2,ease: "power1"});
		  },

		   "(max-width: 600px)": function () {		    
			gsap.to('#brid2', {scrollTrigger: {trigger:'#brid2'},y: '-550px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 550px)": function () {
			gsap.to('#bridal2', {scrollTrigger: {trigger:'#bridal2'},y: '-1170px',duration:15,delay:2,ease: "power1"});
		  },

		   "(max-width: 500px)": function () {		    
			gsap.to('#brid2', {scrollTrigger: {trigger:'#brid2'},y: '-420px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 430px)": function () {
			gsap.to('#bridal2', {scrollTrigger: {trigger:'#bridal2'},y: '-920px',duration:15,delay:2,ease: "power1"});
		  },

		  "(max-width: 400px)": function () {		    
			gsap.to('#brid2', {scrollTrigger: {trigger:'#brid2'},y: '-340px',duration:5,delay:2,ease: "power1"});
		  },

		  all: function () {
		    gsap.to('.parallax3-container .parallax3-section:nth-child(1)', {scrollTrigger: {trigger:'.parallax3-container .parallax3-section:nth-child(1)'},backgroundPosition: 'center 30%',delay:0.5,duration:2});
			gsap.to('.parallax3-container .parallax3-section:nth-child(2)', {scrollTrigger: {trigger:'.parallax3-container .parallax3-section:nth-child(2)'},backgroundPosition: 'center 50%',delay:0.5,duration:2});
			gsap.to('.parallax3-container .parallax3-section:nth-child(3)', {scrollTrigger: {trigger:'.parallax3-container .parallax3-section:nth-child(3)'},backgroundPosition: 'center 70%',delay:0.5,duration:2});

			gsap.fromTo('.links3,.links4', {scrollTrigger: {trigger:'.links3,.links4'},opacity:0, y: '100'},{opacity:1, duration:1,delay:1.5,y:0});
			gsap.fromTo('.preloaderBridal-body h1', {scrollTrigger: {trigger:'.preloaderBridal-body'},opacity:0, x: '-100'},{opacity:1, duration:1,delay:1,x:0});
			gsap.fromTo('.preloaderBridal-body img', {scrollTrigger: {trigger:'.preloaderBridal-body'},opacity:0,x:'100'},{opacity:1, duration:1,delay:1,x:0});

			gsap.to('#bridalDiv2', {scrollTrigger: {trigger:'#bridalDiv2'},y: 0, opacity:1,duration:2,delay:0.1});		
			gsap.to('#bridalText3 h3', {scrollTrigger: {trigger:'#bridalText3'},y: 0, opacity:1,duration:2,delay:0.2});
			gsap.to('#bridalText3 p', {scrollTrigger: {trigger:'#bridalText3'},y: 0, opacity:1,duration:2,delay:0.6});

			gsap.to('#bridalText4 h3', {scrollTrigger: {trigger:'#bridalText4'},y: 0, opacity:1,duration:2,delay:0.2});
			gsap.to('#bridalText4 p', {scrollTrigger: {trigger:'#bridalText4'},y: 0, opacity:1,duration:2,delay:0.6});
			gsap.to('#bridalDiv3', {scrollTrigger: {trigger:'#bridalDiv3'},y: 0, opacity:1,duration:2,delay:0.1});
			
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
	     	<div className='parallax3-body'> 		
		  		<div className='links3'>
					<a href='https://github.com/Domka-Mor/la-novia'>
				    	<i className="fa fa-brands fa-github"></i>
				    </a>
				    <a href='https://la-novia.netlify.app/'>
				    	<i className="fa fa-solid fa-link"></i>
				    </a>
				    <p></p>
		  		</div>
				<div className="parallax3-container">
				  	<section className='parallax3-section' id='bridalSec'>						
					    <div className='preloaderBridal-body'>
					        <h1>La Novia</h1> 
					        <img src='/Images/bride1.png' alt='img' id='bride'/>	 							              
					    </div>				   
						<div className='links4'>
							<ul>
								<li>React</li>
								<li>Bootstrap</li>
								<li>styled-components</li>
								<li>gsap</li>
							</ul>
						    <p></p>
				  		</div>			
					</section>
		
					<section className='parallax3-section' id='bridalSec3'>								
						<div id='bridalText3'>
							<h3>Bridal Salon</h3>
							<p>Custom website for wedding salon located in Košice, Slovakia.</p>
						</div>		
						<div id='bridalDiv2'>
							<div className="content7">
								<div className='overlayBrid'>
									<img src='/Images/bridal1.png' alt='img' id='bridal2'/>
								</div>		
							    <img src='/paralax/phone.png' alt='img' id='bridal1'/>	
							    <img src='/Images/c5.png' alt='img' id='br3'/>	 
						    </div> 					      
						</div>				 
					</section>

					<section className='parallax3-section' id='bridalSec4'>								
						<div id='bridalText4'>
							<h3>Modern Dresscode</h3>
							<p>>Smooth scrolling, component's reveal on scroll and custom carousels for better UI/UX experience.</p>
						</div>		
						<div id='bridalDiv3'>
							<div className="content8">
								<div className='overlayBridal'>
									<img src='/Images/bridal4.png' alt='img' id='brid2'/>
								</div>		
							    <img src='/Images/lap.png' alt='img' id='brid1'/>
							    <img src='/Images/c6.png' alt='img' id='br4'/>	 
						    </div> 					      
						</div>								 
					</section>
				</div>
	        </div>	
        </>	
	)
}