import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/logo2-removebg-preview.png'
import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
    return (
        <div>
            <footer className="h-full footer footer-center p-1 bg-[#1d2939] text-[#64d9b9]">
                <div className='mt-5'>
                    <label tabIndex={0} className=" avatar ">
                        <div className="mx-3 rounded-full h-[150px] w-[250px]">
                            <img src={logo} />
                        </div>
                    </label>

                    <p className=" mt-3">
                        An intelligent web app that accurately predicts diabetic risk for patients, while delivering a comprehensive healthcare overview, empowering individuals to take charge of their health with personalized insights and proactive measures.
                    </p>
                    <p className="font-bold mt-5 mb-5 ">Copyright © 2023 - All right reserved</p>
                </div>


                <div className='me-2 mb-5 text-xl grid grid-flow-col gap-6 text-[#64d9b9]    font-bold'>
                    <Link to='/'>Home</Link>
                    <Link to='/dashboard' >Dashboard</Link>
                    <Link to='/allDoctors'>All Doctors</Link>
                    <Link to='/prediction'>Diabetis Prediction</Link>

                    <Link to='/login'>Login</Link>
                </div>
                <div className='bg-[#64d9b9]  text-white text-xl grid grid-flow-col gap-6 h-[150px] w-full'>
                    <p className='mx-10 mt-10 font-bold text-xl text-[#1d2939]'>Want to share    your Opinion for Glycemicist?
                    </p>
                    <span className='mt-10 font-bold bg-[#1d2939]'><AiOutlineArrowRight></AiOutlineArrowRight></span>
                    <input type="text" placeholder="Type here" className="mt-10 input input-bordered text-black w-full " />
                    <div className="mt-10 form-control">
                        
                        <label className="input-group ">
                            <span className='bg-[#1d2939] text-[#64d9b9]'>Email</span>
                            <input type="text" placeholder="Your Email" className="input input-bordered" />
                        </label>
                    </div>

                </div>

            </footer>

        </div>
    );
};

export default Footer;