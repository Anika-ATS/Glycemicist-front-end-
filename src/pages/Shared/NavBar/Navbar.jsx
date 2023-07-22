import { Link } from "react-router-dom";
import  logo  from '../../../assets/Images/glycemicist_logo-removebg-preview.png'

const Navbar = () => {
    const NavItems = <>
        <li><Link to='/' className=' text-cyan-500 font-bold'>Home</Link></li>
        <li><Link to='/' className=' text-cyan-500 font-bold'>Patients</Link></li>
        <li><Link to='/'><span className=' text-cyan-500 font-bold' >Doctors</span> </Link></li>
        <li><Link to='/prediction'><span className=' text-cyan-500 font-bold' >Diabetis Prediction</span> </Link></li>

        <li><Link to='/login'><span className=' text-cyan-500 font-bold' >Login</span> </Link></li>

    </>





    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavItems}
                        </ul>
                    </div>
                    {/* <a className="btn btn-white text-cyan-500  text-xl">GLYCEMICIST</a> */}
                    <label tabIndex={0} className=" avatar">
                        <div className="mx-3 rounded-full" style={{height:'50px',width:'170px'}} >
                            <img src={logo} />
                        </div>
                    </label>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-white text-cyan-500 outline outline-cyan-500">Button</a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;