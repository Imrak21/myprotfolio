import React from "react";
import Pf from "../Css/Pf.css";
import me from "../img/me.png";
import java from "../img/java.png";
import css from "../img/css.webp";
import html from "../img/html.webp";
import js from "../img/js.webp";
import bootstrap from "../img/Bootstrap.Default";
import reactimg from "../img/reactimg.png";
export default function Protfolio() {
  return (
    <>
      <section id="protfolio m-0 p-0">
        <div className="row justify-content-between p-0 m-0" id="main">
          <div className="col-6" id="infodiv">
            <p id="infotext" className="fs-2">
              Hi I am Rakesh Pradhan <br />I am a
              <span style={{ color: "cyan" }}> FullStack Developer</span>
            </p>
          </div>
          <div className="col-4" id="imgdiv">
            <img src={me} alt="Not available"/>
          </div>
        </div>
        <hr />
      </section>
      <section>
        <h1 className="p-5 m-4" id="techhead">Technologies</h1>
        <div className="row justify-content-around m-0">
          <div className="col-6 d-flex flex-wrap column-gap-4 row-gap-5 w-50">
            <img src={java} alt="" id="techicon" className="ms-5"/>
            <img src={css} alt="" id="techicon" className="ms-5"/>
            <img src={html} alt="" id="techicon" className="ms-5"/>
            <img src={js} alt="" id="techicon" className="ms-5"/>
            <img src={bootstrap} alt="" id="techicon" className="ms-5"/>
            <img src={reactimg} alt="" id="techicon" className="ms-5"/>
          </div>
        </div>
        <hr />
      </section>
    </>
  );
}
