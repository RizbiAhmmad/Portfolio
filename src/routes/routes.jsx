import MainLayout from "@/Layouts/MainLayout";
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
            element: <h1>hi</h1>
        },
        {
          path: "about",
          element: <h1>hi</h1>
        },
        {
          path: "skills",
          element: <h1>hi</h1>
        },
        {
          path: "education",
          element: <h1>hi</h1>
        },
        {
          path: "contact",
          element: <h1>hi</h1>
        }
      ]
    },

  ]);