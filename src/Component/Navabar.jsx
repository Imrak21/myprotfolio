import React from "react";
import Navbar from "../Css/Navbar.css";
export default function Navabar() {
  return (
    <nav id="navbar">
      <div className="d-flex container-fluid justify-content-between m-0 p-0 align-content-center">
        <div className="text-white">
          <h3 className="navbar-brand" id="navname">
            Rakesh
          </h3>
        </div>
        <div className="text-white">
          <ul className="list-group list-group-horizontal list-unstyled d-flex justify-content-between">
            <li className="me-2">Services</li>
            <li className="me-2">Protfolio</li>
            <li className="me-2">About</li>
            <li className="me-2">Contact Me</li>
          </ul>
        </div>
        <div
          className="text-end text-white"
        >
          <button id="cvbtn">Download CV</button>
        </div>
      </div>
    </nav>
  );
}
