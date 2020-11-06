import styled from 'styled-components'
import Image from 'next/image'

export const ContentContainer = styled.div`
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.contentColor};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const ContentWrapper = styled.div`
  /* background: red; */
  display: flex;
  z-index: 1;
  height: 800px;
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

  /* @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  } */
`

export const Column1 = styled.div`
  /* background: green; */
  /* margin-bottom: 15px;
  padding: 0 15px; */
  display: flex;
  justify-content: center;
  text-align: center;

  grid-area: col1;
`

export const Column2 = styled.div`
  /* background: green; */
  /* margin-bottom: 15px;
  padding: 0 15px; */
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  grid-area: col2;
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

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  max-width: 540px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => props.theme.textColor};
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
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
