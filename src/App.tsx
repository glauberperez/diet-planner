import { createBrowserRouter, RouterProvider, BrowserRouter, Routes , Route} from "react-router-dom";

import Navbar from "./components/Navbar";

import Welcome from "./pages/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome/>,
  },
]);

export const App = () => {
  return (
    <RouterProvider router={router} />
  );
}