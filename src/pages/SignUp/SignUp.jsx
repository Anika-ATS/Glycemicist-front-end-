import {Link, useNavigate} from "react-router-dom";
import SignUp1 from "../../assets/Images/SignUP.png";
import {useForm} from "react-hook-form";
import {useContext} from "react";
import {AuthContext} from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: {errors},
  } = useForm();
  const navigate = useNavigate();
  const {createUser, updateUserProfile, logOut} = useContext(AuthContext);

  const onSubmit = data => {
    console.log(data);

    createUser(data.email, data.password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
        // updateUserProfile(createdUser, data.name, data.photo)
        //   .then(() => {
        //     // created user manage  in db
        //     const saveUser = {
        //       name: data.name,
        //       email: data.email,
        //       photo: data.photo,
        //     };
        //     // console.log(saveUser)
        //     fetch("", {
        //       method: "POST",
        //       headers: {
        //         "content-type": "application/json",
        //       },
        //       body: JSON.stringify(saveUser),
        //     })
        //       .then(res => res.json())
        //       .then(data => {
        //         if (data.insertedId) {
        //           console.log(data.insertedId);
        //           alert("Signed Up successfully!");
        //           reset();
        //           logOut()
        //             .then(() => {
        //               navigate("/login");
        //             })
        //             .catch(error => console.log(error));
        //         }
        //       });
        //   })
        //   .catch(error => console.log(error));

        updateUserProfile(createdUser, data.name, data.photo).then(() => {
          const newUser = {
            name: data.name,
            email: data.email,
            image: data.photo,
            role: "user",
          };
          axios

            .post(" http://localhost:5000/users", newUser)

            .then(response => {
              if (response.data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Registered successfully. Please Login!",
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

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <figure className="px-5 pt-5">
            {" "}
            <img src={SignUp1} alt="" className="rounded-xl" />
          </figure>
          {/* <h1 className="ps-5 text-xl font-bold">Have an account? <Link className='link link:hover text-purple-800' to='/login'>Login</Link></h1> */}
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                className="btn btn-white text-cyan-500 outline outline-cyan-500 "
                type="submit"
                value="Sign In"
              />
              {/* <button className="btn btn-primary">Sign In</button> */}
            </div>
            <div>
              <h1 className="ps-5 text-xl font-bold text-cyan-500">
                You have an account?{" "}
                <Link className="link link:hover text-cyan-500" to="/login">
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
