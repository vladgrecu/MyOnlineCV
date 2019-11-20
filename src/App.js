import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Router>
        <LandingPage path="/" exact />
        <Navbar />
        <Route path="/home" component={Home}></Route>
        <Route path="/resume" component={Resume}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
