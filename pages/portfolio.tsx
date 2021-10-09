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
              <p className="mb-4">📅 I'm 18 years old.</p>
              <p className="mb-4">🌱 My hobby is playing games and coding :)</p>
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
        <div className="divide-y divide-gray-800">
          <div className=" space-y-2 md:space-y-5">
            <h2 className="pb-3 lg:pb-1 lg:mb-5 text-2xl leading-9 tracking-tight dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14">
              Medal & Certificate
            </h2>
          </div>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-fill object-center"
                    src="uru-sciweek_certs.jpg"
                    alt="urusciweek"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">2020</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 dark:text-gray-200 mb-3">
                      แข่งขันการเขียนโปรแกรมภาษาซี ระดับม.ปลาย
                    </h1>
                    <div className="inline-flex items-center leading-none text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      มหาวิทยาลัยราชภัฏอุตรดิตถ์
                    </div>
                    <p className="leading-relaxed mb-3 inline-flex">
                      รางวัลชนะเลิศในงานสัปดาห์วิทยาศาสตร์แห่งชาติ ปี 2563
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-fill object-center"
                    src="nu-sciweek.jpg"
                    alt="nusciweek"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">2020</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 dark:text-gray-200 mb-3">
                      ประกวดโครงงานวิทยาศาสตร์ สาขาวิทยาศาสตร์ประยุกต์
                    </h1>
                    <div className="inline-flex items-center leading-none text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      มหาวิทยาลัยนเรศวร
                    </div>
                    <p className="leading-relaxed mb-3">ในงานสัปดาห์วิทยาศาสตร์แห่งชาติส่วนภูมิภาค ครั้งที่ 31</p>
                    <a
                      href="https://www.facebook.com/PRUTD/posts/2869599609992245"
                      target="_blank"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      More Information
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-fill object-center"
                    src="silapa69_certs.jpg"
                    alt="silapa69"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">2019</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 dark:text-gray-200 mb-3">
                      ประกวดโครงงานคอมพิวเตอร์ ประเภท Software
                    </h1>
                    <div className="inline-flex items-center leading-none text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      โรงเรียนอุตรดิตถ์ดรุณี
                    </div>
                    <p className="leading-relaxed mb-3 inline-flex">
                      รางวัลรองชนะเลิศ ในงานศิลปหัตถกรรมนักเรียน ครั้งที่ 69 ปี 2562
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed">
              The advance of technology is based on making it fit in so that you don't really even notice it, so it's
              part of everyday life.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm dark:text-gray-400">
              Bill Gates
            </h2>
            <p className="text-gray-500">Co-founder of Microsoft</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
