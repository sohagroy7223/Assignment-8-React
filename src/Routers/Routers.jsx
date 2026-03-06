import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Booking from "../Pages/Booking/Booking";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import DoctorDetails from "../Components/DoctorDetails/DoctorDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "booking",
        Component: Booking,
      },
      {
        path: "blog",
        Component: Blog,
      },
      {
        path: "DoctorDetails/:id",
        loader: () => fetch("/doctors.json"),
        Component: DoctorDetails,
      },
    ],
  },
]);
