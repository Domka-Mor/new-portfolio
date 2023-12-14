import React,{useState,useEffect} from 'react';
import './aboutNav.css';
import {Link} from "react-scroll";
import { gsap } from "gsap";

export default function AboutNav(){

	const [open,setOpen] = useState(false)

	const handleToggle = () => {
		setOpen(!open)
	}

	const closeNav = () => {
		setOpen(!open)
	}

	useEffect(()=>{
		let mm = gsap.matchMedia();

		mm.add("(min-width: 1400px)", () => {
			gsap.fromTo('.navbarAb li',{opacity:0},{delay:0.5,duration: 4,opacity:1})	
		});
		mm.add("(max-width: 1399px)", () => {
			gsap.fromTo('.navbarAb li',{opacity:0},{delay:0.5,duration: 4,opacity:1})	
		});
		mm.add("(max-width: 991px)", () => {
			gsap.fromTo('.nav-btn',{opacity:0},{opacity:1, delay:0.5,duration: 4})	
		});
	},[]);

	useEffect(()=>{
		var tl = gsap.timeline()
		tl.fromTo('.navbarIc',{opacity:0},{delay:0.5,duration: 4,opacity:1})		
	},[]);

	return(
		<>
		<div className="d-none d-lg-flex navbarAb">
		    <li><Link activeClass="active" className="test1" to="AboutMe" spy={true} smooth={true} duration={500} >About Me</Link></li>
		    <li><Link activeClass="active" className="test2" to="Technologies" spy={true} smooth={true} duration={500} >Technologies</Link></li>
		    <li><Link activeClass="active" className="test3" to="Projects" spy={true} smooth={true} duration={500} >Projects</Link></li>		
	  	</div>

	  	<div className= 'd-lg-none py-3'>
      		<nav className="container-fluid nav-min fixed-top">
                <div className='row'>
					<button type='button' className='nav-btn' onClick={handleToggle}>
						<i className="fas fa-bars"></i>
					</button>
                </div>
                <div className='pt-2'>	
                	<ul className={open?
						'nav-links show-nav':'nav-min nav-links1'}>
	                    <li ><Link onClick={closeNav} activeClass="active" className="test1" to="AboutMe" spy={true} smooth={true} duration={500} >About Me</Link></li>
					    <li ><Link onClick={closeNav} activeClass="active" className="test2" to="Technologies" spy={true} smooth={true} duration={500} >Technologies</Link></li>
					    <li ><Link onClick={closeNav} activeClass="active" className="test3" to="Projects" spy={true} smooth={true} duration={500} >Projects</Link></li>
					</ul>
            	</div>
   	 		</nav>
		</div>

	  	<div className="navbarIc">
	  		<li>
		  		<a href='https://github.com/Domka-Mor'>
		  			<i className="fab fa-github"></i>
		  		</a>
	  		</li>
	  		<li>
		  		<a href='https://linkedin.com/in/domka-moravičová-2a31892a5'>
			    	<i className="fab fa-linkedin"></i>
			    </a>
		    </li>
	  	</div>
	  	</>
	)
}
