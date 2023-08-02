import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../Providers/AuthProvider";
const useAllDoctors = () => {
  const [AllDoc, setAllDoc] = useState([]);
  const [isDoctorLoading, setIsDoctorLoading] = useState(true);
  const [isDoctor, setIsDoctor] = useState(null);
  const {user} = useContext(AuthContext);
  useEffect(() => {
    setIsDoctorLoading(true);
    fetch(`https://glycemist-server.onrender.com/doctors?email=${user?.email}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setAllDoc(data.alldoctorsapproved);
        setIsDoctor(data.isDoctor.doctor);
        // console.log(AllDoc, data.isDoctor.doctor);
      })
      .catch(error => {
        console.log("Error:", error);
      })
      .finally(() => {
        setIsDoctorLoading(false);
      });
  }, []);
  return {AllDoc, isDoctorLoading, isDoctor};
};

export default useAllDoctors;
