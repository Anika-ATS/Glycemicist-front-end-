import {Link} from "react-router-dom";
import logo from "../../../assets/Images/logo2-removebg-preview.png";
import {AuthContext} from "../../../Providers/AuthProvider";
import {useContext} from "react";
import useAdmin from "../../../Hooks/useAdmin";

import useDoctor from "../../../Hooks/useDoctor";
import UserProfile from "../../../Components/UserProfile";

const Navbar = props => {
  console.log(props.liColor);
  const {user, logOut} = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isDoctor] = useDoctor();
  // console.log(isDoctor);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => console.log(error));
  };

  // console.log(user);
  const NavItems = (
    <>
      <li>
        <Link
          to="/"
          className={`${props.liColor} text-lg font-semibold hover:${props.hover} hover:bg-transparent`}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          to={
            isAdmin
              ? "/dashboard/Allusers"
              : isDoctor
              ? "/dashboard/Allpatients"
              : "/dashboard/Myhealth"
          }
          className={`${props.liColor} text-lg font-semibold hover:${props.hover} hover:bg-transparent`}
        >
          {" "}
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/allDoctors">
          <span
            className={`${props.liColor} text-lg font-semibold hover:${props.hover} hover:bg-transparent`}
          >
            Doctors
          </span>{" "}
        </Link>
      </li>

      <li>
        <Link to="/prediction">
          <span
            className={`${props.liColor} text-lg font-semibold hover:${props.hover} hover:bg-transparent`}
          >
            Diabetes Prediction
          </span>{" "}
        </Link>
      </li>
      {/* diagonostic  */}
      <li>
        <Link to="/diagnostic">
          <span
            className={`${props.liColor} text-lg font-semibold hover:${props.hover} hover:bg-transparent`}
          >
            Diagnostic Corner
          </span>{" "}
        </Link>
      </li>
    </>
  );

  return (
    <div className={`navbar  ${props.color}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost text-teal-400 lg:hidden "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <label tabIndex={0} className="avatar">
            <div className="lg:ml-3  md:w-1/12 w-[16%]  ml-5">
              <img src="/glucosemeter.png" />
            </div>
            <p className={`text-sm  font-bold mt-4 ${props.log}`}>
              Glycemicist
            </p>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavItems}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavItems}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <>
            <div className="dropdown dropdown-left dropdown-bottom">
              {/* <label tabIndex={0} className="btn m-1"></label> */}
              <div
                className="tooltip text-white   hover:text-blue-950 tooltip-left"
                tabIndex={0}
                data-tip={user.displayName}
              >
                <div className="avatar online">
                  <div className="w-12  mask mask-squircle">
                    <img src={user.photoURL} />
                  </div>
                </div>
              </div>

              <div
                tabIndex={0}
                className="dropdown-content z-[1] card card-compact w-72 p-2 shadow bg-blue-950 text-slate-100"
              >
                <UserProfile />
              </div>
            </div>

            <button
              className="ms-2 btn btn-white text-white bg-[#64d9b9]  h-[50px] w-[120px] rounded-full font-bold outline outline-[#1d2939] me-1 hover:bg-[#1d2939]"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <span className=" btn btn-white text-white bg-[#64d9b9]  h-[50px] w-[120px] me-3 rounded-full font-bold outline outline-[#1d2939]  hover:bg-[#1d2939]">
                Login
              </span>
            </Link>

            <Link to="/SignUp">
              <span className="badge btn btn-white text-white bg-[#64d9b9]  h-[50px] w-[120px] rounded-full font-bold outline outline-[#1d2939] me-5 hover:bg-[#1d2939]">
                SignUp
              </span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
