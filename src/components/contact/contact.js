import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./contact.css";
import Fade from "react-reveal/Fade";

export default function ContactComponent() {
  const Mailto = ({ email, subject, body, children }) => {
    return (
      <a
        href={`mailto:${email}?subject=${
          encodeURIComponent(subject) || ""
        }&body=${encodeURIComponent(body) || ""}`}
      >
        {children}
      </a>
    );
  };

  return (
    <div className="contact">
        <h1 style={{textAlign:"center"}}>Contact Me</h1>
      <Fade left cascade>
        <div className="contact-div">
          <div className="contact-links">
            <EmailIcon style={{ fontSize: "50px" }} />
            <Mailto
              email="gopalgoyal612002@gmail.com"
              subject=""
              body="Hi Gopal Goyal"
            >
              <span
                className="iconify"
                data-inline="false"
                style={{ color: "black" }}
              >
                Mail Me!
              </span>
            </Mailto>
          </div>
          <div className="contact-links">
            <GitHubIcon style={{ fontSize: "50px" }} />
            <a href="https://github.com/gopalgoyal2002" target="_blank">
              <span
                className="iconify"
                data-inline="false"
                style={{ color: "black" }}
              >
                GitHub
              </span>
            </a>
          </div>
          <div className="contact-links">
            <LinkedInIcon style={{ fontSize: "50px" }} />
            <a
              href="https://www.linkedin.com/in/gopal-goyal-863981175/"
              target="_blank"
            >
              <span
                className="iconify"
                data-inline="false"
                style={{ color: "black" }}
              >
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}
