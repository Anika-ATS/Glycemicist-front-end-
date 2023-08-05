// import {Controller, useForm} from "react-hook-form";
// import Dp1 from "../../assets/Images/Dprediction1.webp";
// import convertFormData from "./convertFormData";
// import {useContext, useState} from "react";
// import Swal from "sweetalert2";
// import {Player} from "@lottiefiles/react-lottie-player";

// import SectionTitle from "../../Components/SectionTitle/SectionTitle";

// import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import axios from "axios";
// import {convertSecondForm} from "./convertSecondForm";
// import {AuthContext} from "../../Providers/AuthProvider";
// import Response from "./Response";

// // http://localhost:5000/

// const DPrediction = () => {
//   const {user} = useContext(AuthContext);
//   const [isLoading, setIsLoading] = useState(false);
//   // for  tab index
//   const [TabIndex, setTabIndex] = useState();

//   const {
//     register,
//     handleSubmit,
//     control,
//     reset,
//     watch,
//     formState: {errors},
//   } = useForm();

//   const [res, setRes] = useState();

//   const onSubmit = async data => {
//     console.log(data);
//     const val = convertFormData(data, bmiResult);
//     // console.log(Object.keys(val), Object.values(val));
//     let Gender = data.Sex === 1 ? "Male" : "Female";
//     const secondform = convertSecondForm(data);

//     const inputdata = {
//       firstform: val,
//       secondform: secondform,
//     };
//     console.log(JSON.stringify(inputdata));

//     try {
//       setIsLoading(true);
//       // Send the data to the backend as JSON using Axios
//       const apiUrl = "http://localhost:5000/make-predictiongbhi";
//       // "http://localhost:5000/make-predictiongbhi";
//       const response = await axios.post(apiUrl, inputdata, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.status !== 200) {
//         throw new Error("Network response was not ok");
//       }

//       // Do something with the response if needed
//       const responseData = response.data;

//       if (response.status === 200) {
//         setRes(responseData.risk);
//         console.log(typeof responseData.risk);
//         Swal.fire("Getting the Prediction");
//       }

//       console.log("Prediction", responseData);
//       setIsLoading(false);
//     } catch (error) {
//       // Handle any errors that occur during the fetch
//       alert(error.message);
//       console.error("Error sending data to the backend:", error);
//     } finally {
//       setIsLoading(false);
//       // reset();
//     }
//   };

//   const weightValue = watch("weight");
//   const heightFeetValue = watch("heightFeet");
//   const heightInchesValue = watch("heightInches");

//   function calculateBMI() {
//     const weight = parseFloat(weightValue);
//     const heightFeet = parseFloat(heightFeetValue);
//     const heightInches = parseFloat(heightInchesValue);

//     if (
//       !isNaN(weight) &&
//       !isNaN(heightFeet) &&
//       !isNaN(heightInches) &&
//       heightFeet > 0
//     ) {
//       const heightInMeters = heightFeet * 0.3048 + heightInches * 0.0254;
//       const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);

//       return bmiValue;
//     } else {
//       return "";
//     }
//   }
//   const bmiResult = calculateBMI();
//   return (
//     <div>
//       {/* Banner part*/}
//       <div
//         className="relative hero min-h-screen "
//         style={{backgroundImage: `url(${Dp1})`}}
//       >
//         <div className=" hero-overlay bg-opacity-50"></div>

//         <div className=" hero-content text-cente text-neutral-content">
//           {/* cant fixed position of lotti*/}
//           <div className="  absolute  top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-40  text-white ">
//             <div className="grid grid-cols-2 gap-5 animate-pulse ">
//               {/* card-1 */}
//               {/* <div className="mx-56 mt-64 toast toast-start toast-top h-[300px] mb-10">
//                 <div className="group card w-[300px] h-[300px]  shadow-xl  ">
//                   {/* <div className="card-body  ">
//                     {/* <Player
//                       src={Pres}
//                       className="player  w-[300px] h-[200px]"
//                       loop
//                       autoplay
//                     />
//                   </div>
//                 </div>
//               </div> */}
//             </div>
//           </div>
//           <div className="max-w-md">
//             <p className="mb-5 text-2xl text-white">
//               Diabetic Prediction Test is not just for those who exhibit
//               symptoms of diabetes but for anyone concerned about their overall
//               health and well-being. Prevention is the key to a healthier
//               future.
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* body  [#64d9b9][#1d2939]*/}
//       {isLoading && (
//         <div className="modal modal-open top-2">
//           <div className="modal-box  bg-gradient-to-r  from-[#64d9b9] to-[#1d2939] ">
//             <div className="loader flex items-center justify-center flex-col ">
//               <p className=" text-2xl text-center text-white py-10 ">
//                 Please Wait Your Prediction is Loading...
//               </p>
//               <span className="loading loading-infinity bg-white w-40 text-red-400 text-center"></span>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* bg-gradient-to-r from-[#1d2939] to-[#64d9b9] */}
//       <section className="py-3 bg-[#f1f4f4]   ">
//         {res !== undefined && <Response res={res} />}
//         {/*---------------------------------------- Form started --------------------------------------*/}
//         <div className="card mt-10 mx-auto flex-shrink-0  max-w-screen-lg  shadow-lg bg-base-300 mb-16   ">
//           <SectionTitle
//             // subHeading={"Check your health condition"}
//             Heading={"Prediction Form"}
//             fontSize="font-bold text-xl"
//             background="mt-2 text-white  h-[90px] w-[350px] outline outline-[#1d2939] bg-gradient-to-r  from-[#64d9b9] to-[#1d2939]"
//           ></SectionTitle>

//           <Tabs defaultIndex={TabIndex} onSelect={index => setTabIndex(index)}>
//             {/* form */}
//             <form
//               onSubmit={handleSubmit(onSubmit)}
//               type="submit"
//               className="card-body mx-auto w-10/12 "
//             >
//               {/* first form */}
//               <TabPanel>
//                 {/* f1=HighBp */}
//                 <div className="form-control ">
//                   <label className=" mx-auto w-11/12 text-xl font-bold text-[#1d2939] mb-2 ">
//                     Do you have high Blood Pressure ?
//                   </label>
//                   <Controller
//                     name="HighBP" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("HighBP", {
//                           required: true,
//                         })}
//                         className="mt-3 mx-auto w-11/12  mb-2 text-black border border-cyan-600"
//                         {...field}
//                       >
//                         <option selected disabled></option>
//                         <option value="1">Yes</option>
//                         <option value="0">No</option>
//                       </select>
//                     )}
//                   />
//                   {errors.HighBP && (
//                     <div className=" text-red-600">This field is required</div>
//                   )}
//                 </div>
//                 {/* f2=HighChol */}
//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  mx-auto w-11/12 text-xl  mb-2 ">
//                     Do you have high cholesterol ?
//                   </label>
//                   <Controller
//                     name="HighChol" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("HighChol", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3 mx-auto w-11/12  mb-2 text-black border border-cyan-600"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>
//                         <option value="1">Yes</option>
//                         <option value="0">No</option>
//                       </select>
//                     )}
//                   />
//                   {errors.HighChol && (
//                     <div className="text-red-500 mx-auto w-11/12 ">
//                       This field is required
//                     </div>
//                   )}
//                 </div>
//                 {/* {f15=BMI} */}
//                 {/* <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
//                     Your BMI?
//                   </label>
//                   <input
//                     type="number"
//                     step="0.1"
//                     {...register("BMI", {required: true})}
//                     placeholder="BMI"
//                     name="BMI"
//                     className="mt-3 mx-auto w-11/12 text-black input input-bordered border border-cyan-600"
//                   />
//                   {errors.BMI && (
//                     <div className="text-red-600 ">This field is required</div>
//                   )}
//                 </div> */}
//                 <label className=" font-medium text-blue-950  mx-10 w-11/12 text-xl  mb-2">
//                   Calculate Your BMI:
//                 </label>

//                 {/* Calculating div here */}
//                 <div className="flex flex-col-5 mb-4 ">
//                   <div className=" form-control ">
//                     {/* weight */}
//                     <input
//                       type="number"
//                       step="0.1"
//                       {...register("weight", {required: true})}
//                       placeholder="weight(kg)"
//                       name="weight"
//                       className="mt-3 mx-8 w-9/12 text-black input input-bordered border border-cyan-600"
//                     />
//                     {errors.weight && (
//                       <div className="text-red-600 ">
//                         This field is required
//                       </div>
//                     )}
//                   </div>

//                   {/* heightFeet */}

//                   <div className=" form-control ">
//                     <div className="flex flex-col-2">
//                       <input
//                         type="number"
//                         step="0.1"
//                         {...register("heightFeet", {required: true})}
//                         placeholder="height(Feet)"
//                         name="heightFeet"
//                         className="mt-3  w-6/12 text-black input input-bordered border border-cyan-600"
//                       />
//                       {errors.heightFeet && (
//                         <div className="text-red-600 ">
//                           This field is required
//                         </div>
//                       )}

//                       {/* heightInches */}

//                       <input
//                         type="number"
//                         step="0.1"
//                         {...register("heightInches", {required: true})}
//                         placeholder="height(Inches)"
//                         name="heightInches"
//                         className=" mx-2  mt-3  w-6/12 text-black input input-bordered border border-cyan-600"
//                       />
//                       {errors.heightInches && (
//                         <div className="text-red-600 ">
//                           This field is required
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* BMI result tag */}
//                   <div className="form-control ">
//                     {bmiResult && (
//                       <div>
//                         <p
//                           name="BMI"
//                           value={bmiResult || ""}
//                           readOnly
//                           placeholder="BMI"
//                           className="mt-3  w-9/12  text-black input input-bordered border border-cyan-600"
//                         >
//                           {" "}
//                           BMI: {bmiResult}
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* f10=Heart dieases or heart attack */}
//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl  my-1">
//                     Do you have any history of heart disease or heart-related
//                     health issues such as coronary heart disease (CHD) or
//                     myocardial infarction(MI)?
//                   </label>
//                   <Controller
//                     name="HeartDiseaseorAttack" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("HeartDiseaseorAttack", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3 mx-auto w-11/12 my-1 text-black border border-cyan-600"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="1">Yes</option>
//                         <option value="0">No</option>
//                       </select>
//                     )}
//                   />
//                   {errors.HeartDiseaseorAttack && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>
//                 {/* f6=PhyActivity */}
//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  mx-auto w-11/12 text-xl  mb-3">
//                     Did you engaged in any physical activity to maintain your
//                     well-being or improve your health in past 30 days?{" "}
//                   </label>
//                   <Controller
//                     name="PhyActivity" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("PhyActivity", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3 mx-auto w-11/12 mb-2 text-black border border-cyan-600"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="1">Yes</option>
//                         <option value="0">No</option>
//                       </select>
//                     )}
//                   />
//                   {errors.PhyActivity && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>

//                 {/* f4=fruit */}
//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  mx-auto w-11/12 text-xl  mb-2">
//                     Consume Fruit 1 or more times per day?
//                   </label>
//                   <Controller
//                     name="fruit" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("fruit", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3 mx-auto w-11/12  mb-2 text-black border border-cyan-600"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="1">Yes</option>
//                         <option value="0">No</option>
//                       </select>
//                     )}
//                   />
//                   {errors.fruit && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>
//                 {/* f5=Veggies */}
//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  mx-auto w-11/12 text-xl  mb-2 ">
//                     Consume Vegetables 1 or more times per day?{" "}
//                   </label>
//                   <Controller
//                     name="Veggies" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("Veggies", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3 mx-auto w-11/12  my-3 text-black border border-cyan-600"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="1">Yes</option>
//                         <option value="0">No</option>
//                       </select>
//                     )}
//                   />
//                   {errors.Veggies && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>

//                 {/* f7=GenHealth */}
//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]   py-3 mx-auto w-11/12 text-xl mb-2 ">
//                     Would you say that in general your health is?{" "}
//                   </label>
//                   <Controller
//                     name="GenHlth" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("GenHlth", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3 mx-auto w-11/12 mb-2 text-black border border-cyan-600"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="1">Excellent</option>
//                         <option value="2">Very Good</option>
//                         <option value="3"> Good</option>
//                         <option value="4"> Fair</option>
//                         <option value="5">Poor</option>
//                       </select>
//                     )}
//                   />
//                   {errors.GenHlth && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>

//                 {/* f8=Mental Health */}
//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl my-2">
//                     In the last 30 days, how many days have you dealt with
//                     mental health issues, such as stress, depression, or
//                     emotional challenges?
//                   </label>
//                   <input
//                     type="number"
//                     {...register("MentHlth", {required: true})}
//                     placeholder="Mental health days"
//                     name="MentHlth"
//                     className="mt-3 mx-auto w-11/12 text-black input input-bordered my-2 border border-cyan-600"
//                   />
//                   {errors.MentHlth && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>
//                 {/* f9=Physical Health */}
//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl  my-2 ">
//                     In the past 30 days, how many days have you experienced
//                     physical illness or injury that affected your physical
//                     health?
//                   </label>
//                   <input
//                     type="number"
//                     {...register("PhysHlth", {required: true})}
//                     placeholder="Pysical health days"
//                     name="PhysHlth"
//                     className="border border-cyan-600 mt-3 mx-auto w-11/12 text-black input input-bordered my-2"
//                   />
//                   {errors.PhysHlth && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>

//                 {/* f11=Gender */}
//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
//                     Gender{" "}
//                   </label>
//                   <Controller
//                     className="w-11/12"
//                     name="Sex" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("Sex", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="0">Female</option>
//                         <option value="1">Male</option>
//                       </select>
//                     )}
//                   />
//                   {errors.Sex && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>

//                 {/* {f12=Age} */}
//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939] py-3 mx-auto w-11/12 text-xl ">
//                     What is your Age?{" "}
//                   </label>
//                   <Controller
//                     name="Age" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("Age", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="1">Age 18 to 24</option>
//                         <option value="2">Age 25 to 29</option>
//                         <option value="3">Age 30 to 34</option>
//                         <option value="4">Age 35 to 39</option>
//                         <option value="5">Age 40 to 44</option>
//                         <option value="6">Age 45 to 49</option>
//                         <option value="7">Age 50 to 54</option>
//                         <option value="8">Age 55 to 59</option>
//                         <option value="9">Age 60 to 64</option>
//                         <option value="10">Age 65 to 69</option>
//                         <option value="11">Age 70 to 74</option>
//                         <option value="12">Age 75 to 79</option>
//                         <option value="13">Age 80 or older</option>
//                       </select>
//                     )}
//                   />
//                   {errors.Age && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>

//                 {/* {f14=Education} */}
//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
//                     {" "}
//                     Your education level?
//                   </label>
//                   <Controller
//                     name="Education" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("Education", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className=" mt-3 mx-auto w-11/12 text-black border border-cyan-600"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="1 ">
//                           Never Attended school or any kindergarten.
//                         </option>
//                         <option value="2">
//                           Grsdes 1 through 8(Elementary)
//                         </option>
//                         <option value="3">
//                           Grsdes 9 through 11(Some high School )
//                         </option>
//                         <option value="4">
//                           Grsdes 12 or GED(High School Graduate)
//                         </option>
//                         <option value="5">
//                           College 1 years to 3 years(Some College or technical
//                           School)
//                         </option>
//                         <option value="6">
//                           College 4 years or more(College Graduate)
//                         </option>
//                       </select>
//                     )}
//                   />
//                   {errors.Education && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>
//                 {/* {f13=Income} */}
//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl  ">
//                     Your Income scale?{" "}
//                   </label>
//                   <Controller
//                     name="Income" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("Income", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3  mx-auto w-11/12 text-black border border-cyan-600"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="1">Less than $10,000</option>
//                         <option value="2">Less than $15,000</option>
//                         <option value="3">Less than $20,000</option>
//                         <option value="4">Less than $25,000</option>
//                         <option value="5">Less than $35,000</option>
//                         <option value="6">Less than $50,000</option>
//                         <option value="7">Less than $75,000</option>
//                         <option value="8"> $75,000 or more</option>
//                       </select>
//                     )}
//                   />
//                   {errors.Income && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>
//               </TabPanel>

//               <TabList className="mx-auto w-1/2 h-[40px] text-center">
//                 <Tab>1 </Tab>
//                 <Tab>2</Tab>

//                 {/* {{}} */}
//               </TabList>
//               {/* 2rd form */}
//               {/* F1=polyurea */}
//               <TabPanel>
//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
//                     Do you have Polyurea?{" "}
//                   </label>
//                   <Controller
//                     className="w-11/12"
//                     name="Polyurea" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("Polyurea", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                       </select>
//                     )}
//                   />
//                   {errors.Polyurea && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>

//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
//                     How old are you?
//                   </label>
//                   <input
//                     type="number"
//                     step="0.1"
//                     {...register("age2", {required: true})}
//                     placeholder="Age"
//                     name="age2"
//                     className="mt-3 mx-auto w-11/12 text-black input input-bordered border border-cyan-600"
//                   />
//                   {errors.age2 && (
//                     <div className="text-red-600 ">This field is required</div>
//                   )}
//                 </div>

//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
//                     Do you have Polyphagia?{" "}
//                   </label>
//                   <Controller
//                     className="w-11/12"
//                     name="Polyphagia" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("Polyphagia", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                       </select>
//                     )}
//                   />
//                   {errors.Polyphagia && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>

//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
//                     Do you have visual bluring?{" "}
//                   </label>
//                   <Controller
//                     className="w-11/12"
//                     name="VisualBluring" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("VisualBluring", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                       </select>
//                     )}
//                   />
//                   {errors.VisualBluring && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>

//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
//                     Do you have irritability?{" "}
//                   </label>
//                   <Controller
//                     className="w-11/12"
//                     name="Irritability" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("Irritability", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                       </select>
//                     )}
//                   />
//                   {errors.Irritability && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>

//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
//                     Do you have partial paresis?{" "}
//                   </label>
//                   <Controller
//                     className="w-11/12"
//                     name="PartialParesis" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("PartialParesis", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                       </select>
//                     )}
//                   />
//                   {errors.PartialParesis && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>

//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
//                     Do you have Alopecia ?{" "}
//                   </label>
//                   <Controller
//                     className="w-11/12"
//                     name="Alopecia" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("Alopecia", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                       </select>
//                     )}
//                   />
//                   {errors.Alopecia && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>

//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
//                     Do you have polydipsia?{" "}
//                   </label>
//                   <Controller
//                     className="w-11/12"
//                     name="Polydipsia" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("Polydipsia", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                       </select>
//                     )}
//                   />
//                   {errors.Polydipsia && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>

//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
//                     Do you have weakness?{" "}
//                   </label>
//                   <Controller
//                     className="w-11/12"
//                     name="Weakness" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("Weakness", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                       </select>
//                     )}
//                   />
//                   {errors.Weakness && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>

//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
//                     Do you have genital thrush?{" "}
//                   </label>
//                   <Controller
//                     className="w-11/12"
//                     name="GenitalThrush" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("GenitalThrush", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                       </select>
//                     )}
//                   />
//                   {errors.GenitalThrush && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>

//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
//                     Do you have itching?{" "}
//                   </label>
//                   <Controller
//                     className="w-11/12"
//                     name="Itching" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("Itching", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                       </select>
//                     )}
//                   />
//                   {errors.Itching && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>

//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
//                     Do you have delayed healing?{" "}
//                   </label>
//                   <Controller
//                     className="w-11/12"
//                     name="DelayedHealing" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("DelayedHealing", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                       </select>
//                     )}
//                   />
//                   {errors.DelayedHealing && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>
//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
//                     Do you have SuddenWeightLoss?
//                   </label>
//                   <Controller
//                     className="w-11/12"
//                     name="SuddenWeightLoss" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("SuddenWeightLoss", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                       </select>
//                     )}
//                   />
//                   {errors.SuddenWeightLoss && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>

//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
//                     Do you have muscle stiffness?{" "}
//                   </label>
//                   <Controller
//                     className="w-11/12"
//                     name="MuscleStiffnes" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("MuscleStiffnes", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                       </select>
//                     )}
//                   />
//                   {errors.MuscleStiffnes && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>

//                 <div className="form-control ">
//                   <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
//                     Do you have obesity?{" "}
//                   </label>
//                   <Controller
//                     className="w-11/12"
//                     name="Obesity" // The name used for the field in the data object
//                     control={control} // The RHF control instance
//                     // defaultValue={false} // Set the initial value of the checkbox
//                     render={({field}) => (
//                       <select
//                         {...register("Obesity", {
//                           required: true,
//                         })}
//                         defaultValue={"DEFAULT"}
//                         className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
//                         {...field}
//                       >
//                         <option value="DEFAULT" disabled></option>

//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                       </select>
//                     )}
//                   />
//                   {errors.Obesity && (
//                     <div className="text-red-600">This field is required</div>
//                   )}
//                 </div>
//                 <div className="form-control mt-6">
//                   <input
//                     className="font-bold text-white  mx-auto btn btn-white w-5/12 text-2xl  outline outline-[#1d2939] bg-gradient-to-r  from-[#64d9b9] to-[#1d2939]"
//                     type="submit"
//                     value="Submit"
//                   />
//                 </div>
//               </TabPanel>
//               {/* submit button */}
//             </form>
//           </Tabs>
//         </div>
//         ;
//       </section>
//     </div>
//   );
// };

// export default DPrediction;
import {Controller, useForm} from "react-hook-form";
import Dp1 from "../../assets/Images/Dprediction1.webp";
import convertFormData from "./convertFormData";
import {useContext, useState} from "react";
import Swal from "sweetalert2";
import {Player} from "@lottiefiles/react-lottie-player";
import Pres from "../../../src/assets/lotti/animation_lkmb8gia.json";
import Dia from "../../assets/animation_lkgfscy7.json";
import nonDia from "../../assets/animation_lkgfl9hf.json";
import warn from "../../assets/animation_lkumounl.json";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

// new----------------
import L1 from "../../assets/lotti/animation_lkmb8gia.json";
import L2 from "../../assets/lotti/animation_lkwq0fpq.json";
import {Carousel} from "react-responsive-carousel";

// --------------

import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import {convertSecondForm} from "./convertSecondForm";
// import {AuthContext} from "../../Providers/AuthProvider";
import Response from "./Response";
import {AuthContext} from "../../Providers/AuthProvider";

// http://localhost:5000/

const DPrediction = () => {
  const {user} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  // for  tab index
  const [TabIndex, setTabIndex] = useState();

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: {errors},
  } = useForm();

  const [res, setRes] = useState();

  const onSubmit = async data => {
    console.log(data);
    const val = convertFormData(data, bmiResult);
    console.log(Object.keys(val), Object.values(val));
    let Gender = data.Sex === 1 ? "Male" : "Female";
    const secondform = convertSecondForm(data);

    const inputdata = {
      firstform: val,
      secondform: secondform,
    };
    console.log(JSON.stringify(inputdata));

    try {
      setIsLoading(true);
      // Send the data to the backend as JSON using Axios
      const apiUrl = "http://localhost:5000/make-predictiongbhi";
      // "http://localhost:5000/make-predictiongbhi";
      const response = await axios.post(apiUrl, inputdata, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      // Do something with the response if needed
      const responseData = response.data;

      if (response.status === 200) {
        setRes(responseData.risk);
        console.log(typeof responseData.risk);
        Swal.fire("Getting the Prediction");
      }

      console.log("Prediction", responseData);
      setIsLoading(false);
    } catch (error) {
      // Handle any errors that occur during the fetch
      alert(error.message);
      console.error("Error sending data to the backend:", error);
    } finally {
      setIsLoading(false);
      // reset();
    }
  };

  const weightValue = watch("weight");
  const heightFeetValue = watch("heightFeet");
  const heightInchesValue = watch("heightInches");

  function calculateBMI() {
    const weight = parseFloat(weightValue);
    const heightFeet = parseFloat(heightFeetValue);
    const heightInches = parseFloat(heightInchesValue);

    if (
      !isNaN(weight) &&
      !isNaN(heightFeet) &&
      !isNaN(heightInches) &&
      heightFeet > 0
    ) {
      const heightInMeters = heightFeet * 0.3048 + heightInches * 0.0254;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);

      return bmiValue;
    } else {
      return "";
    }
  }
  const bmiResult = calculateBMI();
  return (
    <div>
      {/* Banner part*/}
      {/* bannar start animate-bounce*/}
      <Carousel>
        <div className="h-[500px]  bg-gradient-to-r from-[#64d9b9] to-[#1d2939] md:grid-cols-3 gap-4 ">
          <div className="container mx-auto flex x-space-4 gap-5  ">
            {/* 1st */}
            <div className=" w-[380px]  h-[600px]  bg-blue-950 ">
              <div>
                <div className=" group card w-[380px]   ">
                  <div className=" toast toast-start toast-top h-[600px] ">
                    <div className="mx-10  w-[100px] h-[600px] ">
                      <div className="group card w-[400px] h-[600px]  ">
                        <div className="card-body mt-5 ">
                          <Player
                            src={L2}
                            className="player  w-[450px] h-[450px]"
                            loop
                            autoplay
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd */}
            <div>
              <div className=" card ">
                <div className=" font-bold w-[300px] h-[400px]  hover:-translate-y-5 ">
                  <div className="mx-24 group  mt-10 card w-[500px] h-[300px] shadow-4xl">
                    <div className="mx-2 py-2 font-serif text-2xl font-bold text-left text-white fade-in-word animate-pulse ">
                      Know diabetes,know yourself. Early awareness empowers
                      healthier living.Get screened, stay informed, and take
                      charge of your well-being. Knowledge is your key to a
                      brighter, healthier future. Prevention is the key to a
                      healthier future.!!!
                    </div>
                  </div>
                </div>
              </div>

              <div></div>

              <div className="card mx-96 mt-24  toast toast-start toast-top h-[500px] mb-5 ">
                <div className="card-body mx-96 ">
                  <Player
                    src={L1}
                    className="player  w-[400px] h-[400px]"
                    loop
                    autoplay
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>

      {/* Banner part end */}

      {/*condition for result displaying*/}
      {isLoading && (
        <div className="modal modal-open">
          <div className="modal-box  bg-gradient-to-r  from-[#64d9b9] to-[#1d2939] ">
            <div className="loader flex items-center justify-center flex-col ">
              <p className=" text-2xl text-center text-white py-10 ">
                Please Wait Your Prediction is Loading...
              </p>
              <span className="loading loading-infinity bg-white w-40 text-red-400 text-center"></span>
            </div>
          </div>
        </div>
      )}

      {/* prediction result area displaying */}

      <section className="py-3 ">
        {res !== undefined && <Response res={res} />}

        {/*---------------------------------------- Form started --------------------------------------*/}
        {/*End result displaying div */}
        {/* heading */}
        <SectionTitle
          // subHeading={"Check your health condition"}
          Heading={"Assess Your Risk of Diabetes"}
          fontSize="font-bold text-xl"
          background="mt-2 text-white  h-[90px] w-[400px] outline outline-[#1d2939] bg-gradient-to-r  from-[#64d9b9] to-[#1d2939]"
        ></SectionTitle>
        {/* Form started */}
        {/* Form started */}
        {/* form div start */}
        <div className="bg-base-100">
          <div className="card mt-8 mx-auto flex-shrink-0  max-w-screen-lg  shadow-lg bg-base-300 mb-20 py-5  w-8/12  ">
            <Tabs
              defaultIndex={TabIndex}
              onSelect={index => setTabIndex(index)}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" card-body mx-auto w-10/12  "
              >
                {/* first form */}

                <TabPanel>
                  {/* HighBp */}
                  <div className="form-control ">
                    <label className="mt-5 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      Do you have high blood pressure ?
                    </label>
                    <Controller
                      name="HighBP" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("HighBP", {
                            required: true,
                          })}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto  w-11/12 text-black border border-cyan-600 "
                          {...field}
                        >
                          <option selected disabled></option>
                          <option
                            className=" text-blue-950 font-bold"
                            value="1"
                          >
                            Yes
                          </option>
                          <option className="text-teal-500 font-bold" value="0">
                            No
                          </option>
                        </select>
                      )}
                    />
                    {errors.HighBP && (
                      <div className=" text-red-600">
                        This field is required
                      </div>
                    )}
                  </div>

                  {/* HighChol */}
                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      Do you have high cholesterol levels?
                    </label>
                    <Controller
                      name="HighChol" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("HighChol", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto w-11/12  text-black border border-cyan-600"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>
                          <option
                            className="font-medium text-blue-950"
                            value="1"
                          >
                            Yes
                          </option>
                          <option
                            className="font-medium text-teal-500 "
                            value="0"
                          >
                            No
                          </option>
                        </select>
                      )}
                    />
                    {errors.HighChol && (
                      <div className="text-red-500 mx-auto w-11/12 ">
                        This field is required
                      </div>
                    )}
                  </div>

                  {/* BMI*/}

                  <label className="text-xl font-medium text-blue-950  mx-9 w-11/12  mb-3">
                    What is your Body Mass Index (BMI):
                  </label>

                  {/* Calculating div here */}
                  <div className="flex flex-col-4 gap-2 mb-4 ">
                    <div className=" form-control ">
                      {/* weight */}
                      <input
                        type="number"
                        step="0.1"
                        {...register("weight", {required: true})}
                        placeholder="weight(kg)"
                        name="weight"
                        className="mt-3 h-8 mx-7 w-32 text-black input input-bordered border border-cyan-600"
                      />
                      {errors.weight && (
                        <div className="text-red-600 ">
                          This field is required
                        </div>
                      )}
                    </div>

                    {/* heightFeet */}
                    <div className=" form-control ">
                      <input
                        type="number"
                        step="0.1"
                        {...register("heightFeet", {required: true})}
                        placeholder="height(Feet)"
                        name="heightFeet"
                        className="mt-3 h-8 w-36 text-black input input-bordered border border-cyan-600"
                      />
                      {errors.heightFeet && (
                        <div className="text-red-600 ">
                          This field is required
                        </div>
                      )}
                    </div>

                    {/* heightInches */}

                    <div className=" form-control ">
                      <input
                        type="number"
                        step="0.1"
                        {...register("heightInches", {required: true})}
                        placeholder="height(Inches)"
                        name="heightInches"
                        className="  h-8 mt-3 w-40  text-black input input-bordered border border-cyan-600"
                      />
                      {errors.heightInches && (
                        <div className="text-red-600 ">
                          This field is required
                        </div>
                      )}
                    </div>

                    {/* BMI result tag */}
                    <div className="form-control ">
                      {bmiResult && (
                        <div>
                          <p
                            name="BMI"
                            value={bmiResult || ""}
                            readOnly
                            placeholder="BMI"
                            className="mt-3 h-8 w-16 px-2 text-blue-950 font-bold input input-bordered border border-cyan-600"
                          >
                            {" "}
                            {bmiResult}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/*Heart dieases or heart attack */}

                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      Have you ever had heart disease or a heart attack?
                    </label>

                    <Controller
                      name="HeartDiseaseorAttack" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("HeartDiseaseorAttack", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto w-11/12 my-1 text-black border border-cyan-600"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option
                            className="font-medium text-blue-950"
                            value="1"
                          >
                            Yes
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="0"
                          >
                            No
                          </option>
                        </select>
                      )}
                    />
                    {errors.HeartDiseaseorAttack && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* PhyActivity */}

                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      Do you engage in regular physical activity?
                    </label>
                    <Controller
                      name="PhyActivity" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("PhyActivity", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto w-11/12 text-black border border-cyan-600"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option
                            className="font-medium text-blue-950"
                            value="1"
                          >
                            Yes
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="0"
                          >
                            No
                          </option>
                        </select>
                      )}
                    />
                    {errors.PhyActivity && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* fruit */}

                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      Do you consume an adequate amount of fruits in your diet?
                      (one or more times per day)
                    </label>
                    <Controller
                      name="fruit" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("fruit", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto w-11/12  text-black border border-cyan-600"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option
                            className="font-medium text-blue-950"
                            value="1"
                          >
                            Yes
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="0"
                          >
                            No
                          </option>
                        </select>
                      )}
                    />
                    {errors.fruit && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* Veggies */}
                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      Do you consume an adequate amount of vegetables in your
                      diet?( one or more times per day)
                    </label>
                    <Controller
                      name="Veggies" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("Veggies", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto w-11/12  my-3 text-black border border-cyan-600"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option
                            className="font-medium text-blue-950"
                            value="1"
                          >
                            Yes
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="0"
                          >
                            No
                          </option>
                        </select>
                      )}
                    />
                    {errors.Veggies && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* GenHealth */}
                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      How would you rate your general health?
                    </label>
                    <Controller
                      name="GenHlth" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("GenHlth", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto w-11/12 text-black border border-cyan-600"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option
                            className="font-medium text-blue-950"
                            value="1"
                          >
                            Excellent
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="2"
                          >
                            Very Good
                          </option>
                          <option
                            className="font-medium text-blue-950"
                            value="3"
                          >
                            {" "}
                            Good
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="4"
                          >
                            {" "}
                            Fair
                          </option>
                          <option
                            className="font-medium text-blue-950"
                            value="5"
                          >
                            Poor
                          </option>
                        </select>
                      )}
                    />
                    {errors.GenHlth && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* Mental Health */}
                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      In the last 30 days,how would you rate your mental health?
                    </label>
                    <input
                      type="number"
                      {...register("MentHlth", {required: true})}
                      placeholder="Mental health days"
                      name="MentHlth"
                      className="rounded-md h-7 mb-5 mt-3 mx-auto w-11/12 text-black input input-bordered  border border-cyan-600"
                    />
                    {errors.MentHlth && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* Physical Health */}
                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      In the past 30 days, how would you rate your physical
                      health?
                    </label>
                    <input
                      type="number"
                      {...register("PhysHlth", {required: true})}
                      placeholder="Pysical health days"
                      name="PhysHlth"
                      className="rounded-md h-7 mb-5 border border-cyan-600 mt-3 mx-auto w-11/12 text-black input input-bordered my-2"
                    />
                    {errors.PhysHlth && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* Gender */}
                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      Gender:
                    </label>
                    <Controller
                      name="Sex" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("Sex", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option className="text-blue-950 font-bold" value="0">
                            Female
                          </option>
                          <option className="text-teal-500 font-bold" value="1">
                            Male
                          </option>
                        </select>
                      )}
                    />
                    {errors.Sex && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* {Age} */}
                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      How old are you?
                    </label>
                    <Controller
                      name="Age" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("Age", {
                            required: true,
                            min: 18,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option
                            className="font-medium text-blue-950"
                            value="1"
                          >
                            Age 18 to 24
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="2"
                          >
                            Age 25 to 29
                          </option>
                          <option
                            className="font-medium text-blue-950"
                            value="3"
                          >
                            Age 30 to 34
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="4"
                          >
                            Age 35 to 39
                          </option>
                          <option
                            className="font-medium text-blue-950"
                            value="5"
                          >
                            Age 40 to 44
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="6"
                          >
                            Age 45 to 49
                          </option>
                          <option
                            className="font-medium text-blue-950"
                            value="7"
                          >
                            Age 50 to 54
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="8"
                          >
                            Age 55 to 59
                          </option>
                          <option
                            className="font-medium text-blue-950"
                            value="9"
                          >
                            Age 60 to 64
                          </option>

                          <option
                            className="font-medium text-teal-500"
                            value="10"
                          >
                            Age 65 to 69
                          </option>

                          <option
                            className="font-medium text-blue-950"
                            value="11"
                          >
                            Age 70 to 74
                          </option>

                          <option
                            className="font-medium text-teal-500"
                            value="12"
                          >
                            Age 75 to 79
                          </option>

                          <option
                            className="font-medium text-blue-950"
                            value="13"
                          >
                            Age 80 or older
                          </option>
                        </select>
                      )}
                    />
                    {errors.Age && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* {Education} */}
                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      What is your highest level of education completed?
                    </label>
                    <Controller
                      name="Education" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("Education", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto w-11/12 text-black border border-cyan-600 "
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option value="1 ">
                            Never Attended school or any kindergarten.
                          </option>
                          <option value="2">
                            Grsdes 1 through 8(Elementary)
                          </option>
                          <option value="3">
                            Grsdes 9 through 11(Some high School )
                          </option>
                          <option value="4">
                            Grsdes 12 or GED(High School Graduate)
                          </option>
                          <option value="5">
                            College 1 years to 3 years(Some College or technical
                            School)
                          </option>
                          <option value="6">
                            College 4 years or more(College Graduate)
                          </option>
                        </select>
                      )}
                    />
                    {errors.Education && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* {Income} */}
                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      What is your annual income level?
                    </label>
                    <Controller
                      name="Income" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("Income", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3  mx-auto w-11/12 text-black border border-cyan-600"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option value="1">Less than $10,000</option>
                          <option value="2">Less than $15,000</option>
                          <option value="3">Less than $20,000</option>
                          <option value="4">Less than $25,000</option>
                          <option value="5">Less than $35,000</option>
                          <option value="6">Less than $50,000</option>
                          <option value="7">Less than $75,000</option>
                          <option value="8"> $75,000 or more</option>
                        </select>
                      )}
                    />
                    {errors.Income && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>
                </TabPanel>

                <div>
                  <TabList className="mb-4  text-center  mt-7 mx-auto w-full h-[20px]  ">
                    <Tab>1</Tab>
                    <Tab>2</Tab>
                  </TabList>
                </div>

                {/*Second form */}

                <TabPanel>
                  {/* Polyurea */}

                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      Have you been experiencing excessive urination, more than
                      usual?
                    </label>
                    <Controller
                      name="Polyurea" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("Polyurea", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option
                            className=" text-blue-950 font-bold"
                            value="Yes"
                          >
                            Yes
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="No"
                          >
                            No
                          </option>
                        </select>
                      )}
                    />
                    {errors.Polyurea && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* Sudden Weight Loss */}

                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      Have you experienced a significant, unintentional weight
                      loss recently?
                    </label>
                    <Controller
                      name="SuddenWeightLoss" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("SuddenWeightLoss", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option
                            className=" text-blue-950 font-bold"
                            value="Yes"
                          >
                            Yes
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="No"
                          >
                            No
                          </option>
                        </select>
                      )}
                    />
                    {errors.SuddenWeightLoss && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* Polyphagia */}

                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      Have you noticed an increase in appetite and excessive
                      hunger?
                    </label>
                    <Controller
                      name="Polyphagia" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("Polyphagia", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option
                            className=" text-blue-950 font-bold"
                            value="Yes"
                          >
                            Yes
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="No"
                          >
                            No
                          </option>
                        </select>
                      )}
                    />
                    {errors.Polyphagia && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* visual bluring */}

                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      Have you noticed a decline in your vision or experienced
                      blurred vision?
                    </label>
                    <Controller
                      name="VisualBluring" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("VisualBluring", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option
                            className=" text-blue-950 font-bold"
                            value="Yes"
                          >
                            Yes
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="No"
                          >
                            No
                          </option>
                        </select>
                      )}
                    />
                    {errors.VisualBluring && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* Irritability */}

                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      Have you been feeling unusually irritable or easily
                      agitated?
                    </label>
                    <Controller
                      name="Irritability" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("Irritability", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option
                            className=" text-blue-950 font-bold"
                            value="Yes"
                          >
                            Yes
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="No"
                          >
                            No
                          </option>
                        </select>
                      )}
                    />
                    {errors.Irritability && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* partial paresis */}

                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      Have you experienced weakness or impaired movement in some
                      parts of your body?
                    </label>
                    <Controller
                      name="PartialParesis" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("PartialParesis", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option
                            className=" text-blue-950 font-bold"
                            value="Yes"
                          >
                            Yes
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="No"
                          >
                            No
                          </option>
                        </select>
                      )}
                    />
                    {errors.PartialParesis && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* Alopecia */}

                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      Have you noticed hair loss or bald patches on your scalp
                      or body?
                    </label>
                    <Controller
                      name="Alopecia" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("Alopecia", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option
                            className="text-blue-950 font-bold"
                            value="Yes"
                          >
                            Yes
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="No"
                          >
                            No
                          </option>
                        </select>
                      )}
                    />
                    {errors.Alopecia && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* polydipsia */}

                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      Have you been feeling constantly thirsty and drinking more
                      fluids than usual?
                    </label>
                    <Controller
                      name="Polydipsia" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("Polydipsia", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option
                            className=" text-blue-950 font-bold"
                            value="Yes"
                          >
                            Yes
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="No"
                          >
                            No
                          </option>
                        </select>
                      )}
                    />
                    {errors.Polydipsia && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* Weakness */}

                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      Have you been feeling unusually weak or fatigued?
                    </label>
                    <Controller
                      name="Weakness" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("Weakness", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option
                            className=" text-blue-950 font-bold"
                            value="Yes"
                          >
                            Yes
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="No"
                          >
                            No
                          </option>
                        </select>
                      )}
                    />
                    {errors.Weakness && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* genital thrush */}

                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      Have you experienced any fungal infections in the genital
                      area?
                    </label>
                    <Controller
                      name="GenitalThrush" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("GenitalThrush", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option
                            className=" text-blue-950 font-bold"
                            value="Yes"
                          >
                            Yes
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="No"
                          >
                            No
                          </option>
                        </select>
                      )}
                    />
                    {errors.GenitalThrush && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* have itching */}

                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      Have you been experiencing persistent itching on your
                      skin?
                    </label>
                    <Controller
                      name="Itching" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("Itching", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option
                            className=" text-blue-950 font-bold"
                            value="Yes"
                          >
                            Yes
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="No"
                          >
                            No
                          </option>
                        </select>
                      )}
                    />
                    {errors.Itching && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* delayed healing */}

                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      Have you noticed that your wounds or injuries are taking
                      longer than usual to heal?
                    </label>
                    <Controller
                      name="DelayedHealing" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("DelayedHealing", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option
                            className=" text-blue-950 font-bold"
                            value="Yes"
                          >
                            Yes
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="No"
                          >
                            No
                          </option>
                        </select>
                      )}
                    />
                    {errors.DelayedHealing && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* Age */}
                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      How old are you?
                    </label>
                    <input
                      type="number"
                      {...register("age2", {required: true})}
                      placeholder="Age"
                      name="age2"
                      className="rounded-md h-7 mb-5 mt-3 mx-auto w-11/12 text-black input input-bordered border border-cyan-600"
                    />
                    {errors.age2 && (
                      <div className="text-red-600 ">
                        This field is required
                      </div>
                    )}
                  </div>

                  {/* muscle stiffnes */}

                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      Have you been experiencing stiffness or reduced
                      flexibility in your muscles or joints?
                    </label>
                    <Controller
                      name="MuscleStiffnes" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("MuscleStiffnes", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option
                            className=" text-blue-950 font-bold"
                            value="Yes"
                          >
                            Yes
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="No"
                          >
                            No
                          </option>
                        </select>
                      )}
                    />
                    {errors.MuscleStiffnes && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* Obesity */}

                  <div className="form-control ">
                    <label className="mt-3 mx-auto w-11/12 text-xl font-medium text-blue-950">
                      Do you have excessive body weight or have a body mass
                      index (BMI) above the normal range?
                    </label>
                    <Controller
                      name="Obesity" // The name used for the field in the data object
                      control={control} // The RHF control instance
                      // defaultValue={false} // Set the initial value of the checkbox
                      render={({field}) => (
                        <select
                          {...register("Obesity", {
                            required: true,
                          })}
                          defaultValue={"DEFAULT"}
                          className="rounded-md h-7 mb-5 mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                          {...field}
                        >
                          <option value="DEFAULT" disabled></option>

                          <option
                            className=" text-blue-950 font-bold"
                            value="Yes"
                          >
                            Yes
                          </option>
                          <option
                            className="font-medium text-teal-500"
                            value="No"
                          >
                            No
                          </option>
                        </select>
                      )}
                    />
                    {errors.Obesity && (
                      <div className="text-red-600">This field is required</div>
                    )}
                  </div>

                  {/* Submit btn */}

                  <div className="form-control mt-6">
                    <input
                      className="font-bold  mx-auto btn btn-white w-5/12 text-white  text-2xl  outline outline-[#1d2939] bg-gradient-to-r  from-[#64d9b9] to-[#1d2939]"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </TabPanel>
              </form>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DPrediction;
