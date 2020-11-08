import React, { useEffect } from 'react'
import { Button } from '../ButtonElement'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
  ContentContainer,
  Title,
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
  Layer1,
  Svg,
} from './ContentElements'

const Content = ({
  title,
  presentation,
  imgStart,
  topLine,
  headline,
  subtitle,
  img,
  imgWidth,
  imgHeight,
  buttonLabel,
  buttonColor,
  ImageAnim,
  titleAnim,
  topLineAnim,
  headlineAnim,
  subtitleAnim,
  buttonAnim,
}) => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <ContentContainer>
        <Title title={title}>
          <div data-aos={titleAnim}>{title}</div>
        </Title>
        <ContentWrapper>
          <ContentRow imgStart={imgStart}>
            <Column1 imgStart={imgStart}>
              <TextWrapper>
                <TopLine data-aos={topLineAnim}>{topLine}</TopLine>
                <Heading
                  data-aos={headlineAnim}
                  data-aos-duration="2000"
                  // data-aos-delay="300"
                >
                  {headline}
                </Heading>
                <Subtitle data-aos={subtitleAnim}>{subtitle}</Subtitle>
                <BtnWrap data-aos={buttonAnim}>
                  <Button buttonColor={buttonColor}>{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2 imgStart={imgStart}>
              <ImgWrap data-aos={ImageAnim}>
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
        <Layer1 presentation={presentation}>
          <Svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </Svg>
        </Layer1>
      </ContentContainer>
    </>
  )
}

export default Content
