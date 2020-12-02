import React, { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../src/theme/theme'
import {
  presentation,
  Portfolio,
  Starchef,
  Libra,
} from '../src/components/Content/data'

import Navbar from '../src/components/Navbar'
import Content from '../src/components/Content'
import Sidebar from '../src/components/Sidebar'
import Footer from '../src/components/Footer'

// import ReactGA from 'react-ga'

export default function Home() {
  const [useDarkTheme, setUseDarkTheme] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isOpen, setisOpen] = useState(false)
  const [isNotRender, setRender] = useState(true)

  // useEffect(() => {
  //   ReactGA.initialize('G-3FTMDK2TBC')
  //   ReactGA.pageview(window.location.pathname + window.location.search)
  // }, [])

  useEffect(() => {
    setRender(!isNotRender)
  }, [])

  useEffect(() => {
    Aos.init({})
  }, [])

  const toggle = () => {
    setUseDarkTheme(!useDarkTheme)
    setIsDarkMode(!isDarkMode)
  }

  const open = () => {
    setisOpen(!isOpen)
  }

  return (
    <>
      <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
        {isNotRender ? null : <Sidebar isOpen={isOpen} toggle={open} />}
        <Navbar toggle={toggle} open={open} isDarkMode={isDarkMode} />
        <Content
          presentation="true"
          isDarkMode={isDarkMode}
          {...presentation}
        />
        {isNotRender ? null : (
          <section id="projects">
            <Content title="Projects" {...Portfolio} />
            <Content {...Starchef} />
          </section>
        )}
        {isNotRender ? null : (
          <section id="articles">
            <Content title="Articles" {...Libra} />
          </section>
        )}
        {isNotRender ? null : (
          <section id="social">
            <Footer id="social" />
          </section>
        )}
      </ThemeProvider>
    </>
  )
}
