import React from 'react'
import ContactComponent from '../../components/contact/contact'
import Header from '../../components/header/Header'
// import Footer from '../../components/footer/footer'
import { Helmet } from 'react-helmet'

export default function Contact() {
  return (
    <>
    <Helmet>
            <title>Gopal's Contact</title>
            <meta name='description'
            content='Get contact information Gopal Goyal.'/>
            <meta name='keywords' content='about gopal, gopal contact, Gopal Projects, Gopal contact'/>
          </Helmet>
    <Header/>
    <ContactComponent/>
    {/* <Footer/> */}
    </>
  )
}
