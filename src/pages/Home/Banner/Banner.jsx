import "react-responsive-carousel/lib/styles/carousel.min.css";
// requires a loader
// import {CiCircleChevRight } from "react-icons/ci";
import { Carousel } from 'react-responsive-carousel';
import { Player } from "@lottiefiles/react-lottie-player";
import Ste from "../../../assets/lotti/animation_lkl6wh91.json";

// import p1 from '../../../assets/Images/WhatsApp Image 2023-07-23 at 23.50.56.jpeg';
// import p1 from '../../../assets/Images/B-D1.jpg';
import pic from '../../../assets/Images/Newsheadlessdoc.jpg';
import { Link } from "react-router-dom";
// import Appointment from "../Appointment/Appointment";
// import { MdHeight } from "react-icons/md";
// import p2 from '../../../assets/Images/B---2.jpeg';s

// import '../Banner/Banner.css';
const Banner = () => {
    
    return (


        <Carousel >
            <div >



                <div className="w-full">
                    <img
                        className=" h-auto w-full"
                        src={pic}
                    />

                    <div className="  absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-40  text-white ">

                        <div className="grid grid-cols-2 gap-5 animate-pulse ">

                            {/* card-1 */}
                            <div className="mx-5 mt-20 toast toast-start toast-top h-[300px] mb-5">

                                <div className="group card w-[400px] h-[300px]  shadow-xl border border-blue ">
                                    <div className="card-body  ">

                                        <Player
                                            src={Ste}
                                            className="player  w-[400px] h-[200px]"
                                            loop
                                            autoplay
                                        />

                                    </div>

                                </div>
                            </div>

                            {/* card-2 */}
                            <div className=" mt-32 h-[300px] mb-5  ">

                                <div className="group card mx-44 w-[500px] h-[300px]  shadow-xl border border-blue bg-gradient-to-r  from-[#64d9b9] to-[#1d2939] ">
                                    <div className="mt-16 text-3xl font-bold text-center text-white fade-in-word">
                                  
                                   
                                    Unlock the secrets of your health journey with Glycemicist:
                                    <br></br> Your trusted companion for diabetic risk prediction and a healthier tomorrow!
                                    
                                     
                                 
                                  </div>


                                </div>
                            </div>
                            


                        </div>

                        {/* button 64d9b9 */}
                         
                        
                        <Link to='/appointment'>
                        <button className="group badge text-2xl bg-[#64d9b9]  outline  outline-[#1d2939] toast toast-start h-[60px]  w-4/12 mb-24 mx-60 hover:text-white animate-pulse hover:bg-[#1d2939]">
                            <div>Book your appointment now</div>
                           
                        </button>
                       
                        </Link>




                    </div>
                    



                </div>



            </div>
           
           



            {/* <div>
            <div className="flex "> 
                <div className="flex-1" >
                
                <img className="object-cover h-[500] w-screen" src={p1} />  </div> 
                
                
                   
            </div> 

            <div className="grid grid-cols-2 "> 
         
            <img className="object-cover h-[500] w-screen" src={p1} />
          
            <div  className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4">
                
                <div className="toast toast-center toast-middle">
                    <div className="alert alert-info">
                        <span>New mail arrived.</span>
                    </div>

                </div>
            </div>
         
            </div> 
            </div> */}

        </Carousel>

    );
};

export default Banner;
