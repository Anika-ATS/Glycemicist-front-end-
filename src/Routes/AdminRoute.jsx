import useAdmin from "../Hooks/useAdmin";
import {Navigate, useLocation} from "react-router-dom";
import {AuthContext} from "../Providers/AuthProvider";
import {useContext} from "react";

const AdminRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading && isAdminLoading) {
    return (
      <span className="loading loading-bars loading-lg text-center"></span>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{from: location}} replace></Navigate>;
};

export default AdminRoute;
