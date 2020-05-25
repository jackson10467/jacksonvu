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
    <h2 className="Title">I design & build websites.</h2>
    <p></p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
