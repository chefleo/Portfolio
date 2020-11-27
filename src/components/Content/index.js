import React, { useEffect, useState } from 'react'
import { When } from 'react-if'
import TitleComponent from './Title/index'
import TextComponent from './TextCol/index'
import SvgComponent from './SvgComponent/index'
import {
  ContentContainer,
  ContentWrapper,
  ContentRow,
  Column1,
  Column2,
  ImgWrap,
  ImageComp,
  // Layer1,
  // Svg,
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
  ImageAnimTime,
  titleAnim,
  titleAnimTime,
  topLineAnim,
  topLineAnimTime,
  headlineAnim,
  headlineAnimTime,
  headlineDelay,
  subtitleAnim,
  subtitleAnimTime,
  subtitleDelay,
  buttonAnim,
  buttonAnimTime,
  url,
  alternativeColor,
  isDarkMode,
}) => {
  const [isNotRender, setRender] = useState(true)

  useEffect(() => {
    setRender(!isNotRender)
  }, [])

  const clickHandle = () => {
    window.open(url, '_blank')
  }

  return (
    <>
      <ContentContainer alternativeColor={alternativeColor}>
        <TitleComponent
          title={title}
          isDarkMode={isDarkMode}
          titleAnim={titleAnim}
          titleAnimTime={titleAnimTime}
        />
        <ContentWrapper>
          <ContentRow imgStart={imgStart}>
            <Column1 imgStart={imgStart}>
              {isNotRender ? null : (
                <TextComponent
                  presentation={presentation}
                  topLine={topLine}
                  topLineAnim={topLineAnim}
                  topLineAnimTime={topLineAnimTime}
                  headline={headline}
                  headlineAnim={headlineAnim}
                  headlineAnimTime={headlineAnimTime}
                  headlineDelay={headlineDelay}
                  subtitle={subtitle}
                  subtitleAnim={subtitleAnim}
                  subtitleAnimTime={subtitleAnimTime}
                  subtitleDelay={subtitleDelay}
                  buttonLabel={buttonLabel}
                  buttonAnim={buttonAnim}
                  buttonAnimTime={buttonAnimTime}
                  buttonColor={buttonColor}
                  clickHandle={clickHandle}
                />
              )}
            </Column1>
            <Column2 imgStart={imgStart} presentation={presentation}>
              <ImageComp
                data-aos={ImageAnim}
                data-aos-duration={ImageAnimTime}
                presentation={presentation}
                src={img}
                alt="Picture of the author"
                layout="responsive"
                width={imgWidth}
                height={imgHeight}
              />
            </Column2>
          </ContentRow>
        </ContentWrapper>
        {isNotRender ? null : (
          <When condition={presentation}>
            <SvgComponent presentation={presentation} isDarkMode={isDarkMode} />
          </When>
        )}
      </ContentContainer>
    </>
  )
}

export default Content
