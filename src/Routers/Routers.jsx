import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Booking from "../Pages/Booking/Booking";
import Error from "../Pages/Error/Error";
import DoctorDetails from "../Components/DoctorDetails/DoctorDetails";
import Blogs from "../Pages/Blogs/Blogs";

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
        loader: () => fetch("/doctors.json"),
        Component: Booking,
      },
      {
        path: "blog",
        loader: () => fetch("blogs.json"),
        Component: Blogs,
      },
      {
        path: "DoctorDetails/:id",
        loader: () => fetch("/doctors.json"),
        Component: DoctorDetails,
      },
    ],
  },
]);
