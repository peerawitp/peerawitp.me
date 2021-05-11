/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { GoogleFonts } from 'next-google-fonts'
import { Windmill } from '@windmill/react-ui'
import Nav from '../src/components/Nav'
import ScrollToTop from '../src/containers/scrollToTop'
import Footer from '../src/components/Footer'
import '../src/css/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = () => {
      //console.log('handleRouteChange Active')
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Windmill usePreferences>
        <Nav />
        <Component {...pageProps} />
        <section className="w-full mt-8 ">
          {/* bg-gradient-to-b dark:from-black dark:to-gray-900  from-white to-gray-300 */}
          <ScrollToTop />
          <Footer />
        </section>
      </Windmill>
    </>
  )
}
export default App
