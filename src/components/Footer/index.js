import React from 'react'
import {
  FooterContainer,
  FooterWrap,
  FooterLink,
  FooterIcon,
  FooterCopyright,
  FootNote,
  HighLight,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from './FooterElements'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLink
            href="https://www.facebook.com/leonardosimone.digiorgio"
            target="_blank"
            aria-label="Facebook"
          >
            <FooterIcon facebook>
              <FaFacebook />
            </FooterIcon>
          </FooterLink>
          <FooterLink
            href="https://twitter.com/simdigiorgio"
            target="_blank"
            aria-label="Twitter"
          >
            <FooterIcon twitter>
              <FaTwitter />
            </FooterIcon>
          </FooterLink>
          <FooterLink
            href="https://it.linkedin.com/in/leonardo-simone-digiorgio-091630112"
            target="_blank"
            aria-label="Linkedin"
          >
            <FooterIcon linkedin>
              <FaLinkedin />
            </FooterIcon>
          </FooterLink>
        </FooterWrap>

        <FooterCopyright>
          <FootNote>DIGIORGIO LEONARDO</FootNote>
          <HighLight>©{new Date().getFullYear()}</HighLight>
        </FooterCopyright>
      </FooterContainer>
    </>
  )
}

export default Footer
