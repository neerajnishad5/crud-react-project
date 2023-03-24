// importing bootstrap from node_modules
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// importing components from components

import ContactUs from "./components/ContactUs/ContactUs";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import RootLayout from "./components/RootLayout/RootLayout";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import UserList from "./components/UserList/UserList";
import User from "./components/User/User";


// export App component
export default function App() {
 

  const browserRouterObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "user-list/",
          element: <UserList />,
        },
        {
          path: "user/:id",
          element: <User />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <div>
        <RouterProvider router={browserRouterObj}></RouterProvider>

      
      </div>
    </div>
  );
}
