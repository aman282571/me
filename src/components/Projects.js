import React, { useEffect } from "react";

import "../cssfiles/Projects.css";
import $ from "jquery";

function Projects() {
  useEffect(() => {
    if (document.documentElement.clientWidth > 600) {
      $(".desc").slideDown();
      $(".heading").toggleClass("heading1");
    }
    $(".heading").on("click", (e) => {
      console.log(e.target);
      $(e.target).toggleClass("heading1");
      $(e.target).siblings(".desc").slideToggle();
    });
  }, []);
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="pro_container">
        <div className="project">
          <p className="heading">Github Jobs</p>
          <div className="desc">
            All the jobs created by Github are shown here. Feature includes
            pagination, search option by title,location,type of job .
            <p className="techstak">
              <span>Tools:-</span> React..
            </p>
            <a target="_blank" href="https://github.com/aman282571/Github_jobs">
              go to github
            </a>
            <a target="_blank" href="https://aman282571.github.io/Github_jobs/">
              go to website
            </a>
          </div>
        </div>
        <div className="project">
          <p className="heading">Fan Club portal</p>
          <div className="desc">
            Portal includes authentication and Oauth, profile page(user can edit
            info),leaderboard (to show the most active user),chat room(admin can
            change the group fields and make others admin + real time chat +
            highlight the unread msgs). User can make room,follow and unfollow
            rooms.
            <p className="techstak">
              <span>Tools:-</span> HTML, CSS, JS, jquery, Nodejs, Expressjs,
              Mongodb, and socket.io..
            </p>
            <a
              target="_blank"
              href="https://github.com/aman282571/fan_club_portal"
            >
              go to github
            </a>
            <a target="_blank" href="https://fanportal.herokuapp.com/">
              go to portal
            </a>
          </div>
        </div>
        <div className="project">
          <p className="heading">E-Library</p>
          <div className="desc">
            Library which includes registration, login page for each user. Users
            can add, search,borrow(owner of the book will get mail),delete books
            from this. Individual webpages to show each book.
            <p className="techstak">
              <span>Tools:-</span>
              HTML, CSS, JS, Nodejs, Expressjs, Mongodb..
            </p>
            <a href="https://github.com/aman282571/library" target="_blank">
              go to github
            </a>
          </div>
        </div>
        <div className="project">
          <p className="heading">Expense Tracker</p>
          <div className="desc">
            A basic React application for tracking the expenses.
            <p className="techstak">
              <span>Tools:-</span>React
            </p>
            <a
              href="https://aman282571.github.io/ExpenseTracker/"
              target="_blank"
            >
              go to website
            </a>
          </div>
        </div>
        <div className="project">
          <p className="heading">Old Portfolio</p>
          <div className="desc">
            My old portfolio.
            <p className="techstak">
              <span>Tools:-</span>
              HTML, CSS, JS.
            </p>
            <a href="https://aman282571.github.io/portfolio" target="_blank">
              go to website
            </a>
          </div>
        </div>

        <div className="project">
          <p className="heading"> Simple Landing page</p>
          <div className="desc">
            Responsive website design.Just homepage is created by me
            <p className="techstak">
              <span>Tools:-</span> HTML, CSS.
            </p>
            <a href="https://aman282571.github.io/electura" target="_blank">
              go to website
            </a>
          </div>
        </div>
        <div className="project">
          <p className="heading">Learning projects</p>
          <div className="desc">
            Landing Page
            <p className="techstak">
              <span>Tools:-</span> HTML, CSS.
            </p>
            <a href="https://aman282571.github.io/thomso/" target="_blank">
              go to website
            </a>
          </div>
          <div className="desc">
            Template
            <p className="techstak">
              <span>Tools:-</span> HTML, CSS.
            </p>
            <a href="https://aman282571.github.io/template/" target="_blank">
              go to website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
