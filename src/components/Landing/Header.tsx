/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Main = () => {
  return (
    <main className="flex flex-col space-y-12 divide-y divide-gray-200 mb-32 ">
      <div>
        <p className="mt-3 sm:w-9/12 mb-2  text-blue-800 dark:text-blue-400 md:w-10/12 lg:w-full text-base md:text-lg font-bold ">
          Hey there,
        </p>
        <h1 className="text-4xl md:mb-5  md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight dark:text-gray-100  sm:leading-10   md:leading-14">
          I&apos;m Peerawit 👋
        </h1>
        <p className="mt-3 mb-6 md:mb-8 sm:w-9/12  text-gray-900 dark:text-gray-300 md:w-10/12 lg:w-full text-base md:text-lg font-medium ">
          Feel free to check out my profile :)
        </p>
      </div>
    </main>
  )
}

export default Main
