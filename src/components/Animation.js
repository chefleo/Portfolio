import { keyframes } from 'styled-components'

export const slideRight = keyframes`
  0% {
    -webkit-transform: translateX(-100px);
            transform: translateX(-100px);
            opacity: 0.0
  }
  100% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
            opacity: 1.0
  }
`

export const slideLeft = keyframes`
  0% {
      -webkit-transform: translateX(100px);
      transform: translateX(100px);
      opacity: 0.0
    }
    100% {
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
        opacity: 1.0
  }
`

export const slideUp = keyframes`
    0% {
    -webkit-transform: translateY(100px);
            transform: translateY(100px);
            opacity: 0.0
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
            opacity: 1.0
  }
`

export const fade = keyframes`
0% {
    opacity: 0.0
}
100% {
    opacity: 1.0
}
`
