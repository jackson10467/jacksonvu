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
import "./layout.css"
import { slide as Menu } from 'react-burger-menu'
import pdf from "../images/resume.pdf"

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
      background: 'black',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
      textDecoration: 'none',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    },
    bmItem: {
      fontFamily: 'Arimo',
      margin: '15px',
      padding: '15px',
      fontWeight: "bold"
    },
    menuItem: {
      color: "white",
      textDecoration:"none"
    },
    bmItem: {
      color: "white",
      textDecoration: "none",
      fontFamily: "Arimo",
      margin:"25px"
    }


  }

  return (
    <div id="outer-container">
        <Menu styles={styles} pageWrapId={"page-wrap"} outerContainerId={"outer-container"} disableAutoFocus disableOverlayClick >
          <Link className="menu-item" to="/">HOME</Link>
          <Link className="menu-item" to="/work">WORK</Link>
          <Link className="menu-item" to="/contact">CONTACT</Link>
          <a className="menu-item" href={pdf} rel="noopener noreferrer" target="_blank">RESUME</a>
        </Menu>
        <main id="page-wrap">{children}</main>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
