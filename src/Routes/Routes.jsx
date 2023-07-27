import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DPrediction from "../pages/DPrediction/DPrediction";
// import AllDoctors from "../pages/AllDoc/AllDoctors";
import Appointment from "../pages/Home/Appointment/Appointment";
import Doctors from "../pages/AllDoc/Doctors";

  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/SignUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/prediction',
          element:<DPrediction></DPrediction>
        },
        {
          path:'/allDoctors',
          element:<Doctors></Doctors>
        },
        {
          path:'/appointment',
          element:<Appointment></Appointment>
        }
        
        

        
      ]
    },
  ]);