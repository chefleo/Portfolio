import styled, { keyframes } from 'styled-components'
import { slideRight, slideBottom, slideLeft } from '../Animation'
import Image from 'next/image'

export const ContentContainer = styled.div`
  color: ${(props) => props.theme.textColor};
  background: ${(props) => ({ alternativeColor }) =>
    alternativeColor
      ? props.theme.contentColorAlternative
      : props.theme.contentColor};
  position: relative;
  z-index: 0;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const Layer1 = styled.div`
  display: ${({ presentation }) => (presentation ? 'flex' : 'none')};
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
`

export const Svg = styled.svg`
  width: calc(121% + 1.3px);
  height: 600px;
  /* transform: rotateY(180deg); */
  fill: ${(props) => props.theme.contentColor};
  filter: ${({ isDarkMode }) =>
    isDarkMode ? 'brightness(80%)' : 'brightness(100%)'};
`

export const Title = styled.h1`
  display: ${({ title }) => (title ? 'block' : 'none')};
  margin: 0;
  padding: 40px;
  background: ${(props) => props.theme.contentTitle};

  font-size: 30px;
  font-family: 'Montserrat', sans-serif;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  color: ${(props) => ({ isDarkMode }) =>
    isDarkMode ? props.theme.textColor : props.theme.navTextColor};
  text-transform: uppercase;
  /* text-decoration: underline; */
  /* -webkit-animation: ${slideRight} 1s ease-out both;
  animation: ${slideRight} 1s ease-out both; */
`

export const ContentWrapper = styled.div`
  /* background: red; */
  display: flex;
  z-index: 1;
  height: 710px;
  width: 100%;
  /* max-width: 1100px; */
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const ContentRow = styled.div`
  /* background: orange; */
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    /* grid-template-areas: 'col2' 'col1'; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`
// ${({ imgStart }) =>
//       imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};

export const Column1 = styled.div`
  /* background: green; */
  /* margin-bottom: 15px;
  padding: 0 15px; */
  display: flex;
  justify-content: center;
  text-align: center;

  grid-area: col1;

  @media screen and (max-width: 768px) {
    order: ${({ imgStart }) => (imgStart ? '1' : '2')};
  }
`

export const Column2 = styled.div`
  /* background: green; */
  /* margin-bottom: 15px;
  padding: 0 15px; */
  display: flex;
  justify-content: ${({ imgStart }) => (imgStart ? 'center' : 'flex-end')};
  padding-right: 20px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.p`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${(props) => props.theme.textColor};

  /* -webkit-animation: ${slideBottom} 1.8s ease-out 0.5s both;
  animation: ${slideBottom} 1.8s ease-out 0.5s both; */

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  max-width: 540px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  /* -webkit-animation: ${slideLeft} 1.8s ease-out 0.8s both;
  animation: ${slideLeft} 1.8s ease-out 0.8s both; */
  color: ${(props) => props.theme.textColor};
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  /* -webkit-animation: ${slideRight} 1.8s ease-out 0.8s both;
  animation: ${slideRight} 1.8s ease-out 0.8s both; */
`

export const ImgWrap = styled.div`
  max-width: 550px;
  height: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 50%;
`

export const ImageComp = styled(Image)`
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: ${({ presentation }) => (presentation ? '50%' : '0px')};
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.529);
`
