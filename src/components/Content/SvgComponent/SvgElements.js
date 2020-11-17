import styled from 'styled-components'

export const Layer1 = styled.div`
  display: ${({ presentation }) => (presentation ? 'flex' : 'none')};
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
`

export const Svg = styled.svg`
  width: calc(121% + 1.3px);
  height: 600px;
  /* transform: rotateY(180deg); */
  fill: ${(props) => props.theme.contentColor};
  filter: ${({ isDarkMode }) =>
    isDarkMode ? 'brightness(80%)' : 'brightness(100%)'};
`
