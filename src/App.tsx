import { useState } from 'react'
import { Switch, Tab } from '@headlessui/react'




function App() {

  const [darkmode, setDarkmode] = useState(false) // need to make dark mode works, that's just a base for it


  return (
    <>
    

    <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
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

                </div>
            </div>
        </nav>
    </header>

    <main className="py-5">

      <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl backdrop-blur-3xl bg-gray-800">
        <div className="flex flex-col justify-center items-center w-full px-4 lg:px-6 py-2.5">
          <h1 className="text-3xl font-semibold text-center">Welcome to Diet Planner</h1>
          <p className="text-center mt-1">This is a simple app that helps you to keep track of your diet and calories</p>

          <h1 className="text-3xl font-semibold text-center mt-2">How it works?</h1>
          <p className="text-center mt-1">You can add your meals and calories and the app will calculate the total calories and macros for you</p>

          <h1 className="text-2xl font-semibold text-center m-5">Get started</h1>

        </div>

      </div>
    </main>

    </>
  )
}

export default App
