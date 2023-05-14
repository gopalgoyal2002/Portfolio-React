import React from "react";
import "./project.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Zoom from "react-reveal/Zoom";

export default function ProjectCard(props) {
  return (
    <div className="project-div">
      <Zoom left cascade>
        <p style={{ fontSize: "1.2em" }}>{props.heading}</p>

        <hr />
        <div className="project-desciption">
          <ul>
            {props.desc["desc"].map((data, id) => (
              <li style={{fontFamily:"initial"}}>{data}</li>
            ))}
          </ul>
        </div>

        <div className="projects-link">
          <a href={props.github}>
            <GitHubIcon style={{ fontSize: "40px" }} />
          </a>
          <a href={props.live}>
            <OpenInNewIcon style={{ fontSize: "40px" }} />
          </a>
        </div>
      </Zoom>
    </div>
  );
}
