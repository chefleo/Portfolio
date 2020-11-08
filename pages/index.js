import { useState, useEffect } from 'react'
import Navbar from '../src/components/Navbar'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../src/theme/theme'
import Content from '../src/components/Content'
import { presentation, test } from '../src/components/Content/data'

export default function Home() {
  const [useDarkTheme, setUseDarkTheme] = useState(true)

  return (
    <>
      <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
        <Navbar />
        <Content presentation="true" {...presentation} />
        <Content title="Projects" {...test} />
        <Content {...test} />
      </ThemeProvider>
    </>
  )
}
