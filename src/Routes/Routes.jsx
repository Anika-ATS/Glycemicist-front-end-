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

import UserAppointments from "../AllUsersDashboards/Users/Appointments/UserAppointments";
import PatientAppointment from "../AllUsersDashboards/Doctors/PatientAppointment";
import MedicineList from "../AllUsersDashboards/Users/Medicines/MedicineList";
import AllPatients from "../AllUsersDashboards/Doctors/AllPatients";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import DoctorRoute from "./DoctorRoute";

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
        element: (
          <PrivateRoute>
            <Appointment></Appointment>
          </PrivateRoute>
        ),
      },
      {
        path: "/diagnostic",
        // element:<Daignostic></Daignostic>
        element: <DiagnosticData></DiagnosticData>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        // admin
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        // admin
        path: "doctorslist",
        element: (
          <AdminRoute>
            {" "}
            <DoctorsList />{" "}
          </AdminRoute>
        ),
      },

      // doctor
      {
        path: "allpatients",
        element: (
          <DoctorRoute>
            <AllPatients />
          </DoctorRoute>
        ),
      },
      {
        path: "allappointments",
        element: (
          <DoctorRoute>
            {" "}
            <PatientAppointment />
          </DoctorRoute>
        ),
      },

      // user->private
      {
        path: "myhealth",
        element: (
          <PrivateRoute>
            {" "}
            <MyHealth />
          </PrivateRoute>
        ),
      },
      {
        path: "medicine",
        element: (
          <PrivateRoute>
            <MedicineList />
          </PrivateRoute>
        ),
      },
      {
        path: "myappointments",
        element: (
          <PrivateRoute>
            <UserAppointments />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
