import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/NavBar/Navbar";


const Main = () => {
    const location=useLocation();
    console.log(location);
    // const NoNavbarAndFooter=location.pathname.includes('login')||location.pathname.includes('SignUp');
    return (
        <div>
           {/* {NoNavbarAndFooter || */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;