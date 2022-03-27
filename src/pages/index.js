import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/home.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Home">
    <h1 className="Title">Hi! I'm Jackson.</h1>
    <h2 className="Title2">I design & build websites.</h2>
    <div className="banner">
      <div className="trans">
        <div className="transText">
          <h3 className="about">[ABOUT ME]</h3>
        </div>
      </div>
    </div>
      <p className="aboutp">I'm a web developer and tech enthusiast who is passionate about visual communication, with a focus on designing and developing for the modern web.
    I'm proud to be a member of the team at <a href="https://www.getreprise.com/">Reprise</a> as a Customer Support Engineer enabling successful customer outcomes and helping to fuel product led growth.</p>  
    <div className="img">
      - <Image />
    </div>
    </div>
  </Layout>
)

export default IndexPage
