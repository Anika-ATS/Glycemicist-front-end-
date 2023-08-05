import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import {FaTrash} from "react-icons/fa";

const DoctorsList = () => {
  const {user} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [doctors, setDoctors] = useState([]);
  // console.log(`http://localhost:5000/alldoctors?email=${user?.email}`);
  // function to get users
  const fetchDoctorsData = () => {
    setIsLoading(true);
    fetch(`http://localhost:5000/alldoctors?email=${user?.email}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setDoctors(data);
        console.log(data);
      })
      .catch(error => {
        console.log("Error:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchDoctorsData();
  }, []);

  // ----------------------------------------approve doctor
  const approveDoctor = doc => {
    axios
      .patch(`http://localhost:5000/doctors/${doc._id}`, {
        status: "approved",
        clicked: true,
      })
      .then(response => {
        if (response.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${doc.name} is approved as Doctor!`,
            showConfirmButton: false,
            timer: 1500,
          });
          fetchDoctorsData();
        }
      })
      .catch(error => {
        // Handle errors here
        console.log("Error:", error);
      });
  };

  // -----------------------------------------------delete----------------------------------------------
  const handleDelete = doc => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(15 118 110)",
      cancelButtonColor: "rgb(248 113 113)",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/deletedoctor/${doc._id}`)
          .then(response => {
            const {data} = response;
            if (data.deletedCount > 0) {
              fetchDoctorsData();
              Swal.fire("Deleted!", "Your class has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="h-full">
      <h2 className="text-center text-2xl py-9 text-teal-900 font-semibold">
        All Users Information
      </h2>
      {isLoading && (
        <div className="modal modal-open">
          <div className="modal-box  bg-blue-100">
            <div className="loader flex items-center justify-center flex-col ">
              <p className="text-teal-700 text-2xl text-center py-5 ">
                Please Wait users are Loading...
              </p>
              <span className="loading loading-infinity w-40 text-red-400 text-center"></span>
            </div>
          </div>
        </div>
      )}
      <div className="overflow-x-auto rounded-lg">
        <table className="table md:w-4/5 mx-auto rounded-xl bg-gray-200">
          {/* head */}
          <thead>
            <tr className=" text-lg  text-gray-700 rounded-lg">
              <th className="text-center">Profile</th>
              <th className="text-center">Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Role</th>
              <th className="text-center">Status</th>
              <th className="text-center">Approve</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody className=" bg-white">
            {doctors.map((doc, index) => (
              <tr
                key={doc._id}
                className=" hover:bg-[#49ad92]   hover:bg-opacity-90 hover:text-white hover:text-lg"
              >
                <th>
                  {index + 1}{" "}
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={doc.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>{" "}
                </th>
                <td className="text-center">{doc.name}</td>
                <td className="text-center">{doc.email}</td>
                <td className="capitalize text-center">{doc.role}</td>
                <td
                  className={`capitalize text-center text-lg ${
                    doc.role === "doctor" && doc.status === "pending"
                      ? "text-red-500"
                      : "text-teal-700 hover:text-white"
                  }`}
                >
                  {doc.role === "doctor" ? doc.status : "user"}
                </td>
                <td className="text-center">
                  <button
                    className="bg-gray-800 text-white btn btn-md rounded-md text-center capitalize hover:bg-teal-700"
                    onClick={() => approveDoctor(doc)}
                    disabled={
                      doc?.clicked === true && doc?.status === "approved"
                        ? true
                        : false
                    }
                  >
                    Approve Doctor
                  </button>
                </td>

                <td>
                  <button
                    className="btn btn-ghost   text-white me-3 mt-2"
                    onClick={() => handleDelete(doc)}
                    // disabled={clas?.clicked === true}
                  >
                    <FaTrash className="text-orange-300 bg-transparent  hover:text-red-500 text-3xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorsList;
