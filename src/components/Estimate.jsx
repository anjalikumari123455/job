import React from "react";
import "./Estimate.css";
function Estimate() {
  return (
    <div className="estimate">
      <div className="about">
        <div className="a">
          <h2>Estimate Salary</h2>
          <p>Home / Salary</p>
        </div>
      </div>
      <div className="center">
        <div className="searchbtn">
          <input type="text"></input>
         <span> <button >Search</button></span>
        </div>
      </div>
      <div className="job-grid">
        <div className="first">
          <div class="job-card">
            <h2>Warehouse Associate</h2>
            <p class="salary">
              Average Salary $34,331 per Year
            </p>
            <div className="links">
              <a href="#">Job Openings</a>
              <a href="#">Skills</a>
            </div>
          </div>

          <div className="job-card">
            <h2>Backend Developer</h2>
            <p className="salary">Average Salary $46,052 per year</p>
            <div class="links">
              <a href="#">Job Openings</a>
              <a href="#">Skills</a>
            </div>
          </div>
          <div className="job-card">
            <h2>Front Desk Agent</h2>
            <p className="salary">Average Salary $43,402 per year</p>
            <div class="links">
              <a href="#">Job Openings</a>
              <a href="#">Skills</a>
            </div>
          </div>
        </div>

        <div className="first">
          <div class="job-card">
            <h2>Crew Member</h2>
            <p class="salary">
             Average Salary $44,781 per year
            </p>
            <div class="links">
              <a href="#">Job Openings</a>
              <a href="#">Skills</a>
            </div>
          </div>

          <div className="job-card">
            <h2>Software Engineer</h2>
            <p class="salary">Average Salary $102,781 per year</p>
            <div class="links">
              <a href="#">Job Openings</a>
              <a href="#">Skills</a>
            </div>
          </div>
          <div className="job-card">
            <h2>App Developer</h2>
            <p class="salary">Average Salary $92,781 per year</p>
            <div class="links">
              <a href="#">Job Openings</a>
              <a href="#">Skills</a>
            </div>
          </div>
        </div>
        <div className="first">
          <div class="job-card">
            <h2>UI/UX Designer</h2>
            <p class="salary">
             Average Salary $108,781 per year
            </p>
            <div class="links">
              <a href="#">Job Openings</a>
              <a href="#">Skills</a>
            </div>
          </div>

          <div className="job-card">
            <h2>Web Developer</h2>
            <p class="salary">Average Salary $88,601 per year</p>
            <div class="links">
              <a href="#">Job Openings</a>
              <a href="#">Skills</a>
            </div>
          </div>
          <div className="job-card">
            <h2>Full Stack Developer</h2>
            <p class="salary">Average Salary $88,601 per year</p>
            <div class="links">
              <a href="#">Job Openings</a>
              <a href="#">Skills</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Estimate;
