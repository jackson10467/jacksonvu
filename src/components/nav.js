import React from 'react'
import "../styles/nav.css"
import Link from 'gatsby-link'
import Image2 from "../components/signature"
import {scaleDown as Menu} from 'react-burger-menu'

const Nav = () => {
  var styles = {
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
    <div className="nav">
    <Menu styles={styles}>
    <Link className="menu-item" to="/">HOME</Link>
    <Link className="menu-item" to="/about">ABOUT</Link>
    <Link className="menu-item" to="/work">WORK</Link>
    <Link className="menu-item" to="/contact">CONTACT</Link>
  </Menu>
      <img className="sig" src="https://i.imgur.com/2GztFCG.png" />

      {/* <div className="links">
        <Link className="l" to="/">HOME</Link>
        <Link className="l" to="/about">ABOUT</Link>
        <Link className="l" to="/work">WORK</Link>
        <Link className="l" to="/contact">CONTACT</Link>
      </div> */}
    </div>
  )
}

export default Nav
