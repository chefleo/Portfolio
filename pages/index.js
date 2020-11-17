import { useState, useEffect } from 'react'
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

export default function Home() {
  const [useDarkTheme, setUseDarkTheme] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isOpen, setisOpen] = useState(false)

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
        <Sidebar isOpen={isOpen} toggle={open} />
        <Navbar toggle={toggle} open={open} isDarkMode={isDarkMode} />
        <Content
          presentation="true"
          isDarkMode={isDarkMode}
          {...presentation}
        />
        <section id="projects">
          <Content title="Projects" {...Portfolio} />
          <Content {...Starchef} />
        </section>
        <section id="articles">
          <Content title="Articles" {...Libra} />
        </section>
      </ThemeProvider>
    </>
  )
}
