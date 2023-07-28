import { Link } from "react-router-dom";
import logo from '../../../assets/Images/logo2-removebg-preview.png'

const Navbar = (props) => {
  const {user} = useContext(AuthContext);
  console.log(user);
     const NavItems = (<>
    <li><Link to='/' className=' text-[#1d2939] text-xl font-bold'>Home</Link></li>
        <li><Link to='/dashboard' className='text-[#1d2939] text-xl font-bold'>Dashboard</Link></li>
        <li><Link to='/allDoctors'><span className='text-[#1d2939] text-xl font-bold' >All Doctors</span> </Link></li>
    <li><Link to='/prediction'><span className=' text-cyan-500 font-bold' >Diabetis Prediction</span> </Link></li>

    <li><Link to='/login'><span className=' text-cyan-500 font-bold' >Login</span> </Link></li>
    
    </>
  );

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
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {NavItems}
                    </ul>
                </div>
                <label tabIndex={0} className=" avatar">
                        <div className="mx-3 rounded-full" style={{ height: '70px', width: '170px' }} >
                            <img src={logo} />
                        </div>
                    </label>
                <div className="navbar-end">
                        {user?<button>Logout</button>: <><Link to='/login'>
                           <span className=' btn btn-white text-white bg-[#64d9b9]  h-[50px] w-[120px] rounded-full font-bold outline outline-[#1d2939] me-1 hover:bg-[#1d2939]' >Login</span> 
                        </Link>
                    
                    
                        <Link to='/SignUp'>
                           <span className='badge btn btn-white text-white bg-[#64d9b9]  h-[50px] w-[120px] rounded-full font-bold outline outline-[#1d2939] me-5 hover:bg-[#1d2939]' >SignUp</span> 
                        </Link></>}
                </div>
            </div>

        </div>
    );
};

export default Navbar;
