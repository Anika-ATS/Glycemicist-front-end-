import {Outlet, useLocation} from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/NavBar/Navbar";

const Main = () => {
  // const location=useLocation();
  // console.log(location);
  // const NoNavbarAndFooter=location.pathname.includes('login')||location.pathname.includes('SignUp');
  return (
    <div>
      <Navbar
        color="bg-slate-100"
        liColor="text-[#1d2939]"
        log="text-blue-950"
        hover="text-teal-700"
      ></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
