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
    <p className="aboutp">I'm a web developer and software engineer who is passionate about visual communication, with a focus on designing and developing for the modern web. I'm currently looking for opportunities to grow both as a person and as a developer, whether that be through freelance work or at an organization.</p>  
    <div className="img">
      - <Image />
    </div>
    </div>
  </Layout>
)

export default IndexPage
