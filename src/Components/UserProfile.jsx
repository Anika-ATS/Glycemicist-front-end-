import React, {useEffect, useState} from "react";
import {AuthContext} from "../Providers/AuthProvider";
import {useContext} from "react";

const UserProfile = () => {
  const {user} = useContext(AuthContext);
  const [loggedUser, setloggedUser] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/user/${user?.email}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setloggedUser(data);
        console.log(loggedUser);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error, e.g., show a user-friendly error message
      }
    };
    fetchUserData();
  }, []);

  const {name, email, role, risk, affiliation, specialization, status} =
    loggedUser;

  return (
    <>
      <div className="card-body flex justify-center items-center">
        <h3 className="card-title text-xl">{name}</h3>
        <div className="avatar">
          <div className="w-28  mask mask-squircle">
            <img src={user.photoURL} />
          </div>
        </div>

        <p className=" capitalize text-md ">{role}</p>
        <h4 className="text-lg text-teal-200 text-center py-2 mx-10">
          {email}
        </h4>
        {risk && <h5 className="text-md">Prediction: {risk}</h5>}
        {role == "doctor" && (
          <>
            <p className=" capitalize text-md text-center">{status}</p>
            <p className=" capitalize text-md text-center">{specialization}</p>
            <p className=" capitalize text-md text-center">{affiliation}</p>
          </>
        )}
      </div>
    </>
  );
};

export default UserProfile;
