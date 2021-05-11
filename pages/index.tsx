/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import RecentProjects from '../src/components/Landing/RecentProjects'
import Header from '../src/components/Landing/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - PeerawitP.me</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Home Page" content="It's me, Peerawit!" />
        <meta name="Description" content="This is a homepage of my website!" />
      </Head>
      <section className="w-11/12 px-4 md:px-0 pt-40 md:pt-44 lg:pt-48 mx-auto md:w-3/4 lg:w-2/4 mt-0 ">
        <Header />
        <RecentProjects />
      </section>
    </>
  )
}

export default Home
