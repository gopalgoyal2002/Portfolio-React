import React from 'react'
import ExperienceComponent from '../../components/experience/experienceComponent'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/footer'
import { Helmet } from 'react-helmet'
export default function Experience() {
  return (
    <>
    <Helmet>
            <title>Gopal's Experience details</title>
            <meta name='description'
            content='Get Experience information of Gopal Goyal.'/>
            <meta name='keywords' content='about gopal, gopal contact, Gopal Projects, Gopal contact'/>
      </Helmet>
    <Header/>
    <ExperienceComponent/>
    <Footer/>
    </>
  )
}
