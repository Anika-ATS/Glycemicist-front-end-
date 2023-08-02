import React, {useContext, useState} from "react";
import {AuthContext} from "../../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddMedicine = () => {
  const {user} = useContext(AuthContext);
  const [med, setMed] = useState([]);
  // const fetchMedicines = async () => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:5000/medicines/${user?.email}`
  //     );
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const data = await response.json();
  //     setMed(data);
  //     console.log(med);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     // Handle the error, e.g., show a user-friendly error message
  //   }
  // };
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

      if (response.data.modifiedCount) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Medicine added!`,
          showConfirmButton: false,
          timer: 1500,
        });
        // fetchMedicines();
      }

      console.log(
        "Medicines data sent to the backend:",
        response.data.modifiedCount
      );
      // Optionally, you can show a success message to the user
    } catch (error) {
      console.error("Error sending medicines data to the backend:", error);
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="mt-5 w-50">
        {medicines.map((medicine, medicineIndex) => (
          <div key={medicineIndex} className="border border-info p-5 my-2">
            <input
              type="text"
              placeholder="Medicine Name"
              value={medicine.medicine_name}
              onChange={e => handleMedicineChange(e, medicineIndex)}
            />
            {medicine.times.map((time, timeIndex) => (
              <div key={timeIndex}>
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={e => handleTimeChange(e, medicineIndex, timeIndex)}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveNewTime(medicineIndex, timeIndex)}
                  className="btn btn-sm btn-danger ms-1"
                >
                  Remove Time
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleAddNewTime(medicineIndex)}
              className="btn btn-sm btn-warning mt-2"
            >
              Add Time
            </button>
            <button
              type="button"
              onClick={() => handleRemoveMedicine(medicineIndex)}
              className="btn btn-sm btn-danger mt-2"
            >
              Remove Medicine
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddMedicine}
          className="btn btn-sm btn-primary mt-4 mb-5"
        >
          Add New Medicine
        </button>
        <button type="submit" className="btn btn-sm btn-success mt-4 ms-2 mb-5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMedicine;
