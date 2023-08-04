import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../Providers/AuthProvider";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
const useDoctor = () => {
  // const [AllDoc, setAllDoc] = useState([]);
  // const [isDoctorLoading, setIsDoctorLoading] = useState(true);
  // const [isDoctor, setIsDoctor] = useState();
  // const {user} = useContext(AuthContext);
  // useEffect(() => {
  //   setIsDoctorLoading(true);
  //   // fetch(`https://glycemist-server.onrender.com/doctors?email=${user?.email}`)
  //   fetch(`http://localhost:5000/doctors?email=${user?.email}`)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       setAllDoc(data.alldoctorsapproved);
  //       setIsDoctor(data.isDoctor.doctor);
  //       console.log("isDoctor", data.isDoctor.doctor);
  //       // console.log(AllDoc, data.isDoctor.doctor);
  //     })
  //     .catch(error => {
  //       console.log("Error:", error);
  //     })
  //     .finally(() => {
  //       setIsDoctorLoading(false);
  //     });
  // }, [user]);
  // return {AllDoc, isDoctorLoading, isDoctor};

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
