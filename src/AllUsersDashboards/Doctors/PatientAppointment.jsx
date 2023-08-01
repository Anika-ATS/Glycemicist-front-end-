import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../Providers/AuthProvider";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const PatientAppointment = () => {
  const {user} = useContext(AuthContext);
  const [patients, setPatients] = useState([]);

  console.log(`http://localhost:5000/appointments/${user?.email}`);
  useEffect(() => {
    const fetchHealthData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/appointments/${user?.email}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error, e.g., show a user-friendly error message
      }
    };
    fetchHealthData();
  }, []);
  return (
    <div>
      <SectionTitle subHeading={"List of all Patients"}></SectionTitle>
      {patients.length > 0 ? (
        <div className="overflow-x-auto rounded-lg">
          <table className="table md:w-4/5 mx-auto rounded-xl bg-gray-200">
            {/* head */}
            <thead>
              <tr className=" text-lg  text-gray-700 rounded-lg">
                <th></th>
                <th className="text-center">Patient Name</th>
                <th className="text-center">Email</th>
                <th className="text-center">Complains</th>
                <th className="text-center">Date</th>
                {/* <th className="text-center">View My Report</th> */}
              </tr>
            </thead>
            <tbody className=" bg-white">
              {patients.map((user, index) => (
                <tr
                  key={user._id}
                  className="hover:bg-teal-500 hover:bg-opacity-30"
                >
                  <th>{index + 1}</th>
                  <td className="text-center">{user.name}</td>
                  <td className="text-center">{user.patientEmail}</td>
                  <td className="text-center">{user.problems}</td>
                  <td className="text-center">{user.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>No Appointments</h1>
      )}
    </div>
  );
};

export default PatientAppointment;
