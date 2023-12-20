import React,{useEffect} from 'react';
import './mobileRoute.css';
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Link} from 'react-router-dom';

export default function MobileRoute() {

	gsap.registerPlugin(ScrollTrigger);

	useEffect(()=>{

		ScrollTrigger.create({
			trigger:".gallery",
			start:"top top",
			end:"bottom bottom",
			pin:".right",
			scrub:true,
		})
	});

	useEffect(()=>{

		ScrollTrigger.create({
			trigger:".gallery2",
			start:"top top",
			end:"bottom bottom",
			pin:".right2",
			scrub:true,
		})
	});

	useEffect(()=>{

		ScrollTrigger.create({
			trigger:".gallery3",
			start:"top top",
			end:"bottom bottom",
			pin:".right3",
			scrub:true,
		})
	});

	useEffect(()=>{

		ScrollTrigger.matchMedia({
		  "(min-width: 2560px)": function () {		
		  	var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery2",
				    scrub: 2,
				    start:'15% center',
			    	end: "70% center",
				},
			})  

			tl.to('.mainParalax8',{delay:1,duration: 1,opacity:1,})
			.to('#bg',{duration: 2,y:0,scale: 1.5,},1)
			.to('#man1',{duration: 2,scale: 0.5,delay:0.5},1)
			.to('#mountain_left',{duration: 2,x:-200},1)
			.to('#mountain_right',{duration: 2,x:200},1)
			.to('#clouds_1',{delay:1,duration: 2,x:150},1)
			.to('#clouds_2',{duration: 2,x:-150,delay:1},1)
			.to('#text',{delay:0.5,duration: 2,y:110,},1)
			.to('.mainParalax8',{delay:2,duration: 1,opacity:0,})   
		  },

		  "(max-width: 2559px)": function () {		
		  	var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery2",
				    scrub: 2,
				    start:'15% center',
			    	end: "70% center",
				},
			})  

			tl.to('.mainParalax8',{delay:1,duration: 1,opacity:1,})
			.to('#bg',{duration: 2,y:0,scale: 1.5,},1)
			.to('#man1',{duration: 2,scale: 0.5,delay:0.5},1)
			.to('#mountain_left',{duration: 2,x:-200},1)
			.to('#mountain_right',{duration: 2,x:200},1)
			.to('#clouds_1',{delay:1,duration: 2,x:150},1)
			.to('#clouds_2',{duration: 2,x:-150,delay:1},1)
			.to('#text',{delay:0.5,duration: 2,y:110,},1)
			.to('.mainParalax8',{delay:2,duration: 1,opacity:0,})   
		  },

		  "(max-width: 1440px)": function () {		
			var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery2",
				    scrub: 2,
				    start:'15% center',
			    	end: "70% center",
				},
			})  

			tl.to('.mainParalax8',{delay:1,duration: 1,opacity:1,})
			.to('#bg',{duration: 2,y:0,scale: 1.5,},1)
			.to('#man1',{duration: 2,scale: 0.5,delay:0.5},1)
			.to('#mountain_left',{duration: 2,x:-200},1)
			.to('#mountain_right',{duration: 2,x:200},1)
			.to('#clouds_1',{delay:1,duration: 2,x:150},1)
			.to('#clouds_2',{duration: 2,x:-150,delay:1},1)
			.to('#text',{delay:0.5,duration: 2,y:110,},1)
			.to('.mainParalax8',{delay:2,duration: 1,opacity:0,})
		  },

		 "(max-width: 1024px)": function () {
		 	var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery2",
				    scrub: 2,
				    start:'15% center',
			    	end: "70% center",
				},
			}) 

			tl.to('.mainParalax8',{delay:1,duration: 1,opacity:1,})
			.to('#bg',{duration: 2,y:0,scale: 1.5,})
			.to('#man1',{duration: 2,scale: 0.8,delay:0.5},1)
			.to('#mountain_left',{duration: 2,x:-70},1)
			.to('#mountain_right',{duration: 2,x:70},1)
			.to('#clouds_1',{delay:1,duration: 2,x:100},1)
			.to('#clouds_2',{duration: 2,x:-100,delay:1},1)
			.to('#text',{delay:0.5,duration: 2,y:200,},1)
			.to('.mainParalax8',{delay:2,duration: 1,opacity:0,})
		  },

		  "(max-width: 1024px)and (min-height: 1360px)": function () {
		 	var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery2",
				    scrub: 2,
				    start:'15% center',
			    	end: "70% center",
				},
			}) 

			tl.to('.mainParalax8',{delay:1,duration: 1,opacity:1,})
			.to('#bg',{duration: 2,y:0,scale: 1.5,})
			.to('#man1',{duration: 2,scale: 0.8,delay:0.5},1)
			.to('#mountain_left',{duration: 2,x:-70},1)
			.to('#mountain_right',{duration: 2,x:70},1)
			.to('#clouds_1',{delay:1,duration: 2,x:100},1)
			.to('#clouds_2',{duration: 2,x:-100,delay:1},1)
			.to('#text',{delay:0.5,duration: 2,y:200,},1)
			.to('.mainParalax8',{delay:2,duration: 1,opacity:0,})
		  },

		  "(max-width: 820px)and (min-height: 1170px)": function () {
		 	var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery2",
				    scrub: 2,
				    start:'15% center',
			    	end: "70% center",
				},
			}) 

			tl.to('.mainParalax8',{delay:1,duration: 1,opacity:1,})
			.to('#bg',{duration: 2,y:0,scale: 1.5,})
			.to('#man1',{duration: 2,scale: 0.8,delay:0.5},1)
			.to('#mountain_left',{duration: 2,x:-70},1)
			.to('#mountain_right',{duration: 2,x:70},1)
			.to('#clouds_1',{delay:1,duration: 2,x:100},1)
			.to('#clouds_2',{duration: 2,x:-100,delay:1},1)
			.to('#text',{delay:0.5,duration: 2,y:200,},1)
			.to('.mainParalax8',{delay:2,duration: 1,opacity:0,})
		  },

		  "(max-width: 768px)": function () {
			var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery2",
				    scrub: 2,
				    start:'15% center',
			    	end: "70% center",
				},
			}) 

			tl.to('.mainParalax8',{delay:1,duration: 1,opacity:1,})
			.to('#bg',{duration: 2,y:0,scale: 1.5,})
			.to('#man1',{duration: 2,scale: 0.85,delay:0.5},1)
			.to('#mountain_left',{duration: 2,x:-70},1)
			.to('#mountain_right',{duration: 2,x:70},1)
			.to('#clouds_1',{delay:1,duration: 2,x:50},1)
			.to('#clouds_2',{duration: 2,x:-50,delay:1},1)
			.to('#text',{delay:0.5,duration: 2,y:200,},1)
			.to('.mainParalax8',{delay:2,duration: 1,opacity:0,})
		  },

		  "(max-width: 768px)and (min-height: 1020px)": function () {
			var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery2",
				    scrub: 2,
				    start:'15% center',
			    	end: "70% center",
				},
			}) 

			tl.to('.mainParalax8',{delay:1,duration: 1,opacity:1,})
			.to('#bg',{duration: 2,y:0,scale: 1.5,})
			.to('#man1',{duration: 2,scale: 0.8,delay:0.5},1)
			.to('#mountain_left',{duration: 2,x:-90},1)
			.to('#mountain_right',{duration: 2,x:90},1)
			.to('#clouds_1',{delay:1,duration: 2,x:50},1)
			.to('#clouds_2',{duration: 2,x:-50,delay:1},1)
			.to('#text',{delay:0.5,duration: 2,y:200,},1)
			.to('.mainParalax8',{delay:2,duration: 1,opacity:0,})
		  },

		  "(max-width: 425px)": function () {
			var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery2",
				    scrub: 2,
				    start:'15% center',
			    	end: "70% center",
				},
			}) 

			tl.to('.mainParalax8',{delay:1,duration: 1,opacity:1,})
			.to('#bg',{duration: 2,y:0,scale: 1.5,})
			.to('#man1',{duration: 2,scale: 0.8,delay:0.5},1)
			.to('#mountain_left',{duration: 2,x:-100},1)
			.to('#mountain_right',{duration: 2,x:100},1)
			.to('#clouds_1',{delay:1,duration: 2,x:100},1)
			.to('#clouds_2',{duration: 2,x:-100,delay:1},1)
			.to('#text',{delay:0.5,duration: 2,y:200,},1)
			.to('.mainParalax8',{delay:2,duration: 1,opacity:0,})
		  },

		  "(max-width: 375px)": function () {
		  	var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery2",
				    scrub: 2,
				    start:'15% center',
			    	end: "70% center",
				},
			}) 

			tl.to('.mainParalax8',{delay:1,duration: 1,opacity:1,})
			.to('#bg',{duration: 2,y:0,scale: 1.5,})
			.to('#man1',{duration: 2,scale: 0.8,delay:0.5},1)
			.to('#mountain_left',{duration: 2,x:-170},1)
			.to('#mountain_right',{duration: 2,x:170},1)
			.to('#clouds_1',{delay:1,duration: 2,x:100},1)
			.to('#clouds_2',{duration: 2,x:-100,delay:1},1)
			.to('#text',{delay:0.5,duration: 2,y:250,},1)
			.to('.mainParalax8',{delay:2,duration: 1,opacity:0,})
		  },

		  "(max-width: 320px)": function () {
			var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery2",
				    scrub: 2,
				    start:'15% center',
			    	end: "70% center",
				},
			}) 

			tl.to('.mainParalax8',{delay:1,duration: 1,opacity:1,})
			.to('#bg',{duration: 2,y:0,scale: 1.5,})
			.to('#man1',{duration: 2,scale: 0.82,delay:0.5},1)
			.to('#mountain_left',{duration: 2,x:-150},1)
			.to('#mountain_right',{duration: 2,x:150},1)
			.to('#clouds_1',{delay:1,duration: 2,x:100},1)
			.to('#clouds_2',{duration: 2,x:-100,delay:1},1)
			.to('#text',{delay:0.5,duration: 2,y:250,},1)
			.to('.mainParalax8',{delay:2,duration: 1,opacity:0,})
		  },
		});
	});


	useEffect(()=>{

		ScrollTrigger.matchMedia({
		  "(min-width: 2560px)": function () {		    
			var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery",
				    scrub: 2,
				    start:'10% center',
			    	end: "80% center",
				},
			})

			tl.to('#bgPalm',{delay:1,duration:2,y:0,},1)
			.to('.beach, .resort',{delay:1, duration:2, opacity:0,},1)
			.to('#palm1',{duration:2,y:-400, x:-220,},1)
			.to('.secPalm #palm2',{duration:2,y:0,},1)
			.to('#palm3',{delay:1,duration:2,yPercent:-30,},1)
			.to('#palm4',{delay:1,duration:2,scale: 1.8,y:'150',},1)
			.to('.palmD2',{delay:2,duration:1,opacity:0,})	  		
		  },

		  "(max-width: 2559px)": function () {		    
			var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery",
				    scrub: 2,
				    start:'10% center',
			    	end: "80% center",
				},
			})

			tl.to('#bgPalm',{delay:1,duration:2,y: 50,},1)
			.to('.beach, .resort',{delay:1, duration:2, opacity:0,},1)
			.to('#palm1',{duration:2,y:-380, x:-200,},1)
			.to('.secPalm #palm2',{duration:2,y:0,},1)
			.to('#palm3',{delay:1,duration:2,yPercent:-30,},1)
			.to('#palm4',{delay:1,duration:2,scale: 2.1,y:'150',},1)
			.to('.palmD2',{delay:2,duration:1,opacity:0,})
		  },

		  "(max-width: 2100px)": function () {		    
			var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery",
				    scrub: 2,
				    start:'10% center',
			    	end: "80% center",
				},
			})

			tl.to('#bgPalm',{delay:1,duration:2,y: 50,},1)
			.to('.beach, .resort',{delay:1, duration:2, opacity:0,},1)
			.to('#palm1',{duration:2,y:-360, x:-180,},1)
			.to('.secPalm #palm2',{duration:2,y:0,},1)
			.to('#palm3',{delay:1,duration:2,yPercent:-30,},1)
			.to('#palm4',{delay:1,duration:2,scale: 2.1,y:'150',},1)
			.to('.palmD2',{delay:2,duration:1,opacity:0,})
		  },

		  "(max-width: 1700px)": function () {		    
			var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery",
				    scrub: 2,
				    start:'10% center',
			    	end: "80% center",
				},
			})

			tl.to('#bgPalm',{delay:1,duration:2,y: 50,},1)
			.to('.beach, .resort',{delay:1, duration:2, opacity:0,},1)
			.to('#palm1',{duration:2,y:-340, x:-180,},1)
			.to('.secPalm #palm2',{duration:2,y:0,},1)
			.to('#palm3',{delay:1,duration:2,yPercent:-30,},1)
			.to('#palm4',{delay:1,duration:2,scale: 2.5,y:'150',},1)
			.to('.palmD2',{delay:2,duration:1,opacity:0,})
		  },

		  "(max-width: 1440px)": function () {		
			var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery",
				    scrub: 2,
				    start:'10% center',
			    	end: "80% center",
				},
			})

			tl.to('#bgPalm',{delay:1,duration:2,y: 100,},1)
			.to('.beach, .resort',{delay:1, duration:2, opacity:0,},1)
			.to('#palm1',{duration:2,y:-380, x:-160,},1)
			.to('.secPalm #palm2',{duration:2,y:0,},1)
			.to('#palm3',{delay:1,duration:2,yPercent:-30},1)
			.to('#palm4',{delay:1,duration:2,scale: 2.5,y:'150',},1)
			.to('.palmD2',{delay:2,duration:1,opacity:0,})
		  },

		 "(max-width: 1024px)": function () {
		 	var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery",
				    scrub: 2,
				    start:'10% center',
			    	end: "80% center",
				},
			})

			tl.to('#bgPalm',{delay:1,duration:2,y: 100,},1)
			.to('.beach, .resort',{delay:1, duration:2, opacity:0,},1)
			.to('#palm1',{duration:2,y:-340, x:-130,},1)
			.to('.secPalm #palm2',{duration:2,y:0,},1)
			.to('#palm3',{delay:1,duration:2,yPercent:-30},1)
			.to('#palm4',{delay:1,duration:2,scale: 2,y:150,},1)
			.to('.palmD2',{delay:2,duration:1,opacity:0,})	  	
		  },

		  "(max-width: 1024px)and (min-height: 1360px)": function () {
		 	var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery",
				    scrub: 2,
				    start:'10% center',
			    	end: "80% center",
				},
			})

			tl.to('#bgPalm',{delay:1,duration:2,y: 100,},1)
			.to('.beach, .resort',{delay:1, duration:2, opacity:0,},1)
			.to('#palm1',{duration:2,y:-590, x:-160,},1)
			.to('.secPalm #palm2',{duration:2,y:0,},1)
			.to('#palm3',{delay:1,duration:2,yPercent:-30},1)
			.to('#palm4',{delay:1,duration:2,scale: 2,y:'150',},1)
			.to('.palmD2',{delay:2,duration:1,opacity:0,})	 	
		  },

		   "(max-width: 820px) and (min-height: 1170px)": function () {
			var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery",
				    scrub: 2,
				    start:'10% center',
			    	end: "80% center",
				},
			})

			tl.to('#bgPalm',{delay:1,duration:2,y: 100,},1)
			.to('.beach, .resort',{delay:1, duration:2, opacity:0,},1)
			.to('#palm1',{duration:2,y:-480, x:-150,},1)
			.to('.secPalm #palm2',{duration:2,y:0,},1)
			.to('#palm3',{delay:1,duration:2,yPercent:-30,},1)
			.to('#palm4',{delay:1,duration:2,scale: 1.8,y:'150',},1)
			.to('.palmD2',{delay:2,duration:1,opacity:0,}) 	
		  },

		  "(max-width: 768px)": function () {
			var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery",
				    scrub: 2,
				    start:'10% center',
			    	end: "80% center",
				},
			})

			tl.to('#bgPalm',{delay:1,duration:2,y: 100,},1)
			.to('.beach, .resort',{delay:1, duration:2, opacity:0,},1)
			.to('#palm1',{duration:2,y:-320, x:-120,},1)
			.to('.secPalm #palm2',{duration:2,y:0,},1)
			.to('#palm3',{delay:1,duration:2,yPercent:-30,},1)
			.to('#palm4',{delay:1,duration:2,scale: 1.8,y:'150',},1)
			.to('.palmD2',{delay:2,duration:1,opacity:0,}) 	 	
		  },

		  "(max-width: 768px) and (min-height: 1020px)": function () {
			var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery",
				    scrub: 2,
				    start:'10% center',
			    	end: "80% center",
				},
			})

			tl.to('#bgPalm',{delay:1,duration:2,y: 100,},1)
			.to('.beach, .resort',{delay:1, duration:2, opacity:0,},1)
			.to('#palm1',{duration:2,y:-420, x:-120,},1)
			.to('.secPalm #palm2',{duration:2,y:0,},1)
			.to('#palm3',{delay:1,duration:2,yPercent:-30,},1)
			.to('#palm4',{delay:1,duration:2,scale: 2,y:'150',},1)
			.to('.palmD2',{delay:2,duration:1,opacity:0,}) 	
		  },

		  "(max-width: 425px)": function () {
			var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery",
				    scrub: 2,
				    start:'10% center',
			    	end: "80% center",
				},
			})

			tl.to('#bgPalm',{delay:1,duration:2,y: 100,},1)
			.to('.beach, .resort',{delay:1, duration:2, opacity:0,},1)
			.to('#palm1',{duration:2,y:-300, x:-120,},1)
			.to('.secPalm #palm2',{duration:2,y:0,},1)
			.to('#palm3',{delay:1,duration:2,yPercent:-30,},1)
			.to('#palm4',{delay:1,duration:2,scale: 1.6,y:'150',},1)
			.to('.palmD2',{delay:2,duration:1,opacity:0,})
		  },

		  "(max-width: 375px)": function () {
		  	var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery",
				    scrub: 2,
				    start:'10% center',
			    	end: "80% center",
				},
			})

			tl.to('#bgPalm',{delay:1,duration:2,y: 100,},1)
			.to('.beach, .resort',{delay:1, duration:2, opacity:0,},1)
			.to('#palm1',{duration:2,y:-260, x:-120,},1)
			.to('.secPalm #palm2',{duration:2,y:0,},1)
			.to('#palm3',{delay:1,duration:2,yPercent:-30,},1)
			.to('#palm4',{delay:1,duration:2,scale: 1.5,y:'100',},1)
			.to('.palmD2',{delay:2,duration:1,opacity:0,})
		  },

		  "(max-width: 320px)": function () {
			var tl = gsap.timeline({
				scrollTrigger: {
				    trigger: ".gallery",
				    scrub: 2,
				    start:'10% center',
			    	end: "80% center",
				},
			})

			tl.to('#bgPalm',{delay:1,duration:2,y: 100,},1)
			.to('.beach, .resort',{delay:1, duration:2, opacity:0,},1)
			.to('#palm1',{duration:2,y:-260, x:-120,},1)
			.to('.secPalm #palm2',{duration:2,y:0,},1)
			.to('#palm3',{delay:1,duration:2,yPercent:-30,},1)
			.to('#palm4',{delay:1,duration:2,scale: 1.3,y:'100',},1)
			.to('.palmD2',{delay:2,duration:1,opacity:0,})
		  },
		});
	});

	useEffect(()=>{
		var tl = gsap.timeline({
			scrollTrigger: {
			    trigger: ".gallery3",
			    scrub: 2,
			    start:'10% center',
		    	end: "80% center",
			},
		})

		tl.to('.skuskaWed2',{delay:1,duration:1,opacity:1,})
		.to('#textWed',{duration:2.5,delay:1,scale: 0.3,opacity:1,})
		.to('#x2',{duration:4,x:1800,},1)
		.to('#x4',{duration:4,x:-1800,},1)

		return () => tl.scrollTrigger.kill()
	});

	return (
		<div name='Projects'>
			<div className="spacer"></div>

			<div className="gallery">
				<div className="left">
					<div className="detailsWrapper">
						<div className="details"></div>
						<div className="details"></div>
						<div className="details"></div>		
						<div className="details"></div>	
						<div className="details"></div>				
					</div>
				</div>

				<div className="right">
					<Link to={'/projects/beachresort'}>	
						<div className="photos">											
							<div className='palmD2'>								
								<img 
									src='https://ik.imagekit.io/9nwcjxetq/paralax/tr:w-800/2.jpg' 
									srcSet= 'https://ik.imagekit.io/9nwcjxetq/paralax/tr:w-400/2.jpg 400w, 
										https://ik.imagekit.io/9nwcjxetq/paralax/tr:w-800/2.jpg 800w,
										https://ik.imagekit.io/9nwcjxetq/paralax/tr:w-1200/2.jpg 1200w,
										https://ik.imagekit.io/9nwcjxetq/paralax/tr:w-1600/2.jpg 1600w'
									alt='img' 
									id='bgPalm'
								/>
								<img src='https://ik.imagekit.io/9nwcjxetq/paralax/mesiac.jpg' alt='img' id='palm1'/>
								<div className='secPalm'>
									<img src='https://ik.imagekit.io/9nwcjxetq/paralax/hotel4.png' alt='img' id='palm2'/>
									<img src='https://ik.imagekit.io/9nwcjxetq/paralax/tr:w-800/hotel7.png' alt='img' id='palm3'/>
								</div>						
								<img src='https://ik.imagekit.io/9nwcjxetq/paralax/1c.png' alt='img' id='palm4'/>
							 	<h2 className='beach'>Beach</h2>
							    <h2 className='resort'>Resort</h2>							   
						    </div>					    
						</div>
					 </Link>	
				</div>
			</div>

			<div className="gallery2">
				<div className="left2">
					<div className="detailsWrapper">
						<div className="details"></div>
						<div className="details"></div>
						<div className="details"></div>		
						<div className="details"></div>		
						<div className="details"></div>			
					</div>
				</div>

				<div className="right2">
					<Link to={'/projects/phonestore'}>	
						<div className="photos">										
						    <div className='mainParalax8'>
								<img 
									src='https://ik.imagekit.io/9nwcjxetq/paralax/tr:w-800/bg3.jpg' 
										srcSet= 'https://ik.imagekit.io/9nwcjxetq/paralax/tr:w-800/bg3.jpg 400w, 
											https://ik.imagekit.io/9nwcjxetq/paralax/tr:w-1200/bg3.jpg 1600w,
											https://ik.imagekit.io/9nwcjxetq/paralax/tr:w-1600/bg3.jpg 2000w
									alt='img' 
									id='bg'
								/>
								<h2 id='text'>Phone Store</h2>
								<img src='https://ik.imagekit.io/9nwcjxetq/paralax/man10.png' alt='img' id='man1'/>				
								<img src='https://ik.imagekit.io/9nwcjxetq/paralax/clouds_1.png' alt='img' id='clouds_1'/>
								<img src='https://ik.imagekit.io/9nwcjxetq/paralax/clouds_2.png' alt='img' id='clouds_2'/>
								<img src='https://ik.imagekit.io/9nwcjxetq/paralax/mountain_left.png' alt='img' id='mountain_left'/>
								<img className='d-block d-sm-none' alt='img' src='https://ik.imagekit.io/9nwcjxetq/paralax/mountain_left2.png' id='mountain_right'/>
								<img className='d-none d-sm-block' alt='img' src='https://ik.imagekit.io/9nwcjxetq/paralax/mountain_right.png' id='mountain_right'/>
							</div>				
						</div>
					</Link>	
				</div>
			</div>

			<div className="gallery3">
				<div className="left3">
					<div className="detailsWrapper">
						<div className="details"></div>
						<div className="details"></div>
						<div className="details"></div>		
						<div className="details"></div>					
					</div>
				</div>

				<div className="right3">
					<Link to={'/projects/bridalsalon'}>
						<div className="photos">									
							<div className='skuskaWed2'>
								<div className='cloudss3'>
									<img src='https://ik.imagekit.io/9nwcjxetq/paralax/cloud2.png' alt='img' id='x2'/>		
									<img src='https://ik.imagekit.io/9nwcjxetq/paralax/cloud4.png' alt='img' id='x4'/>		
								</div>	
								<h2 id='textWed'>Bridal salon</h2>			
								<img src='https://ik.imagekit.io/9nwcjxetq/paralax/mmmm.jpg' alt='img' id='sk2'/>	
								<div className='cloudss2'>
									<img src='https://ik.imagekit.io/9nwcjxetq/paralax/cloud1.png' alt='img' style={{"--i":1}}/>	
									<img src='https://ik.imagekit.io/9nwcjxetq/paralax/cloud2.png' alt='img' style={{"--i":2}}/>	
									<img src='https://ik.imagekit.io/9nwcjxetq/paralax/cloud3.png' alt='img' style={{"--i":3}}/>	
									<img src='https://ik.imagekit.io/9nwcjxetq/paralax/cloud4.png' alt='img' style={{"--i":4}}/>
									<img src='https://ik.imagekit.io/9nwcjxetq/paralax/cloud5.png' alt='img' style={{"--i":5}}/>		
								</div>
							</div>						
						</div>
					</Link>	
				</div>
			</div>
		</div>
	)

}