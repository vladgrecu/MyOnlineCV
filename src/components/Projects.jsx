import React, { Component } from "react";
import ProjectCard from "./Projects/ProjectCard";
import { projectOptions } from "../assets/helpers/projects";
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";

import "./Projects/projects.css";

class Projects extends Component {
  state = {
    activeItem: "1"
  };

  toggle = tab => e => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };

  render() {
    return (
      <div>
        <h1 className="text-center mt-5 mb-5 mx-auto border-bottom w-50 p-3">
          My Portofolio
        </h1>
        <MDBContainer className="card mt-5" style={{ maxWidth: "1400px" }}>
          <MDBNav
            className="nav-tabs nav-justified mt-5 p-1"
            style={{
              zIndex: 100,
              position: "sticky",
              top: "54px",
              borderBottom: "0px"
            }}
          >
            <MDBNavItem className="">
              <MDBNavLink
                className="bg-info text-white"
                to="#"
                active={this.state.activeItem === "1"}
                onClick={this.toggle("1")}
                role="tab"
              >
                <i className="fas fa-graduation-cap fa-lg"></i> Learning
                Projects
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                className="bg-info text-white"
                to="#"
                active={this.state.activeItem === "2"}
                onClick={this.toggle("2")}
                role="tab"
              >
                <i className="fab fa-js fa-lg"></i> Completed Projects
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                className="bg-info text-white"
                to="#"
                active={this.state.activeItem === "3"}
                onClick={this.toggle("3")}
                role="tab"
              >
                <i className="fab fa-react fa-lg"></i> ReactJS Projects
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent
            activeItem={this.state.activeItem}
            className="text-center mt-5"
          >
            <MDBTabPane tabId="1" role="tabpanel">
              <h1 className="mt-2 mb-5 border-bottom w-50 mx-auto pb-2">
                Learning Projects
              </h1>
              <div className="projects-container">
                {projectOptions.learning.map((item, index) => (
                  <ProjectCard options={item} key={index} index={index} />
                ))}
              </div>
            </MDBTabPane>
            <MDBTabPane tabId="2" role="tabpanel">
              <h1 className="mt-2 mb-5 border-bottom w-50 mx-auto pb-2">
                Completed Projects
              </h1>
              <div className="projects-container">
                {projectOptions.vanilla.map((item, index) => (
                  <ProjectCard options={item} key={index} index={index} />
                ))}
              </div>
            </MDBTabPane>
            <MDBTabPane tabId="3" role="tabpanel">
              <h1 className="mt-2 mb-5 border-bottom w-50 mx-auto pb-2">
                ReactJS Projects
              </h1>
              <div className="projects-container mx-auto">
                {projectOptions.react.map((item, index) => (
                  <ProjectCard options={item} key={index} index={index} />
                ))}
              </div>
            </MDBTabPane>
          </MDBTabContent>
        </MDBContainer>
      </div>
    );
  }
}
export default Projects;
