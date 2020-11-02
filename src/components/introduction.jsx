import React, { Component } from "react";

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: "url(images/background.jpg)" }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className=" js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi there! I am Shubham</h1> <br />
                          <h4>
                            I am working as a Cloud Software Engineer at New
                            York Life Insurance R&D Labs
                          </h4>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://drive.google.com/file/d/1oS_0tFnLrBR6H7eRssHdMLD0XIkodn4f/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Resume
                              <i className="icon-download4" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: "url(images/background.jpg)" }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            Full Stack Developer
                            <br />
                          </h1>
                          <h4>
                            I am passionate about solving problems with new age
                            tools and technologies!!
                          </h4>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://github.com/kawanes-spring2020"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Projects <i className="icon-briefcase3" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
