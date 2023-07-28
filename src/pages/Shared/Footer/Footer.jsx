import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/logo2-removebg-preview.png'
import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
    return (
        <div>
            <footer className="h-[300px] footer footer-center p-1 bg-[#1d2939] text-[#64d9b9]">
                <div className='grid grid-cols-2'>
                <div className='mt-1'>
                    <label tabIndex={0} className=" avatar ">
                        <div className="mx-2 rounded-full h-[150px] w-[250px]">
                            <img src={logo} />
                        </div>
                    </label>

                    <p className=" mt-3">
                        An intelligent web app that accurately predicts diabetic risk for patients, while delivering a comprehensive healthcare overview, empowering individuals to take charge of their health with personalized insights and proactive measures.
                    </p>
                    <p className="font-bold mt-5 mb-5 ">Copyright © 2023 - All right reserved</p>
                </div>

                <div className='grid gird-rows-2'>
                    {/* <h1 className='font-bold text-[#64d9b9] '>Services:</h1> */}
                    <div className='me-2 mt-5  text-xl grid grid-flow-col gap-6 text-[#64d9b9]    font-bold'>
                        <Link to='/'>Home</Link>
                        <Link to='/dashboard' >Dashboard</Link>
                        <Link to='/allDoctors'>All Doctors</Link>
                        <Link to='/prediction'>Diabetis Prediction</Link>

                        <Link to='/login'>Login</Link>
                    </div>
                <div className='mt-5 badge outline outline-[#64d9b9] text-white text-xl grid grid-flow-col gap-6  w-full h-[200px] bg-[#1d2939]'>
                <div className='flex flex-col'>
                    <p className='mx-5 mt-3 font-bold  text-[#64d9b9]'>Want to share    your Opinion for Glycemicist?
                    </p>
                    {/* <span className=' font-bold bg-[#1d2939]'><AiOutlineArrowRight></AiOutlineArrowRight></span> */}
                    
                    <input type="text" placeholder="Type here" className="flex mx-28 me-16 mt-10 input input-bordered text-black w-1/2  " />
                    <div className="mt-2 form-control">
                        
                        <label className="flex input-group mx-20 me-16  ">
                            <span className='text-[#1d2939] bg-[#64d9b9]'>Email</span>
                            <input type="text" placeholder="Your Email" className="input input-bordered " />
                        </label>
                    </div>
                    </div>

                </div>
                </div>
                </div>

            </footer>

        </div>
    );
};

export default Footer;