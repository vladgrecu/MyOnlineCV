import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "react-particles-js";
import BackToTop from "./components/BackToTop/BackToTop";
import { helperFunctions } from "./assets/helpers/helpers";
import "./App.css";

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 1500
      }
    },
    move: {
      random: true,
      bounce: false
    }
  }
};

class App extends React.Component {
  componentDidMount() {
    helperFunctions();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Particles className="particles" params={particlesOptions} />
          <LandingPage />
          <div style={{ position: "relative", zIndex: "1" }}>
            <Navbar />
            <Route path="/" component={Home} exact></Route>
            <Route path="/resume" component={Resume}></Route>
            <Route path="/projects" component={Projects}></Route>
            <Route path="/contact" component={Contact}></Route>
          </div>
          <BackToTop />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
