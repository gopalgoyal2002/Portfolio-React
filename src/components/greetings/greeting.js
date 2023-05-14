import React from "react";
import "./greeting.css";
import Button from '@mui/material/Button';
import my_image from '../../assests/images/IMG_2122.jpg'
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
// import PdfViewer from "./pdfViewer";

export default function Greeting() {

  return (
    <div className="greeting-main">
      
      <div className="main-first">
        <div className="aboutme">
          
          <span className="myname">Gopal Goyal</span>
          <br/>
          <br/>
          <br/>
          <Slide left>
          <p className="aboutme-text" >
          I want to make things
that make a difference.
          </p>
          </Slide>
          <br/>
          <br/>
          <Zoom>
          <a href="https://drive.google.com/file/d/1x6qmO_ruPfK89ibuFkHkKgCXJhvOOUKZ/view?usp=sharing" target="_black" style={{textDecoration:"None"}}>
          <Button  className="resume-btn" variant="contained">See My Resume</Button>
          </a>
          
          </Zoom>
        </div>
      </div>
     
      <div className="main-second">
        <Slide right>
        <img className='myimage' src={my_image} alt="my_pic"/>
        </Slide>
      </div>
      
    </div>
  );
}
