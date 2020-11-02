import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="education">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">timeline</span>
                <h2 className="colorlib-heading animate-box">Education</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Northeastern University, Boston <br />
                          <span>Master of Science in Information Systems</span>
                          <span style={{ float: "right" }}>2019-2021</span>
                          <br />
                          <span style={{ float: "right" }}>GPA: 3.765</span>
                        </h2>
                        <p>
                          Relevant Courses:
                          <ul>
                            <li>Network Structures & Cloud Computing</li>
                            <li>Web Tools & Development Methods</li>
                            <li>Web Design & User Experience</li>
                            <li>Big Data Engineering</li>
                            <li>Application, Engineering & Development</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Vishwakarma Institute of Technology, India
                          <br />
                          <span>
                            Bachelor of Technology in Computer Engineering
                          </span>
                          <span style={{ float: "right" }}>2012-2016</span>
                          <br />
                          <span style={{ float: "right" }}>CPI: 8.26/10</span>
                        </h2>
                        <p>
                          Relevant Courses:
                          <ul>
                            <li>Data Structures & Algorithms</li>
                            <li>Design & Analysis of Algorithms</li>
                            <li>OOPS using JAVA</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
