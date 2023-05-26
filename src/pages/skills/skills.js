import React from 'react'
import SkillsComponent from '../../components/skills/skillsComponent'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/Header'
import { Helmet } from 'react-helmet'
export default function Skills() {
  return (
    <>
    <Helmet>
            <title>Gopal's Skills details</title>
            <meta name='description'
            content='Get Skills information of Gopal Goyal.'/>
            <meta name='keywords' content='about gopal, gopal contact, Gopal Projects, Gopal contact, gopal skills'/>
        </Helmet>
    <Header/>
        <SkillsComponent/>
        <Footer/>
    </>
  )
}
