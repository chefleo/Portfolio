import styled from 'styled-components'

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
`

export const Heading = styled.p`
  margin-bottom: 24px;
  margin-top: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${(props) => props.theme.textColor};

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
`

export const BtnWrap = styled.div`
  display: ${({ presentation }) => (presentation ? 'none' : 'flex')};
  justify-content: center;
  margin-top: 20px;
`
