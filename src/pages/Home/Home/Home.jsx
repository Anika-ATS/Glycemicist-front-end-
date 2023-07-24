import Creview from "../../Shared/CReview/Creview";
import Appointment from "../Appointment/Appointment";
import Banner from "../Banner/Banner";


import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
          
           <Services></Services>
            <Creview></Creview>
         
            <Appointment></Appointment>
            
            

        </div>
    );
};

export default Home;