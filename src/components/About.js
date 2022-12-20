import React from 'react';
import '../cssfiles/About.css';
import me from './me.jpg';
function About() {
	return (
		<div id='about'>
			<div className='img'>
				{' '}
				<div className='image' style={{ backgroundImage: `url(${me})` }}></div>
			</div>

			<div className='about'>
				<h1>Hi, I'm Aman </h1>
				<p className='content'>
					I am a final year student at IIT Roorkee. Intersted in building full
					stack projects with MERN stack. Apart from development, I also do CP
					on{' '}
					<a
						href='https://leetcode.com/aman282571/'
						target='_blank'
						rel='noreferrer'
					>
						Leetcode
					</a>{' '}
					and{' '}
					<a
						href='https://codeforces.com/profile/aman282571'
						target='_blank'
						rel='noreferrer'
					>
						Codeforces
					</a>{' '}
					platforms.
				</p>
			</div>
		</div>
	);
}

export default About;
