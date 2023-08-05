import React, {useRef, useEffect} from "react";
import ReactDOM from "react-dom";
import BP from "./BP";
import BloodSugar from "./BloodSugar";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

// import "jspdf-autotable";
import html2canvas from "html2canvas";
import HbARBS from "./HbARBS";
import jsPDF from "jspdf";
import {generateReport} from "./Utilities";

const MyHealth = () => {
  const handleGenerateReportClick = () => {
    generateReport("open");
  };

  return (
    <div className="">
      <button
        className="btn bg-blue-950  outline-[#64D9B9] hover:bg-[#64D9B9] text-[#64D9B9] hover:text-white md:float-right mt-0"
        onClick={handleGenerateReportClick}
      >
        Generate Report
      </button>
      <div className=" mb-96" id="BP">
        <SectionTitle Heading="Regular Blood Pressure Levels" />
        <BP />
        <SectionTitle Heading="Regular Blood Sugar Levels" />
        <BloodSugar />
        <HbARBS />
      </div>
      {/* <div></div> */}
    </div>
  );
};
export default MyHealth;
