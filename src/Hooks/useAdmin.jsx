import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../Providers/AuthProvider";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const useAdmin = () => {
  const {user, loading} = useContext(AuthContext);

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
