import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'

export const NavWrapper = styled.nav`
  background-color: ${(props) => props.theme.navColor};
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 10;
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`

export const NavContainer = styled.nav`
  /* background: orange; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  z-index: 1;
  width: 100%;
  padding: 0 30px;
  max-width: 1100px;
`

export const NavToggle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-right: auto;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavMenu = styled.ul`
  /* background: yellow; */
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding: 2px;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavItem = styled.li`
  background-color: ${(props) => props.theme.navColor};
  /* padding: 0 1em; */
  height: 4em;

  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  /* background: #e1e1e1; */
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.theme.navHover};
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  &:hover:before {
    transform: scale(1);
    filter: brightness(110%);
    color: white;
  }
`

export const NavLinks = styled(LinkS)`
  /* background: white; */
  color: ${(props) => props.theme.navTextColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  /* border: 3px solid blue; */

  &.active {
    border-bottom: 3px solid ${(props) => props.theme.topLineColor};
  }
`
