import React, { Component } from "react";
import "./nav.css";

class Nav extends Component {
  // state = {
  //   count: 0
  // };

  render() {
    return (
      <div className="outer">
        <div className="text-right ls">
          <button className="btn btn-primary margin-left">LogIn</button>
          <button className="btn btn-primary margin-left">SignUp</button>
        </div>
      </div>
    );
  }

  // formatCount() {
  //   const { count } = this.state;
  //   return count === 0 ? <h1>Zero</h1> : count;
  // }
}

export default Nav;
