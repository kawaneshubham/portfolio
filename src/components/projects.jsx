import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
		<div className="colorlib-narrow-content">
		<div className="row">
		  <div
			className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
			data-animate-effect="fadeInLeft"
		  >
			<span className="heading-meta">My Work</span>
			<h2 className="colorlib-heading animate-box">
			  Recent Projects
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
					  Bill Management System (DevOps & AWS) <br />
					  <span>Network Structures & Cloud Computing</span>
					  <span style={{ float: "right" }}>
						Spring 2020
					  </span>
					</h2>
					<p>
					  <ul>
						<li>
						Created a Back-end Web Application for Bill Management System using Java, Spring Boot & PostgreSQL
						</li>
						<li>
						Utilized AWS IAM to create Users, Groups, Roles & Policies for providing programmatic/restricted access to EC2, S3, CircleCI
						</li>
						<li>
						Used Hashicorp Packer to automate the AMI creation with installation of Web application dependencies such as Apache2, Tomcat, Java8 & Maven
						</li>
						<li>Created CloudFormation template to create AWS Cloud architecture consisting of VPC, Subnets, Route Tables, Internet Gateway, EC2, RDS, S3 and security groups</li>
						<li>Accomplished CICD using DevOps tools such as GitHub, CircleCI, S3, and AWS CodeDeploy</li>
						<li>Bootstrapped a workflow in CircleCI to compile/run the application & only after successful execution of integration testcases deployed the Web Application using AWS CodeDeploy</li>
					  </ul>
					  <strong>Tools & Technologies: Java, Spring Boot, RESTful, Hibernate, PostgreSQL, AWS, CircleCI, Packer, CloudFormation</strong>
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
					SplitWise – Expense Management Application <br />
					  <span>Web Development Tools & Methods</span>
					  <span style={{ float: "right" }}>
						Spring 2020
					  </span>
					</h2>
					<p>
					  <ul>
						<li>
						Developed an algorithm for expense sharing application which lets user add, edit and delete expense with one or
						more friends
						</li>
						<li>
						User can perform activities such as invite new friends, add/edit/delete expense, attach bills to expenses, settle
						balances, etc.
						</li>
						<li>
						Implemented Spring Security and Role Based authentication for secure transaction
						</li>
					  </ul>
					  <strong>Tools & Technologies: Java, Spring MVC, Hibernate, JSP, MySQL</strong>
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
					Foster Care Management Eco-System <br />
					  <span>Application Engineering & Development</span>
					  <span style={{ float: "right" }}>
						Fall 2019
					  </span>
					</h2>
					<p>
					  <ul>
						<li>
						Designed & Developed a Java platform to create the end to end flow which provides transparency in Fostering process for the families using Java Swing and DB4O at the backend database
						</li>
						<li>
						Led the team to carry out an efficient workflow and database design to meet the deadlines
						</li>
					  </ul>
					  <strong>Tools & Technologies: Java, Swing, DB4O</strong>
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
