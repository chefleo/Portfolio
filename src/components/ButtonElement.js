import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled.button`
  border-radius: 50px;
  background: ${(props) => props.theme.buttonColor};
  white-space: nowrap;
  padding: 14px 48px;
  color: ${(props) => props.theme.textColorInverted};
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    filter: brightness(120%);
  }
`

//padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
//font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
