import Diag from "../../../assets/Images/diagnosis.jpg";

import D2 from "../../../assets/lotti/diagnosis.json";

import {Player} from "@lottiefiles/react-lottie-player";
import {Carousel} from "react-responsive-carousel";
import Daignostic from "./Daignostic";
import useDiagnosticData from "../../../Hooks/useDiagnosticData";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import {Link} from "react-router-dom";
const DiagnosticData = () => {
  const [DiagnosticData] = useDiagnosticData();

  return (
    <div>
      <div className="flex flex-col">
        <Carousel>
          <div className="h-[500px]  bg-gradient-to-r from-[#64d9b9] to-[#1d2939] md:grid-cols-3 gap-4   ">
            <div className="container mx-auto flex x-space-2 ">
              {/* */}
              <div className="  w-[300px] bg-blue-950 h-[600px]    shadow-xl mb-3  hover:-translate-y-5">
                <div className="mt-7 mx-28 card-body font-bold w-[700px] h-[600px] text-blue-950 text-center">
                  <figure className="mt-10 mx-5 ">
                    <img src={Diag} alt="" className="rounded-xl" />
                  </figure>

                  <div></div>
                </div>
              </div>

              <div>
                <div className="animate-bounce mx-96 card-body">
                  <Player
                    src={D2}
                    className="player w-[500px] h-[500px]"
                    loop
                    autoplay
                  />
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      <SectionTitle
        subHeading={"DiabCare Diagnostics"}
        Heading={"Know all about the tests!"}
        fontSize="font-bold text-xl"
        background="mt-2 text-white   w-full outline outline-[#1d2939] bg-gradient-to-r  from-[#64d9b9] to-[#1d2939]"
      ></SectionTitle>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3  py-4">
        {DiagnosticData.map(diagnosis => (
          <Daignostic key={diagnosis._id} diagnosis={diagnosis}></Daignostic>
        ))}
      </div>
    </div>
  );
};

export default DiagnosticData;
