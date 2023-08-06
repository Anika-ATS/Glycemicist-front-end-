import pic from "../../../assets/Images/D4.png";
import {useEffect, useState} from "react";

import Creview from "../../Shared/CReview/Creview";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const ClientRev = () => {
  const [ReviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetch("creviews.json")
      .then(res => res.json())
      .then(data => {
        setReviewData(data);
        console.log("hi");
        console.log(data);
      })

      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <SectionTitle
        subHeading={"Clients Review"}
        Heading={"Happy Clients"}
      ></SectionTitle>
      <div
        className="hero min-h-screen "
        style={{backgroundImage: `url(${pic})`}}
      >
        <div className="hero-overlay bg-opacity-80 "></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {ReviewData.map(msg => (
            <Creview key={msg._id} msg={msg}></Creview>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientRev;
