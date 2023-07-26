// import Creview from "../../Shared/CReview/Creview";
import News from "../../Shared/NewsShow/News";
// import NewsDisplay from "../../Shared/NewsShow/NewsDisplay";
import Appointment from "../Appointment/Appointment";
import Banner from "../Banner/Banner";
import ClientRev from "../Reviews/ClientRev";


import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
          
            <Services></Services>
            <ClientRev></ClientRev>
         
            <Appointment></Appointment>
            <News></News>
            
            

        </div>
    );
};

export default Home;