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

import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import {convertSecondForm} from "./convertSecondForm";
import {AuthContext} from "../../Providers/AuthProvider";
import Response from "./Response";

// https://glycemist-server.onrender.com/

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
    // console.log(Object.keys(val), Object.values(val));
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
      // "https://glycemist-server.onrender.com/make-predictiongbhi";
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
      <div
        className="relative hero min-h-screen "
        style={{backgroundImage: `url(${Dp1})`}}
      >
        <div className=" hero-overlay bg-opacity-50"></div>

        <div className=" hero-content text-cente text-neutral-content">
          {/* cant fixed position of lotti*/}
          <div className="  absolute  top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-40  text-white ">
            <div className="grid grid-cols-2 gap-5 animate-pulse ">
              {/* card-1 */}
              {/* <div className="mx-56 mt-64 toast toast-start toast-top h-[300px] mb-10">
                <div className="group card w-[300px] h-[300px]  shadow-xl  ">
                  {/* <div className="card-body  ">
                    {/* <Player
                      src={Pres}
                      className="player  w-[300px] h-[200px]"
                      loop
                      autoplay
                    /> 
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="max-w-md">
            <p className="mb-5 text-2xl text-white">
              Diabetic Prediction Test is not just for those who exhibit
              symptoms of diabetes but for anyone concerned about their overall
              health and well-being. Prevention is the key to a healthier
              future.
            </p>
          </div>
        </div>
      </div>
      {/* body  [#64d9b9][#1d2939]*/}
      {isLoading && (
        <div className="modal modal-open top-2">
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
      {/* bg-gradient-to-r from-[#1d2939] to-[#64d9b9] */}
      <section className="py-3 bg-[#f1f4f4]   ">
        {res !== undefined && <Response res={res} />}
        {/*---------------------------------------- Form started --------------------------------------*/}
        <div className="card mt-10 mx-auto flex-shrink-0  max-w-screen-lg  shadow-lg bg-base-300 mb-16   ">
          <SectionTitle
            // subHeading={"Check your health condition"}
            Heading={"Prediction Form"}
            fontSize="font-bold text-xl"
            background="mt-2 text-white  h-[90px] w-[350px] outline outline-[#1d2939] bg-gradient-to-r  from-[#64d9b9] to-[#1d2939]"
          ></SectionTitle>

          <Tabs defaultIndex={TabIndex} onSelect={index => setTabIndex(index)}>
            {/* form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              type="submit"
              className="card-body mx-auto w-10/12 "
            >
              {/* first form */}
              <TabPanel>
                {/* f1=HighBp */}
                <div className="form-control ">
                  <label className=" mx-auto w-11/12 text-xl font-bold text-[#1d2939] mb-2 ">
                    Do you have high Blood Pressure ?
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
                        className="mt-3 mx-auto w-11/12  mb-2 text-black border border-cyan-600"
                        {...field}
                      >
                        <option selected disabled></option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
                    )}
                  />
                  {errors.HighBP && (
                    <div className=" text-red-600">This field is required</div>
                  )}
                </div>
                {/* f2=HighChol */}
                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  mx-auto w-11/12 text-xl  mb-2 ">
                    Do you have high cholesterol ?
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
                        className="mt-3 mx-auto w-11/12  mb-2 text-black border border-cyan-600"
                        {...field}
                      >
                        <option value="DEFAULT" disabled></option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
                    )}
                  />
                  {errors.HighChol && (
                    <div className="text-red-500 mx-auto w-11/12 ">
                      This field is required
                    </div>
                  )}
                </div>
                {/* {f15=BMI} */}
                {/* <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
                    Your BMI?
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("BMI", {required: true})}
                    placeholder="BMI"
                    name="BMI"
                    className="mt-3 mx-auto w-11/12 text-black input input-bordered border border-cyan-600"
                  />
                  {errors.BMI && (
                    <div className="text-red-600 ">This field is required</div>
                  )}
                </div> */}
                <label className=" font-medium text-blue-950  mx-10 w-11/12 text-xl  mb-2">
                  Calculate Your BMI:
                </label>

                {/* Calculating div here */}
                <div className="flex flex-col-5 mb-4 ">
                  <div className=" form-control ">
                    {/* weight */}
                    <input
                      type="number"
                      step="0.1"
                      {...register("weight", {required: true})}
                      placeholder="weight(kg)"
                      name="weight"
                      className="mt-3 mx-8 w-9/12 text-black input input-bordered border border-cyan-600"
                    />
                    {errors.weight && (
                      <div className="text-red-600 ">
                        This field is required
                      </div>
                    )}
                  </div>

                  {/* heightFeet */}

                  <div className=" form-control ">
                    <div className="flex flex-col-2">
                      <input
                        type="number"
                        step="0.1"
                        {...register("heightFeet", {required: true})}
                        placeholder="height(Feet)"
                        name="heightFeet"
                        className="mt-3  w-6/12 text-black input input-bordered border border-cyan-600"
                      />
                      {errors.heightFeet && (
                        <div className="text-red-600 ">
                          This field is required
                        </div>
                      )}

                      {/* heightInches */}

                      <input
                        type="number"
                        step="0.1"
                        {...register("heightInches", {required: true})}
                        placeholder="height(Inches)"
                        name="heightInches"
                        className=" mx-2  mt-3  w-6/12 text-black input input-bordered border border-cyan-600"
                      />
                      {errors.heightInches && (
                        <div className="text-red-600 ">
                          This field is required
                        </div>
                      )}
                    </div>
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
                          className="mt-3  w-9/12  text-black input input-bordered border border-cyan-600"
                        >
                          {" "}
                          BMI: {bmiResult}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* f10=Heart dieases or heart attack */}
                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl  my-1">
                    Do you have any history of heart disease or heart-related
                    health issues such as coronary heart disease (CHD) or
                    myocardial infarction(MI)?
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
                        className="mt-3 mx-auto w-11/12 my-1 text-black border border-cyan-600"
                        {...field}
                      >
                        <option value="DEFAULT" disabled></option>

                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
                    )}
                  />
                  {errors.HeartDiseaseorAttack && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>
                {/* f6=PhyActivity */}
                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  mx-auto w-11/12 text-xl  mb-3">
                    Did you engaged in any physical activity to maintain your
                    well-being or improve your health in past 30 days?{" "}
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
                        className="mt-3 mx-auto w-11/12 mb-2 text-black border border-cyan-600"
                        {...field}
                      >
                        <option value="DEFAULT" disabled></option>

                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
                    )}
                  />
                  {errors.PhyActivity && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>

                {/* f4=fruit */}
                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  mx-auto w-11/12 text-xl  mb-2">
                    Consume Fruit 1 or more times per day?
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
                        className="mt-3 mx-auto w-11/12  mb-2 text-black border border-cyan-600"
                        {...field}
                      >
                        <option value="DEFAULT" disabled></option>

                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
                    )}
                  />
                  {errors.fruit && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>
                {/* f5=Veggies */}
                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  mx-auto w-11/12 text-xl  mb-2 ">
                    Consume Vegetables 1 or more times per day?{" "}
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
                        className="mt-3 mx-auto w-11/12  my-3 text-black border border-cyan-600"
                        {...field}
                      >
                        <option value="DEFAULT" disabled></option>

                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
                    )}
                  />
                  {errors.Veggies && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>

                {/* f7=GenHealth */}
                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]   py-3 mx-auto w-11/12 text-xl mb-2 ">
                    Would you say that in general your health is?{" "}
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
                        className="mt-3 mx-auto w-11/12 mb-2 text-black border border-cyan-600"
                        {...field}
                      >
                        <option value="DEFAULT" disabled></option>

                        <option value="1">Excellent</option>
                        <option value="2">Very Good</option>
                        <option value="3"> Good</option>
                        <option value="4"> Fair</option>
                        <option value="5">Poor</option>
                      </select>
                    )}
                  />
                  {errors.GenHlth && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>

                {/* f8=Mental Health */}
                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl my-2">
                    In the last 30 days, how many days have you dealt with
                    mental health issues, such as stress, depression, or
                    emotional challenges?
                  </label>
                  <input
                    type="number"
                    {...register("MentHlth", {required: true})}
                    placeholder="Mental health days"
                    name="MentHlth"
                    className="mt-3 mx-auto w-11/12 text-black input input-bordered my-2 border border-cyan-600"
                  />
                  {errors.MentHlth && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>
                {/* f9=Physical Health */}
                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl  my-2 ">
                    In the past 30 days, how many days have you experienced
                    physical illness or injury that affected your physical
                    health?
                  </label>
                  <input
                    type="number"
                    {...register("PhysHlth", {required: true})}
                    placeholder="Pysical health days"
                    name="PhysHlth"
                    className="border border-cyan-600 mt-3 mx-auto w-11/12 text-black input input-bordered my-2"
                  />
                  {errors.PhysHlth && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>

                {/* f11=Gender */}
                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
                    Gender{" "}
                  </label>
                  <Controller
                    className="w-11/12"
                    name="Sex" // The name used for the field in the data object
                    control={control} // The RHF control instance
                    // defaultValue={false} // Set the initial value of the checkbox
                    render={({field}) => (
                      <select
                        {...register("Sex", {
                          required: true,
                        })}
                        defaultValue={"DEFAULT"}
                        className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                        {...field}
                      >
                        <option value="DEFAULT" disabled></option>

                        <option value="0">Female</option>
                        <option value="1">Male</option>
                      </select>
                    )}
                  />
                  {errors.Sex && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>

                {/* {f12=Age} */}
                <div className="form-control ">
                  <label className="font-bold text-[#1d2939] py-3 mx-auto w-11/12 text-xl ">
                    What is your Age?{" "}
                  </label>
                  <Controller
                    name="Age" // The name used for the field in the data object
                    control={control} // The RHF control instance
                    // defaultValue={false} // Set the initial value of the checkbox
                    render={({field}) => (
                      <select
                        {...register("Age", {
                          required: true,
                        })}
                        defaultValue={"DEFAULT"}
                        className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                        {...field}
                      >
                        <option value="DEFAULT" disabled></option>

                        <option value="1">Age 18 to 24</option>
                        <option value="2">Age 25 to 29</option>
                        <option value="3">Age 30 to 34</option>
                        <option value="4">Age 35 to 39</option>
                        <option value="5">Age 40 to 44</option>
                        <option value="6">Age 45 to 49</option>
                        <option value="7">Age 50 to 54</option>
                        <option value="8">Age 55 to 59</option>
                        <option value="9">Age 60 to 64</option>
                        <option value="10">Age 65 to 69</option>
                        <option value="11">Age 70 to 74</option>
                        <option value="12">Age 75 to 79</option>
                        <option value="13">Age 80 or older</option>
                      </select>
                    )}
                  />
                  {errors.Age && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>

                {/* {f14=Education} */}
                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
                    {" "}
                    Your education level?
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
                        className=" mt-3 mx-auto w-11/12 text-black border border-cyan-600"
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
                {/* {f13=Income} */}
                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl  ">
                    Your Income scale?{" "}
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
                        className="mt-3  mx-auto w-11/12 text-black border border-cyan-600"
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

              <TabList className="mx-auto w-1/2 h-[40px] text-center">
                <Tab>1 </Tab>
                <Tab>2</Tab>

                {/* {{}} */}
              </TabList>
              {/* 2rd form */}
              {/* F1=polyurea */}
              <TabPanel>
                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
                    Do you have Polyurea?{" "}
                  </label>
                  <Controller
                    className="w-11/12"
                    name="Polyurea" // The name used for the field in the data object
                    control={control} // The RHF control instance
                    // defaultValue={false} // Set the initial value of the checkbox
                    render={({field}) => (
                      <select
                        {...register("Polyurea", {
                          required: true,
                        })}
                        defaultValue={"DEFAULT"}
                        className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                        {...field}
                      >
                        <option value="DEFAULT" disabled></option>

                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    )}
                  />
                  {errors.Polyurea && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>

                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
                    How old are you?
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("age2", {required: true})}
                    placeholder="Age"
                    name="age2"
                    className="mt-3 mx-auto w-11/12 text-black input input-bordered border border-cyan-600"
                  />
                  {errors.age2 && (
                    <div className="text-red-600 ">This field is required</div>
                  )}
                </div>

                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
                    Do you have Polyphagia?{" "}
                  </label>
                  <Controller
                    className="w-11/12"
                    name="Polyphagia" // The name used for the field in the data object
                    control={control} // The RHF control instance
                    // defaultValue={false} // Set the initial value of the checkbox
                    render={({field}) => (
                      <select
                        {...register("Polyphagia", {
                          required: true,
                        })}
                        defaultValue={"DEFAULT"}
                        className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                        {...field}
                      >
                        <option value="DEFAULT" disabled></option>

                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    )}
                  />
                  {errors.Polyphagia && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>

                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
                    Do you have visual bluring?{" "}
                  </label>
                  <Controller
                    className="w-11/12"
                    name="VisualBluring" // The name used for the field in the data object
                    control={control} // The RHF control instance
                    // defaultValue={false} // Set the initial value of the checkbox
                    render={({field}) => (
                      <select
                        {...register("VisualBluring", {
                          required: true,
                        })}
                        defaultValue={"DEFAULT"}
                        className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                        {...field}
                      >
                        <option value="DEFAULT" disabled></option>

                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    )}
                  />
                  {errors.VisualBluring && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>

                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
                    Do you have irritability?{" "}
                  </label>
                  <Controller
                    className="w-11/12"
                    name="Irritability" // The name used for the field in the data object
                    control={control} // The RHF control instance
                    // defaultValue={false} // Set the initial value of the checkbox
                    render={({field}) => (
                      <select
                        {...register("Irritability", {
                          required: true,
                        })}
                        defaultValue={"DEFAULT"}
                        className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                        {...field}
                      >
                        <option value="DEFAULT" disabled></option>

                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    )}
                  />
                  {errors.Irritability && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>

                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
                    Do you have partial paresis?{" "}
                  </label>
                  <Controller
                    className="w-11/12"
                    name="PartialParesis" // The name used for the field in the data object
                    control={control} // The RHF control instance
                    // defaultValue={false} // Set the initial value of the checkbox
                    render={({field}) => (
                      <select
                        {...register("PartialParesis", {
                          required: true,
                        })}
                        defaultValue={"DEFAULT"}
                        className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                        {...field}
                      >
                        <option value="DEFAULT" disabled></option>

                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    )}
                  />
                  {errors.PartialParesis && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>

                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
                    Do you have Alopecia ?{" "}
                  </label>
                  <Controller
                    className="w-11/12"
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

                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    )}
                  />
                  {errors.Alopecia && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>

                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
                    Do you have polydipsia?{" "}
                  </label>
                  <Controller
                    className="w-11/12"
                    name="Polydipsia" // The name used for the field in the data object
                    control={control} // The RHF control instance
                    // defaultValue={false} // Set the initial value of the checkbox
                    render={({field}) => (
                      <select
                        {...register("Polydipsia", {
                          required: true,
                        })}
                        defaultValue={"DEFAULT"}
                        className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                        {...field}
                      >
                        <option value="DEFAULT" disabled></option>

                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    )}
                  />
                  {errors.Polydipsia && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>

                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
                    Do you have weakness?{" "}
                  </label>
                  <Controller
                    className="w-11/12"
                    name="Weakness" // The name used for the field in the data object
                    control={control} // The RHF control instance
                    // defaultValue={false} // Set the initial value of the checkbox
                    render={({field}) => (
                      <select
                        {...register("Weakness", {
                          required: true,
                        })}
                        defaultValue={"DEFAULT"}
                        className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                        {...field}
                      >
                        <option value="DEFAULT" disabled></option>

                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    )}
                  />
                  {errors.Weakness && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>

                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
                    Do you have genital thrush?{" "}
                  </label>
                  <Controller
                    className="w-11/12"
                    name="GenitalThrush" // The name used for the field in the data object
                    control={control} // The RHF control instance
                    // defaultValue={false} // Set the initial value of the checkbox
                    render={({field}) => (
                      <select
                        {...register("GenitalThrush", {
                          required: true,
                        })}
                        defaultValue={"DEFAULT"}
                        className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                        {...field}
                      >
                        <option value="DEFAULT" disabled></option>

                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    )}
                  />
                  {errors.GenitalThrush && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>

                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
                    Do you have itching?{" "}
                  </label>
                  <Controller
                    className="w-11/12"
                    name="Itching" // The name used for the field in the data object
                    control={control} // The RHF control instance
                    // defaultValue={false} // Set the initial value of the checkbox
                    render={({field}) => (
                      <select
                        {...register("Itching", {
                          required: true,
                        })}
                        defaultValue={"DEFAULT"}
                        className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                        {...field}
                      >
                        <option value="DEFAULT" disabled></option>

                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    )}
                  />
                  {errors.Itching && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>

                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
                    Do you have delayed healing?{" "}
                  </label>
                  <Controller
                    className="w-11/12"
                    name="DelayedHealing" // The name used for the field in the data object
                    control={control} // The RHF control instance
                    // defaultValue={false} // Set the initial value of the checkbox
                    render={({field}) => (
                      <select
                        {...register("DelayedHealing", {
                          required: true,
                        })}
                        defaultValue={"DEFAULT"}
                        className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                        {...field}
                      >
                        <option value="DEFAULT" disabled></option>

                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    )}
                  />
                  {errors.DelayedHealing && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>
                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
                    Do you have SuddenWeightLoss?
                  </label>
                  <Controller
                    className="w-11/12"
                    name="SuddenWeightLoss" // The name used for the field in the data object
                    control={control} // The RHF control instance
                    // defaultValue={false} // Set the initial value of the checkbox
                    render={({field}) => (
                      <select
                        {...register("SuddenWeightLoss", {
                          required: true,
                        })}
                        defaultValue={"DEFAULT"}
                        className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                        {...field}
                      >
                        <option value="DEFAULT" disabled></option>

                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    )}
                  />
                  {errors.SuddenWeightLoss && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>

                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
                    Do you have muscle stiffness?{" "}
                  </label>
                  <Controller
                    className="w-11/12"
                    name="MuscleStiffnes" // The name used for the field in the data object
                    control={control} // The RHF control instance
                    // defaultValue={false} // Set the initial value of the checkbox
                    render={({field}) => (
                      <select
                        {...register("MuscleStiffnes", {
                          required: true,
                        })}
                        defaultValue={"DEFAULT"}
                        className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                        {...field}
                      >
                        <option value="DEFAULT" disabled></option>

                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    )}
                  />
                  {errors.MuscleStiffnes && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>

                <div className="form-control ">
                  <label className="font-bold text-[#1d2939]  py-3 mx-auto w-11/12 text-xl ">
                    Do you have obesity?{" "}
                  </label>
                  <Controller
                    className="w-11/12"
                    name="Obesity" // The name used for the field in the data object
                    control={control} // The RHF control instance
                    // defaultValue={false} // Set the initial value of the checkbox
                    render={({field}) => (
                      <select
                        {...register("Obesity", {
                          required: true,
                        })}
                        defaultValue={"DEFAULT"}
                        className="mt-3 mx-auto text-black border border-cyan-600 w-11/12"
                        {...field}
                      >
                        <option value="DEFAULT" disabled></option>

                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    )}
                  />
                  {errors.Obesity && (
                    <div className="text-red-600">This field is required</div>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input
                    className="font-bold text-white  mx-auto btn btn-white w-5/12 text-2xl  outline outline-[#1d2939] bg-gradient-to-r  from-[#64d9b9] to-[#1d2939]"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </TabPanel>
              {/* submit button */}
            </form>
          </Tabs>
        </div>
        ;
      </section>
    </div>
  );
};

export default DPrediction;
