import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { TitleContainer, Title } from './TitleElements'

const TitleComponent = ({ title, isDarkMode, titleAnim, titleAnimTime }) => {
  return (
    <>
      <TitleContainer title={title}>
        <Title isDarkMode={isDarkMode}>
          <div data-aos={titleAnim} data-aos-duration={titleAnimTime}>
            {title}
          </div>
        </Title>
      </TitleContainer>
    </>
  )
}

export default TitleComponent
