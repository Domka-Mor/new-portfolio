import React,{useEffect} from 'react';
import './main.css';
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Draggable from 'react-draggable';

export default function Main() {

	gsap.registerPlugin(ScrollTrigger);

	useEffect(()=>{
		var tl = gsap.timeline()

		tl.fromTo('.imgbg',{opacity:0, scale:1.05},{delay:0.5,duration: 2,opacity:1,scale:1})		
	},[]);

	useEffect(()=>{

		ScrollTrigger.matchMedia({
		  "(min-width: 1191px)": function () {		    
			const titles = gsap.utils.toArray('.bounce1 h1')
			const titles2 = gsap.utils.toArray('.newProject3 h1')
			const tl = gsap.timeline({delay:1});

			titles.forEach(title => {

				tl
				.from(title,{
					opacity:0,
					y: -30,
					rotateX: -90,
					stagger: 0.1,
					delay:0.1,	
				},'<')
			})

			tl.fromTo('.newProject2 .lin',{opacity:0},{opacity:1})

			titles2.forEach(title2 => {

				tl
				.from(title2,{
					opacity:0,
					y: -30,
					rotateX: -90,
					stagger: 0.1,
					delay:0.1,	
				},'<')
			})		
		  },

		  "(max-width: 1190px)": function () {		    
			const titles = gsap.utils.toArray('#bounc1 h1')
			const tl = gsap.timeline({delay:1});

			titles.forEach(title => {

				tl
				.from(title,{
					opacity:0,
					y: 30,
					rotateX: -90,
					stagger: 0.2,
					delay: 0.1,
				},'<')
			})
		  },
		});
	},[]);

	
	useEffect(()=>{
		gsap.timeline({
		    scrollTrigger: {
		      trigger: ".imgBoard",
		      pin: true,
		      start: "top top",
		      end: "+=500%",
		      scrub: 2,
		    },
		    defaults: {
		      ease: "none",
		    },
	  	})
	  	.to(
		    document.body,
		    {
		      delay: 0.3,
		      backgroundColor: "#f0f0f0",
		    },
		    "start"
		)
	  	.to(
		    ".upperContainer",
		    {
		      scale: 5,
		    },
		    "start"
		)
	  	.to(
		    ".upperContainer",
		    {
		      opacity: 0,
		    },
		    "start"
	  	).to(
		    ".cardImg",
		    {
		      delay: 0.4,
		      opacity: 1,
		    },
		    "start"
	  	)
	  	.fromTo('.containerBlob',{scale:5,opacity:0},{scale:1,duration:2,delay:0.5,opacity:1})	
	  	// .fromTo('.contentText, .contactAbout2',{opacity:0},{duration:2,delay:0.5,opacity:1})	
	  	.fromTo('.contentText h1, .contentText h2, .contentText p',{opacity:0},{duration:3,opacity:1, stagger:0.5})
	});

	return (
		<div className='body4D'  name="AboutMe">
			<div className="upperContainer">
	      		<div className='new'>
	      			<div className='imgDiv'>
						<img src='/Images/image9.png' alt='img' className='imgbg'/>
					</div>
					<div id='mainDiv'>				
				      	<div className='bounce1'>
				          	<h1>D</h1>
				          	<h1>o</h1>
				          	<h1>m</h1>
				          	<h1>i</h1>
				          	<h1>n</h1>
				          	<h1>i</h1>
				          	<h1>k</h1>
				          	<h1>a</h1>		         		            	
				      	</div>
						<div className='newProject2'>
						    <p className='lin'></p>			   	
						</div>
						<div className='newProject3'>
						    <h1>D</h1>  
						    <h1>e</h1> 
						    <h1>v</h1> 
						    <h1>e</h1> 
						    <h1>l</h1> 			   	
						    <h1>o</h1> 
						    <h1>p</h1> 
						    <h1>e</h1> 
						    <h1>r</h1> 
						</div>					
					</div>
					<div id='mainDiv2'>								      	
						<div className='bounce1' id='bounc1'>
				          	<h1>D</h1>
				          	<h1>o</h1>
				          	<h1>m</h1>
				          	<h1>i</h1>
				          	<h1>n</h1>
				          	<h1>i</h1>
				          	<h1>k</h1>
				          	<h1>a</h1>		         		            	
				      	</div>				
					</div>								
				</div>
	    	</div>
		    <div className="imgBoard">		      
		      	<div className="cardImg">
				   	<div className='new2'>
				   		<div className='contactAbout2'>					      		
							<p>+421 944 286 580 dominika.moravicova@gmail.com</p>						 				      						 				
				      	</div>
						<div className='contentAbout'>
							<div className='contentText'>
					      		<h1>Who am I ?</h1>
								<h2>I am Dominika Moravičová, <br/> a web developer based in Košice, Slovakia.</h2>
								<p>„ From the moment I created "Hello World", I knew, I was drawn into a new and amazing world. “</p>
					      	</div>					      	
				      	</div>
						<div className='containerBlob'>
							<Draggable>
					      		<div>
					      			<div className='circle circle1' id='circle1'></div>		
					      		</div>
			      			</Draggable>
			      			<Draggable>
					      		<div>
					      			<div className='circle circle2' id='circle2'></div>		
					      		</div>
			      			</Draggable>
			      			<Draggable>
					      		<div>
					      			<div className='circle circle1' id='circle3'></div>		
					      		</div>
			      			</Draggable>    			
			      			<Draggable>
				      		<div>
				      			<div className='circle circle2' id='circle4'></div>		
				      		</div>
				      		</Draggable>
				      	</div>
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
		    </div>
	    </div>
	)
}