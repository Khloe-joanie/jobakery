/** @format */

import React, { Component } from "react";
import BannerTwo from "./BannerTwo";
import galleryimgs from "./GalleryData";
import GalImages from "./GalImages";

class Shop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="content">
        <BannerTwo />
        <div className="container">
          <h1 className="mytitles">
            Shop <i class="fa fa-shopping-cart"></i>
          </h1>
          <div className="row">
            {galleryimgs.map((gal) => {
              return <GalImages key={gal.id} joan={gal} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
