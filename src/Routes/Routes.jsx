import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DPrediction from "../pages/DPrediction/DPrediction";
// import Dashboard from "../Layout/Dashboard";
import AllUsers from "../AllUsersDashboards/Admin/AllUsers";
import Appointment from "../pages/Home/Appointment/Appointment";
import Doctors from "../pages/AllDoc/Doctors";
import DoctorsList from "../AllUsersDashboards/Admin/DoctorsList";
import MyHealth from "../AllUsersDashboards/Users/MyHealth/MyHealth";
import DiagnosticData from "../pages/Shared/DiagnosticArea/DiagnosticData";
import Dashboard from "../Layout/Dashboard";



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
        path: "/allDoctors",
        element: <Doctors></Doctors>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/diagnostic",
        // element:<Daignostic></Daignostic>
        element:<DiagnosticData></DiagnosticData>
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
      {
        // admin
        path: "doctorslist",
        element: <DoctorsList />,
      },
      // user
      {
        path: "myhealth",
        element: <MyHealth />,
      },
    ],
  },
]);
