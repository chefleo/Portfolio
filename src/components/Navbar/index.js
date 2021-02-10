import React from 'react'
import dynamic from 'next/dynamic'
import { IconContext } from 'react-icons/lib'
import { NavWrapper } from './NavbarElements'
import { FaBars } from 'react-icons/fa'

// const FaBars = dynamic(
//   () => {
//     return import('react-icons/fa').then((mod) => mod.FaBars)
//   },
//   { ssr: false }
// )

const DarkModeToggle = dynamic(
  () => {
    return import('react-dark-mode-toggle')
  },
  { ssr: false }
)

const NavContainer = dynamic(
  () => {
    return import('./NavbarElements').then((mod) => mod.NavContainer)
  },
  { ssr: false }
)

const NavMenu = dynamic(
  () => {
    return import('./NavbarElements').then((mod) => mod.NavMenu)
  },
  { ssr: false }
)

const NavItem = dynamic(
  () => {
    return import('./NavbarElements').then((mod) => mod.NavItem)
  },
  { ssr: false }
)

const NavLinks = dynamic(
  () => {
    return import('./NavbarElements').then((mod) => mod.NavLinks)
  },
  { ssr: false }
)

const NavToggle = dynamic(
  () => {
    return import('./NavbarElements').then((mod) => mod.NavToggle)
  },
  { ssr: false }
)

const MobileIcon = dynamic(
  () => {
    return import('./NavbarElements').then((mod) => mod.MobileIcon)
  },
  { ssr: false }
)

const Navbar = ({ toggle, isDarkMode, open }) => {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <NavWrapper>
          <NavContainer>
            <NavToggle>
              <DarkModeToggle
                onChange={toggle}
                checked={isDarkMode}
                size={80}
              />
            </NavToggle>

            <MobileIcon onClick={open}>
              <FaBars />
            </MobileIcon>

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
          </NavContainer>
        </NavWrapper>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
