import React, {useContext, useEffect, useState} from "react";
import AddMedicine from "./AddMedicine";
import {AuthContext} from "../../../Providers/AuthProvider";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import {getMessaging, getToken} from "firebase/messaging";
import moment from "moment/moment";
import Swal from "sweetalert2";
import {messaging} from "../../../firebase/firebase.config";
import axios from "axios";

const MedicineList = () => {
  const {user} = useContext(AuthContext);
  const [med, setMed] = useState([]);

  const fetchMedicines = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/medicines/${user?.email}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data.medicines);
      setMed(data.medicines);
      console.log(...med);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error, e.g., show a user-friendly error message
    }
  };
  useEffect(() => {
    fetchMedicines();
  }, []);
  // to get the notification permission
  const storeTokenInDB = async token => {
    try {
      // Replace this with the user's email
      const response = await axios.post(
        `http://localhost:5000/store-fcm-token/${user?.email}`,
        {
          token,
        }
      );
      console.log("Token stored in the database:", response.data);
    } catch (error) {
      console.error("Error storing token in the database:", error);
    }
  };

  const handleNotifications = () => {
    async function requestPermission() {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        // store the token
        const token = getToken(messaging, {
          vapidKey:
            "BGCKRIyddq8J3MhKSj6Mat9CJFBSIclA91UHjVuc4nLZfleF-Ibs8x4Yq8iHaT2JbfBAxufZeB96rdHOqaf2tQ0",
        });
        if (token) {
          console.log("token", token);
          storeTokenInDB(token);
          Swal.fire("Now you will receive medicine alerts!");
        }
      } else if (permission === "denied") {
        Swal.fire("You denied medicine alerts!");
      } else {
        console.log(permission);
      }
    }
    requestPermission();
  };
  return (
    <>
      <AddMedicine />

      <button
        className="btn btn-sm float-right btn-outline outline-blue-950"
        onClick={handleNotifications}
      >
        Send Medicine Alerts
      </button>
      <div>
        <SectionTitle subHeading={"List of all Medicine"}></SectionTitle>
        {med !== undefined ? (
          <div className="overflow-x-auto rounded-lg mb-20">
            <table className="table md:w-4/5 mx-auto rounded-xl bg-gray-200 mb-20">
              {/* head*/}
              <thead>
                <tr className=" text-lg  text-gray-700 rounded-lg">
                  <th></th>
                  <th className="text-center">Medicine Name</th>
                  <th className="text-center">Timings</th>
                </tr>
              </thead>
              <tbody className=" bg-white">
                {med.map((m, index) => (
                  <tr
                    key={index}
                    className="hover:bg-teal-500 hover:bg-opacity-30"
                  >
                    <th>{index + 1}</th>
                    <td className="text-center border-e-2 border-s-2 border-slate-400">
                      {m.medicine_name}
                    </td>

                    {m.times.map((t, i) => (
                      <td key={i} className=" border-e-2 border-slate-400">
                        {moment(t, "HH:mm").format("h:mm A")}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h1 className="text-center font-semibold text-2xl">
            No Medicines added yet
          </h1>
        )}{" "}
      </div>
    </>
  );
};

export default MedicineList;
