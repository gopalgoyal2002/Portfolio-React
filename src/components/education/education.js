import React from "react";
import "./education.css";
import IITLOGO from "../../assests/images/iitb.png";
import SSjainLOGO from "../../assests/images/ssjain.jpg";
import Zoom from "react-reveal/Zoom";
import { competitiveSites } from "../../data";
import Spin from 'react-reveal/Spin';

export default function Education() {
  return (
    <div style={{marginTop:"40px"}}>
      <h2 style={{ textAlign: "center" }}>
        <strong>Education</strong>
      </h2>
      <div className="main-educations">
        <div className="education">
          <Zoom left>
            <img src={IITLOGO} alt="IIT BOMBAY" />
          </Zoom>
          <div className="education-names">
            <h2>Indian Institute of Information Technology BOMBAY</h2>
            <p>
              Master's in Physics <strong> 2021 - 2023</strong>
            </p>
          </div>
        </div>
        <div className="education">
          <Zoom left>
            <img
              src={SSjainLOGO}
              alt="S. S. Jain Subodh College Jaipur (University of Rajasthan)"
            />
          </Zoom>
          <div className="education-names">
            <h2>S.S.Jain subodh college ,University Of Rajasthan</h2>

            <p>
              Bsc in Physics Honors <strong>2018 - 2021</strong>
            </p>
          </div>
        </div>
      </div>
      
      <div className="portfolio">
      <h1 style={{ textAlign: "center" }}>Portfolio Repository</h1>
        <div className="portfolio-main">
          {competitiveSites["competitiveSites"].map((data, id) => (
            <ul>
                 <Spin>
              <li>
            <a
              href={data.profileLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="iconify"
                data-icon={data.siteName}
                style={data.style}
                data-inline="false"
              >{data.siteName}</span>
            </a>
            </li>
            </Spin>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
