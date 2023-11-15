/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {
  const pathname = usePathname();
  return (
    <React.Fragment>
      <div className="relative flex-1 flex-col flex gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5">
        <div className="flex items-center gap-x-4 gap-y-2 justify-between p-4">
          <img
            className="h-10 object-contain"
            src="https://img.icons8.com/external-bearicons-flat-bearicons/64/external-Om-diwali-bearicons-flat-bearicons-2.png"
            alt="external-Om-diwali-bearicons-flat-bearicons-2"
          />
          <p className="text-sm leading-6 text-gray-900">
            <strong className="font-semibold">GeneriCon 2023</strong>
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            Join us in Denver from June 7 – 9 to see what’s coming next.
          </p>
          <a
            href="#"
            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Register now <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <nav className="bg-white z-20 top-0 left-0 border-b border-gray-200 sticky">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* <a href="" className="flex items-center">
            <img
              className="h-10 object-contain"
              src="https://img.icons8.com/external-bearicons-flat-bearicons/64/external-Om-diwali-bearicons-flat-bearicons-2.png"
              alt="external-Om-diwali-bearicons-flat-bearicons-2"
            />
          </a> */}
          <span />
          <span className="flex md:order-2" />

          {/* <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div> */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              {navigations.map((nav, index) => (
                <li key={index}>
                  <Link
                    href={nav.path}
                    className="block py-2 pl-3 pr-4 rounded hover:text-[#fd8f8f] md:p-0"
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Header;
/**
Home
Services
Events
Deities
Photo gallery page
About us
Contact us
 */

const navigations = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'Events',
    path: '/events',
  },
  {
    name: 'Deities',
    path: '/deities',
  },
  {
    name: 'Photo gallery',
    path: '/gallery',
  },
  {
    name: 'About us',
    path: '/about-us',
  },
  {
    name: 'Contact us',
    path: '/contact-us',
  },
];
