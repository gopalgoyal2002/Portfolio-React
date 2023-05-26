import React, { Component } from 'react'
import { Routes, Route,BrowserRouter } from "react-router-dom"
import Home from "../pages/home/HomeComponent";
import Test from '../pages/test';
import EducationPage from "../pages/education/EducationComponent"
import Contact from '../pages/contact/contact';
import Projects from '../pages/projects/Projects';
import Experience from '../pages/experience/Experience';
import Skills from '../pages/skills/skills';
import OpenSource from '../pages/openSource/openSource.tsx';
// import Error404 from "../pages/errors/error404/Error";
import Helmet from 'react-helmet'

export default class Main extends Component {
  
  render() {

      return (
        <div>
          <BrowserRouter>
          <Helmet>
            <title>Gopal's Portfolio</title>
            <meta name='description'
            content='Get Info about Gopal Goyal.'/>
            <meta name='keywords' content='about gopal, gopal open source contributions, Gopal Projects, Gopal contact'/>
          </Helmet>
         <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/test" element={ <Test/> } />
        <Route path="/education" element={ <EducationPage/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/projects" element={ <Projects/> } />
        <Route path="/experience" element={ <Experience/> } />
        <Route path="/skills" element={ <Skills/> } />
        <Route path="/opensource" element={ <OpenSource/> } />

        </Routes>
        </BrowserRouter>
        </div>
      );
    
    }
  
}


