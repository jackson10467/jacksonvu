/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Link from 'gatsby-link'
import Header from "./header"
import Nav from "./nav"
import "./layout.css"
import {pushRotate as Menu} from 'react-burger-menu'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: 'black'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  return (
    <div id="outer-container">
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div className="side">
        <Menu styles={styles} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
          <Link className="menu-item" to="/">HOME</Link>
          <Link className="menu-item" to="/about">ABOUT</Link>
          <Link className="menu-item" to="/work">WORK</Link>
          <Link className="menu-item" to="/contact">CONTACT</Link>
        </Menu>
      </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 900,
          padding: `0 1.0875rem 1.45rem`,
          height:"100vh"
        }}
      >
        <main id="page-wrap">{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
