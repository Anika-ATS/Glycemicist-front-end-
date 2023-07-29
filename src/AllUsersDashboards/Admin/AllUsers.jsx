import React, {useContext, useEffect, useState} from "react";
import useAdmin from "../../Hooks/useAdmin";
import {AuthContext} from "../../Providers/AuthProvider";

const AllUsers = () => {
  // const {isAdmin, isAdminLoading} = useAdmin();
  //   console.log(isAdmin);
  const {user} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [allusers, setAllUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://localhost:5000/users?email=${user?.email}`
          // "https://glycemist-server.onrender.com/users"
        );

        if (response.ok) {
          const data = await response.json();
          setAllUsers(data);
          console.log(allusers);
        }
      } catch {
        error => console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();
  }, []);

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
              <th className="text-center">Assign Role</th>
            </tr>
          </thead>
          <tbody className=" bg-white">
            {allusers.map((user, index) => (
              <tr
                key={user._id}
                className="hover:bg-teal-500 hover:bg-opacity-30"
              >
                <th>
                  {index + 1}{" "}
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>{" "}
                </th>
                <td className="text-center">{user.name}</td>
                <td className="text-center">{user.email}</td>
                <td className="capitalize text-center">{user.role}</td>
                {/* <td>
              <button
                className="btn btn-ghost bg-orange-300  text-white me-3 hover:bg-orange-400 "
                onClick={() => handleAdmin(user)}
                // disabled={user?.clicked === true ? true : false}
                disabled={
                  user?.clicked === true && user?.role === "admin"
                    ? true
                    : false
                }
              >
                Admin
              </button>
              <button
                className="btn btn-ghost bg-teal-400  text-white md:me-2 mt-2 hover:bg-teal-600"
                // disabled={isAdmindisable}
                onClick={() => handleInstructor(user)}
                disabled={
                  user?.clicked === true && user?.role === "instructor"
                    ? true
                    : false
                }
                // disabled={user?.clicked === true ? true : false}
              >
                Instructor
              </button>
            </td> */}
                <td className="text-center">
                  <button className="bg-gray-800 text-white btn-sm rounded-md text-center">
                    Approve as Doctor
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

export default AllUsers;
