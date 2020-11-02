import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/me.jpg)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Shubham Kawane</a>
              </h1>
              <span className="email">
                <a
                  href="mailto:kawane.s@northeastern.edu?Subject=Reach%20out%20to%20me"
                  target="_top"
                >
                  <i className="icon-mail"></i> kawane.s@northeastern.edu{" "}
                </a>
                <br />
                <a
                  href="mailto:shubhamkawane10@gmail.com?Subject=Reach%20out%20to%20me"
                  target="_top"
                >
                  <i className="icon-mail"></i> shubhamkawane10@gmail.com{" "}
                </a>
                <br />
                <i className="icon-phone"></i> (617)-956-2434
              </span>
              <br />
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About me
                    </a>
                  </li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li>
                    <a href="#timeline" data-nav-section="timeline">
                      Work Experience
                    </a>
                  </li>
                  <li>
                    <a href="#projects" data-nav-section="projects">
                      Projects & POCs
                    </a>
                  </li>
                  <li>
                    <a href="#education" data-nav-section="education">
                      Education
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/shubham-kawane-31ba68101/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-linkedin2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/kawanes-spring2020"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-github"></i>
                  </a>
                </li>
              </ul>
            </nav>
            <br></br>
            <div className="colorlib-footer">
              <b
                style={{
                  color: "red",
                  fontFamily: "cursive",
                  fontSize: "17px"
                }}
              >
                Open to Full time opportunities 2021
              </b>
              <br></br>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
