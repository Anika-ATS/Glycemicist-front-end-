// import React, {useState} from "react";
import {NavLink, Outlet} from "react-router-dom";
import {AiOutlineMenuUnfold} from "react-icons/ai";
import {FaHome, FaStethoscope, FaUsers} from "react-icons/fa";
import {RiAdminFill} from "react-icons/ri";

import {
  BsCalendar2Check,
  BsCurrencyExchange,
  BsBookmarkCheckFill,
  BsPlusCircleFill,
} from "react-icons/bs";
import Navbar from "../pages/Shared/NavBar/Navbar";
import useAdmin from "../Hooks/useAdmin";
import {
  FaBriefcaseMedical,
  FaHeartCircleCheck,
  FaHeartPulse,
} from "react-icons/fa6";
import {generateReport} from "../AllUsersDashboards/Users/MyHealth/Utilities";
import useAllDoctors from "../Hooks/useAllDoctors";
// import useAdmin from "../Hooks/useAdmin";
// import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const {isAdmin} = useAdmin();
  const {isDoctor} = useAllDoctors();
  const handleGenerateReportClick = () => {
    generateReport("open");
  };

  return (
    <>
      <Navbar color="bg-[#163750]" liColor="text-[#64D9B9]" />
      <div className="drawer lg:drawer-open bg-gray-100">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content grid gap-10 md:grid-cols-4  justify-center bg-gray-100">
          {/* Page content here  bg-[#F1F5F9]*/}
          <div className="col-span-4 order-2 w-full bg-gray-100">
            <Outlet />
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn bg-transparent border-0 text-teal-600 text-5xl mt-2 hover:text-blue-950 hover:bg-transparent drawer-button lg:hidden  col-span-1 place-self-start order-1"
          >
            {" "}
            <AiOutlineMenuUnfold />{" "}
          </label>
        </div>
        <div className="drawer-side fixed">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full    text-base-content bg-[#163750]">
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard/allusers"
                    className="text-xl font-normal  text-[#64D9B9] my-5 hover:text-[#97d7e8]"
                  >
                    <FaUsers className="text-2xl text-[#8ccce8] " />
                    All Users
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/dashboard/doctorslist"
                    //   [#7bd0f4]
                    className="text-xl font-semibold text-[#64D9B9] my-5 hover:text-[#97d7e8]"
                  >
                    <FaStethoscope className="text-2xl text-[#8ccce8] " />
                    Approve Doctors
                  </NavLink>
                </li>
              </>
            ) : isDoctor ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard/allpatients"
                    className="text-xl font-normal  text-[#64D9B9] my-5 hover:text-[#97d7e8]"
                  >
                    <BsPlusCircleFill className="text-2xl text-[#8ccce8]" />
                    All Patients
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allappointments"
                    className="text-xl font-normal  text-[#64D9B9] my-5 hover:text-[#97d7e8]"
                  >
                    <FaStethoscope className="text-2xl text-[#8ccce8]" />
                    All Appointments
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  {" "}
                  <NavLink
                    to="/dashboard/myhealth"
                    //   [#7bd0f4]
                    className="text-xl font-semibold text-[#64D9B9] my-5 hover:text-[#97d7e8]"
                  >
                    <FaHeartCircleCheck className="text-2xl text-[#8ccce8] " />
                    My Health
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/dashboard/medicine"
                    className="text-xl font-semibold text-[#64D9B9]  my-5 hover:text-[#97d7e8]"
                  >
                    <FaBriefcaseMedical className="text-xl  text-[#8ccce8] " />
                    Medicines
                  </NavLink>{" "}
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/dashboard/myappointments"
                    className="text-xl font-semibold text-[#64D9B9]  my-5 hover:text-[#97d7e8]"
                  >
                    <BsCalendar2Check className="text-xl  text-[#8ccce8] " />
                    Appointments
                  </NavLink>{" "}
                </li>
                <hr />
                <button
                  className="btn bg-transparent outline-[#64D9B9] hover:bg-[#64D9B9] text-[#64D9B9] hover:text-white w-4/5  mt-5"
                  onClick={handleGenerateReportClick}
                >
                  Generate Report
                </button>{" "}
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
