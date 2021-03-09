import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home2 from "./components/pages/Home2";
import About from "./components/pages/About";
import Story from "./components/pages/Story";
import Team from "./components/pages/Team";
import Volunteer from "./components/pages/Volunteer";
import Support from "./components/pages/Support";
import OurWork from "./components/pages/OurWork";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Menus from "./components/Menu";
import NavBar from "./components/Navigation/NavBar";
import Header from "./components/Header/Header";
import HeaderLinks from "./components/Header/HeaderLinks";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App(props) {
  const { ...rest } = props;
  return (
    <div className="app">
      <Router className=".app-router">
        {/* <Menus /> */}
        <Header
          color="transparent"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "primary",
          }}
          brand="Victory Kitchen"
          {...rest}
        />

        {/*   <NavBar /> */}
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/about" component={About} />
          <Route path="/story" component={Story} />
          <Route path="/ourwork" component={OurWork} />

          <Route path="/supportus" component={Support} />
          <Route path="/volunteer" component={Volunteer} />
          <Route path="/team" component={Team} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
