import React from 'react'
import SEO from "../components/seo"
import Layout from "../components/layout"
import "../styles/contact.css"

const About = () => {
  return (
   <Layout> 
    <SEO title="Contact" />
    <div className="Contact">
    <h2 className="Title2">CONTACT</h2>
    <a className="contacts" href="https://github.com/jackson10467/"> <h1>Github</h1> </a>
    <a className="contacts" href="mailto:jackson10467@gmail.com"> <h1> Email</h1> </a>
    <a className="contacts" href="https://linkedin.com/in/jacksonvu/"> <h1>LinkedIn </h1></a>
    </div>
  </Layout>
  )
}

export default About
