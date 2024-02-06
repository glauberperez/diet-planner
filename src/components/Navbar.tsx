import { useState, useEffect } from 'react'
import { Switch, Menu } from '@headlessui/react' // menu from configuration

import { FaGear } from "react-icons/fa6";

const Navbar = () => {

  const [darkmode, setDarkmode] = useState(false) // need to make dark mode works, that's just a base for it

  const [configuration, setConfiguration] = useState(false);

  useEffect(() => {
    console.log("changed: " + configuration)
  }
  , [configuration])


  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    console.log("dark mode changed: " + darkmode)
  }
  , [darkmode])


    return (

        <header>
        <nav className="bg-gray-800 border-gray-200 px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="#" className="flex items-center">
                    <img src="appicon.svg" className="mr-3 h-6 sm:h-9" alt="dietplanner logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                      Diet Planner
                    </span>
                </a>
                <div className="flex items-center lg:order-2">

                <a className="text-sm mr-3">Dark Mode</a>

                <Switch
                  checked={darkmode}
                  onChange={setDarkmode}
                  className={`${
                    darkmode ? 'bg-blue-600' : 'bg-gray-400'
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span
                    className={`${
                      darkmode ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>

                {
                  // HeadlessUI configuration menu
                }


                <Menu
                  as="div"
                  className="relative inline-block text-left"
                >
                  <Menu.Button className="items-center ml-3">
                    <FaGear className="text-2xl dark:text-white"/>
                  </Menu.Button>

                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white dark:bg-gray-800 border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${
                              active ? 'bg-gray-100 dark:bg-gray-700' : 'text-gray-900 dark:text-white'
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            Dark Mode
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${
                              active ? 'bg-gray-100 dark:bg-gray-700' : 'text-gray-900 dark:text-white'
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            Configuration
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Menu>
                





                </div>
            </div>
        </nav>
    </header>
    )
}

export default Navbar


// `${configuration ? 'animate-spin animate-once' : 'animate-spin animate-once animate-reverse'} flex items-center ml-3` 