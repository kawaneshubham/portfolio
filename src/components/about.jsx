import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I am Shubham - currently living in Boston,MA. I am a
                        graduate student at Northeastern University majoring in
                        Information Systems. I am a full stack developer with 3
                        years of experience working in DevOps domain. I enjoy
                        solving problems(LeetCoding) and keep myself updated
                        with latest technologies by which I can tackle
                        challenging problems.
                      </p>
                      <p>
                        I am open for Full time opportunities in 2021. And I
                        aspire to be part of an organization that offers a
                        challenging growing environment which will enhance my
                        expertise in Web development and Cloud Computing.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-css3" />
                  </span>
                  <div className="desc">
                    <h3>FrontEnd Development </h3>
                    <strong>
                      HTML5, CSS3, JavaScript, React, Redux, Angular 2+,
                      Bootstrap, Material UI
                    </strong>
                    <p>
                      I have experience building websites using
                      JavaScript,React,Angular,HTML,CSS
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-leaf" />
                  </span>
                  <div className="desc">
                    <h3>BackEnd Development</h3>
                    <strong>
                      Java, Spring Boot, Spring data JPA, Hibernate, Spring MVC,
                      REST, SOAP, PostgreSQL, MySQL, MongoDB
                    </strong>
                    <p>
                      I have good grasp over fundamental concepts of Data
                      Structures & Algorithms
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>DevOps Tools</h3>
                    <strong>
                      AWS, Docker, Kubernetes,Jenkins, CircleCI, GitHub,
                      Terraform, Jira, Prometheus, Grafana
                    </strong>
                    <p>
                      I have 3 years of experience working with DevOps tools
                      such as AWS, Jenkins, GitHub, Jira, Prometheus, Grafana
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-book" />
                  </span>
                  <div className="desc">
                    <h3>AWS services</h3>
                    <strong>
                      IAM(Users, Roles, Policies), EC2 (Load balancing, Auto
                      scaling), S3, AWS CodeDeploy, CodePipeline, AWS Lambda,
                      RDS, DynamoDB, Route53, CloudWatch, AWS Systems Manager,
                      CloudFormation, SQS, SNS
                    </strong>
                    <p>
                      I have made use of above services in development as well
                      as in deployment of projects. Also created CICD pipelines
                      to carry out automated deployments
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-th-large" />
                  </span>
                  <div className="desc">
                    <h3>Big Data</h3>
                    <strong>
                      MongoDB, Hadoop, MapReduce, Apache Hive, Apache Pig
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
