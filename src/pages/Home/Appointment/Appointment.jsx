import pic from "../../../assets/Images/Newsheadlessdoc.jpg";
// import pic1 from '../../../assets/Images/ladyD-removebg-preview.png'
import {Controller, useForm} from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useDoctors from "../../../Hooks/useAllDoctors";
import axios from "axios";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {storage} from "../../../firebase/firebase.config";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
// import {storage} from "../firebase/firebase.config";

const Appointment = () => {
  const {Doc} = useDoctors();
  // console.log(AllDoc);
  const staticId = "my-static-id";
  const {
    register,
    handleSubmit,
    control,
    reset,

    formState: {errors},
  } = useForm();
  const onSubmit = async data => {
    console.log(data);
    const [doctorEmailValue, doctorName] = data.doctorEmail.split("|");
    console.log(doctorEmailValue, doctorName);
    try {
      const file = data.file[0];
      const storageRef = ref(storage, `uploads/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed", snapshot => {
        // You can handle progress here if needed
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      });

      await uploadTask;

      const downloadURL = await getDownloadURL(storageRef);
      console.log("Download URL:", downloadURL);
      const formData = {
        name: data.name,
        age: data.age,
        patientEmail: data.patientEmail,
        doctorEmail: doctorEmailValue,
        doctorName: doctorName,
        mobileNumber: data.mobileNumber,
        problems: data.problems,
        date: data.date,
        fileURL: downloadURL,
      };
      // Send the form data to the server (MongoDB)

      axios
        .post("http://localhost:5000/appointment", formData)
        .then(response => {
          if (response.data.insertedId) {
            console.log(response.data.insertedId);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Appointment has been booked!",
              showConfirmButton: false,
              timer: 1500,
            });
            reset();
          }
        })
        .catch(error => {
          // Handle errors here
          console.log("Error:", error);
        });
    } catch (error) {
      console.error("Error uploading file to Firebase:", error);
    }
  };

  return (
    <div className="mb-5 mt-5">
      <div>
        <SectionTitle
          subHeading={"Consult Your Doctor"}
          Heading={"Book an Appointment"}
        ></SectionTitle>
      </div>

      <div className=" hero " style={{backgroundImage: `url(${pic})`}}>
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className=" grid grid-cols-2 my-20 py-20">
          <div
            id={staticId}
            className="card  mx-24 w-10/12 shadow-2xl bg-base-200 hover:-translate-y-5 group  border border-[#1d2939] hover:bg-gradient-to-r 
                from-[#64d9b9] to-[#1d2939] "
          >
            <h1 className="mt-3 px-2 shadow-2xl group-hover:text-white text-2xl mx-auto text-[#64d9b9] ">
              Book Your Appointment
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <input
                  type="text"
                  {...register("name", {required: true})}
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              {/* Age */}
              <div className="form-control  ">
                <Controller
                  name="age"
                  control={control}
                  rules={{
                    required: "Age is required ",

                    min: 0,
                    // message:'Age must be 18 or older than 18'
                  }}
                  render={({field}) => (
                    <input
                      type="number"
                      className="py-3  input input-bordered"
                      placeholder="Your Age"
                      {...field}
                    />
                  )}
                />
                {errors.age && (
                  <div className="text-red-600">Age shouldn't be negative</div>
                )}

                {/* <input type="number"   {...register("Age", { required: true,min:18 })} placeholder="Age" name='Age' className="mt-3 mx-auto w-11/12 text-black input input-bordered border border-cyan-600" />
                                {errors.Age && <div className="text-red-600 ">This field is required and minimum age must be 18</div>} */}
              </div>
              {/* email */}
              <div className="form-control">
                <input
                  type="email"
                  {...register("patientEmail", {
                    required: true,
                    // pattern: {
                    //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/,
                    //     message: 'Invalid email address',
                    //   },
                    //  pattern:/(?=.*[a-z])(?=.*[0-9])+@+(gmail.com)/
                  })}
                  placeholder="Your email"
                  name="patientEmail"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <Controller
                  name="doctorEmail"
                  control={control}
                  render={({field}) => (
                    <select
                      {...register("doctorEmail", {
                        required: true,
                      })}
                      defaultValue={"DEFAULT"}
                      className="mx-auto w-full  text-slate-500 text-md p-3 border border-slate-300 rounded-md"
                      {...field}
                    >
                      {/* <option
                        value="Seelect a Doctor"
                        disabled
                        className="text-slate-300"
                      >
                        Select a Doctor
                      </option> */}
                      <option value="DEFAULT" disabled>
                        Please select a Doctor
                      </option>

                      {Doc.map(item => (
                        <option
                          className="py-3 rounded-md"
                          key={item.email}
                          value={`${item.email}|${item.name}`}
                        >
                          {`${item.name}\u00A0\u00A0\u00A0- (${item.email})`}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.doctorEmail && (
                  <div className="text-red-600">This field is required</div>
                )}
              </div>

              {/* phone number */}
              <div className="form-control">
                <Controller
                  name="mobileNumber"
                  control={control}
                  rules={{
                    required: "Mobile number is required",
                    pattern: {
                      value: /^(\+?88)?01[3-9]\d{8}/,
                      // message: 'Invalid Bangladeshi mobile number',
                    },
                  }}
                  render={({field}) => (
                    <input
                      type="tel"
                      className="py-3 w-full  input input-bordered"
                      placeholder="Mobile Number"
                      {...field}
                    />
                  )}
                />
                {errors.mobileNumber && (
                  <div className="text-red-600 ">
                    Mobile number is required and must be Bangladeshi mobile
                    number
                  </div>
                )}
              </div>
              {/* Message */}
              <div className="form-control">
                <textarea
                  type="text"
                  {...register("problems", {
                    required: true,
                  })}
                  placeholder="Your Problem"
                  name="problems"
                  className="input input-bordered h-28 pt-2"
                />
                {errors.problems && (
                  <span className="text-red-600 ">This field is required</span>
                )}
              </div>
              {/* Date */}
              <div className="form-control">
                <input
                  type="date"
                  {...register("date", {
                    required: true,
                    // value:
                  })}
                  placeholder="Date"
                  name="date"
                  className="input input-bordered"
                />
                {errors.date && (
                  <span className="text-red-600 ">This field is required</span>
                )}
              </div>
              {/*user report upload if they want to */}
              <div className="form-control">
                <label
                  htmlFor="fileInput"
                  className="text-teal-700 text-lg font-semibold group-hover:text-white"
                >
                  Download and attach medical history report for doctor.
                </label>
                <input
                  type="file"
                  {...register("file", {
                    required: "Please select a file",
                  })}
                  id="fileInput"
                  name="file"
                  className="input input-bordered py-3 w-full "
                />
                {errors.file && (
                  <span className="text-red-600">{errors.file.message}</span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-white text-xl  text-[#64d9b9] outline outline-[#44a78d] "
                  type="submit"
                  value="Confrim Appointment"
                />
              </div>
            </form>
          </div>
          <div>
            <figure>
              {/* <img  src={pic1} alt="" className="w-full" /> */}
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
