import React,{useEffect} from 'react';
import './tech.css';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import SplitType from 'split-type';

export default function NewAbout3() {

	gsap.registerPlugin(ScrollTrigger);

	useEffect(()=>{

		ScrollTrigger.matchMedia({
		  "(min-width: 1400px)": function () {		    
			const techs = gsap.utils.toArray('.lerp-wrapa span')

			const tl = gsap.timeline({
				scrollTrigger: {
				    trigger: '#skuska',
				    scrub: 2,
				    start:'15% center',
			    	end: "90% center",
				},
			});

			techs.forEach(tech => {
				const splitTech = new SplitType(tech)

				tl
				.from(splitTech.chars,{
					opacity:0,
					y: 80,
					rotateX: -90,
					stagger: 0.2,
					delay: 1,
				},'<')

				.to(splitTech.chars,{
					opacity:0,
					y: -80,
					rotateX: 90,
					stagger: 0.2,	
					delay: 1,
				},'<1')
			})		
		  },

		  "(max-width: 1399px)": function () {		    
			const techs = gsap.utils.toArray('.lerp-wrapa2 span')

			const tl = gsap.timeline({
				scrollTrigger: {
				    trigger: '#skuska',
				    scrub: 2,
				    start:'15% center',
			    	end: "90% center",
				},
			});

			techs.forEach(tech => {
				const splitTech = new SplitType(tech)

				tl
				.from(splitTech.chars,{
					opacity:0,
					y: 80,
					rotateX: -90,
					stagger: 0.2,
					delay: 1,
				},'<')

				.to(splitTech.chars,{
					opacity:0,
					y: -80,
					rotateX: 90,
					stagger: 0.2,	
					delay: 1,
				},'<1')
			})		
		  },

		  "(max-width: 425px)": function () {		    
			const techs = gsap.utils.toArray('.lerp-wrapa2 span')

			const tl = gsap.timeline({
				scrollTrigger: {
				    trigger: '#skuska',
				    scrub: 2,
				    start:'15% center',
			    	end: "90% center",
				},
			});

			techs.forEach(tech => {
				const splitTech = new SplitType(tech)

				tl
				.from(splitTech.chars,{
					opacity:0,
					y: 50,
					rotateX: -60,
					stagger: 0.2,
					delay: 1,
				},'<')

				.to(splitTech.chars,{
					opacity:0,
					y: -50,
					rotateX: 60,
					stagger: 0.2,	
					delay: 1,
				},'<1')
			})		
		  },

		  "(max-width: 768px)": function () {		    
			const techs = gsap.utils.toArray('.lerp-wrapa2 span')

			const tl = gsap.timeline({
				scrollTrigger: {
				    trigger: '#skuska',
				    scrub: 2,
				    start:'15% center',
			    	end: "90% center",
				},
			});

			techs.forEach(tech => {
				const splitTech = new SplitType(tech)

				tl
				.from(splitTech.chars,{
					opacity:0,
					y: 40,
					rotateX: -50,
					stagger: 0.2,
					delay: 1,
				},'<')

				.to(splitTech.chars,{
					opacity:0,
					y: -40,
					rotateX: 50,
					stagger: 0.2,	
					delay: 1,
				},'<1')
			})		
		  },
		});
	});

	return (
		<>
			<div className='loco' name='Technologies'>					
				<div className='section' id='skuska'>
					<div className='lerp-wrapa'>
						<span id='tech'>Technologies</span>	
						<span >React/JS</span> 
						<span id='second'>Html/CSS</span> 
						<span >Git/GitHub</span>	
						<span id='second'>Node/Express</span>
						<span>GraphQL/Mongo</span>
					</div>	

					<div className='lerp-wrapa2'>
						<span id='tech'>Tech</span>	
						<span >React</span> 
						<span id='second'>JS</span>
						<span >Html</span> 
						<span id='second'>CSS</span> 
						<span >Git</span>
						<span id='second'>GitHub</span>		
						<span >Node</span>
						<span id='second'>Express</span>
						<span>GraphQL</span>
						<span id='second'>MongoDb</span>
					</div>
				</div>	
			</div>	
		</>
	)
}