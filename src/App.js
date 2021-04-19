/** @format */

import React, { Component } from "react";
import "./css/style.css";
// import "./images";
// import images from "./images";
import MyBody from "./components/Body";
import MyFooter from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <MyBody />
        <MyFooter />
      </div>
    );
  }
}
export default App;
