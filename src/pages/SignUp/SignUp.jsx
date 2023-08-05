import {Link, useLocation, useNavigate} from "react-router-dom";
import SignUp1 from "../../assets/Images/SignUP.png";
import {Controller, useForm} from "react-hook-form";
import {useContext} from "react";
import {AuthContext} from "../../Providers/AuthProvider";
import {sendEmailVerification} from "firebase/auth";
import Swal from "sweetalert2";
import axios from "axios";
import GetDownloadUrl from "./GetDownload";
import {useState} from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import GetDownload from "./GetDownload";

const SignUp = () => {
  const navigate = useNavigate();
  const {createUser, updateUserProfile, logOut} = useContext(AuthContext);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/login";
  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    category,
    reset,
    setError,

    formState: {errors},
  } = useForm();
  const passwordValue = watch("password", "");
  const selectedCategory = watch("category");
  // console.log(selectedCategory);
  const [p, setP] = useState();
  const onSubmit = async data => {
    console.log(data);

    const file = data.image[0];
    const {downloadURL, progress} = await GetDownloadUrl(file);
    // setP(progress);
    let url;
    if (downloadURL) {
      console.log("Download link: ", downloadURL);
      url = downloadURL;
    }
    console.log("Upload progress: ", p);
    let newUser;
    createUser(data.email, data.password)
      .then(result => {
        const createdUser = result.user;

        console.log("createdUser: ", createdUser);
        updateUserProfile(createdUser, data.name, url).then(() => {
          if (selectedCategory == "doctor") {
            newUser = {
              name: data.name,
              email: data.email,
              image: url,
              role: data.category,
              status: "pending",
              affiliation: data.Designation,
              specialization: data.Degree,
            };
          } else {
            newUser = {
              name: data.name,
              email: data.email,
              image: url,
              role: data.category,
              status: "pending",
              bloodPressure: [],
              bloodSugar: [],
              HbA1c: [],
              RBS: [],
            };
          }

          axios
            .post("http://localhost:5000/users", newUser)

            .then(response => {
              console.log(response);
              if (response.data.insertedId) {
                console.log(response.data.insertedId);
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Registered successfully!",
                  showConfirmButton: false,
                  timer: 1500,
                });
                // navigate("/");
                reset();
              }
            })
            .catch(error => {
              setError(error.message);
            });
        });

        // Email verification sent!
        sendVerificationalEmail(result.user);
        Swal.fire("Signed Up successfully!");
        reset();
        logOut()
          .then(() => {
            navigate(from, {replace: true});
          })
          .catch(error => console.log(error));
      }) //end
      .catch(error => {
        console.log(error);
      });
  };

  // email verification

  const sendVerificationalEmail = user => {
    console.log("user:from email", user);
    sendEmailVerification(user)
      .then(result => {
        // Email verification sent!

        console.log(result);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "verify your email !",
          showConfirmButton: true,
          timer: 3500,
        });
      })
      .catch(error => {
        console.log("Error signing up:", error);
      });
  };

  // for catagory
  const handleCategoryChange = value => {
    // Reset the yourformdesignation value if the category is not "doctor"
    if (value !== "doctor") {
      setValue("yourformdesignation", "");
    }
  };

  return (
    <div className=" hero min-h-screen bg-base-200">
      <div className="mt-20 mb-10 mx-20 hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <figure className="px-5 pt-5">
            {" "}
            <img src={SignUp1} alt="" className="rounded-xl" />
          </figure>
          {/* <h1 className="ps-5 text-xl font-bold">Have an account? <Link className='link link:hover text-purple-800' to='/login'>Login</Link></h1> */}
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  hover:bg-gradient-to-r from-[#64d9b9] to-[#1d2939]   ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* catagory */}
            <div>
              <label className="mx-2 text-[#1d2939]">Category:</label>
              <Controller
                name="category"
                control={control}
                rules={{required: true}}
                render={({field}) => (
                  <select
                    {...field}
                    defaultValue={"DEFAULT"}
                    onChange={e => {
                      field.onChange(e);
                      handleCategoryChange(e.target.value);
                    }}
                    className="mt-2  w-full input input-bordered"
                  >
                    <option value="DEFAULT" disabled>
                      Please select a category
                    </option>
                    <option value="doctor">Doctor</option>
                    <option value="user">Patient</option>
                  </select>
                )}
              />
              {errors.category && (
                <span className="text-red-600">Please select a category.</span>
              )}
            </div>

            <div>
              {watch("category") === "doctor" && (
                <div>
                  <label className=" text-[#1d2939]">
                    Current Designation:
                  </label>
                  <Controller
                    name="Designation"
                    control={control}
                    rules={{required: selectedCategory === "doctor"}}
                    render={({field}) => (
                      <input
                        type="text"
                        {...field}
                        className="mt-2  w-full input input-bordered"
                        placeholder="Your Affialiation"
                        {...register("Designation", {required: true})}
                      />
                    )}
                  />
                  {errors.Designation && (
                    <span className="text-red-600">
                      Please enter your form designation.
                    </span>
                  )}

                  {/* degree */}
                  {/* <label className=" text-[#1d2939]">Specialization:</label> */}
                  <Controller
                    name="Degree"
                    control={control}
                    rules={{required: selectedCategory === "doctor"}}
                    render={({field}) => (
                      <input
                        type="text"
                        {...field}
                        className="mt-2  w-full input input-bordered"
                        placeholder="Your Specialization"
                        {...register("Degree", {required: true})}
                      />
                    )}
                  />
                  {errors.Degree && (
                    <span className="text-red-600">
                      Please enter your form designation.
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* name */}
            <div className="form-control ">
              <input
                type="text"
                {...register("name", {required: true})}
                placeholder="Name"
                name="name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            {/* email */}
            <div className="form-control">
              <input
                type="email"
                name="email"
                {...register(
                  "email",

                  {
                    required: true,
                    pattern: {
                      value: /^[a-z0-9]+@[a-z]*gmail.com$/,
                      message: "Invalid email address ",
                    },
                  }
                )}
                placeholder="email"
                className="input input-bordered mt-2"
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            {/* password */}
            <div className="form-control">
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 10,
                  pattern:
                    /(?=.*[A-Z])(?=.*[!@#$%&*])(?=.*[0-9].*[0-9].*[0-9])(?=.*[a-z])/,
                })}
                placeholder="Password"
                name="password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-600">This field is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <p role="alert" className="text-red-600">
                  Password is less then 6 Characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p role="alert" className="text-red-400 text-xs">
                  Must have One Capital letter, one special character ,3 digits
                  and one small letter{" "}
                </p>
              )}
            </div>

            {/* Confirmpassword */}
            <div className="form-control">
              <input
                type="password"
                {...register("Confirmpassword", {
                  required: true,
                  validate: value =>
                    value === passwordValue || "Passwords do not match",

                  minLength: 6,
                  maxLength: 10,
                })}
                placeholder="Confirmpassword"
                name="Confirmpassword"
                className="input input-bordered mt-2"
              />
              {errors.Confirmpassword && (
                <span className="text-red-600">Password does not match</span>
              )}
            </div>

            <div className="form-control">
              <label
                htmlFor="fileInput"
                className="text-teal-700 text-lg font-semibold group-hover:text-white"
              ></label>
              <input
                type="file"
                {...register("image", {
                  required: "Please select a file",
                })}
                id="fileInput"
                name="image"
                className="input input-bordered py-3 w-full "
              />
              {errors.file && (
                <span className="text-red-600">{errors.file.message}</span>
              )}
            </div>

            <div className="form-control mt-6">
              <input
                className="mb-5 mt-2 btn btn-white text-white outline outline-[#64d9b9] bg-gradient-to-r from-[#64d9b9] to-[#1d2939]  "
                type="submit"
                value="Sign Up"
              />
            </div>
            <div>
              <h1 className=" font-bold text-[#1d2939] ">
                You have an account?
                <Link className="hover:link text-[#1d2939] ms-1  " to="/login">
                  Click here to SignIn
                </Link>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
