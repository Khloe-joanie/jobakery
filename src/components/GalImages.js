/** @format */

import React, { Component } from "react";

class GalImages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-md-3 text-center ha">
        <img
          src={this.props.joan.imgUrl}
          alt="Pastry Images"
          className="galimages"
        />
        <p className="nam">
          {this.props.joan.name} - Ksh {this.props.joan.price}
        </p>
      </div>
    );
  }
}

export default GalImages;
