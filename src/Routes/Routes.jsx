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
          <PrivateRoute message="to book an Appointment">
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
      <PrivateRoute message="to use the dashboard facilities">
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        // admin
        path: "Allusers",
        element: (
          // <AdminRoute>
          <AllUsers />
          // </AdminRoute>
        ),
      },
      {
        // admin
        path: "Doctorslist",
        element: (
          <AdminRoute>
            <DoctorsList />
          </AdminRoute>
        ),
      },

      // doctor
      {
        path: "Allpatients",
        element: (
          <DoctorRoute>
            {" "}
            <AllPatients />
          </DoctorRoute>
        ),
      },
      {
        path: "Allappointments",
        element: (
          // // <DoctorRoute>
          //   {" "}
          //  <PatientAppointment>
          // // </DoctorRoute>
          <PatientAppointment></PatientAppointment>
        ),
      },

      // user->private
      {
        path: "Myhealth",
        element: (
          <PrivateRoute>
            {" "}
            <MyHealth />
          </PrivateRoute>
        ),
      },
      {
        path: "Medicine",
        element: (
          <PrivateRoute>
            <MedicineList />
          </PrivateRoute>
        ),
      },
      {
        path: "Myappointments",
        element: (
          <PrivateRoute>
            <UserAppointments />
          </PrivateRoute>
        ),
      },
    ],
  },

  // {
  //   path: "DoctorDashboard",
  //   element: (
  //     <DoctorRoute>
  //       <DoctorDashboard />
  //     </DoctorRoute>
  //   ),
  //   children: [
  //     //  doctor
  //     {
  //       path: "Allpatients",
  //       element: (
  //         <DoctorRoute>
  //           <AllPatients />
  //         </DoctorRoute>
  //       ),
  //     },
  //     {
  //       path: "Allappointments",
  //       element: (
  //         <DoctorRoute>
  //           {" "}
  //           <PatientAppointment />
  //         </DoctorRoute>
  //       ),
  //     },
  //   ],
  // },
]);
