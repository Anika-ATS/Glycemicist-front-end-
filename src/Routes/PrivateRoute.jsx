import {useContext} from "react";

import {Navigate, useLocation} from "react-router";

import Swal from "sweetalert2";
import {AuthContext} from "../Providers/AuthProvider";

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);

  const location = useLocation();
  // console.log(location);
  if (user?.email) {
    return children;
  }

  if (!user) {
    Swal.fire("Please login to view this page");
    return (
      <Navigate
        to="/login"
        state={{from: location.pathname}}
        replace
      ></Navigate>
    );
  }
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
};

export default PrivateRoute;
