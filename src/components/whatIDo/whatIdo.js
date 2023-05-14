import React from "react";
import "./whatIdo.css";
import Bounce from 'react-reveal/Bounce';

export default function WhatIdo() {
  return (
    <div className="whatido">
      <span
        style={{
          "fontSize": "2.2em",
          "fontWeight": "200",
          fontFamily: "serif",
        }}
      >
        What I Do?
      </span>
      
      <Bounce>
      
      <div className="whatido-div">
        <p style={{ "fontSize": "1.8em", "fontWeight": "100" }}>
          Full Stack Development
        </p>

        <p>
          {" "}
          <span aria-labelledby="love" role="img">
            ⚡
          </span>{" "}
          Building responsive website front end using React-Redux
        </p>

        <p>
          {" "}
          <span aria-labelledby="love" role="img">
            ⚡
          </span>{" "}
          Creating application backend in Node, Express, FastAPI & Django
        </p>
      </div>
      </Bounce>

      <Bounce>
      <div className="whatido-div">
        <p style={{ "fontSize": "1.8em", "fontWeight": "100" }}>
          DataScience & AI
        </p>

        <p>
          <span aria-labelledby="love" role="img">
            ⚡
          </span>{" "}
          Developing highly scalable production ready models for various
          deeplearning and statistical use cases
        </p>

        <p>
          {" "}
          <span aria-labelledby="love" role="img">
            ⚡
          </span>{" "}
          Experience of working with NLP projects
        </p>

        <p>
          {" "}
          <span aria-labelledby="love" role="img">
            ⚡
          </span>{" "}
          Complex quantitative modelling for dynamic forecasting and time series
          analysis
        </p>
      </div>
      </Bounce> 

      <Bounce>

      <div className="whatido-div">
        <p style={{ "fontSize": "1.8em", "fontWeight": "100" }}>
          Cloud Infra-Architecture
        </p>
        <p>
          {" "}
          <span aria-labelledby="love" role="img">
            ⚡
          </span>{" "}
          Experience working on multiple cloud platforms
        </p>

        <p>
          {" "}
          <span aria-labelledby="love" role="img">
            ⚡
          </span>{" "}
          Hosting and maintaining websites on virtual machine instances along
          with integration of databases
        </p>

        <p>
          {" "}
          <span aria-labelledby="love" role="img">
            ⚡
          </span>{" "}
          Setting up streaming jobs from DB to Server or vice-versa on GCP and
          AWS
        </p>
      </div>
      </Bounce>

    </div>
  );
}
