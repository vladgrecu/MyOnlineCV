import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      isActive: {
        about: true,
        resume: false,
        projects: false,
        contact: false
      }
    };
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  disableAll = state => {
    Object.keys(state).forEach(key => {
      state[key] = false;
    });
    return state;
  };

  setActive = param => {
    this.disableAll(this.state.isActive);
    this.setState(prevState => ({
      isActive: {
        ...prevState.isActive,
        [param]: true
      }
    }));
  };

  render() {
    return (
      <MDBNavbar
        color="blue lighten-2"
        dark
        expand="md"
        id="myNavigation"
        style={{ zIndex: 100, position: "sticky", top: "0" }}
      >
        <MDBNavbarBrand>
          <strong className="white-text">MyOnlineCV</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active={this.state.isActive.about}>
              <MDBNavLink to="/" onClick={() => this.setActive("about")}>
                <i className="fas fa-user-ninja"></i>About
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active={this.state.isActive.resume}>
              <MDBNavLink to="/resume" onClick={() => this.setActive("resume")}>
                <i className="fas fa-info-circle"></i>Resume
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active={this.state.isActive.projects}>
              <MDBNavLink
                to="/projects"
                onClick={() => this.setActive("projects")}
              >
                <i className="fas fa-code"></i>Projects
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active={this.state.isActive.contact}>
              <MDBNavLink
                to="/contact"
                onClick={() => this.setActive("contact")}
              >
                <i className="fas fa-envelope"></i>Contact
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;
