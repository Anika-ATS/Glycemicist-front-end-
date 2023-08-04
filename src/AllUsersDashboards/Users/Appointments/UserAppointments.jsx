import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../Providers/AuthProvider";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const UserAppointments = () => {
  const {user} = useContext(AuthContext);
  const [appointment, setAppointment] = useState([]);
  console.log("initial", appointment);
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
        setAppointment(data);

        console.log("Data:", data, "setAppointment:", appointment);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error, e.g., show a user-friendly error message
      }
    };
    fetchHealthData();
  }, []);

  const handleReport = url => {
    console.log(url);
    window.open(url, "_blank");
  };

  return (
    <div>
      <SectionTitle subHeading={"My Scheduled Appointments"}></SectionTitle>
      {appointment.length > 0 ? (
        <div className="overflow-x-auto rounded-lg">
          <table className="table md:w-4/5 mx-auto rounded-xl bg-gray-200">
            {/* head */}
            <thead>
              <tr className=" text-lg  text-gray-700 rounded-lg">
                <th></th>
                <th className="text-center">Doctor Name</th>
                <th className="text-center">Email</th>
                <th className="text-center">Date</th>
                <th>Complains</th>
                <th className="text-center">View My Report</th>
              </tr>
            </thead>
            <tbody className=" bg-white">
              {appointment.map((user, index) => (
                <tr
                  key={user._id}
                  className="hover:bg-teal-500 hover:bg-opacity-30"
                >
                  <th>{index + 1}</th>
                  <td className="text-center">{user.doctorName}</td>
                  <td className="text-center">{user.doctorEmail}</td>
                  <td className="text-center">{user.date}</td>
                  <td className="text-center">{user.problems}</td>
                  <td className="capitalize text-center">
                    <button
                      onClick={() => handleReport(user.fileURL)}
                      className="btn bg-blue-950 text-white hover:bg-[#235d89]"
                    >
                      Report
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-center font-semibold text-2xl">No Appointments</h1>
      )}
    </div>
  );
};

export default UserAppointments;
