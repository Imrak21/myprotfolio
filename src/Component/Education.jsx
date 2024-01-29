import React from "react";
import education from "../Css/education.css";
export default function Education() {
  return (
    <>
      <section id="educationsection">
        <h2 className="text-centre text-center text-white mt-3" id="eduhead">
          Education
        </h2>
        <div className="row m-0" id="row"></div>
        <div className="row justify-content-lg-around m-0">
          <div className="col-4" id="educol"></div>
          <div className="col-4" id="educol"></div>
          <div className="col-4" id="educol"></div>
        </div>
        <div className="row justify-content-around m-0">
          <div className="col-4 text-center m-0 p-0">
            <h4  id="edicon">Secondary School</h4>
            <div className="box w-50 bg-black m-auto rounded-2 p-2 "id="edudetails">
              I have Completed my HigherSecondary School from Suddhananda
              Vidyalaya, in the year 2017 with 8.2cgpa.
            </div>
          </div>
          <div className="col-4 text-center m-0 p-0">
            <h4  id="edicon">HigherSecondary School</h4>
            <div className="box w-50 bg-black m-auto rounded-2 p-2 "id="edudetails">
              I have Completed my HigherSecondary School from Suddhananda
              Vidyalaya, in the year 2019 with 52%.
            </div>
          </div>
          <div className="col-4 text-center m-0 p-0">
            <h4  id="edicon">Bachelor Degree</h4>
            <div className="box w-50 bg-black m-auto rounded-2  p-2 "id="edudetails">
              I have Completed my B-tech in Computer Science and Engineering, from Synergy Institute of Technology.
              In the year 2023.
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}
