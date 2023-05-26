import React from 'react'
import OpenSourceComponent from '../../components/openSource/openSource.tsx'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/footer'
import { Helmet } from 'react-helmet'
export default function OpenSource() {

  return (
    <div  >
      <Helmet>
            <title>Gopal's Open Source details</title>
            <meta name='description'
            content='Get Open Source information of Gopal Goyal.'/>
            <meta name='keywords' content='about gopal, gopal contact, Gopal Projects, Gopal contact'/>
        </Helmet>
      <Header/>
      <OpenSourceComponent/>
      <Footer/>
    </div>
  )
}
