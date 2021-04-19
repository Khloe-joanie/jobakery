/** @format */

import React, { Component } from "react";
import Home from "./Home";
import MyNav from "./Nav";
import About from "./About";
import Order from "./Order";
import Gallery from "./Gallery";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class MyBody extends Component {
  render() {
    return (
      <Router>
        <MyNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/order" component={Order} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default MyBody;
