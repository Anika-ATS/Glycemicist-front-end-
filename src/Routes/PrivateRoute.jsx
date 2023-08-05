import {useContext} from "react";

import {useNavigate, Navigate, useLocation} from "react-router";

import Swal from "sweetalert2";
import {AuthContext} from "../Providers/AuthProvider";
import useDoctor from "../Hooks/useDoctor";
import useAdmin from "../Hooks/useAdmin";

const PrivateRoute = ({children, message}) => {
  const {user, loading} = useContext(AuthContext);
  const [isDoctor] = useDoctor();
  const [isAdmin] = useAdmin();
  const m = message ? message : "to view this page";
  const location = useLocation();
  console.log(isAdmin);
  console.log(location);
  if (user) {
    return children;
  }

  if (!user && !loading) {
    Swal.fire(`Please login to ${m}`);
    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
  }

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
};

export default PrivateRoute;
