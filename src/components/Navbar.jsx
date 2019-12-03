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
    if (window.innerWidth < 769) {
      this.setState({ isOpen: !this.state.isOpen });
    }
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
    const links = [
      { route: "/", name: "about", linkIcon: "fas fa-user-ninja" },
      { route: "/resume", name: "resume", linkIcon: "fas fa-info-circle" },
      { route: "/projects", name: "projects", linkIcon: "fas fa-code" },
      { route: "/contact", name: "contact", linkIcon: "fas fa-envelope" }
    ];
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
            {links.map((link, i) => (
              <MDBNavItem active={this.state.isActive[link.name]} key={i}>
                <MDBNavLink
                  to={link.route}
                  onClick={() => {
                    this.toggleCollapse();
                    this.setActive(link.name);
                  }}
                >
                  <i className={link.linkIcon}></i>
                  {" " + link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                </MDBNavLink>
              </MDBNavItem>
            ))}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;
