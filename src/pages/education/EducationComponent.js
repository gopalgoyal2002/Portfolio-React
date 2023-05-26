import React from 'react'
import Education from '../../components/education/education'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/footer'
import { Helmet } from 'react-helmet'
export default function EducationPage() {
  return (
    <div>
      <Helmet>
            <title>Gopal's Education details</title>
            <meta name='description'
            content='Get Education information of Gopal Goyal.'/>
            <meta name='keywords' content='about gopal, gopal contact, Gopal Projects, Gopal contact'/>
        </Helmet>
      <Header/>
      <Education/>
      <Footer/>
    </div>
  )
}
