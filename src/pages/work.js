import React from 'react'
import SEO from "../components/seo"
import Layout from "../components/layout"
import ReactCompareImage from 'react-compare-image'
import '../styles/work.css'

const Work = () => {
  const before = 'https://i.imgur.com/HYRf4CA.png'
  const after = 'https://i.imgur.com/3lDmCQ2.png'
  return (
  
  <Layout> 
    <SEO title="Projects" />
    <div className="Projects">
        <h2 className="Title2">PROJECTS</h2>
        <div className="flex-con">
        <h3 className="Item">Sharky's Redesign</h3>
          <div className="flex-itm">
            <ReactCompareImage leftImage={before} leftImageLabel="Before" rightImage={after} rightImageLabel="After" />
            <p className="Desc"> A proposed redesign to Sharky's in NJ. Worked with UX Design team along with a web development team to create a new React front-end website and bring the designs to life.</p>
            <a className="pLink" href="https://sharkysnj.netlify.app/">Online</a>
          </div>
          <h3 className="Item">HERO[ID]</h3>
          <div className="flex-itm">
            <img className="pimg" src="https://i.imgur.com/aYJhJ0O.png"></img>
            <p className="Desc">A collaborative project where we set out to create a full stack application with authentication and CRUD. HERO[ID] is a site inspired by Blizzard and other fantasy elements which allows users to create online personas which are then displayed via character cards. MongoDB/Node backend with a React front end. </p>
            <a className="pLink" href="https://hero-ui.surge.sh/">Online</a>
          </div>
          <h3 className="Item">Jot</h3>
          <div className="flex-itm">
            <img className="pimg" src="https://i.imgur.com/NovDkKW.jpg"></img>
            <p className="Desc">A solo personal project that is meant to be a note taking app, also a full stack application with authentication and CRUD. Rails backend with a React front end. Currently still in progress, with a big overhaul due soon as of May 25th 2020</p>
            <a className="pLink" href="http://jot-jv.surge.sh/">Online</a>
          </div>
        </div>
    </div>
  </Layout>
  )
}

export default Work
