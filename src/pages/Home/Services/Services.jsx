import { FaStethoscope } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import {  MdOutlineNotificationAdd,MdBloodtype} from "react-icons/md";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import p1 from '../../../assets/Images/B---2.jpeg'
import p2 from '../../../assets/Images/B---3.jpeg'
import p3 from '../../../assets/Images/360_F_416046820_K0ckfcrsY1ZD0ZjF9RTSlRgyIlaUr5P1.webp'
// import p4 from '../../../assets/Images/New2sheadlessdoc.png'
import p4 from '../../../assets/Images/WhatsApp Image 2023-07-23 at 23.50.56.jpeg'

const Services = () => {
    return (
        <div>
            <SectionTitle
                subHeading={'Why Choose Us?'}
                Heading={'Our Services'}

            ></SectionTitle>

            <div className="container mx-auto grid grid-cols-2 gap-5  py-5 mb-5 bg-[#e8f4f4] " >

                {/* prediction--hover:bg-gradient-to-r from-cyan-500 to-cyan-200  */}
                <div className=" card mx-auto gap-5 mb-6 w-96 bg-base-100 shadow-2xl hover:-translate-y-5  group  border border-blue hover:bg-gradient-to-r from-[#64d9b9] to-[#1d2939] ">
                    <figure className="px-10 pt-10 mb-2 ">
                        <img src={p1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            <MdBloodtype></MdBloodtype>
                            <div className="badge bg-cyan-600 text-white">Risk Prediction</div>

                        </h2>
                        <p className="group-hover:text-white w-full">Based on our risk prediction model, it appears that you may have an increased risk of developing diabetes.We recommend consulting with a healthcare professional for further evaluation  personalized guidance to manage and reduce your risk effectively</p>

                    </div>
                </div>

                {/* Tracking */}
                <div className="card  mb-6  w-96 bg-base-100 shadow-2xl hover:-translate-y-5 group  border border-blue bg-gradient-to-r hover:from-[#64d9b9] to-[#1d2939]">
                    <figure className="px-10 pt-10 mb-2 ">
                        <img src={p2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            <FiEdit></FiEdit>
                            <div className="badge bg-cyan-600 text-white">Tracking Health keys</div>

                        </h2>
                        <p className="group-hover:text-white w-full">We understand the importance of staying on top of your health, and we're thrilled to see you diligently tracking your key health metrics-BMI,Insulin,BP,Glucose.By regularly tracking these vital health metrics, you are taking a proactive step towards better health management.</p>

                    </div>
                </div>
                {/* Medicine alert opacity-70 */}
                <div className="card mx-auto mt-4 gap-5 mb-5 w-96 bg-base-100 shadow-2xl hover:-translate-y-5 group  border border-blue hover:bg-gradient-to-r from-[#64d9b9] to-[#1d2939]">
                    <figure className="px-10 pt-10 mb-2 ">
                        <img src={p3} alt="" className="rounded-xl contrast-50 " />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            <MdOutlineNotificationAdd></MdOutlineNotificationAdd>
                         
                            <div className="badge bg-cyan-600 text-white">Madicine Alert Notification</div>

                        </h2>
                        <p className="group-hover:text-white w-full">
                            We care about your well-being, and that's why we're here to remind you about your daily medicine intake. Your health is essential to us, and staying on track with your medication schedule is crucial for managing your condition effectively.
                        </p>

                    </div>
                </div>

                {/* doctor consult */}
                <div className="card  w-96 mb-5 mt-4 bg-base-100 shadow-xl hover:-translate-y-5 group  border border-blue bg-gradient-to-r hover:from-[#64d9b9] to-[#1d2939]">
                    <figure className="px-10 pt-10 mb-2 ">
                        <img src={p4} alt="" className="rounded-xl bg-opacity-70 " />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            <FaStethoscope></FaStethoscope>
                            <div className=" badge bg-cyan-600 text-white ">Doctor Consultation</div>

                        </h2>
                        <p className="group-hover:text-white w-full">
                            We care about your well-being. Should you have any questions or concerns about your health, don't hesitate to consult with your healthcare provider. Keep up the excellent work, and we're here to support you on your health journey!
                        </p>

                    </div>
                </div>


            </div>
        </div >


    );
};

export default Services;

