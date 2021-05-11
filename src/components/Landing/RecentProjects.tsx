/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import { ClickArrow } from '../Icons/Icons'

const RecentProjects = () => {
  return (
    <section>
      <div className="text-left mt-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-5   dark:text-white text-black">Recent Projects</h2>
      </div>
      <div className="hover:shadow-lg focus:shadow-lg  mb-5 flex flex-col border border-gray-400 hover:border-gray-600  dark:border-gray-600 dark:hover:border-gray-400  rounded-lg md:mt-5">
        <a
          href="https://github.com/peerawitp/discordjs-thaipost"
          target="_blank"
          rel="noopener noreferrer"
          className="focus:bg-gray-100 dark:focus:bg-gray-900 p-4 flex"
        >
          <div>
            <h3 className="mb-2 text-xl font-semibold tracking-normal  dark:text-gray-100 ">discordjs-thaipost</h3>
            <p className="text-sm md:text-base font-normal text-gray-900   dark:text-gray-300">
              📫 JavaScript based discord bot included thaipost command for track thaipost parcel using ThaiPost API. Based on EvoBot.
            </p>
            <ul className="flex md:justify-end text-xs md:text-sm mt-3  font-semibold">
              <li className="md:ml-1 mr-3">
                <i>JavaScript</i>
              </li>
              <li className="md:ml-1 mr-3">
                <i>discord.js</i>
              </li>
              <li className="md:ml-1 mr-3 md:mr-0">
                <i>ThaiPost API</i>
              </li>
            </ul>
          </div>
        </a>
      </div>
      <div className="hover:shadow-lg focus:shadow-lg  mb-5 flex flex-col border border-gray-400 hover:border-gray-600  dark:border-gray-600 dark:hover:border-gray-400  rounded-lg md:mt-5">
        <a
          href="https://github.com/peerawitp/discordjs-thaipost"
          target="_blank"
          rel="noopener noreferrer"
          className="focus:bg-gray-100 dark:focus:bg-gray-900 p-4 flex"
        >
          <div>
            <h3 className="mb-2 text-xl font-semibold tracking-normal  dark:text-gray-100 ">fluttercovidthai</h3>
            <p className="text-sm md:text-base font-normal text-gray-900   dark:text-gray-300">
                🦠 Mobile Application for tracking COVID-19 in Thailand using flutter as application based and webview_flutter package.
            </p>
            <ul className="flex md:justify-end text-xs md:text-sm mt-3  font-semibold">
              <li className="md:ml-1 mr-3">
                <i>Flutter</i>
              </li>
              <li className="md:ml-1 mr-3">
                <i>Dart</i>
              </li>
              <li className="md:ml-1 mr-3">
                <i>Java</i>
              </li>
              <li className="md:ml-1 mr-3 md:mr-0">
                <i>Objective-C</i>
              </li>
            </ul>
          </div>
        </a>
      </div>
      <Link href="https://github.com/peerawitp/">
        <a className=" flex justify-center p-3 focus:text-gray-800  dark:text-gray-300 dark:focus:text-white">
          <div className="text-center text-sm   md:text-base cursor-pointer">More Projects</div>
          <ClickArrow />
        </a>
      </Link>
    </section>
  )
}

export default RecentProjects
