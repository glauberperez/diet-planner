import { Link } from "react-router-dom";

const Welcome = () => {

  return (
    <>

    <main className="py-5">

      <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl backdrop-blur-3xl bg-gray-800">
        <div className="flex flex-col justify-center items-center w-full px-4 lg:px-6 py-2.5">
          <h1 className="text-3xl font-semibold text-center mt-5">Welcome to Diet Planner</h1>
          <p className="text-center mt-1">This is a simple app that helps you to keep track of your diet and calories</p>

          <h1 className="text-3xl font-semibold text-center mt-2">How it works?</h1>
          <p className="text-center mt-1">You can add your meals and calories and the app will calculate the total calories and macros for you</p>

          <h1 className="text-2xl font-semibold text-center m-5">
            <Link to="/" className="text-blue-500 hover:text-blue-600">Start now!</Link>
            </h1> 

        </div>

      </div>
    </main>

    </>
  )
}

export default Welcome
