import React, { useEffect, useState } from 'react'
import { When } from 'react-if'
import { TitleContainer, Title } from './TitleElements'

const TitleComponent = ({ title, isDarkMode }) => {
  const [showTitle, setShowTitle] = useState(false)
  const titleRef = React.useRef()

  const handleScroll = () => {
    if (!titleRef.current) {
      // console.log('no title')
      return
    } else if (
      titleRef.current.getBoundingClientRect().top <=
      window.innerHeight * 0.8
    ) {
      // console.log('In the scroll', title)
      setShowTitle(true)
    }
  }

  useEffect(() => {
    handleScroll()
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])
  return (
    <>
      <TitleContainer title={title} ref={titleRef}>
        <When condition={showTitle}>
          <Title isDarkMode={isDarkMode}>{title}</Title>
        </When>
      </TitleContainer>
    </>
  )
}

export default TitleComponent
