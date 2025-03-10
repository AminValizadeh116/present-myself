import React, { Component } from "react";
import Comments from "../comments/Comments";
import { Link } from "react-router";
import Form from "../form/Form";
import logo from "./../../assets/2a-removebg.png"

export class Footer extends Component {
  render() {
    return (
      <>
        <div className="bg-gray-900 grid grid-cols-12 gap-8 py-8 px-20 rounded-t-4xl text-blue-200">
          <ul className="col-span-2 list-disc flex flex-col justify-around">
            <li>
              <Link to="/contents">contents</Link>
            </li>
            <li>
              <Link to="/services">services</Link>
            </li>
            <li>
              <Link to="/location">location</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/">home</Link>
            </li>
          </ul>

          <div className="col-span-7">
            <Form />
          </div>

          <div className="col-span-3 mt-14">
            <img src={logo} alt="logo" />
          </div>
        </div>


      </>
    );
  }
}

export default Footer;
