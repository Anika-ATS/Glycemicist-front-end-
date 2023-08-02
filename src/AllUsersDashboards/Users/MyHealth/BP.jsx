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
  Label,
} from "recharts";
import {Controller, useForm} from "react-hook-form";
import axios, {Axios} from "axios";
import Swal from "sweetalert2";
import {AuthContext} from "../../../Providers/AuthProvider";
import {formatDateTime} from "./Utilities";

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

const BP = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  const {
    register,
    handleSubmit,

    reset,

    formState: {errors},
  } = useForm();
  const [bloodPressureData, setBloodPressureData] = useState([]);

  const onSubmit = data => {
    console.log(data);
    axios
      .patch(`https://glycemist-server.onrender.com/patient/${user?.email}`, {
        systolic: data.sysp,
        diastolic: data.dysp,
        date: data.time,
      })
      .then(response => {
        if (response.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Blood pressure values added`,
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
        fetchBloodPressure();
      })
      .catch(error => {
        // Handle errors here
        console.log("Error:", error);
      });
  };
  console.log(`https://glycemist-server.onrender.com/myhealth/${user?.email}`);
  function fetchBloodPressure() {
    fetch(`https://glycemist-server.onrender.com/myhealth/${user?.email}`)
      .then(response => response.json())
      .then(data => {
        setBloodPressureData(data.bloodPressure);
        console.log("bloodPressureData,", bloodPressureData);
      })
      .catch(error => console.error("Error fetching data:", error));
  }

  useEffect(() => {
    fetch(`https://glycemist-server.onrender.com/myhealth/${user?.email}`)
      .then(response => response.json())
      .then(data => {
        setBloodPressureData(data.bloodPressure);
        console.log("Data,", data, "bloodPressureData", bloodPressureData);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  // const formattedBloodPressureData = bloodPressureData
  //   ? bloodPressureData.map(item => ({
  //       ...item,
  //       date: formatDateTime(item.date),
  //     }))
  //   : [];

  // console.log("type", typeof bloodPressureData[0].date);
  return (
    <div className="grid md:grid-cols-5 grid-cols-1 space-x-0 p-0">
      <div
        style={{width: "100%"}}
        className="lg:col-span-3 col-span-5 py-4 "
        id="bp-chart"
      >
        {" "}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={100}
            height={300}
            data={bloodPressureData}
            margin={{
              top: 5,
              left: 20,
              right: 30,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" interval={1}>
              {" "}
              <Label
                value="Date"
                position="insideleft"
                offset={0}
                fontSize={22}
                fill="#163750"
              />
            </XAxis>
            <YAxis>
              {" "}
              <Label
                value="Blood Pressure"
                angle={-90}
                position="insideLeft"
                fontSize={22}
                fill="#163750"
              />
            </YAxis>
            <Tooltip />
            <Legend verticalAlign="top" align="right" fontSize={18} />
            <Line
              name="Systolic(Upper Value)"
              type="monotone"
              dataKey="systolic"
              stroke="#8884d8"
              activeDot={{r: 8}}
              strokeWidth={2}
            />
            <Line
              name="Diastolic(Lower Value)"
              type="natural"
              dataKey="diastolic"
              stroke="#ff2c9c"
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
            Blood Pressure
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
            <div className="form-control">
              <input
                type="number"
                {...register("sysp", {required: true})}
                placeholder="Systolic Pressure(higher value)"
                name="sysp"
                className="input input-bordered"
                rules={{
                  min: 1,
                }}
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <input
                type="number"
                {...register("dysp", {required: true})}
                placeholder="Diastolic Pressure(lower value)"
                name="dysp"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <span className="text-green-500 my-2 hover:text-white font-medium">
                Please Enter the date and time of measurement
              </span>
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
                className="btn btn-md rounded-2xl w-1/2 mx-auto bg-[#163750] text-xl  text-white  "
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

export default BP;
