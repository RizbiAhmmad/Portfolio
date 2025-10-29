import MainLayout from "@/Layouts/MainLayout";
import AboutPage from "@/Pages/AboutPage";
import ContactPage from "@/Pages/ContactPage";
import Home from "@/Pages/Home";
import ServicesPage from "@/Pages/ServicePage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "services",
        element: <ServicesPage></ServicesPage>,
      },
      {
        path: "contact",
        element: <ContactPage></ContactPage>,
      },
    ],
  },
]);
