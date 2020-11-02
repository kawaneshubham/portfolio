import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">timeline</span>
                <h2 className="colorlib-heading animate-box">
                  Work Experience
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Co-op at New York Life R&D labs, New York <br />
                          <span>Cloud Software Engineer</span>
                          <span style={{ float: "right" }}>
                            June 2020 - December 2020
                          </span>
                        </h2>
                        <p>
                          <ul>
                            <li>
                              Architected and developed highly available and
                              scalable backend modules integrated with
                              Salesforce using Spring Boot, Java and PostgreSQL
                              as part of a fast-paced project, conceived to
                              support NYL field agents during COVID-19
                            </li>
                            <li>
                              Worked on implementing CICD pipeline to carryout
                              automated deployments on AWS using services such
                              as AWS Code Pipeline, Code Deploy, S3, EC2, etc.
                            </li>
                            <li>
                              Handled entire Salesforce module single handedly
                              while configuring various essential backend
                              elements such as Exception Handling, Logging using
                              slf4j, etc.
                            </li>
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
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Infosys Ltd, India <br />
                          <span>Software Engineer</span>
                          <span style={{ float: "right" }}>
                            December 2016 - October 2018
                          </span>
                        </h2>
                        <p>
                          <ul>
                            <li>
                              Designed & Developed a responsive Web application
                              using Angular 4, Java, Spring Boot Rest APIs and
                              PostgreSQL which was used to generate the
                              Automation Script in Selenium to help the
                              developer with no prior experience in Automation
                              Testing
                            </li>
                            <li>
                              Handled deployment of Web application and
                              microservices developed in Java & Spring Boot on
                              AWS
                            </li>
                            <li>
                              Gained hands-on experience in AWS services like
                              EC2, IAM, CloudWatch, S3, Code Deploy, etc.
                            </li>
                            <li>
                              Extensively worked on DevOps tools such as GitHub,
                              Jenkins, Prometheus, Grafana to implement CICD
                              workflow
                            </li>
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
                          Northeastern University, ICD <br />
                          <span>Salesforce Developer</span>
                          <span style={{ float: "right" }}>
                            December 2019 - June 2020
                          </span>
                        </h2>
                        <p>
                          <ul>
                            <li>
                              Handled university’s students as well as faculties
                              data using Salesforce CRM platform
                            </li>
                            <li>
                              Gathered useful insights from the data such as
                              student intake per year, Co-op percentage over
                              semester and presented it to the senior leadership
                              at Northeastern University
                            </li>
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
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Persistent Systems, India <br />
                          <span>Salesforce Developer</span>
                          <span style={{ float: "right" }}>
                            November 2018 - June 2019
                          </span>
                        </h2>
                        <p>
                          <ul>
                            <li>
                              Created & Deployed lightning components for Bajaj
                              FinServ using Apex, Lightning and VisualForce
                            </li>
                            <li>
                              Handled Administrative activities by creating
                              Triggers, Workflows, Duplication Rules, Approval
                              Process, Changeset deployment
                            </li>
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
