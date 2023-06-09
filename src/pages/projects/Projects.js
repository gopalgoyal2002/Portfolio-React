import React from 'react'
import Project from '../../components/projects/project'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/footer'
import { Helmet } from 'react-helmet'
export default function Projects() {
  return (
    <>
    <Helmet>
            <title>Gopal's Projects details</title>
            <meta name='description'
            content='Get Projects information of Gopal Goyal.'/>
            <meta name='keywords' content='about gopal, gopal contact, Gopal Projects, Gopal contact'/>
        </Helmet>
      <Header/>
      <Project/>
      <Footer/>
    </>
  )
}
