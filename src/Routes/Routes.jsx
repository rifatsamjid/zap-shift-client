import { createBrowserRouter } from "react-router";
import RootLayOuts from "../layouts/RootLayOuts";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOuts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader:()=>fetch('/serviceCenter.json').then(res=>res.json())
      },
    ],
  },
]);
