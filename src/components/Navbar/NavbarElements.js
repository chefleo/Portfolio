import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'

export const NavWrapper = styled.nav`
  background-color: ${(props) => props.theme.navColor};
  position: sticky;
  top: 0;
  z-index: 10;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`

export const NavContainer = styled.nav`
  /* background: orange; */
  display: flex;
  justify-content: center;
  height: 100%;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

export const NavMenu = styled.ul`
  /* background: yellow; */
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding: 2px;
  margin-right: -22px;
`
export const NavItem = styled.li`
  /* background: green; */
  padding: 0 3em;
  height: 80px;
`

export const NavLinks = styled(LinkS)`
  /* background: white; */
  color: ${(props) => props.theme.textColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  /* border: 3px solid blue; */

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`
