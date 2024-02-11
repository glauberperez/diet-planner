import { useState, useEffect } from 'react'
import { Switch, Transition, Menu } from '@headlessui/react' // menu from configuration

import { FaGear } from "react-icons/fa6";

import NavbarMenu from './NavbarMenu';

const Navbar = () => {

  const [darkmode, setDarkmode] = useState(false) // need to make dark mode works, that's just a base for it


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

                <NavbarMenu/>

                </div>
            </div>
        </nav>
    </header>
    )
}

export default Navbar


// `${configuration ? 'animate-spin animate-once' : 'animate-spin animate-once animate-reverse'} flex items-center ml-3` 