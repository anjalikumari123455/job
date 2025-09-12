import React, { useState } from "react";
import "./postjob.css";

function Postjob() {
  return (
    <div className="contain">
      <div className="sec">
        <div className="line">
          <label className="l">Job Title</label>
          <input type="text" name="jobTitle" placeholder="Web developer" />
        </div>

        <div className="line">
          <label>Company Name</label>
          <input type="text" name="jobTitle" placeholder="Web developer" />
        </div>
      </div>
      <div className="sec">
        <div className="line">
          <label className="l">Minimum Salary</label>
          <input type="text" name="Minimum Salary" placeholder="$20kr" />
        </div>

        <div className="line">
          <label>Maximum Salary</label>
          <input type="text" name="MAximum Salary" placeholder="$100k" />
        </div>
      </div>

      <div className="sec">
        <div className="line">
          <label className="l">Salary Type</label>

          <select class="form-select" aria-label="Default select example">
            <option selected>Choose Your Salary</option>
            <option value="1">Hourly</option>
            <option value="2">Monthly</option>
            <option value="3">Yearly</option>
          </select>
        </div>

        <div className="line">
          <label>Job Location</label>
          <input type="text" name="Job Location" placeholder="New york" />
        </div>
      </div>

      <div className="sec">
        <div className="line">
          <label className="l">Job Posting Date</label>
          <input type="Date" name="Minimum Salary" placeholder="$20kr" />
        </div>

        <div className="line">
          <label>Experience Level</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select Your Experience Level</option>
            <option value="1">Fresher</option>
            <option value="2">Internship</option>
            <option value="3">Work Remotely</option>
          </select>
        </div>
      </div>

      <div className="sec">
        <div className="line">
          <label className="l">Required Skill Sets:</label>

          <select class="select" aria-label="Default select example">
            <option selected>Select....</option>
            <option value="1">Javascript</option>
            <option value="2">C++</option>
            <option value="3">HTML</option>
            <option value="3">CSS</option>
            <option value="3">React</option>
            <option value="3">Node</option>
            <option value="3">Mongodb</option>
            <option value="3">Redu</option>
          </select>
        </div>
      </div>

      <div className="sec">
        <div className="line">
          <label className="l">Company Logo</label>
          <input
            type="text"
            name="logo"
            placeholder="Paste your image url:htteps"
          />
        </div>

        <div className="line">
          <label>Employment Type</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select your job title</option>
            <option value="1">Full Time</option>
            <option value="2">Part Time</option>
            <option value="3">Temporary</option>
          </select>
        </div>
      </div>
      <div className="sec">
        <div className="line">
          <label className="l">Job Description</label>
          <textarea type="text" name="Minimum Salary" placeholder="lorem10" />
        </div>
      </div>
<div className="sec">
        <div className="line">
          <label className="l">Company Logo</label>
          <input
            type="text"
            name="logo"
            placeholder="Paste your image url:htteps"
          />
        </div>

        <div className="line">
          <label>Job Posted By</label>

         <input
            type="text"
            name="logo"
            placeholder="Your email"
          />
        </div>
      </div>
<button className="btn0">Submit</button>



    </div>
  );
}

export default Postjob;
