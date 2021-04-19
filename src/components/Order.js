/** @format */

import React, { Component } from "react";
import BannerTwo from "./BannerTwo";
// import conta from "../images/contact.png";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      mNumber: "",
      pastry: "",
      quantity: "",
      pDate: "",
      pTime: "",
      allergies: "",
      message: "",
      date: "",
      time: "",
      meridian: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type } = event.target;

    if (type === "time") {
      let timeSplit = value.split(":");
      let hours = timeSplit[0];

      if (hours > 12) {
        this.setState({ meridian: "PM" });
        hours -= 12;
      } else if (hours < 12) {
        this.setState({ meridian: "AM" });
        if (hours == 0) {
          hours = 12;
        }
      } else {
        this.setState({ meridian: "PM" });
      }
      this.setState({ [name]: value });
    } else {
      this.setState({ [name]: value });
    }
  }
  render() {
    const hours = new Date().getHours();
    let timeofDay;

    if (hours < 12) {
      timeofDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeofDay = "afternoon";
    } else {
      timeofDay = "night";
    }
    return (
      <div className="content">
        <BannerTwo />
        <h1 className="mytitles">Place Order</h1>
        <h2 className="self col-md-10">
          <span style={{ color: "#f60" }}>Good{timeofDay}! </span>
          This is a self-collect-order form. Please fill it out to place your
          order. <br /> Thank You!
        </h2>
        <div className="order">
          <div
            className="col-md-8 offset-md-2 transparentform container"
            style={{ padding: "2em" }}
          >
            <form>
              <input
                className="con"
                name="firstName"
                onChange={this.handleChange}
                value={this.state.firstName}
                type="text"
                placeholder="First Name"
              />
              <br />
              <br />
              <input
                className="con"
                name="lastName"
                onChange={this.handleChange}
                value={this.state.lastName}
                type="text"
                placeholder="Last Name"
              />
              <br />
              <br />
              <input
                className="con"
                type="text"
                placeholder="Mobile Number"
                name="mNumber"
                onChange={this.handleChange}
                value={this.state.mNumber}
              />
              <br />
              <br />
              <select
                className="con"
                name="pastry"
                onChange={this.handleChange}
                value={this.state.pastry}
              >
                <option value="">--Please select your Pastry--</option>
                <option value="Raspberry Cakes">Raspberry Cakes</option>
                <option value="Chocolate Cakes">Chocolate Cakes</option>
                <option value="Cupcakes">Cupcakes</option>
                <option value="Chocolate Cupcakes">Chocolate Cupcakes</option>
                <option value="Muffins">Muffins</option>
                <option value="Croissants">Croissants</option>
                <option value="Tartlets">Tartlets</option>
                <option value="Winter Berry Deserts">
                  Winter Berry Deserts
                </option>
                <option value="Donuts">Donuts</option>
                <option value="Cheesecakes">Cheescakes</option>
              </select>
              <br />
              <br />
              <input
                className="con"
                type="number"
                placeholder="Quantity"
                name="quantity"
                value={this.state.quantity}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <span style={{ color: "#ff6600" }}>Pick Up Date: </span>
              <input
                className="con"
                type="date"
                placeholder="Pick up date"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <span style={{ color: "#ff6600" }}>Pick Up Time: </span>
              <input
                className="con"
                type="time"
                name="time"
                value={this.state.time}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <textarea
                className="con_3"
                placeholder="Any allergies we should be aware of?"
                name="allergies"
                onChange={this.handleChange}
                value={this.state.allergies}
              />
              <br />
              <br />
              <textarea
                className="con_2"
                placeholder="Additional Message (Optional)"
                name="message"
                onChange={this.handleChange}
                value={this.state.message}
              />
              <br />
              <br />
              <h3 className="mytitles ess">Entered Information</h3>
              <section className="einfo">
                <p>
                  <b>Names:</b> {this.state.firstName} {this.state.lastName}
                </p>
                <p>
                  <b>Mobile:</b> {this.state.mNumber}
                </p>
                <p>
                  <b>Your Order:</b> {this.state.quantity} {this.state.pastry}
                </p>
                <p>
                  <b>Pick Up Date:</b> {this.state.date}
                </p>
                <p>
                  <b>Pick Up Time:</b> {this.state.time}
                  {this.state.meridian}
                </p>
                <p
                  style={{
                    display: this.state.allergies ? "block" : "none",
                    color: this.state.allergies && "orange",
                  }}
                >
                  <b>Allergies:</b> {this.state.allergies}
                </p>
                <p style={{ display: this.state.message ? "block" : "none" }}>
                  <b>Message:</b> {this.state.message}
                </p>
              </section>
              <button className="mybutton">CONFIRM ORDER</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
function newFunction() {
  let meridian;
  return meridian;
}
