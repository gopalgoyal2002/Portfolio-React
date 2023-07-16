import React from "react";
import "./opensource.css";
import { openSourceData } from "../../data";
// import Fade from "react-reveal/Fade";

export default function OpenSourceComponent() {
    const Fade = require('react-reveal/Fade');
  return (
    <div className="opensource">
      <h1>Open Source Contributions</h1>
      <h1>Contributed Organizations</h1>
      {openSourceData["openSourceData"].map((data, index) => (
        <Fade bottom>
        <div className="skills">
          <a href={data.weblink} target="_blank">
            <div className="skills-div">
              <div className="icons-div">
                <div className="container">
                  <img src={data.Path} alt="Avatar" className="image" />
                  <div className="overlay">
                    <div className="text">{data.componyName}</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        </Fade>
      ))}

      <h1>Contributions</h1>
      {openSourceData["openSourceData"].map((data, index) => (
      <Fade bottom>

        <div className="contributions">
          <div className="contri">
            <div className="contri-left">
              <a href={data.repolink} className="repolink">
                <span className="contri-heading">{data.heading}</span>
              </a>
              <p className="contri-repo">
                Repository:{" "}
                <a style={{ color: "green" }} href={data.repolink}>
                  {data.repolink}
                </a>
              </p>
              <p>
                <span style={{ color: "green" }}>{data.add}+</span>
                <span style={{ color: "red" }}> {data.subtract}-</span>
              </p>
            </div>
            <div className="contri-right">
              <img
                src={data.Path}
                alt="golem networks"
                className="image-contri"
              />
            </div>
          </div>
        </div>
          </Fade>
      ))}
    </div>
  );
}
