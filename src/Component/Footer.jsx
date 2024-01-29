import React from "react";
import footer from "../Css/footer.css";
import insta from '../img/insta.png';
import fb from '../img/fb.png';
import linkedin from "../img/Linkedin.png"
import naukri from '../img/naukri.png';
export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="row justify-content-between">
          <div className="col-2" id="navname">
            <h3>Rakesh</h3>
          </div>
          <div className="col-2">
            <p id="copyright">All rights reserved &copy;2024</p>
          </div>
          <div className="col-3">
            <div className="d-flex column-gap-2">
              <img src={insta} alt="" id="social-icons"/>
              <img src={fb} alt="" id="social-icons"/>
              <img src={linkedin} alt="" id="social-icons"/>
              <img src={naukri} alt="" id="social-icons"/>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
