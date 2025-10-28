import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import MyBookings from "../pages/MyBookings";
import Blogs from "../pages/Blogs";
import ContactUs from "../pages/ContactUs";
import DoctorDetails from "../pages/DoctorDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: ErrorPage,
    children: [
      {
        index: true,
        element: <Home></Home>,
        hydrateFallbackElement: <p>Please wait</p>,
        loader: () => fetch('../doctors.json'),
      },
      {
        path: "/mybookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        hydrateFallbackElement: <p>please wait...</p>,
        loader: ()=> fetch('../blogs.json'),
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path:"doctordetails/:id",
        element:<DoctorDetails></DoctorDetails>,
        hydrateFallbackElement: <p>Please wait...</p>,
        loader: () => fetch('../doctors.json'),
      }
    ],
  },
]);
