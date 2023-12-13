import React,{useEffect} from 'react';
import './phoneStore.css';
import BackNav from './BackNav';
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function PhoneStore() {

	gsap.registerPlugin(ScrollTrigger);

	useEffect(()=>{
		ScrollTrigger.defaults({
		  scroller: ".parallax1-container"
		});

		ScrollTrigger.matchMedia({
		  "(min-width: 2560px)": function () {			
		  	gsap.to('#phone2', {scrollTrigger: {trigger:'#phone2'},y: '-3850px',duration:10,delay:2,ease: "power1"});
			gsap.to('#lap2', {scrollTrigger: {trigger:'#lap2'},y: '-675px',duration:5,delay:2,ease: "power1"});
			gsap.to('#lap6', {scrollTrigger: {trigger:'#lap6'},y: '-2155px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 2559px)": function () {			
		  	gsap.to('#phone2', {scrollTrigger: {trigger:'#phone2'},y: '-3250px',duration:10,delay:2,ease: "power1"});
			gsap.to('#lap2', {scrollTrigger: {trigger:'#lap2'},y: '-620px',duration:5,delay:2,ease: "power1"});
			gsap.to('#lap6', {scrollTrigger: {trigger:'#lap6'},y: '-2135px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 2250px)": function () {			
			gsap.to('#lap2', {scrollTrigger: {trigger:'#lap2'},y: '-550px',duration:5,delay:2,ease: "power1"});
			gsap.to('#lap6', {scrollTrigger: {trigger:'#lap6'},y: '-1785px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 2000px)": function () {			
			gsap.to('#lap2', {scrollTrigger: {trigger:'#lap2'},y: '-495px',duration:5,delay:2,ease: "power1"});
			gsap.to('#lap6', {scrollTrigger: {trigger:'#lap6'},y: '-1605px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 1850px)": function () {			
			gsap.to('#lap2', {scrollTrigger: {trigger:'#lap2'},y: '-465px',duration:5,delay:2,ease: "power1"});
			gsap.to('#lap6', {scrollTrigger: {trigger:'#lap6'},y: '-1515px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 1600px)": function () {			
			gsap.to('#lap2', {scrollTrigger: {trigger:'#lap2'},y: '-425px',duration:5,delay:2,ease: "power1"});
			gsap.to('#lap6', {scrollTrigger: {trigger:'#lap6'},y: '-1385px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 1500px)": function () {		   
			gsap.to('#phone2', {scrollTrigger: {trigger:'#phone2'},y: '-2640px',duration:10,delay:2,ease: "power1"});
		  },

		  "(max-width: 1400px)": function () {		   
			gsap.to('#lap2', {scrollTrigger: {trigger:'#lap2'},y: '-405px',duration:5,delay:2,ease: "power1"});
			gsap.to('#lap6', {scrollTrigger: {trigger:'#lap6'},y: '-1205px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 1250px)": function () {		   
			gsap.to('#lap2', {scrollTrigger: {trigger:'#lap2'},y: '-330px',duration:5,delay:2,ease: "power1"});
			gsap.to('#lap6', {scrollTrigger: {trigger:'#lap6'},y: '-1070px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 950px)": function () {		   
			gsap.to('#lap2', {scrollTrigger: {trigger:'#lap2'},y: '-290px',duration:5,delay:2,ease: "power1"});
			gsap.to('#lap6', {scrollTrigger: {trigger:'#lap6'},y: '-935px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 850px)": function () {
			gsap.to('#phone2', {scrollTrigger: {trigger:'#phone2'},y: '-1650px',duration:10,delay:2,ease: "power1"});
		  },

		  "(max-width: 800px)": function () {
			gsap.to('#lap2', {scrollTrigger: {trigger:'#lap2'},y: '-270px',duration:5,delay:2,ease: "power1"});
			gsap.to('#lap6', {scrollTrigger: {trigger:'#lap6'},y: '-805px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 700px)": function () {
			gsap.to('#lap2', {scrollTrigger: {trigger:'#lap2'},y: '-205px',duration:5,delay:2,ease: "power1"});
			gsap.to('#lap6', {scrollTrigger: {trigger:'#lap6'},y: '-667px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 600px)": function () {
			gsap.to('#lap2', {scrollTrigger: {trigger:'#lap2'},y: '-165px',duration:5,delay:2,ease: "power1"});
			gsap.to('#lap6', {scrollTrigger: {trigger:'#lap6'},y: '-535px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 550px)": function () {
			gsap.to('#phone2', {scrollTrigger: {trigger:'#phone2'},y: '-1350px',duration:10,delay:2,ease: "power1"});
		  },

		  "(max-width: 500px)": function () {
			gsap.to('#lap2', {scrollTrigger: {trigger:'#lap2'},y: '-123px',duration:5,delay:2,ease: "power1"});
			gsap.to('#lap6', {scrollTrigger: {trigger:'#lap6'},y: '-400px',duration:5,delay:2,ease: "power1"});
		  },

		  "(max-width: 430px)": function () {
			gsap.to('#phone2', {scrollTrigger: {trigger:'#phone2'},y: '-1150px',duration:10,delay:2,ease: "power1"});
		  },

		  "(max-width: 400px)": function () {
			gsap.to('#lap2', {scrollTrigger: {trigger:'#lap2'},y: '-103px',duration:5,delay:2,ease: "power1"});
			gsap.to('#lap6', {scrollTrigger: {trigger:'#lap6'},y: '-333px',duration:5,delay:2,ease: "power1"});
		  },

		  all: function () {
		    gsap.to('.parallax1-container .parallax1-section:nth-child(1)', {scrollTrigger: {trigger:'.parallax1-container .parallax1-section:nth-child(1)'},backgroundPosition: 'center 10%',duration:2, delay: 0.5});
			gsap.to('.parallax1-container .parallax1-section:nth-child(2)', {scrollTrigger: {trigger:'.parallax1-container .parallax1-section:nth-child(2)'},backgroundPosition: 'center 20%',duration:2, delay: 0.5});
			gsap.to('.parallax1-container .parallax1-section:nth-child(3)', {scrollTrigger: {trigger:'.parallax1-container .parallax1-section:nth-child(3)'},backgroundPosition: 'center 35%',duration:2, delay: 0.5});
			gsap.to('.parallax1-container .parallax1-section:nth-child(4)', {scrollTrigger: {trigger:'.parallax1-container .parallax1-section:nth-child(4)'},backgroundPosition: 'center 60%',duration:2, delay: 0.5});
			gsap.to('.parallax1-container .parallax1-section:nth-child(5)', {scrollTrigger: {trigger:'.parallax1-container .parallax1-section:nth-child(5)'},backgroundPosition: 'center 85%',duration:2, delay: 0.5});

			gsap.fromTo('.body-cyrcle', {scrollTrigger: {trigger:'.body-cyrcle'},opacity:0, y: '100'},{opacity:1, duration:2,delay:0.5,y:0});
			gsap.fromTo('#phoneTexta, #phoneDesc', {scrollTrigger: {trigger:'#phoneTexta, #phoneDesc'},y:'100',opacity:0},{opacity:1, duration:1.5,delay:1,y:0});
			gsap.fromTo('.links1,.links2', {scrollTrigger: {trigger:'.links1,.links2'},opacity:0, y: '100'},{opacity:1, duration:1,delay:1.5,y:0});

			gsap.to('#phoneDiv1', {scrollTrigger: {trigger:'#phoneDiv1'},y: 0, opacity:1,duration:2,delay:0.1});
			gsap.to('#phoneText2 h3', {scrollTrigger: {trigger:'#phoneText2'},y: 0, opacity:1,duration:2,delay:0.2});
			gsap.to('#phoneText2 p', {scrollTrigger: {trigger:'#phoneText2'}, opacity:1,duration:2,delay:0.6});

			gsap.to('#phoneDiv2', {scrollTrigger: {trigger:'#phoneDiv2'},y: 0, opacity:1,duration:2,delay:0.1});
			gsap.to('#phoneText3 h3', {scrollTrigger: {trigger:'#phoneText3'},y: 0, opacity:1,duration:2,delay:0.2});
			gsap.to('#phoneText3 p', {scrollTrigger: {trigger:'#phoneText3'}, opacity:1,duration:2,delay:0.6});

			gsap.to('#phoneText4 h3', {scrollTrigger: {trigger:'#phoneText4'},y: 0, opacity:1,duration:2,delay:0.2});
			gsap.to('#phoneText4 p', {scrollTrigger: {trigger:'#phoneText4'}, opacity:1,duration:2,delay:0.6});
			gsap.to('#phoneDiv3', {scrollTrigger: {trigger:'#phoneDiv3'},y: 0, opacity:1,duration:2,delay:0.1});

			gsap.to('#phoneDiv4', {scrollTrigger: {trigger:'#phoneDiv4'},y: 0, opacity:1,duration:2,delay:0.1});
			gsap.to('#phoneText5 h3', {scrollTrigger: {trigger:'#phoneText5'},y: 0, opacity:1,duration:2,delay:0.2});
			gsap.to('#phoneText5 p', {scrollTrigger: {trigger:'#phoneText5'}, opacity:1,duration:2,delay:0.6});
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
	     	<div className='parallax1-body'> 		
		  		<div className='links1'>
					<a href='https://github.com/Domka-Mor/Mobile-Store'>
				    	<i className="fa fa-brands fa-github"></i>
				    </a>
				    <a href='https://mobile-store-dm.netlify.app/'>
				    	<i className="fa fa-solid fa-link"></i>
				    </a>
				    <p></p>
		  		</div>
				<div className="parallax1-container">
				  	<section className='parallax1-section' id='phoneSec'>							
						<div className="body-cyrcle">
						    <div className='content-cyrcle'>
						        <h1 className='logo'>/<small>/</small><small className='smaller'>/</small></h1>
						    </div>          
					      	<div className='cyrcle'></div>                      
					      	<svg>
						        <filter id='wawy'>
						          <feTurbulence x='0' y='0' baseFrequency='0.009' numOctaves='5' seed='2'>
						            <animate attributeName='baseFrequency' dur='60s' values='0.02;0.005;0.02' repeatCount='indefinite'/>
						          </feTurbulence>
						          <feDisplacementMap in='SourceGraphic' scale='30'>
						          </feDisplacementMap>	
						        </filter>
					      	</svg>
				    	</div>

						<div id='phoneTexta'>
							<h3 id='phoneText'>Mobile</h3>
						</div>	
						<div id='phoneDesc'>
							<h3 id='phoneText'>store</h3>
						</div>	
						<div className='links2'>
							<ul>
								<li>React</li>
								<li>Bootstrap</li>
								<li>styled-components</li>
								<li>Node.js</li>
								<li>Express.js</li>
								<li>MongoDB</li>
							</ul>
						    <p></p>
				  		</div>		
					</section>

					<section className='parallax1-section' id='phoneSec2'>								
						<div id='phoneText2'>
							<h3>UI/UX experience</h3>
							<p>Modern product design with 360° product view, hover effects and more.</p>
						</div>	
						<div id='phoneDiv1'>		
							<img src='/Images/c3.png' alt='phone' id='c1'/>
							<img src='/Images/c2.png' alt='phone' id='c2'/>		
						</div>								 
					</section>	

					<section className='parallax1-section' id='phoneSec3'>
						<div id='phoneText3'>
							<h3>Responsive design</h3>
							<p>Design that look good on all devices!</p>
						</div>									
						<div id='phoneDiv2'>
							<div className="content">
								<div className='overlayPhone'>
									<img src='/Images/screen1.png' alt='phone' id='phone2'/>
								</div>		
							    <img id='phone1' src='/paralax/phone.png' alt='phone'/>	
							    <img src='/Images/c5.png' alt='phone' id='c3'/>	 
						    </div> 					      
						</div>
					</section>	
					<section className='parallax1-section' id='phoneSec4'>								
						<div id='phoneText4'>
							<h3>User section</h3>
							<p>Section with information about user, his paid orders with details, processing status and delivery address.</p>
						</div>	
						<div id='phoneDiv3'>
							<div className="content2">
								<div className='overlayLap'>
									<img src='/Images/user.png' alt='phone' id='lap2'/>
								</div>		
							    <img src='/Images/lap.png' alt='phone' id='lap1'/>
							    <img src='/Images/c1.png' alt='phone' id='lap4'/> 
						    </div> 		
						</div>	
							 
					</section>
					<section className='parallax1-section' id='phoneSec5'>								
						<div id='phoneText5'>
							<h3>Admin section</h3>
							<p>Admin can manage/delete all user's information and orders or delete, add or edit products.</p>
						</div>	
						<div id='phoneDiv4'>
							<div className="content3">
								<div className='overlayLap2'>
									<img src='/Images/admin.png' alt='phone' id='lap6'/>
								</div>		
							    <img src='/Images/lap.png' alt='phone' id='lap5'/>
							    <img src='/Images/c1.png' alt='phone' id='lap4'/> 
						    </div> 		
						</div>		 
					</section>	
				</div>
	        </div>	
        </>	
	)
}