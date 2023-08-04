// import Creview from "../../Shared/CReview/Creview";
import {useContext} from "react";
import Test from "../../../Components/Test";
import PrivateRoute from "../../../Routes/PrivateRoute";
import News from "../../Shared/NewsShow/News";
// import NewsDisplay from "../../Shared/NewsShow/NewsDisplay";
import Appointment from "../Appointment/Appointment";
import Banner from "../Banner/Banner";
import ClientRev from "../Reviews/ClientRev";

import Services from "../Services/Services";
import {AuthContext} from "../../../Providers/AuthProvider";
import useAllDoctors from "../../../Hooks/useAllDoctors";

const Home = () => {
  const {user} = useContext(AuthContext);
  const {isDoctor} = useAllDoctors();
  return (
    <div>
      <Banner></Banner>
      {/* <Test /> */}
      <Services></Services>
      <ClientRev></ClientRev>

      {user && !isDoctor && <Appointment />}

      <News></News>
    </div>
  );
};

export default Home;
