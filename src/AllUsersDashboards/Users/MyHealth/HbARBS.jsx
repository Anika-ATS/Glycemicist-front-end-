import React, {useState} from "react";

import {Controller, useForm} from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import RBS from "./testValues/RBS";
import HbA1c from "./testValues/HbA1c";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
// // ];
const HbARBS = () => {
  return (
    <>
      <SectionTitle subHeading="Diagnostic Values" />
      <div className="grid md:grid-cols-4 grid-cols-1 space-x-0 p-0 place-items-center">
        <div
          style={{width: "100%"}}
          className="lg:col-span-2 col-span-5 py-4 flex justify-center flex-col items-center"
        >
          <HbA1c />
        </div>

        <div
          style={{width: "100%"}}
          className="lg:col-span-2 col-span-5 py-4 flex justify-center flex-col items-center"
        >
          <RBS />
        </div>
      </div>
    </>
  );
};

export default HbARBS;
