import {Link, useLocation, useNavigate} from "react-router-dom";
import L1 from "../../assets/Images/L1.jpg";
import {useContext, useRef} from "react";
import {AuthContext} from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import {sendPasswordResetEmail} from "firebase/auth";
import {getAuth} from "firebase/auth";
import app from "../../firebase/firebase.config";
import {useForm} from "react-hook-form";

const auth = getAuth(app);

const Login = () => {
  const {
    reset,

    formState: {errors},
  } = useForm();

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

    const newUser = auth.currentUser;
    SignInUser(email, password)
      .then(result => {
        const LogInUser = result.user;

        console.log(LogInUser);
        // if (newUser.emailVerified && newUser.email === LogInUser.email) {
        navigate(from, {replace: true});
        // Swal.fire("Logged In Succesfully!");
        reset();

        <div className="toast toast-top toast-start">
          <div className="alert alert-success">
            <span>Successfully logged in.</span>
          </div>
        </div>;
        // }
      })
      .catch(error => {
        console.log(error);
        Swal.fire("Fill up again properly! or please verify your email.");
      });
  };

  //  Reset password

  const emailRef = useRef();

  const handleResetPassword = event => {
    const email = emailRef.current.value;

    if (!email) {
      alert("Provide your email");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check your email");
      })
      .catch(error => {
        console.log(error);
        alert("Error");
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="mt-20 mb-10 mx-36 hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <figure className="px-5 pt-5 ">
              <img src={L1} alt="" className="rounded-xl" />
            </figure>
          </div>

          <div className="card flex-shrink-0 w-5/12 max-w-sm shadow-2xl bg-base-100   ">
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
                      ref={emailRef}
                      required
                      className="input input-bordered"
                    />
                    {errors.email && (
                      <span className="text-red-600">
                        Please fill up this field{" "}
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      name="password"
                      required
                      className="input input-bordered"
                    />
                    <label className="label">
                      <label className="font-bold"> Forgot password?</label>

                      <label
                        onClick={handleResetPassword}
                        className=" mx-2 font-bold text-[#1d2939] hover:link"
                      >
                        Reset now
                      </label>
                    </label>
                  </div>

                  <div className="form-control mt-6">
                    <input
                      className="w-2/3 mx-auto btn btn-outline outline-[#1d2939]   text-white h-[50px]  bg-gradient-to-r from-[#64d9b9] to-[#1d2939]  "
                      type="submit"
                      value="Login"
                    />

                    <h1 className=" text-[#1d2939] font-bold mt-3">
                      <Link
                        className="w-full hover:link  text-[#1d2939]"
                        to="/SignUp"
                      >
                        Click here to create a new account
                      </Link>
                    </h1>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
