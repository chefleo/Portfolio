import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
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
  const [showColumn, setShowColumn] = useState(false)
  const [showColumn2, setShowColumn2] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
  const columnRef = React.useRef()
  const column2Ref = React.useRef()
  const titleRef = React.useRef()

  const handleScroll = () => {
    // console.log('top', window.innerHeight * 0.7)
    // console.log('distance', img, columnRef.current.getBoundingClientRect().top)
    if (!showColumn) {
      if (
        columnRef.current.getBoundingClientRect().top <=
        window.innerHeight * 0.9
      ) {
        setShowColumn(true)
      }
    }
  }

  // First Time
  useEffect(() => {
    setRender(!isNotRender)
    // console.log(columnRef.current.getBoundingClientRect().top, img)
    handleScroll()
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  const clickHandle = () => {
    window.open(url, '_blank')
  }

  return (
    <>
      <ContentContainer
        alternativeColor={alternativeColor}
        presentation={presentation}
      >
        {title ? (
          <TitleComponent
            title={title}
            isDarkMode={isDarkMode}
            // showTitle={showTitle}
            // ref={titleRef}
          />
        ) : (
          ''
        )}

        <ContentWrapper presentation={presentation}>
          <ContentRow imgStart={imgStart}>
            <Column1 imgStart={imgStart} ref={columnRef}>
              {isNotRender ? null : (
                <When condition={showColumn}>
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
                    img={img}
                  />
                </When>
              )}
            </Column1>
            <Column2
              imgStart={imgStart}
              presentation={presentation}
              ref={column2Ref}
            >
              <When condition={showColumn}>
                <ImageComp
                  presentation={presentation}
                  ImageAnim={ImageAnim}
                  ImageAnimTime={ImageAnimTime}
                  src={img}
                  alt="Picture of the author"
                  layout="responsive"
                  width={imgWidth}
                  height={imgHeight}
                />
              </When>
            </Column2>
          </ContentRow>
        </ContentWrapper>

        <When condition={presentation}>
          <SvgComponent presentation={presentation} isDarkMode={isDarkMode} />
        </When>
      </ContentContainer>
    </>
  )
}

export default Content
