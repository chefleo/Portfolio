import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

// import ReactGA from 'react-ga'

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  id: 'GTM-WTPZT4V',
}

export function reportWebVitals(metric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }) {
  // const router = useRouter()
  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url)
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  // useEffect(() => {
  //   ReactGA.initialize('G-3FTMDK2TBC')
  // }, [])

  return <Component {...pageProps} />
}

export default MyApp
