import {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../Providers/AuthProvider";

const Navbar = props => {
  const {user} = useContext(AuthContext);
  console.log(user);
  const NavItems = (
    <>
      <li>
        <Link to="/" className="ml-10 text-cyan-500 font-bold">
          Home
        </Link>
      </li>
      <li>
        <Link to="/" className=" text-cyan-500 font-bold">
          Patients
        </Link>
      </li>
      <li>
        <Link to="/">
          <span className=" text-cyan-500 font-bold">Doctors</span>{" "}
        </Link>
      </li>
      <li>
        <Link to="/prediction">
          <span className=" text-cyan-500 font-bold">Diabetis Prediction</span>{" "}
        </Link>
      </li>

      {/* <li>
        <Link to="/login">
          <span className=" text-cyan-500 font-bold">Login</span>{" "}
        </Link>
      </li> */}
      {!user && (
        <li>
          <Link to="/login">
            <span className=" text-cyan-500 font-bold">Login</span>{" "}
          </Link>
        </li>
      )}
      <li>
        <Link to="/dashboard/allusers">
          <span className=" text-cyan-500 font-bold">Dashboard</span>{" "}
        </Link>
      </li>
      {user && <h1 className="text-blue-100 text-lg">{user.displayName}</h1>}
    </>
  );

  return (
    <div>
      <div className={`navbar ${props.color}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavItems}
            </ul>
          </div>
          <a className="btn btn-white text-cyan-500  text-xl">FindRisk</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-white text-cyan-500 outline outline-cyan-500">
            Button
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
