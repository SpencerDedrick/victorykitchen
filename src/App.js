import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Story from "./components/pages/Story";
import Support from "./components/pages/Support";
import OurWork from "./components/pages/OurWork";
import Footer from "./components/Footer";
import Volunteer from "./components/pages/Volunteer";
import Gallery from "./components/pages/Gallery";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div className="app">
      <Router className=".app-router">
        <Navbar />
        <ScrollToTop />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/story" component={Story} />
          <Route path="/ourwork" component={OurWork} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/support" component={Support} />
          <Route path="/volunteer" component={Volunteer} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
