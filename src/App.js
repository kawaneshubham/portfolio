import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Timeline from "./components/timeline";
import Education from "./components/education";
import Project from "./components/projects";
import Certification from "./components/certification";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Timeline></Timeline>
            <Project></Project>
            <Certification></Certification>
            <Education></Education>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
