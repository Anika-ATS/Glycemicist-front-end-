import {Link, useLocation, useNavigate} from "react-router-dom";
// import log from "../../assets/Images/logg.jpg";
import {useContext, useRef} from "react";
import {AuthContext} from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import {sendPasswordResetEmail} from "firebase/auth";
import {getAuth} from "firebase/auth";
import app from "../../firebase/firebase.config";
import {useForm} from "react-hook-form";
// import P3 from '../../assets/Images/prediction3.jpeg';
// import P3 from '../../assets/Images/lognew.jpg';
// import P3 from '../../assets/Images/lognn.webp';
import P3 from "../../assets/Images/lkl.jpg";
// import P3 from '../../assets/Images/D4.png';
import yy from "../../assets/lotti/login1.json";
// import L2 from '../../assets/lotti/login2.json';
import {Player} from "@lottiefiles/react-lottie-player";
import {Carousel} from "react-responsive-carousel";

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

    // const newUser = auth.currentUser;
    SignInUser(email, password)
      .then(result => {
        const LogInUser = result.user;

        console.log(LogInUser);
        // if (newUser.emailVerified && newUser.email === LogInUser.email)
        {
          navigate(from, {replace: true});
          Swal.fire({title: "Logged In Succesfully!", color: "#1d2939"});
          reset();

          // <div className="toast toast-top toast-start">
          //   <div className="alert alert-success">
          //     <span>Successfully logged in.</span>
          //   </div>
          // </div>;
        }
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
    <div
      style={{
        backgroundImage: `url(${P3})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <div className=" font-bold w-[300px] h-[10px]  hover:-translate-y-5 ">
          <div className="mx-10  group card w-[400px] h-[200px] shadow-4xl">
            <div className="border bg-gradient-to-r from-[#64d9b9] to-[#1d2939] mt-52 font-serif  font-bold text-center text-white rounded-md fade-in-word animate-pulse ">
              <p className="text-3xl">Login!!</p>
            </div>
            <h5 className="border bg-white mt-10 font-serif  font-bold text-center text-blue-950 rounded-md fade-in-word animate-pulse ">
              Let's get connected
            </h5>
          </div>
        </div>
      </div>

      <div className="mx-64 hero min-h-screen ">
        <div className=" mt-10 mb-10  rounded-lg hero-content bg-gradient-to-r from-[#64d9b9] to-[#1d2939]  flex-col lg:flex-row-reverse">
          <Carousel>
            <div className="text-center lg:text-left">
              <div className="card mx-auto w-96  shadow-2xl  ">
                <div className="card w-56 h-[350px] mb-3 hover:-translate-y-5">
                  <div className="card-body  ">
                    <Player
                      src={yy}
                      className="player  w-[300px] h-[300px]"
                      loop
                      autoplay
                    />
                  </div>
                </div>
              </div>
            </div>
          </Carousel>

          {/* form start */}

          <div className=" -mx-10 card flex-shrink-0 w-full max-w-sm shadow-4xl  ">
            <form onSubmit={handleOnLogin}>
              <div className="h-auto card flex-shrink-3 w-full max-w-sm shadow-2xl bg-base-100">
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
                      className=" mx-auto btn btn-outline outline-[#1d2939]   text-white h-[50px] w-3/4 bg-gradient-to-r from-[#64d9b9] to-[#1d2939]  "
                      type="submit"
                      value="Login"
                    />

                    <h1 className=" text-[#1d2939] font-bold mt-3 text-center">
                      <Link
                        className="w-full hover:link  text-[#1d2939]  text-center"
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
