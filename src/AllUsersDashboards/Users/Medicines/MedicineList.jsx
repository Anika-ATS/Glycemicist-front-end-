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

  return (
    <>
      <SectionTitle subHeading={"List of all Medicine"}></SectionTitle>
      <div className="grid grid-cols-5 gap-5  w-full">
        <div className="col-span-2 order-2 mx-3">
          {" "}
          <AddMedicine />
        </div>

        <div className="w-full col-span-3 order-1 mx-3">
          {med !== undefined ? (
            <div className="overflow-x-auto rounded-lg mb-20 ">
              <table className="table mx-auto rounded-xl bg-gray-200 mb-20">
                {/* head*/}
                <thead className="bg-gray-200 rounded-xl">
                  <tr className=" text-lg  text-gray-700 rounded-lg">
                    <th></th>
                    <th className="text-center">Medicine Name</th>
                    <th className="text-center">Timings</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {med.map((m, index) => (
                    <tr
                      key={index}
                      className="hover:bg-teal-500 hover:bg-opacity-30 bg-white"
                    >
                      <th>{index + 1}</th>
                      <td className="text-center border-e-2 border-s-2 border-slate-40 bg-white">
                        {m.medicine_name}
                      </td>

                      {m.times.map((t, i) => (
                        <td
                          key={i}
                          className=" border-e-2 border-slate-400 bg-white"
                        >
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
      </div>
    </>
  );
};

export default MedicineList;
