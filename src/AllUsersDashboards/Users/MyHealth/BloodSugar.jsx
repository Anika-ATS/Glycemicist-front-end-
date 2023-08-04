import React, {useContext, useEffect, useState} from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {Controller, useForm} from "react-hook-form";
import {AuthContext} from "../../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import {formatDateTime} from "./Utilities";
import moment from "moment";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const BloodSugar = () => {
  const {
    register,
    handleSubmit,

    reset,

    formState: {errors},
  } = useForm();

  // getting current user
  const {user} = useContext(AuthContext);
  const [bloodSugarData, setBloodSugarData] = useState([]);

  const fetchHealthData = async () => {
    try {
      const response = await fetch(
        `https://glycemist-server.onrender.com/myhealth/${user?.email}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBloodSugarData(data.bloodSugar);

      console.log("Data:", data, "bloodSugarData:", bloodSugarData, Date);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error, e.g., show a user-friendly error message
    }
  };
  useEffect(() => {
    fetchHealthData();
  }, []);

  // to get the range in y-axis
  // const minBloodSugarValue = Math.min(
  //   ...bloodSugarData.map(item => Number(item.bloodsugar))
  // );
  // const maxBloodSugarValue = Math.max(
  //   ...bloodSugarData.map(item => Number(item.bloodsugar))
  // );

  // Create a new array of data with the formatted date and time
  const formattedBloodSugarData =
    bloodSugarData !== undefined
      ? bloodSugarData.map(item => ({
          ...item,
          date: moment(item.date).format("DD MMM YY" || "HH mm A"),
        }))
      : [];
  console.log(formattedBloodSugarData);
  const onSubmit = data => {
    console.log(data);
    console.log(
      `https://glycemist-server.onrender.com/patient/${user?.email}`,
      `http://localhost:5000/patient/${user?.email}`
    );
    axios
      .patch(`http://localhost:5000/patient/${user?.email}`, {
        bloodsugar: data.bloodsugar,
        date: data.time,
      })
      .then(response => {
        if (response.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Blood Sugar saved!`,
            showConfirmButton: false,
            timer: 1500,
          });
          fetchHealthData();
          reset();
        }
      })
      .catch(error => {
        // Handle errors here
        console.log("Error:", error);
      });
    // reset();
  };
  return (
    <div className="grid md:grid-cols-5 grid-cols-1 space-x-0 p-0">
      <div
        style={{width: "100%"}}
        className="lg:col-span-3 col-span-5 py-4"
        id="blsugar"
      >
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            width={100}
            height="100%"
            // data={bloodSugarData}
            data={formattedBloodSugarData}
            margin={{
              top: 5,
              left: 20,
              right: 30,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" interval={0} />
            <YAxis domain={0 - 20} />
            <Tooltip />
            <Legend verticalAlign="top" align="center" fontSize={18} />
            <Line
              type="monotone"
              dataKey="bloodsugar"
              name="Bloodsugar"
              stroke="teal"
              activeDot={{r: 8}}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="lg:col-span-2 me-2 p-4 gap-0 place-content-center w-full col-span-5 ">
        <div
          className="card shadow-2xl w-full bg-base-200 hover:-translate-y-5 group  border border-[#1d2939] hover:bg-gradient-to-r 
                from-[#64d9b9] to-[#1d2939] "
        >
          <h1 className="mt-3 px-2 shadow-2xl group-hover:text-white text-2xl mx-auto text-[#163750] font-semibold ">
            Blood Sugar Levels
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
            <div className="form-control">
              <input
                type="number"
                {...register("bloodsugar", {required: true})}
                placeholder="Blood Sugar(mm/Hg)"
                name="bloodsugar"
                className="input input-bordered"
                rules={{
                  min: 1,
                }}
              />
              {errors.bloodsugar && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <p className="text-green-500 my-2 group-hover:text-white font-medium">
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
              {errors.time && (
                <span className="text-red-600">This field is required</span>
              )}
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
      </div>
    </div>
  );
};

export default BloodSugar;
