import MainLayout from "@/Layouts/MainLayout";
import AboutPage from "@/Pages/AboutPage";
import Home from "@/Pages/Home";
import ServicesPage from "@/Pages/ServicePage";
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
        {
          path: "about",
          element: <AboutPage></AboutPage>
        },
        {
          path: "services",
          element: <ServicesPage></ServicesPage>
        },
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