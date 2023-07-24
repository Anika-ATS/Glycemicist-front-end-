import {Link, useLocation, useNavigate} from "react-router-dom";
import L1 from "../../assets/Images/L1.jpg";
import {useContext} from "react";
import {AuthContext} from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
  const {SignInUser} = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleOnLogin = event => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;

    const password = form.password.value;

    console.log(password, email);

    // create user
    SignInUser(email, password)
      .then(result => {
        const LogInUser = result.user;
        console.log(LogInUser);
        navigate(from, {replace: true});
        Swal.fire("Logged In!");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <figure className="px-5 pt-5 w-1/2 h-1/2">
              <img src={L1} alt="" className="rounded-xl" />
            </figure>
            <h1 className="ps-5 text-2xl font-bold mt-3">
              New Here?
              <br />{" "}
              <Link className="link link:hover text-cyan-500" to="/SignUp">
                Create An Account
              </Link>
            </h1>
          </div>
          {/* onSubmit={handleOnLogin()} */}
          <form onSubmit={handleOnLogin}>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                {/* captcha */}
                {/* <div className="form-control">
                    <label className="label">
                       <LoadCanvasTemplate />
                    </label>
                    <input type="text" placeholder="password" name='password' className="input input-bordered" />
                   
                </div> */}

                <div className="form-control mt-6">
                  <input
                    className="btn btn-white text-cyan-500 outline outline-cyan-500"
                    type="submit"
                    value="Login"
                  />
                </div>
                {/* <SocialLogin></SocialLogin> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
