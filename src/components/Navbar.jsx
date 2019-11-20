import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon
} from "mdbreact";

const disableAll = state => {
  Object.keys(state).forEach(key => {
    state[key] = false;
  });
  return state;
};

class Navbar extends Component {
  state = {
    isOpen: false,
    isActive: {
      home: true,
      resume: false,
      about: false,
      projects: false,
      contact: false
    }
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  setActive = param => {
    disableAll(this.state.isActive);
    this.setState(prevState => ({
      isActive: {
        ...prevState.isActive,
        [param]: true
      }
    }));
  };

  render() {
    console.log(this.state.isActive);
    return (
      <MDBNavbar color="blue lighten-2" dark expand="md" id="myNavigation">
        <MDBNavbarBrand>
          <strong className="white-text">MyOnlineCV</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active={this.state.isActive.home}>
              <MDBNavLink to="/home" onClick={() => this.setActive("home")}>
                Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active={this.state.isActive.resume}>
              <MDBNavLink to="/resume" onClick={() => this.setActive("resume")}>
                Resume
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active={this.state.isActive.about}>
              <MDBNavLink to="/about" onClick={() => this.setActive("about")}>
                About Me
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active={this.state.isActive.projects}>
              <MDBNavLink
                to="/projects"
                onClick={() => this.setActive("projects")}
              >
                Projects
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active={this.state.isActive.contact}>
              <MDBNavLink
                to="/contact"
                onClick={() => this.setActive("contact")}
              >
                Contact
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink
                className="waves-effect waves-light"
                to="https://www.facebook.com/grecu.vlad.50"
                target="_blank"
              >
                <MDBIcon fab icon="facebook" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                className="waves-effect waves-light"
                to="target=_blank(https://www.facebook.com/grecu.vlad.50)"
              >
                <MDBIcon fab icon="github" />
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;
