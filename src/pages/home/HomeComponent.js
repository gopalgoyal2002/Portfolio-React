import React, { Component } from "react";
import Greeting from "../../components/greetings/greeting";
import Header from "../../components/header/Header";
import WhatIdo from "../../components/whatIDo/whatIdo";
import Footer from "../../components/footer/footer"
import Education from "../../components/education/education";
import ContactComponent from "../../components/contact/contact";
import Project from "../../components/projects/project";
import ExperienceComponent from "../../components/experience/experienceComponent";

class Home extends Component {

  render() {

    return (
      <div>
      <Header />
      <Greeting/>
      <WhatIdo/>
      <hr/>
      <ExperienceComponent/>
      <hr/>
      <Project/>
      <hr/>
      <Education/>
      <hr/>
     
      <ContactComponent/>
      <Footer/>
      
      </div>
    );
  }
}


export default Home;
