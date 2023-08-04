import React, {useContext, useState} from "react";
import {AuthContext} from "../../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

import {FaCalendarTimes} from "react-icons/fa";

import {BsTrash3Fill} from "react-icons/bs";
import {MdAddCard} from "react-icons/md";
import {MdAlarmAdd} from "react-icons/md";
const AddMedicine = () => {
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
      setMed(data);
      console.log(med);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error, e.g., show a user-friendly error message
    }
  };
  const [medicines, setMedicines] = useState([
    {
      medicine_name: "",
      times: [""],
    },
  ]);

  const handleAddMedicine = () => {
    setMedicines([
      ...medicines,
      {
        medicine_name: "",
        times: [""],
      },
    ]);
  };

  const handleAddNewTime = medicineIndex => {
    const updatedMedicines = [...medicines];
    updatedMedicines[medicineIndex].times.push("");
    setMedicines(updatedMedicines);
  };

  const handleRemoveMedicine = medicineIndex => {
    const updatedMedicines = [...medicines];
    updatedMedicines.splice(medicineIndex, 1);
    setMedicines(updatedMedicines);
  };

  const handleRemoveNewTime = (medicineIndex, timeIndex) => {
    const updatedMedicines = [...medicines];
    updatedMedicines[medicineIndex].times.splice(timeIndex, 1);
    setMedicines(updatedMedicines);
  };

  const handleMedicineChange = (e, medicineIndex) => {
    const updatedMedicines = [...medicines];
    updatedMedicines[medicineIndex].medicine_name = e.target.value;
    setMedicines(updatedMedicines);
  };

  const handleTimeChange = (e, medicineIndex, timeIndex) => {
    const updatedMedicines = [...medicines];
    updatedMedicines[medicineIndex].times[timeIndex] = e.target.value;
    setMedicines(updatedMedicines);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    // Process and submit form data here
    console.log(...medicines);
    try {
      // Make a POST request to your backend API endpoint
      const response = await axios.patch(
        `http://localhost:5000/medicine/${user?.email}`,
        {medicines}
      );

      if (response.data.lastErrorObject.updatedExisting) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Medicine added!`,
          showConfirmButton: false,
          timer: 1500,
        });
        fetchMedicines();
      }

      console.log("Medicines data sent to the backend:", response.data);
      // Optionally, you can show a success message to the user
    } catch (error) {
      console.error("Error sending medicines data to the backend:", error);
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <div className="mt-5 mb-5  d-flex justify-content-center mx-auto card shadow-lg w-1/2 bg-base-200 group  border border-[#1d2939] ">
      <form onSubmit={handleSubmit} className="w-full mx-auto mb-5">
        {medicines.map((medicine, medicineIndex) => (
          <div
            key={medicineIndex}
            className="mx-auto rounded-md border  p-2 my-1 "
          >
            <input
              type="text"
              placeholder="Medicine Name"
              className="mt-3 h-[30px] mx-5 w-10/12  mb-3 text-black border border-[#1d2939]"
              value={medicine.medicine_name}
              onChange={e => handleMedicineChange(e, medicineIndex)}
            />
            {medicine.times.map((time, timeIndex) => (
              <div key={timeIndex}>
                <input
                  type="time"
                  placeholder="Time"
                  className="mt-3 h-[30px] mx-5 w-7/12  mb-3 text-black border border-[#1d2939] flex-none"
                  value={time}
                  onChange={e => handleTimeChange(e, medicineIndex, timeIndex)}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveNewTime(medicineIndex, timeIndex)}
                  className="btn btn-sm  btn-outline  btn-error ms-1"
                >
                  <div
                    className="tooltip tooltip-accent tooltip-right"
                    data-tip="Remove Time"
                  >
                    <FaCalendarTimes></FaCalendarTimes>
                  </div>
                </button>
              </div>
            ))}
            <div className="flex flex-row ">
              <button
                type="button"
                onClick={() => handleAddNewTime(medicineIndex)}
                className=" ms-1  "
              >
                <div
                  className=" tooltip tooltip-accent tooltip-top"
                  data-tip="Add Time"
                >
                  <MdAlarmAdd className="py-1 mt-1 mx-2 rounded-full w-10 h-10 text-teal-500 bg-white hover:bg-blue-950 hover:text-white"></MdAlarmAdd>
                </div>
              </button>
              <button
                type="button"
                onClick={() => handleRemoveMedicine(medicineIndex)}
                className=" me-2  "
              >
                <div
                  className="tooltip tooltip-accent tooltip-right"
                  data-tip="Rrmove Medicine"
                >
                  <BsTrash3Fill className="py-1 mt-1 rounded-full w-9 h-8 text-teal-500 bg-white hover:bg-blue-950  hover:text-white"></BsTrash3Fill>
                </div>
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddMedicine}
          className="text-white btn-sm btn btn-outline bg-blue-950 ms-1 me-2 hover:bg-teal-500"
        >
          <div
            className="mx-5 tooltip tooltip-accent tooltip-top"
            data-tip="Add New Medicine"
          >
            {" "}
            <MdAddCard fontSize="sm" />
          </div>
        </button>
        <button
          type="submit"
          className="text-white bg-blue-950 btn btn-sm  mt-4 ms-2 mb-5 hover:bg-teal-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMedicine;
