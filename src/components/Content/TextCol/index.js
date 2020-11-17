import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Button } from '../../ButtonElement'

import {
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
} from './TextElements'

const TextComponent = ({
  presentation,
  topLine,
  topLineAnim,
  topLineAnimTime,
  headline,
  headlineAnim,
  headlineAnimTime,
  headlineDelay,
  subtitle,
  subtitleAnim,
  subtitleAnimTime,
  subtitleDelay,
  buttonLabel,
  buttonAnim,
  buttonAnimTime,
  buttonColor,
  clickHandle,
}) => {
  return (
    <>
      <TextWrapper>
        <TopLine data-aos={topLineAnim} data-aos-duration={topLineAnimTime}>
          {topLine}
        </TopLine>
        <Heading
          data-aos={headlineAnim}
          data-aos-duration={headlineAnimTime}
          data-aos-delay={headlineDelay}
        >
          {headline}
        </Heading>
        <Subtitle
          data-aos={subtitleAnim}
          data-aos-duration={subtitleAnimTime}
          data-aos-delay={subtitleDelay}
        >
          {subtitle}
        </Subtitle>
        <BtnWrap
          presentation={presentation}
          data-aos={buttonAnim}
          data-aos-duration={buttonAnimTime}
        >
          <Button buttonColor={buttonColor} onClick={clickHandle}>
            {buttonLabel}
          </Button>
        </BtnWrap>
      </TextWrapper>
    </>
  )
}

export default TextComponent
