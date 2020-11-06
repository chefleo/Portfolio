import React from 'react'
import {
  ContentContainer,
  ContentWrapper,
  ContentRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  ImageComp,
} from './ContentElements'

const Content = ({
  presentation,
  imgStart,
  topLine,
  headline,
  description,
  img,
  imgWidth,
  imgHeight,
  buttonLabel,
}) => {
  return (
    <>
      <ContentContainer>
        <ContentWrapper>
          <ContentRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headline}</Heading>
                <Subtitle>{description}</Subtitle>
                {/* <BtnWrap>
                  <Button
                  // to="home"
                  // smooth={true}
                  // duration={500}
                  // spy={true}
                  // exact="true"
                  // offset={-80}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                {/* <Img src={img} alt={alt} /> */}
                <ImageComp
                  presentation={presentation}
                  src={img}
                  alt="Picture of the author"
                  width={imgWidth}
                  height={imgHeight}
                />
              </ImgWrap>
            </Column2>
          </ContentRow>
        </ContentWrapper>
      </ContentContainer>
    </>
  )
}

export default Content
