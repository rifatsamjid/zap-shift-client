import { createBrowserRouter } from "react-router";
import RootLayOuts from "../layouts/RootLayOuts";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayOuts,
    children:[
      {
        index:true,
        Component:Home
      }
    ]
  },
]);