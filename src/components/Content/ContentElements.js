import styled from 'styled-components'
import { slideRight, slideLeft, slideUp } from '../Animation'

import Image from 'next/image'

export const ContentContainer = styled.div`
  color: ${(props) => props.theme.textColor};
  background: ${(props) => ({ alternativeColor }) =>
    alternativeColor
      ? props.theme.contentColorAlternative
      : props.theme.contentColor};
  position: relative;
  z-index: 0;
  width: 100%;
  overflow-x: hidden;
  /* height: ${({ presentation }) => (presentation ? '100vh' : '')}; */
`

export const ContentWrapper = styled.div`
  /* background: red; */
  display: flex;
  z-index: 1;
  /* height: ${({ presentation }) => (presentation ? '100vh' : '710px')}; */
  height: 710px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 480px) {
    display: inline;
  }
`

export const ContentRow = styled.div`
  /* background: orange; */
  width: 95%;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col2  col1 col1'` : `'col1 col1 col2 col2 '`};

  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
  }
`

export const Column1 = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  grid-area: col1;

  @media screen and (max-width: 850px) {
    order: ${({ imgStart }) => (imgStart ? '1' : '2')};
  }

  @media screen and (max-width: 480px) {
    order: ${({ imgStart }) => (imgStart ? '1' : '2')};
  }
`

export const Column2 = styled.div`
  /* background: green; */
  width: 100%;
  margin-bottom: 15px;
  margin-top: 25px;
  padding: 0 15px;
  display: flex;
  justify-content: ${({ presentation }) =>
    presentation ? 'flex-end' : 'center'};
  grid-area: col2;

  @media screen and (max-width: 850px) {
    justify-content: center;
    align-items: center;
  }
`

export const ImgWrap = styled.div`
  max-width: 550px;
  height: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`

export const ImageComp = styled(Image)`
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: ${({ presentation }) => (presentation ? '50%' : '0px')};
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.529);

  animation-name: ${({ ImageAnim }) => {
    if (ImageAnim === 'slideUp') return slideUp
    if (ImageAnim === 'slideRight') return slideRight
    if (ImageAnim === 'slideLeft') return slideLeft
  }};
  animation-duration: ${({ ImageAnimTime }) =>
    ImageAnimTime ? ImageAnimTime : ''};
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-fill-mode: both;
`
