import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../Providers/AuthProvider";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
const useAllDoctors = () => {
  const [Doc, setDoc] = useState([]);
  const [isAllDoctorsLoading, setIsAllDoctorsLoading] = useState(true);
  useEffect(() => {
    setIsAllDoctorsLoading(true);
    // fetch(`https://glycemist-server.onrender.com/doctors?email=${user?.email}`)
    fetch(`http://localhost:5000/doctors`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log("data,", data.data);
        setDoc(data);
      })
      .catch(error => {
        console.log("Error:", error);
      })
      .finally(() => {
        setIsAllDoctorsLoading(false);
      });
  }, []);
  return {Doc, isAllDoctorsLoading};
};

export default useAllDoctors;
