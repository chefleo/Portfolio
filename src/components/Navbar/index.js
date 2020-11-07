import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import {
  NavWrapper,
  NavContainer,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  //   const [scrollNav, setScrollNav] = useState(false)

  //   const changeNav = () => {
  //     if (window.scrollY >= 80) {
  //       setScrollNav(true)
  //     } else {
  //       setScrollNav(false)
  //     }
  //   }

  //   useEffect(() => {
  //     window.addEventListener('scroll', changeNav)
  //   }, [])

  //   const toggleHome = () => {
  //     scroll.scrollToTop()
  //   }

  return (
    <>
      <NavWrapper>
        <NavContainer>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Articles
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Social
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </NavWrapper>
    </>
  )
}

export default Navbar
