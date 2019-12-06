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
import MakeItSnow from "./components/MakeItSnow/MakeItSnow";
import { helperFunctions } from "./assets/helpers/helpers";
import { particlesOptions } from "./assets/helpers/particleOptions";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { showParticles: true };
  }
  componentDidMount() {
    helperFunctions();
  }
  toggleParticles = () => {
    setTimeout(() => {
      this.setState({ showParticles: !this.state.showParticles });
    }, 200);
  };
  render() {
    return (
      <div className="App">
        <Router>
          {this.state.showParticles ? (
            <Particles className="particles" params={particlesOptions} />
          ) : null}
          <LandingPage />
          <div style={{ position: "relative", zIndex: "1" }}>
            <Navbar />
            <Route path="/" component={Home} exact></Route>
            <Route path="/resume" component={Resume}></Route>
            <Route path="/projects" component={Projects}></Route>
            <Route path="/contact" component={Contact}></Route>
          </div>
          <MakeItSnow
            toggleParticles={this.toggleParticles}
            isSnowing={this.state.showParticles}
          />
          <BackToTop />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
