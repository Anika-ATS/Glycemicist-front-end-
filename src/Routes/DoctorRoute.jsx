import useAdmin from "../Hooks/useAdmin";
import {Navigate, useLocation} from "react-router-dom";
// import {AuthContext} from "../Provider/AuthProvider";
import {useContext} from "react";
import useAllDoctors from "../Hooks/useAllDoctors";
import {AuthContext} from "../Providers/AuthProvider";
import useDoctor from "../Hooks/useDoctor";

const DoctorRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);

  const [isDoctor] = useDoctor();
  console.log("isDoctor from doctor route", isDoctor);
  const location = useLocation();

  if (loading && isDoctorLoading) {
    return (
      <span className="loading loading-bars loading-lg text-center"></span>
    );
  }

  if (user && isDoctor) {
    return children;
  } else if (!isDoctor) {
    return <Navigate to="/" state={{from: location}} replace></Navigate>;
  }
};

export default DoctorRoute;
