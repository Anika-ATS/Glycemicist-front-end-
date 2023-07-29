import {Link, useNavigate} from "react-router-dom";
import SignUp1 from "../../assets/Images/SignUP.png";
import {Controller, useForm} from "react-hook-form";
import {useContext} from "react";
import {AuthContext} from "../../Providers/AuthProvider";

import Swal from "sweetalert2";
import axios from "axios";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    category,
    // reset,

    formState: {errors},
  } = useForm();
  const navigate = useNavigate();
  const {createUser, updateUserProfile, logOut} = useContext(AuthContext);

  const onSubmit = data => {
    console.log(data);
    // console.log("category", data.category);
    // condition
    // const role = category === "doctor" ? "doctor" : "user";

    createUser(data.email, data.password)
      .then(result => {
        const createdUser = result.user;
        // console.log("createdUser: ", createdUser);
        updateUserProfile(createdUser, data.name, data.photo).then(() => {
          const newUser = {
            name: data.name,
            email: data.email,
            image: data.photo,
            role: data.category,
            status: "pending",
          };

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
                navigate("/");
              }
            })
            .catch(error => {
              setError(error.message);
            });
        });
        // Swal.fire("Signed Up successfully!");
        // navigate("/");
      })
      .catch(error => {
        console.log(error);
      });
  };
  // for catagory
  const handleCategoryChange = value => {
    // Reset the yourformdesignation value if the category is not "doctor"
    if (value !== "doctor") {
      setValue("yourformdesignation", "");
    }
  };

  const selectedCategory = watch("category");

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
                        placeholder="Your Designation"
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
                {...register("email", {required: true})}
                placeholder="email"
                name="email"
                className="input input-bordered"
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

              {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
            </div>

            {/* Confirmpassword */}
            <div className="form-control">
              <input
                type="password"
                {...register("Confirmpassword", {
                  required: true,
                  minLength: 6,
                  maxLength: 10,
                })}
                placeholder="Confirmpassword"
                name="Confirmpassword"
                className="input input-bordered"
              />
              {errors.Confirmpassword && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            {/* photourl */}
            <div className="form-control">
              <input
                type="url"
                {...register("photo", {required: true})}
                placeholder="Photo"
                name="photo"
                className="input input-bordered"
              />
              {errors.photo && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            {/* height */}
            <div className="form-control">
              <input
                type="text"
                {...register("height", {required: true})}
                placeholder="Your Height"
                name="height"
                className="input input-bordered"
              />
              {errors.height && (
                <span className="text-red-600 ">This field is required</span>
              )}
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-white text-white outline outline-[#64d9b9] bg-gradient-to-r 
                from-[#64d9b9] to-[#1d2939]  "
                type="submit"
                value="Sign In"
              />
              {/* <button className="btn btn-primary">Sign In</button> */}
            </div>
            <div>
              <h1 className="mx-5 ps-5 text-xl font-bold text-[#1d2939] ">
                You have an account?{" "}
                <Link className="link link:hover text-[#64d9b9]   " to="/login">
                  Login
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
