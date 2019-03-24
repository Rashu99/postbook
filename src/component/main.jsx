import React, { Component } from "react";
import Nav from "./nav";
import Body from "./body";

class Main extends Component {
  render() {
    return [
      <div>
        <li key="one">
          <Nav />
        </li>
        <li key="two">
          <Body />
        </li>
      </div>
    ];
  }
}

export default Main;
