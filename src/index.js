import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import MyNavbar from './components/Navbar';
import Home from "./components/pages/Home";
import Gallerie from "./components/pages/Gallerie.js";
import UeberMich from './components/pages/UeberMich.js';
import Contact from './components/pages/Contact.js';
import Footer from './components/pages/Footer.js';

const AppLayout = () => {
    return (
        <>
        <MyNavbar />
        <Outlet/>
        </>
    );
};

const router = createBrowserRouter([

    {
        element: <AppLayout/>,
        children: [
          {
            path: "/",
            element: <Home/>,
        },
           
            {
            path: "/uebermich",
            element: <UeberMich/>,
            },
            {
            path: "/contact",
            element: <Contact/>,
            },
            {
              path: "/gallerie",
              element: <Gallerie/>,
              },
           
          {
            path: "/footer",
            element: <Footer/>,
        },
        {
          path: "/",
          element: <Home/>,
      },
        ],
    }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
