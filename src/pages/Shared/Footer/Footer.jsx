import {Link} from "react-router-dom";
import logo from "../../../assets/Images/logo2-removebg-preview.png";
import {AiOutlineArrowRight} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="h-[300px] footer footer-center p-1 bg-[#1d2939] text-[#64d9b9] ">
      <div className="grid md:grid-cols-2">
        <div className="mt-1 flex flex-col items-center">
          <label tabIndex={0} className=" avatar text-center">
            <div className="mx-2 rounded-full h-[150px] w-[250px]">
              <img src={logo} />
            </div>
          </label>

          <p className=" mt-3 p-0 text-center">
            "Smart health app empowering users with personalized insights and{" "}
            <br />
            proactive measures, accurately predicting diabetic risk."
          </p>
        </div>

        <div className="grid bg-[#1d2939]">
          {/* <h1 className='font-bold text-[#64d9b9] '>Services:</h1> */}
          <div className="me-2 mt-5  text-xl flex md:flex-row flex-col gap-6 text-[#64d9b9]    font-bold">
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/allDoctors">All Doctors</Link>
            <Link to="/prediction">Diabetis Prediction</Link>

            <Link to="/login">Login</Link>
          </div>
          <div className="mt-5 badge outline outline-[#64d9b9] text-white text-xl grid grid-flow-col h-[200px] bg-[#1d2939]">
            <div className="flex flex-col">
              <p className="mx-5 mt-3 font-bold  text-[#64d9b9]">
                Want to share your Opinion for Glycemicist?
              </p>
              {/* <span className=' font-bold bg-[#1d2939]'><AiOutlineArrowRight></AiOutlineArrowRight></span> */}

              <input
                type="text"
                placeholder="Type here"
                className="flex mx-28 me-16 mt-10 input input-bordered text-black w-1/2  "
              />
              <div className="mt-2 form-control">
                <label className="flex input-group mx-20 me-16  ">
                  <span className="text-[#1d2939] bg-[#64d9b9]">Email</span>
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="input input-bordered "
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
