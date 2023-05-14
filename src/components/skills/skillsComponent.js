import React from "react";
import "./skills.css";
// import { skills } from "../../data.js";
import css from "../../assests/icons/CSS.png";
import html from "../../assests/icons/HTML.png";
import js from "../../assests/icons/java-script.png";
import react from "../../assests/icons/react.png";
import node from "../../assests/icons/nodejs.png";
import django from "../../assests/icons/djanog.png";
import fastapi from "../../assests/icons/fastapi.svg";
import sql from "../../assests/icons/sql-server.png";
import mongo from "../../assests/icons/mongo.png";
import beanstack from "../../assests/icons/beanstack.png";
import lambda from "../../assests/icons/lambda.png";
import s3 from "../../assests/icons/s3.png";
import aws from "../../assests/icons/aws.png";
import bigquery from "../../assests/icons/big query.jpg";
import ec2 from "../../assests/icons/ec2.png";
import python from "../../assests/icons/python.png";
import skitlearn from "../../assests/icons/skitlearn.png";
import tf from "../../assests/icons/tf.png";
import nlp from "../../assests/icons/nlp.png";
import Rotate from "react-reveal/Rotate";


export default function SkillsComponent() {
  // const path=
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Skills</h2>
      <div className="skills">
        <div className="skills-div">
      <Rotate top left cascade>
          <div>
            <p className="web_skills_p">Web Technologies</p>
          </div>
          <div className="icons-div">
            <div class="container">
              <img src={html} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">HTML</div>
              </div>
            </div>
            <div class="container">
              <img src={css} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">CSS</div>
              </div>
            </div>
            <div class="container">
              <img src={js} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">Java Script</div>
              </div>
            </div>
            <div class="container">
              <img src={react} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">ReactJs</div>
              </div>
            </div>
            <div class="container">
              <img src={node} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">node</div>
              </div>
            </div>
            <div class="container">
              <img src={fastapi} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">FastAPI</div>
              </div>
            </div>
            <div class="container">
              <img src={django} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">Django</div>
              </div>
            </div>
          </div>
        </Rotate>
        </div>
        <div className="skills-div">
        <Rotate top right cascade>
          <div>
            <p className="web_skills_p">Databases Technologies</p>
          </div>
          <div className="icons-div">
            <div class="container">
              <img src={sql} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">SQL</div>
              </div>
            </div>

            <div class="container">
              <img src={mongo} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">Mongo DB</div>
              </div>
            </div>

            <div class="container">
              <img src={bigquery} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">Big Query</div>
              </div>
            </div>
          </div>
          </Rotate>
        </div>
        <div className="skills-div">
        <Rotate top left cascade>
          
          <div>
            <p className="web_skills_p">Cloud Services</p>
          </div>
          <div className="icons-div">
            <div class="container">
              <img src={aws} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">AWS</div>
              </div>
            </div>
            <div class="container">
              <img src={s3} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">S3</div>
              </div>
            </div>
            <div class="container">
              <img src={lambda} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">Lambda</div>
              </div>
            </div>
            <div class="container">
              <img src={beanstack} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">Elastic Beanstack</div>
              </div>
            </div>
            <div class="container">
              <img src={ec2} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">EC2</div>
              </div>
            </div>
          </div>
        </Rotate >

        </div>
        
        <div className="skills-div">
        <Rotate top right cascade>

          <div>
            <p className="web_skills_p">AI/NLP</p>
          </div>
          <div className="icons-div">
            <div class="container">
              <img src={python} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">Python</div>
              </div>
            </div>
            <div class="container">
              <img src={nlp} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">NLP</div>
              </div>
            </div>
            <div class="container">
              <img src={skitlearn} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">Sklearn</div>
              </div>
            </div>
            <div class="container">
              <img src={tf} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">Tensor Flow</div>
              </div>
            </div>
          </div>
        </Rotate>

        </div>
      </div>
    </>
  );
}
