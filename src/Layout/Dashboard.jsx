
// import React, {useState} from "react";
import { NavLink, Outlet} from "react-router-dom";
import {AiOutlineMenuUnfold} from "react-icons/ai";
import {FaHome, } from "react-icons/fa";
import {GiOpenBook} from "react-icons/gi";
import {
  // BsPlusCircleFill,
  BsCurrencyExchange,
  BsBookmarkCheckFill,
} from "react-icons/bs";
import Navbar from "../pages/Shared/NavBar/Navbar";
import useAdmin from "../Hooks/useAdmin";
// import useAdmin from "../Hooks/useAdmin";
// import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const {isAdmin} = useAdmin();
  //   const [isInstructor] = useInstructor();
  //   const [users, setUsers] = useState([]);

  //   const fetchUsers = async () => {
  //     try {
  //       const res = await axios.get("/users");
  //       setUsers(res.data);
  //     } catch (error) {
  //       console.error("Error fetching users:", error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchUsers();
  //   }, []);
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
        <div className="drawer-side">
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
                    <GiOpenBook className="text-2xl text-[#8ccce8] " />
                    All Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageclasses"
                    className="text-2xl font-semibold text-white my-5"
                  >
                    <GiOpenBook className="text-3xl text-orange-200" />
                    Manage Classes
                  </NavLink>
                </li>
              </>
            ) : (
              // : isInstructor ? (
              //   <>
              //     <li>
              //       <NavLink
              //         to="/dashboard/addclass"
              //         className="text-2xl font-semibold text-white my-5"
              //       >
              //         <BsPlusCircleFill className="text-3xl text-orange-200" />
              //         Add Class
              //       </NavLink>
              //     </li>
              //     <li>
              //       <NavLink
              //         to="/dashboard/myclasses"
              //         className="text-2xl font-semibold text-white my-5"
              //       >
              //         <GiOpenBook className="text-3xl text-orange-200" />
              //         My Classes
              //       </NavLink>
              //     </li>
              //   </>
              // )
              <>
                {/* <li>
                  <NavLink
                    to="/dashboard/allusers"
                    className="text-xl font-normal  text-[#64D9B9] my-5 hover:text-[#97d7e8]"
                  >
                    <GiOpenBook className="text-2xl text-[#8ccce8] " />
                    All Users
                  </NavLink>
                </li> */}
                <li>
                  {" "}
                  <NavLink
                    to="/dashboard/enrolledclass"
                    //   [#7bd0f4]
                    className="text-xl font-semibold text-[#64D9B9] my-5 hover:text-[#97d7e8]"
                  >
                    <BsBookmarkCheckFill className="text-2xl text-[#8ccce8] " />
                    Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/dashboard/paymenthistory"
                    className="text-xl font-semibold text-[#64D9B9]  my-5 hover:text-[#97d7e8]"
                  >
                    <BsCurrencyExchange className="text-xl  text-[#8ccce8] " />
                    Payment History
                  </NavLink>{" "}
                </li>
              </>
            )}
            {/* <hr />
            <li>
              <NavLink
                to="/"
                className="text-xl font-semibold text-[#7bd0f4] my-5"
              >
                <FaHome className="text-xl text-[#f47b8f]" />
                Home
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

