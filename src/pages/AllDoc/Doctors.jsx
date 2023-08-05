import React, {useEffect, useState} from "react";
import useAllDoctors from "../../Hooks/useAllDoctors";
import AllDoctors from "./AllDoctors";
import Diag from "../../assets/Images/Mr.doctor.jpg";
import D2 from "../../assets/diagnosis3.json";
import {Player} from "@lottiefiles/react-lottie-player";
import {Carousel} from "react-responsive-carousel";

const Doctors = () => {
  const {Doc, isAllDoctorsLoading} = useAllDoctors();

  return (
    <div>
      <div className="flex flex-col bg-[#E8F4F4]">
        <Carousel>
          <div className="h-[400px]  bg-gradient-to-r from-[#64d9b9] to-[#1d2939] md:grid-cols-3 gap-4   ">
            <div className="container mx-auto flex x-space-2 ">
              {/* */}
              <div className="w-1/3 h-[400px]   bg-blue-950  flex items-center shadow-xl mb-3 ">
                <div className="ms-28 card-body font-bold w-full  hover:-translate-y-5 text-blue-100">
                  <div className="mx-2  py-2 font-serif  font-bold text-left text-white fade-in-word animate-pulse ">
                    <p className="card-title mx-40  text-5xl">
                      Meet Dedicated and Passionate Doctors
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className=" mx-40 card-body w-1/2">
                  <Player src={D2} className="player" loop autoplay />
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="bg-[#e8f4f4] grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
        {isAllDoctorsLoading && (
          <span className="loading loading-spinner text-accent text-center"></span>
        )}

        {Doc.map(doc => (
          <AllDoctors key={doc._id} doc={doc}></AllDoctors>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
