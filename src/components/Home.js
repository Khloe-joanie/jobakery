/** @format */

import React, { Component } from "react";
import BannerOne from "./BannerOne";
import GalImages from "./GalImages";
import galleryimgs from "./GalleryData";

class Home extends Component {
  render() {
    return (
      <div className="content">
        <h1 className="welcome">Welcome to Jo's Bakery!</h1>
        <BannerOne />
        <div className="container">
          <h1 className="mytitles">Recipe of the week</h1>
          <div className="row" style={{ marginBottom: "5em" }}>
            <div className="col-md-6">
              <img
                src="../../images/cake.jpg"
                className="recipeimg"
                alt="About Us Image"
              />
            </div>
            <div className="col-md-6 ">
              <h2 style={{ color: "#ff6600" }}>Chocolate Fudge Cake</h2>
              <h2 className="recipe">
                It was an emotional wedding. Even the cake was in
                <span style={{ color: "#ff6600" }}> tiers!</span>
              </h2>
              <button className="mybutton rbut"> GET RECIPE</button>
            </div>
          </div>
          <h1 className="mytitles">Our Top Pastries</h1>
          <div className="row">
            <GalImages joan={galleryimgs[0]} />
            <GalImages joan={galleryimgs[1]} />
            <GalImages joan={galleryimgs[2]} />
            <GalImages joan={galleryimgs[3]} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
