import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>, 
    children: [
      {
        path: "test",          
        element: <p className="bg-amber-200">Hello</p>, 
      },
      {
        path: "test1",          
        element: <p className="bg-orange-500">Hello1</p>, 
      }
    ],
  },
]);


