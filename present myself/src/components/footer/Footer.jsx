import React, { Component } from "react";
import Comments from "../comments/Comments";

export class Footer extends Component {
  render() {
    return (
      <div>
        <Comments />
        <h1>footer</h1>
      </div>
      );
  }
}

export default Footer;
