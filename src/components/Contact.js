/** @format */

import React, { Component } from "react";
import BannerTwo from "./BannerTwo";
// import conta from "../images/contact.png";

class Contact extends Component {
  render() {
    return (
      <div className="content">
        <BannerTwo />
        <h1 className="mytitles">Get In Touch</h1>
        <div className="contactback">
          <div className="clearfix"></div>
          <div className="col-md-8 offset-md-2 transparentform">
            <h3 className="ess">Espresso Yourself</h3>
            <form>
              <input className="con" type="text" placeholder="First Name" />{" "}
              <br />
              <br />
              <input className="con" type="text" placeholder="Email" /> <br />
              <br />
              <textarea className="con_2" placeholder="Message" /> <br />
              <br />
              <button className="mybutton">SEND</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
