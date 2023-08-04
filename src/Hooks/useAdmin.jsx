import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../Providers/AuthProvider";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const useAdmin = () => {
  const {user, loading} = useContext(AuthContext);

  // const [isAdminLoading, setIsAdminLoading] = useState(false);

  // useEffect(() => {
  //   const getAdmin = async () => {
  //     if (!loading && user && user.email) {
  //       setIsAdminLoading(true);

  //       try {
  //         const response = await fetch(
  //           // `https://glycemist-server.onrender.com/users/admin/${user?.email}`
  //           `http://localhost:5000/users/admin/${user?.email}`
  //         );
  //         if (response.ok) {
  //           const data = await response.json();
  //           console.log("useAdmin: ", data);
  //           setIsAdmin(data.admin);
  //         } else {
  //           setIsAdmin(false);
  //           throw new Error("Network response was not ok.");
  //         }
  //       } catch (error) {
  //         setIsAdmin(false);
  //         console.error("Error fetching data:", error);
  //       } finally {
  //         setIsAdminLoading(false);
  //       }
  //     }
  //   };
  //   getAdmin();
  // }, [user, loading]);
  // return {isAdmin, isAdminLoading};
  const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/users/admin/${user?.email}`
      );
      console.log("is admin response", res);
      return res.data.admin;
    },
  });
  console.log("isAdmin: ", isAdmin);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
