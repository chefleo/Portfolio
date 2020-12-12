import React from 'react'
import { Button } from '../../ButtonElement'
import { When } from 'react-if'
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
        <When condition={!presentation}>
          <TopLine topLineAnim={topLineAnim} topLineAnimTime={topLineAnimTime}>
            {topLine}
          </TopLine>
        </When>
        <Heading
          headlineAnim={headlineAnim}
          headlineAnimTime={headlineAnimTime}
          headlineDelay={headlineDelay}
        >
          {headline}
        </Heading>
        <Subtitle
          subtitleAnim={subtitleAnim}
          subtitleAnimTime={subtitleAnimTime}
          subtitleDelay={subtitleDelay}
        >
          {subtitle}
        </Subtitle>
        <When condition={!presentation}>
          <BtnWrap
            presentation={presentation}
            buttonAnim={buttonAnim}
            buttonAnimTime={buttonAnimTime}
          >
            <Button buttonColor={buttonColor} onClick={clickHandle}>
              {buttonLabel}
            </Button>
          </BtnWrap>
        </When>
      </TextWrapper>
    </>
  )
}

export default TextComponent
