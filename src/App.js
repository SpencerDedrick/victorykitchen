import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Support from "./components/pages/Support";
import OurWork from "./components/pages/OurWork";
import Footer from "./components/Footer";
import Volunteer from "./components/pages/Volunteer";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/ourwork" component={OurWork} />
          <Route path="/support" component={Support} />
          <Route path="/volunteer" component={Volunteer} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
