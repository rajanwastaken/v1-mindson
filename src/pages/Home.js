import React from 'react';
import Hero from '../components/Hero';
import Story from '../components/Story';
import About from '../components/About';



export default function Home() {
	return (
		<div className="hero">
		<Hero/>
		<Story/>

		<About/>
		</div>
	)
}

