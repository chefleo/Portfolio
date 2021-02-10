import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../src/theme/theme'
import {
  presentation,
  Portfolio,
  Starchef,
  Libra,
} from '../src/components/Content/data'

import dynamic from 'next/dynamic'

import Navbar from '../src/components/Navbar'
// const Navbar = dynamic(
//   () => {
//     return import('../src/components/Navbar')
//   },
//   { ssr: false }
// )
import Content from '../src/components/Content'
const ContentDynamic = dynamic(
  () => {
    return import('../src/components/Content')
  },
  { ssr: false }
)
// import Sidebar from '../src/components/Sidebar'
const Sidebar = dynamic(
  () => {
    return import('../src/components/Sidebar')
  },
  { ssr: false }
)

// import Footer from '../src/components/Footer'

const Footer = dynamic(
  () => {
    return import('../src/components/Footer')
  },
  { ssr: false }
)

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

        <section id="projects">
          <ContentDynamic title="Projects" {...Portfolio} />
          <ContentDynamic {...Starchef} />
        </section>

        <section id="articles">
          <ContentDynamic title="Articles" {...Libra} />
        </section>

        <section id="social">
          <Footer id="social" />
        </section>
      </ThemeProvider>
    </>
  )
}
