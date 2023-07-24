import { FaPeriscope } from "react-icons/fa6";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Services = () => {
    return (
        <div>
            <SectionTitle
              subHeading={'Why Choose Us?'}
              Heading={'Our Services'}
            
            ></SectionTitle>
            
        <div className="container mx-auto flex x-space-4 gap-3 py-5 mb-5 ">
            
            {/* prediction */}
            <div className="card  w-96 bg-base-100 shadow-xl">
                <figure></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    <FaPeriscope></FaPeriscope>
                    <div className="badge bg-cyan-600 text-white">Risk Prediction</div>
                        
                    </h2>
                    <p className="w-full">Based on our risk prediction model, it appears that you may have an increased risk of developing diabetes.We recommend consulting with a healthcare professional for further evaluation  personalized guidance to manage and reduce your risk effectively</p>
                   
                </div>
            </div>

            {/* Tracking */}
            <div className="card  w-96 bg-base-100 shadow-xl">
                <figure></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    <FaPeriscope></FaPeriscope>
                    <div className="badge bg-cyan-600 text-white">Tracking Health keys</div>
                        
                    </h2>
                    <p className="w-full">We understand the importance of staying on top of your health, and we're thrilled to see you diligently tracking your key health metrics-BMI,Insulin,BP,Glucose.By regularly tracking these vital health metrics, you are taking a proactive step towards better health management.</p>
                   
                </div>
            </div>
            {/* Medicine alert */}
            <div className="card  w-96 bg-base-100 shadow-xl">
                <figure></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    <FaPeriscope></FaPeriscope>
                    <div className="badge bg-cyan-600 text-white">Madicine Alert Notification</div>
                        
                    </h2>
                    <p className="w-full">
                       We care about your well-being, and that's why we're here to remind you about your daily medicine intake. Your health is essential to us, and staying on track with your medication schedule is crucial for managing your condition effectively.
                    </p>
                   
                </div>
            </div>

            {/* doctor consult */}
            <div className="card  w-96 bg-base-100 shadow-xl">
                <figure></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    <FaPeriscope></FaPeriscope>
                    <div className=" badge bg-cyan-600 text-white">Doctor Consultation</div>
                        
                    </h2>
                    <p className="w-full">
                       We care about your well-being. Should you have any questions or concerns about your health, don't hesitate to consult with your healthcare provider. Keep up the excellent work, and we're here to support you on your health journey!
                    </p>
                   
                </div>
            </div>

        
        </div>
        </div>


    );
};

export default Services;
{/* nai */ }
{/* <div className="flex space-x-2 bg-bage-300">
                <div className='flex'>
                    <div className="mt-5 w-44">

                        <p className=' text-white '>
                         
                        </p>

                    </div>
                    {/* <figure className="px-3 pt-5 mt-2">
                        <img className="object-cover w-[90px] h-[90px]  rounded-full   mt-0"  src={picture}  alt="" />
                        </figure>
                        <div><h3 className="3xl text-white ">{name}</h3></div> */}

{/* </div> */ }


{/* </div> */ }
{/* nai */ }




        // </div>
