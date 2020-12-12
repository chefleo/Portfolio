import styled from 'styled-components'
import { slideRight } from '../../Animation'

export const TitleContainer = styled.div`
  display: ${({ title }) => (title ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  top: 0;
  margin: 0;
  background: ${(props) => props.theme.contentTitle};
  width: 100%;
  height: 90px;
`

export const Title = styled.h1`
  padding: 5px;
  font-size: 30px;
  font-family: 'Montserrat', sans-serif;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  color: ${(props) => ({ isDarkMode }) =>
    isDarkMode ? props.theme.textColor : props.theme.navTextColor};
  text-transform: uppercase;

  animation-name: ${slideRight};
  animation-duration: 2.6s;
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-fill-mode: both;
`
