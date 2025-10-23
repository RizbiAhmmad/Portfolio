import MainLayout from "@/Layouts/MainLayout";
import Home from "@/Pages/Home";
import {
    createBrowserRouter,   
  } from "react-router-dom";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        // {
        //   path: "about",
        //   element: <h1>hi</h1>
        // },
        // {
        //   path: "skills",
        //   element: <h1>hi</h1>
        // },
        // {
        //   path: "education",
        //   element: <h1>hi</h1>
        // },
        // {
        //   path: "contact",
        //   element: <h1>hi</h1>
        // }
      ]
    },

  ]);