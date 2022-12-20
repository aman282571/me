import React, { useEffect } from 'react';

import '../cssfiles/Projects.css';
import $ from 'jquery';

function Projects() {
	useEffect(() => {
		if (document.documentElement.clientWidth > 600) {
			$('.desc').slideDown();
			$('.heading').toggleClass('heading1');
		}
		$('.heading').on('click', (e) => {
			$(e.target).toggleClass('heading1');
			$(e.target).siblings('.desc').slideToggle();
		});
	}, []);
	return (
		<div id='projects'>
			<h1>Projects</h1>
			<div className='pro_container'>
				<div className='project'>
					<p className='heading'>Blogs App</p>
					<div className='desc'>
						Blogs app where user can create,edit and delete the blogs and their
						profile. User can also see others profiles and blogs.
						<p className='techstak'>
							<span>Tools:-</span> React and Express.js..
						</p>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://github.com/aman282571/blogs'
						>
							Go to Github
						</a>
					</div>
				</div>
				<div className='project'>
					<p className='heading'>Fan Club portal</p>
					<div className='desc'>
						Portal includes authentication and Oauth, profile page(user can edit
						info),leaderboard (to show the most active user),chat room(admin can
						change the group fields and make others admin + real time chat +
						highlight the unread msgs). User can make room,follow and unfollow
						rooms.
						<p className='techstak'>
							<span>Tools:-</span> HTML, CSS, JS, jquery, Nodejs, Expressjs,
							Mongodb, and socket.io..
						</p>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://github.com/aman282571/fan_club_portal'
						>
							go to github
						</a>
					</div>
				</div>
				<div className='project'>
					<p className='heading'>Codeforces Problems</p>
					<div className='desc'>
						User can view all problems of codeforces. <br /> Features includes
						pagination and filter by diffeent options like:-tags,
						status(Todo,tried solved), name,increasing and decreasing order of
						rating and solved count.
						<p className='techstak'>
							<span>Tools:-</span> React..
						</p>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://aman282571.github.io/cf_problems/'
						>
							Open website
						</a>
					</div>
				</div>
				<div className='project'>
					<p className='heading'>Sudoku Solver</p>
					<div className='desc'>
						This sudoku solver takes the input from the user and validate the
						sudoku and if any error found then it highlights those errors
						otherwise shows all possible solution of that sudoku.
						<p className='techstak'>
							<span>Tools:-</span> React..
						</p>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://aman282571.github.io/sudoku'
						>
							Open website
						</a>
					</div>
				</div>
				<div className='project'>
					<p className='heading'>E-Library</p>
					<div className='desc'>
						Library which includes registration, login page for each user. Users
						can add, search,borrow(owner of the book will get mail),delete books
						from this. Individual webpages to show each book.
						<p className='techstak'>
							<span>Tools:-</span>
							HTML, CSS, JS, Nodejs, Expressjs, Mongodb..
						</p>
						<a
							href='https://github.com/aman282571/library'
							target='_blank'
							rel='noreferrer'
						>
							go to github
						</a>
					</div>
				</div>
				<div className='project'>
					<p className='heading'>Basic Banking System</p>
					<div className='desc'>
						Basic banking system which supports transaction between multiple
						users.
						<p className='techstak'>
							<span>Tools:-</span>
							HTML, CSS, jquery, Nodejs, Expressjs, Mongodb..
						</p>
						<a
							href='https://github.com/aman282571/bankingSystem'
							target='_blank'
							rel='noreferrer'
						>
							go to github
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
