import {useContext} from "react";

import {Navigate, useLocation} from "react-router";

import Swal from "sweetalert2";
import {AuthContext} from "../Providers/AuthProvider";

const PrivateRoute = ({children, message}) => {
  const {user, loading} = useContext(AuthContext);
  const m = message ? message : "to view this page";
  const location = useLocation();
  // console.log(location);
  if (user?.email) {
    return children;
  }

  if (!user) {
    Swal.fire(`Please login to ${m}`);
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
  }
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
};

export default PrivateRoute;
