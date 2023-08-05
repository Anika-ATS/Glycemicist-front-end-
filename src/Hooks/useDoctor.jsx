import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../Providers/AuthProvider";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
const useDoctor = () => {
  const {user, loading} = useContext(AuthContext);

  const {data: isDoctor, isLoading: isDoctorLoading} = useQuery({
    queryKey: ["isDoctor", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/users/doctor/${user?.email}`
      );
      console.log(res);
      return res.data.doctor;
    },
  });

  console.log(isDoctor);
  return [isDoctor, isDoctorLoading];
};

export default useDoctor;
