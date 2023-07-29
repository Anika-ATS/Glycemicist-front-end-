import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../Providers/AuthProvider";
import axios from "axios";

const useAdmin = () => {
  const {user, loading} = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(null);
  const [isAdminLoading, setIsAdminLoading] = useState(false);

  useEffect(() => {
    const getAdmin = async () => {
      if (!loading && user && user.email) {
        setIsAdminLoading(true);

        try {
          const response = await fetch(
            `http://localhost:5000/users/admin/${user?.email}`
          );
          if (response.ok) {
            const data = await response.json();
            console.log("useAdmin: ", data);
            setIsAdmin(data.admin);
          } else {
            setIsAdmin(false);
            throw new Error("Network response was not ok.");
          }
        } catch (error) {
          setIsAdmin(false);
          console.error("Error fetching data:", error);
        } finally {
          setIsAdminLoading(false);
        }
      }
    };
    getAdmin();
  }, [user, loading]);
  return {isAdmin, isAdminLoading};
};

export default useAdmin;
