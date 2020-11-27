import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import DarkModeToggle from 'react-dark-mode-toggle'
import { IconContext } from 'react-icons/lib'
// import { animateScroll as scroll } from 'react-scroll'
import {
  NavWrapper,
  NavContainer,
  NavMenu,
  NavItem,
  NavLinks,
  NavToggle,
  MobileIcon,
} from './NavbarElements'

const Navbar = ({ toggle, isDarkMode, open }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const [isNotRender, setRender] = useState(true)

  useEffect(() => {
    setRender(!isNotRender)
  }, [])

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  //   const toggleHome = () => {
  //     scroll.scrollToTop()
  //   }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <NavWrapper>
          <NavContainer>
            {isNotRender ? null : (
              <NavToggle>
                <DarkModeToggle
                  onChange={toggle}
                  checked={isDarkMode}
                  size={80}
                />
              </NavToggle>
            )}
            {isNotRender ? null : (
              <MobileIcon onClick={open}>
                <FaBars />
              </MobileIcon>
            )}
            {isNotRender ? null : (
              <NavMenu>
                <NavItem>
                  <NavLinks
                    to="projects"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-60}
                  >
                    Projects
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="articles"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-60}
                  >
                    Articles
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="social"
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
            )}
          </NavContainer>
        </NavWrapper>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
