import styled from 'styled-components'
import {
  FaFacebookF as FB,
  FaTwitter as FT,
  FaLinkedin as FL,
} from 'react-icons/fa'

export const FooterContainer = styled.footer`
  background: ${(props) => props.theme.footerBg};
  padding: 30px 0 30px 0;
  position: relative;
`

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const FooterLink = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`

export const FooterIcon = styled.div`
  background: ${(props) => props.theme.footerIcon};
  color: ${(props) => props.theme.footerText};
  cursor: pointer;
  font-size: 24pt;
  height: 70px;
  width: 70px;
  margin: 0 15px;
  overflow: hidden;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    left: 0;
    right: 100%;
    bottom: 0;
    background: ${(props) =>
      props.facebook
        ? '#3b5998'
        : props.twitter
        ? '#1da1f2'
        : props.linkedin
        ? '#00a0dc'
        : '#ffffff'};
    height: 4px;
    -webkit-transition-property: right;
    transition-property: right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  &:hover:before {
    right: 0;
  }
`
export const FaFacebook = styled(FB)`
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-property: color;
  transition-property: color;

  ${FooterLink}:hover & {
    color: #3b5998;
  }
  ${FooterIcon}:before &&& {
    background: #3b5998;
  }
`

export const FaTwitter = styled(FT)`
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-property: color;
  transition-property: color;
  ${FooterLink}:hover & {
    color: #1da1f2;
  }

  ${FooterLink}:hover:before & {
    right: 0;
  }
`

export const FaLinkedin = styled(FL)`
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-property: color;
  transition-property: color;
  ${FooterLink}:hover & {
    color: #00a0dc;
  }
`

export const FooterCopyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FootNote = styled.div`
  color: ${(props) => props.theme.footerText};
  font-size: 10pt;
  margin-top: 35px;
  margin-right: 10px;
  opacity: 0.6;
`

export const HighLight = styled.span`
  color: ${(props) => props.theme.topLineColor};
  font-family: 'Open Sans';
  margin-top: 35px;
`
