import useAdmin from "../Hooks/useAdmin";
import {Navigate, useLocation} from "react-router-dom";
import {AuthContext} from "../Provider/AuthProvider";
import {useContext} from "react";
import useAllDoctors from "../Hooks/useAllDoctors";

const DoctorRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const {isDoctorLoading, isDoctor} = useAllDoctors();
  console.log();
  const location = useLocation();

  if (loading && isDoctorLoading) {
    return (
      <span className="loading loading-bars loading-lg text-center"></span>
    );
  }

  if (user && isDoctor) {
    return children;
  }
  return <Navigate to="/" state={{from: location}} replace></Navigate>;
};

export default DoctorRoute;
