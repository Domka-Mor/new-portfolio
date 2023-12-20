import React,{ useRef, useEffect } from 'react';
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import './tube.css';

export default function Tube(props){
	
	gsap.registerPlugin(ScrollTrigger);
	const canvasRef = useRef(null)

	const width = window.innerWidth
	const height = window.innerHeight

	useEffect(()=>{
		const canvas = canvasRef.current;
		canvas.width = width;
		canvas.height = height;

		const context = canvas.getContext("2d");
		const frameCount = 180;

		// const currentFrame = (index) => `/gulka3/${(index + 1).toString()}.jpg`;
		const currentFrame = (index) => `https://ik.imagekit.io/9nwcjxetq/gulka3/tr:w-${width},h-${height}/${(index + 1).toString()}.jpg`;
		const images = [];
		let ball = { frame: 0 };

		for (let i = 0; i < frameCount; i++) {
		  const img = new Image();
		  img.src = currentFrame(i);
		  images.push(img);
		} 

		function render() {
		  context.canvas.width = images[0].width;
		  context.canvas.height = images[0].height;
		  context.clearRect(0, 0, canvas.width, canvas.height);
		  context.drawImage(images[ball.frame], 0, 0);
		}

		images[0].onload = render();

		gsap.to(ball, {
		  frame: frameCount - 1,
		  snap: "frame",
		  ease: "none",
		  scrollTrigger: {
		  	trigger: '#page',
		    scrub: 2,
		    pin: '#canvas',
		    start:'top top',
		    end: "500% center",
		  },
		  onUpdate: render,
		});		
	})


	useEffect(()=>{
		var tl = gsap.timeline({
		  scrollTrigger: {
		  	trigger: '#page',
		    scrub: 2,
		    start:'20% center',
		    end: "95% center",
		  }
		})

		tl.to('.ball-text',{opacity:1,})	
		tl.to('.ball-text',{opacity:0,})	
	});


	return(
		<div id="page">
			<h2 className="ball-text">Projects</h2>
			<canvas className="canvas" id="canvas" ref={canvasRef}/>		
	    </div>
	)
}