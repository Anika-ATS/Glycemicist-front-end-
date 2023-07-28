import React, {useEffect, useState} from "react";
import useAdmin from "../../Hooks/useAdmin";

const AllUsers = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  //   console.log(isAdmin);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          "https://glycemist-server.onrender.com/users"
        );

        if (response.ok) {
          const data = await response.json();
          setUsers(data);
          console.log(users);
        }
      } catch {
        error => console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="h-full">
      <h2 className="text-center text-2xl py-9 text-teal-900 font-semibold">
        All Users Information
      </h2>
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
            {users.map((user, index) => (
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
