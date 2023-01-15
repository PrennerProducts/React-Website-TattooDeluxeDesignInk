import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import MyNavbar from './components/Navbar';
import Home from "./components/pages/Home";

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
