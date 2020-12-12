import styled from 'styled-components'
import { slideRight, slideLeft, slideUp, fade } from '../../Animation'

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const TopLine = styled.p`
  color: ${(props) => props.theme.topLineColor};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  animation-name: ${({ topLineAnim }) => {
    if (topLineAnim === 'slideUp') return slideUp
    if (topLineAnim === 'slideRight') return slideRight
    if (topLineAnim === 'slideLeft') return slideLeft
  }};
  animation-duration: ${({ topLineAnimTime }) =>
    topLineAnimTime ? topLineAnimTime : ''};
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-fill-mode: both;
`

export const Heading = styled.p`
  margin-bottom: 24px;
  margin-top: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${(props) => props.theme.textColor};
  animation-name: ${({ headlineAnim }) => {
    if (headlineAnim === 'slideUp') return slideUp
    if (headlineAnim === 'slideRight') return slideRight
    if (headlineAnim === 'slideLeft') return slideLeft
    if (headlineAnim === 'fade') return fade
  }};
  animation-duration: ${({ headlineAnimTime }) =>
    headlineAnimTime ? headlineAnimTime : ''};
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-fill-mode: both;
  animation-delay: ${({ headlineDelay }) =>
    headlineDelay ? headlineDelay : ''};

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

  animation-name: ${({ subtitleAnim }) => {
    if (subtitleAnim === 'slideUp') return slideUp
    if (subtitleAnim === 'slideRight') return slideRight
    if (subtitleAnim === 'slideLeft') return slideLeft
    if (subtitleAnim === 'fade') return fade
  }};
  animation-duration: ${({ subtitleAnimTime }) =>
    subtitleAnimTime ? subtitleAnimTime : ''};
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-fill-mode: both;
  animation-delay: ${({ subtitleDelay }) =>
    subtitleDelay ? subtitleDelay : ''};
`

export const BtnWrap = styled.div`
  display: ${({ presentation }) => (presentation ? 'none' : 'flex')};
  justify-content: center;
  margin-top: 20px;

  animation-name: ${({ buttonAnim }) => {
    if (buttonAnim === 'slideUp') return slideUp
    if (buttonAnim === 'slideRight') return slideRight
    if (buttonAnim === 'slideLeft') return slideLeft
    if (buttonAnim === 'flip') return flip
  }};
  animation-duration: ${({ buttonAnimTime }) =>
    buttonAnimTime ? buttonAnimTime : ''};
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-fill-mode: both;
`
