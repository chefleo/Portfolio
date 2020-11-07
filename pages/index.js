import { useState } from 'react'
import Navbar from '../src/components/Navbar'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../src/theme/theme'
import Content from '../src/components/Content'
import { presentation } from '../src/components/Content/data'

export default function Home() {
  const [useDarkTheme, setUseDarkTheme] = useState(true)
  const presentationBool = true
  return (
    <>
      <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
        <Navbar />
        <Content
          title="aaaaa"
          presentation={presentationBool}
          {...presentation}
        />
      </ThemeProvider>
    </>
  )
}
