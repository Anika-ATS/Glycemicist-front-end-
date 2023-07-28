import Dashboard from "../Layout/Dashboard";
import AllUsers from "../AllUsersDashboards/Admin/AllUsers";
import Appointment from "../pages/Home/Appointment/Appointment";
import Doctors from "../pages/AllDoc/Doctors";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/prediction",
        element: <DPrediction></DPrediction>,
      },
      {
        path:'/allDoctors',
        element:<Doctors></Doctors>
      },
      {
        path:'/appointment',
        element:<Appointment></Appointment>
      }
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        // admin
        path: "allusers",
        element: <AllUsers />,
      },
    ],
  },
]);
