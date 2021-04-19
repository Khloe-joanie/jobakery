/** @format */

import React, { Component } from "react";
import BannerTwo from "./BannerTwo";
import abimg from "../images/aboutus.png";

class About extends Component {
  render() {
    return (
      <div className="content">
        <BannerTwo />
        <div className="container">
          <h1 className="mytitles">About Us</h1>
          <div className="row">
            <div className="col-md-6">
              <img src={abimg} style={{ width: "100%" }} alt="About Us Image" />
            </div>
            <div className="col-md-6">
              <h1 className="abus">
                Welcome to{" "}
                <span style={{ color: "#ff6600" }}>Jo's Bakery!</span>
                Try one of our decadent donuts!
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
