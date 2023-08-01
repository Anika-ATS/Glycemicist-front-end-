import React, {useContext, useEffect, useState} from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {Controller, useForm} from "react-hook-form";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import axios from "axios";
import {AuthContext} from "../../../../Providers/AuthProvider";
import {formatDateTime} from "../Utilities";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
];
const RBS = () => {
  const {user} = useContext(AuthContext);
  const {
    register,
    handleSubmit,

    reset,

    formState: {errors},
  } = useForm();
  // fetching the values to show in graph
  const [RBSData, setRBSData] = useState([]);

  const fetchRBSHealthData = async () => {
    try {
      const response = await fetch(
        `https://glycemist-server.onrender.com/myhealth/${user?.email}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setRBSData(data.RBS);

      console.log("Data:", data.RBS, "rbs:", RBSData);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error, e.g., show a user-friendly error message
    }
  };
  useEffect(() => {
    fetchRBSHealthData();
  }, []);

  // getting the values and storing
  const onSubmitRBS = data => {
    console.log(data);
    axios
      .patch(`https://glycemist-server.onrender.com/patient/${user?.email}`, {
        RBS: data.rbs,
        date: data.time,
      })
      .then(response => {
        console.log(response);
        if (response.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `RBS value saved!`,
            showConfirmButton: false,
            timer: 1500,
          });

          // ;
        }
        fetchRBSHealthData();
        reset();
      })
      .catch(error => {
        // Handle errors here
        console.log("Error:", error);
      });
  };
  // to get the range in y-axis
  const minRBSValue = Math.min(...RBSData.map(item => Number(item.RBS)));
  const maxRBSValue = Math.max(...RBSData.map(item => Number(item.RBS)));
  const formattedRBSData = RBSData.map(item => ({
    ...item,
    date: formatDateTime(item.date),
  }));

  return (
    <>
      <div
        id="rb"
        className="mb-10 py-4 flex justify-center flex-col items-center w-full"
      >
        <SectionTitle Heading="RBS(Random Blood Sugar)" />

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={formattedRBSData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[minRBSValue - 1, maxRBSValue]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="RBS" fill="#fca6ee" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="card shadow-lg p-3 border w-4/5 mt-3">
        <h1 className="mt-3 px-2  shadow-2xl group-hover:text-white text-xl mx-auto text-[#163750] font-semibold ">
          Random Blood Sugar (RBS) Test
        </h1>

        <form onSubmit={handleSubmit(onSubmitRBS)} className="my-6">
          <div className="form-control">
            <input
              type="number"
              {...register("rbs", {required: true})}
              placeholder="RBS"
              name="rbs"
              className="input input-bordered"
              rules={{
                min: 1,
              }}
            />
            {errors.rbs && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <p className="text-[#163750]  my-2 group-hover:text-white font-medium">
            Please Enter the date and time of measurement
          </p>
          <div className="form-control">
            <input
              type="datetime-local"
              {...register("time", {required: true})}
              placeholder="Enter the time at which you measured"
              name="time"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-md rounded-2xl w-1/2 mx-auto bg-[#163750] text-xl  text-white"
              type="submit"
              value="Add"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default RBS;
