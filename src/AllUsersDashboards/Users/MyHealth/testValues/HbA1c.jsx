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
import axios from "axios";
import Swal from "sweetalert2";
import {AuthContext} from "../../../../Providers/AuthProvider";
import {formatDateTime} from "../Utilities";
import moment from "moment";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
];
const HbA1c = () => {
  const {user} = useContext(AuthContext);
  const [HbData, setHbData] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const fetchHBHealthData = async () => {
    try {
      const response = await fetch(
        `https://glycemist-server.onrender.com/myhealth/${user?.email}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setHbData(data.HbA1c);

      console.log("Data:", data.HbA1c, "hb:", HbData);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error, e.g., show a user-friendly error message
    }
  };
  useEffect(() => {
    fetchHBHealthData();
  }, []);

  const onSubmitHb = data => {
    console.log(data);
    axios
      .patch(`https://glycemist-server.onrender.com/patient/${user?.email}`, {
        HbA1c: data.hb,
        date: data.time,
      })
      .then(response => {
        if (response.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Haemoglobin(HBA1c) value saved!`,
            showConfirmButton: false,
            timer: 1500,
          });

          // ;
        }
        fetchHBHealthData();
        reset();
      })
      .catch(error => {
        // Handle errors here
        console.log("Error:", error);
      });
  };
  // to set the range in y-axis
  // const minHbValue = Math.min(...HbData.map(item => Number(item.HbA1c)));
  // const maxHbValue = Math.max(...HbData.map(item => Number(item.HbA1c)));

  // Formatting date and time in x-axis for Hb data

  const formattedHbData =
    HbData !== undefined
      ? HbData.map(item => ({
          ...item,
          date: moment(item.date).format("DD MMM YY"),
        }))
      : [];

  return (
    <>
      {HbData !== undefined ? (
        <div
          id="Hb"
          className="mb-10 py-4 flex justify-center flex-col items-center w-full"
        >
          <SectionTitle Heading="Glycated haemoglobin (HbA1c) Test" />

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={formattedHbData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" interval={1} />
              {/* domain={[minHbValue - 1, maxHbValue]}  */}
              <YAxis />
              <Tooltip />
              <Legend />
              {/* dataKey="HbA1c" */}
              <Bar dataKey="HbA1c" fill="#b28dfc" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <h1>No data yet</h1>
      )}
      <div className="card shadow-lg p-3 border w-4/5">
        <h1 className="mt-3 px-2  shadow-2xl group-hover:text-white text-xl mx-auto text-[#163750] font-semibold ">
          Glycated haemoglobin (HbA1c) Test
        </h1>

        <form onSubmit={handleSubmit(onSubmitHb)} className="my-6">
          <div className="form-control">
            <input
              type="number"
              {...register("hb", {required: true})}
              placeholder="HbA1c(%)"
              name="hb"
              className="input input-bordered"
              rules={{
                min: 1,
              }}
            />
            {errors.hb && (
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

export default HbA1c;
