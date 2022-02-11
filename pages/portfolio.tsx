/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { LocationMarkerIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio - PeerawitP.me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content="Portfolio." />
      </Head>
      <section className="max-w-5xl w-11/12 px-4 md:px-0 pt-24 md:pt-28 lg:pt-32 mx-auto md:w-3/4 lg:w-10/12 dark:text-gray-300">
        <div className="divide-y divide-gray-800">
          <div className="space-y-2 md:space-y-5">
            <h2 className="pb-3 lg:pb-1 lg:mb-5 text-2xl leading-9 tracking-tight dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14">
              Profile
            </h2>
          </div>
          <div className="items-start space-y-2 lg:grid lg:grid-cols-3 lg:space-y-0 lg:pt-4">
            <div className="flex flex-col items-center pt-6 xl:pt-5">
              <img src="/profile.jpg" alt="avatar" className="w-48 h-48 rounded-full" />
            </div>
            <div className="font-normal lg:pt-4 pb-8 lg:col-span-2 text-base sm:w-9/12 md:w-10/12 mx-auto  lg:mx-0">
              <p className="mb-4">👋 My name is Peerawit Pharkdeepinyo (Jao).</p>
              <p className="mb-4">✨ Quite interested in Cyber Security.</p>
              <p className="mb-4">📚 Education Timeline:</p>
              <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
                <div className="flex flex-row-reverse md:contents">
                  <div className="col-start-1 col-end-5 my-4 mr-auto shadow-md leading-snug bg-gray-100 dark:bg-gray-900 p-4 rounded-lg text-black dark:text-gray-100">
                    <h3 className="font-semibold text-lg mb-1">2010-2016</h3>
                    <p className="leading-tight">Satit Uttaradit Rajabhat University School</p>
                  </div>
                  <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 dark:bg-gray-800 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 dark:bg-gray-700 shadow"></div>
                  </div>
                </div>
                <div className="flex md:contents">
                  <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 dark:bg-gray-800 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 dark:bg-gray-700 shadow"></div>
                  </div>
                  <div className="col-start-6 col-end-10 my-4 mr-auto shadow-md leading-snug  bg-gray-100 dark:bg-gray-900 p-4 rounded-lg text-black dark:text-gray-100">
                    <h3 className="font-semibold text-lg mb-1">2017-NOW</h3>
                    <p className="leading-tight">Uttaradit School</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
