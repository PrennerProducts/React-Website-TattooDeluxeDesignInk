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
import ErrorPage from './error-page.js';
import HeroSection from './components/HeroSection';
import { Navbar } from 'react-bootstrap';
import Impressum from './components/pages/impressum.js';
import './index.css';

const AppLayout = () => {
    return (
        <>
        
        <MyNavbar />
        
        <div className='layout-container'>
       
            <div className='layout-item'>
            <UeberMich/>
            </div>
      
            <div className='layout-item'>
            <Contact/>
            </div>

            <div className='layout-item'>
            <Gallerie/>
            </div>
            
          
         
        </div>
       
        

        <Outlet/>
       
       
      
        
        </>
    );
};

const router = createBrowserRouter([

    {
        element: <AppLayout/>,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <Home/>,
            errorElement: <ErrorPage />,
           },

          {
          path: "/uebermich",
          element: <UeberMich/>,
          errorElement: <ErrorPage />,
          },

          {
          path: "/contact",
          element: <Contact/>,
          errorElement: <ErrorPage />,
          },

          {
            path: "/gallerie",
            element: <Gallerie/>,
            errorElement: <ErrorPage />,
          },
        
        
         

      
        ],
    },
    {
      path: "/impressum",
      element: <Impressum/>,
     },
   
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
   
  </React.StrictMode>
);

export default AppLayout;
