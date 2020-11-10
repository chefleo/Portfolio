import { useState, useEffect } from 'react'
import Navbar from '../src/components/Navbar'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../src/theme/theme'
import Content from '../src/components/Content'
import { presentation, test, test2 } from '../src/components/Content/data'

export default function Home() {
  const [useDarkTheme, setUseDarkTheme] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggle = () => {
    setUseDarkTheme(!useDarkTheme)
    setIsDarkMode(!isDarkMode)
  }

  return (
    <>
      <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
        <Navbar toggle={toggle} isDarkMode={isDarkMode} />
        <Content
          presentation="true"
          isDarkMode={isDarkMode}
          {...presentation}
        />
        <section id="projects">
          <Content title="Projects" {...test} />
          <Content {...test2} />
          <Content {...test} />
        </section>
      </ThemeProvider>
    </>
  )
}
