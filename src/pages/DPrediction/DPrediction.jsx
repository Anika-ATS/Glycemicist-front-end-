import { Controller, useForm } from 'react-hook-form';
import Dp1 from '../../assets/Images/Dprediction1.webp'
import { Link } from 'react-router-dom';

const DPrediction = () => {

    const {
        register,
        handleSubmit,
        control,
        // reset,

        formState: { errors },
    } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            {/* Banner part*/}
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${Dp1})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        
                        <p className="mb-5 text-2xl">Diabetic Prediction Test is not just for those who exhibit symptoms of diabetes but for anyone concerned about their overall health and well-being. Prevention is the key to a healthier future.</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
            {/* body */}
            <section className='py-9 '>

                <div className="card  mx-auto flex-shrink-0  max-w-screen-lg  shadow-2xl bg-base-300">
                    <h3 className='mx-auto font-sans text-4xl py-4 text-cyan-500'>Prediction Form</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body mx-auto w-10/12 ">


                        {/* f1=HighBp */}
                        <div className="form-control ">
                            
                            <label className=' mx-auto w-11/12 text-xl text-cyan-500 mb-2' >
                                Do you have high Blood Pressure ?
                                <Controller
                                    name="checkboxField1" // The name used for the field in the data object
                                    control={control} // The RHF control instance
                                    defaultValue={false} // Set the initial value of the checkbox
                                    render={({ field }) => (
                                        <select className='mt-3 w-full mb-2' {...field}>
                                        
                                        <option value="option1">Yes</option>
                                        <option value="option2">No</option>
                                        
                                      </select>)}
                                />
                            </label>
                            {errors.checkboxField1 && <span className="text-red-600">This field is required</span>}
                        </div>
                        {/* f2=HighChol */}
                        <div className="form-control ">
                            
                            <label className=' mx-auto w-11/12 text-xl text-cyan-500 mb-2 ' >
                                Do you have high cholesterol ?
                                <Controller
                                    name="checkboxField2" // The name used for the field in the data object
                                    control={control} // The RHF control instance
                                    defaultValue={false} // Set the initial value of the checkbox
                                    render={({ field }) => (
                                        <select className='mt-3 w-full mb-2' {...field}>
                                        
                                        <option value="option1">Yes</option>
                                        <option value="option2">No</option>
                                        
                                      </select>)}
                                />
                            </label>
                            {errors.checkboxField2 && <span className="text-red-600">This field is required</span>}
                        </div>
                        {/* f3=Cholesterol Check */}
                        {/* <div className="form-control ">
                            
                            <label className=' mx-auto w-11/12 text-2xl text-cyan-500 ' >
                                Do you  check cholesterol in last 5 years?
                                <Controller
                                    name="checkboxField3" // The name used for the field in the data object
                                    control={control} // The RHF control instance
                                    defaultValue={false} // Set the initial value of the checkbox
                                    render={({ field }) => (
                                        <select className='mt-3 w-full' {...field}>
                                        
                                        <option value="option1">Yes</option>
                                        <option value="option2">No</option>
                                        
                                      </select>)}
                                />
                            </label>
                            {errors.checkboxField3 && <span className="text-red-600">This field is required</span>}
                        </div> */}
                        {/* f4=fruit */}
                        <div className="form-control ">
                            
                            <label className=' mx-auto w-11/12 text-xl text-cyan-500 mb-2' >
                               Do you consume Fruit 1 or more times per day?
                                <Controller
                                    name="checkboxField4" // The name used for the field in the data object
                                    control={control} // The RHF control instance
                                    defaultValue={false} // Set the initial value of the checkbox
                                    render={({ field }) => (
                                        <select className='mt-3 w-full mb-2' {...field}>
                                        
                                        <option value="option1">Yes</option>
                                        <option value="option2">No</option>
                                        
                                      </select>)}
                                />
                            </label>
                            {errors.checkboxField4 && <span className="text-red-600">This field is required</span>}
                        </div>
                        {/* f5=Veggies */}
                        <div className="form-control ">
                            
                            <label className=' mx-auto w-11/12 text-xl text-cyan-500 mb-2 ' >
                            Do you consume Vegetables 1 or more times per day?
                                <Controller
                                    name="checkboxField5" // The name used for the field in the data object
                                    control={control} // The RHF control instance
                                    defaultValue={false} // Set the initial value of the checkbox
                                    render={({ field }) => (
                                        <select className='mt-3 w-full my-3' {...field}>
                                        
                                        <option value="option1">Yes</option>
                                        <option value="option2">No</option>
                                        
                                      </select>)}
                                />
                            </label>
                            {errors.checkboxField5 && <span className="text-red-600">This field is required</span>}
                        </div>
                        {/* f6=PhyActivity */}
                        <div className="form-control ">
                            
                            <label className=' mx-auto w-11/12 text-xl text-cyan-500 mb-3' >
                            Did you engaged in any physical activity to maintain your well-being or improve your health in past 30 days?
                                <Controller
                                    name="checkboxField6" // The name used for the field in the data object
                                    control={control} // The RHF control instance
                                    defaultValue={false} // Set the initial value of the checkbox
                                    render={({ field }) => (
                                        <select className='mt-3 w-full mb-2' {...field}>
                                        
                                        <option value="option1">Yes</option>
                                        <option value="option2">No</option>
                                        
                                      </select>)}
                                />
                            </label>
                            {errors.checkboxField6 && <span className="text-red-600">This field is required</span>}
                        </div>

                       
                        {/* f7=GenHealth */}
                        <div className="form-control ">
                            
                            <label className='py-3 mx-auto w-11/12 text-xl text-cyan-500 mb-2 ' >
                            Would you say that in general your health is?
                                <Controller
                                    name="checkboxField7" // The name used for the field in the data object
                                    control={control} // The RHF control instance
                                    defaultValue={false} // Set the initial value of the checkbox
                                    render={({ field }) => (
                                        <select className='mt-3 w-full mb-2' {...field}>
                                        
                                        <option value="option1">Excellent</option>
                                        <option value="option2">Very Good</option>
                                        <option value="option2"> Good</option>
                                        <option value="option2">Poor</option>
                                        
                                      </select>)}
                                />
                            </label>
                            {errors.checkboxField7 && <span className="text-red-600">This field is required</span>}
                        </div>

                        {/* f8=Mental Health */}
                        <div className="form-control ">
                            
                            <label className='py-3 mx-auto w-11/12 text-xl text-cyan-500 my-2' >
                            Now thinking about your mental health,  which includes stress, depression, and problems with emotions, for how many days during the past 30?
                            <input  type="number"  {...register("NumDays", { required: true })} placeholder="Mental health days" name='NumDays' className="mt-3 mx-auto w-11/12 text-cyan-500 input input-bordered my-2" />
                           {errors.NumDays && <span className="text-red-600">This field is required</span>}
                            </label>
                          
                        </div>
                        {/* f9=Physical Health */}
                        <div className="form-control ">
                            
                            <label className='py-3 mx-auto w-11/12 text-xl text-cyan-500 my-2 ' >
                            Now thinking about your physical health, which includes physical illness and injury, for how many days during the past 30?
                            <input  type="number"  {...register("NumDaysPH", { required: true })} placeholder="Pysical health days" name='NumDaysPH' className="mt-3 mx-auto w-11/12 text-cyan-500 input input-bordered my-2" />
                            {errors.NumDaysPH && <span className="text-red-600">This field is required</span>}
                            </label>
                         
                        </div>
                     

                       { /* f10=Heart dieases or heart attack */}
                        <div className="form-control ">
                            
                            <label className='py-3 mx-auto w-11/12 text-xl text-cyan-500 my-1' >
                            Do you have any history of heart disease or heart-related health issues?
                                <Controller
                                    name="checkboxField8" // The name used for the field in the data object
                                    control={control} // The RHF control instance
                                    defaultValue={false} // Set the initial value of the checkbox
                                    render={({ field }) => (
                                        <select className='mt-3 w-full my-1' {...field}>
                                        
                                        <option value="option1">Yes</option>
                                        <option value="option2">No</option>
                                        
                                      </select>)}
                                />
                            </label>
                            {errors.checkboxField8 && <span className="text-red-600">This field is required</span>}
                        </div>
                        {/* f11=Gender */}
                        <div className="form-control ">
                            
                            <label className='py-3 mx-auto w-11/12 text-xl text-cyan-500 ' >
                            Gender:
                                <Controller
                                    name="checkboxField9" // The name used for the field in the data object
                                    control={control} // The RHF control instance
                                    defaultValue={false} // Set the initial value of the checkbox
                                    render={({ field }) => (
                                        <select className='mt-3 w-full' {...field}>
                                        
                                        <option value="option1">Female</option>
                                        <option value="option2">Male</option>
                                      
                                        
                                      </select>)}
                                />
                            </label>
                            {errors.checkboxField9 && <span className="text-red-600">This field is required</span>}
                        </div>


                       {/* {f12=Age} */}
                       <div className="form-control ">
                       <label className='py-3 mx-auto w-11/12 text-xl text-cyan-500 ' >
                        Your Age?
                        <Controller
                                    name="checkboxField10" // The name used for the field in the data object
                                    control={control} // The RHF control instance
                                    defaultValue={false} // Set the initial value of the checkbox
                                    render={({ field }) => (
                                        <select className='mt-3 w-full' {...field}>
                                        
                                        <option value="option1">Age 18 to 24</option>
                                        <option value="option2">Age 25 to 29</option>
                                        <option value="option3">Age 30 to 34</option>
                                        <option value="option4">Age 35 to 39</option>
                                        <option value="option5">Age 40 to 44</option>
                                        <option value="option6">Age 45 to 49</option>
                                        <option value="option7">Age 50 to 54</option>
                                        <option value="option8">Age 55 to 59</option>
                                        <option value="option9">Age 60 to 64</option>
                                        <option value="option10">Age 65 to 69</option>
                                        <option value="option11">Age 70 to 74</option>
                                        <option value="option12">Age 75 to 79</option>
                                        <option value="option13">Age 80 or older</option>
                                        
                                      
                                        
                                      </select>)}
                                />
                       </label>
                       {errors.checkboxField10 && <span className="text-red-600">This field is required</span>}
                       </div>

                       {/* {f13=Income} */}
                       <div className="form-control ">
                       <label className='py-3 mx-auto w-11/12 text-xl text-cyan-500 ' >
                            Your Income scale?
                            <Controller
                                    name="checkboxField11" // The name used for the field in the data object
                                    control={control} // The RHF control instance
                                    defaultValue={false} // Set the initial value of the checkbox
                                    render={({ field }) => (
                                        <select className='mt-3 w-full' {...field}>
                                        
                                        <option value="option1">Less than $10,000</option>
                                        <option value="option2">Less than $15,000</option>
                                        <option value="option3">Less than $20,000</option>
                                        <option value="option4">Less than $25,000</option>
                                        <option value="option5">Less than $35,000</option>
                                        <option value="option6">Less than $50,000</option>
                                        <option value="option7">Less than $75,000</option>
                                        <option value="option8"> $75,000 or more</option>
                                        
                                      
                                        
                                      </select>)}
                                />
                       </label>
                       {errors.checkboxField11 && <span className="text-red-600">This field is required</span>}
                       </div>

                       {/* {f14=Education} */}
                       <div className="form-control ">
                       <label className='py-3 mx-auto w-11/12 text-xl text-cyan-500 ' >
                            Your education level?
                            <Controller
                                    name="checkboxField12" // The name used for the field in the data object
                                    control={control} // The RHF control instance
                                    defaultValue={false} // Set the initial value of the checkbox
                                    render={({ field }) => (
                                        <select className='mt-3 w-full' {...field}>
                                        
                                        <option value="option1">Never Attended school or any kindergarten.</option>
                                        <option value="option2">Grsdes 1 through 8(Elementary)</option>
                                        <option value="option3">Grsdes 9 through 11(Some high School )</option>
                                        <option value="option4">Grsdes 12 or GED(High School Graduate)</option>
                                        <option value="option5">College 1 years to 3 years(Some College or technical School)</option>
                                        <option value="option6">College 4 years or more(College Graduate)</option>
                                      
                                        <option value="option7">Refused</option>
                                     
                                      </select>)}
                                />
                            </label>
                            {errors.checkboxField12 && <span className="text-red-600">This field is required</span>}
                       </div>
                        {/* {f15=BMI} */}
                        <div className="form-control ">
                       <label className='py-3 mx-auto w-11/12 text-xl text-cyan-500 ' >
                            Your BMI?
                       <input  type="Number"  {...register("BMI", { required: true })} placeholder="BMI" name='BMI' className="mt-3 mx-auto w-11/12 text-cyan-500 input input-bordered" />
                       {errors.BMI && <span className="text-red-600">This field is required</span>}
                       </label>
                       </div>


                            {/* submit button */}
                            <div className="form-control mt-6">
                            <input className="mx-auto btn btn-white w-5/12 text-2xl text-cyan-600 outline outline-cyan-500" type='submit' value='Submit' />

                        </div>










                            

                        
                        
                            
                        
{/* no need section */}
{/* name */}
    {/* <input  type="text"  {...register("name", { required: true })} placeholder="Diabetis....Yes/No" name='name' className=" input input-bordered" />
                        {/* email */}
                        {/* <div className="form-control">

                            <input type="email" {...register("email", { required: true })} placeholder="email" name='email' className="input input-bordered" />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div> */}

                        {/* password */}
                        {/* <div className="form-control">
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 10,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$%&*])(?=.*[0-9].*[0-9].*[0-9])(?=.*[a-z])/
                            })} placeholder="Password" name='password' className="input input-bordered" />
                            {errors.password && <span className="text-red-600">This field is required</span>}
                            {errors.password?.type === "minLength" && (
                                <p role="alert" className="text-red-600">Password is less then 6 Characters</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p role="alert" className="text-red-600">Must have One Capital letter, one special character ,3digit and one small letter </p>
                            )}

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div> */}

                        {/* Confirmpassword */}
                        {/* <div className="form-control">
                            <input type="password" {...register("Confirmpassword", { required: true, minLength: 6, maxLength: 10 })} placeholder="Confirmpassword" name='Confirmpassword' className="input input-bordered" />
                            {errors.Confirmpassword && <span className="text-red-600">This field is required</span>}

                        </div> */}

                        {/* photourl */}
                        {/* <div className="form-control">
                            <input type="url" {...register("photo", { required: true })} placeholder="Photo" name='photo' className="input input-bordered" />
                            {errors.photo && <span className="text-red-600">This field is required</span>}
                        </div> */}
                        {/* height */}
                        {/* <div className="form-control">
                            <input type="text" {...register("height", { required: true })} placeholder="Your Height" name='height' className="input input-bordered" />
                            {errors.height && <span className="text-red-600">This field is required</span>}

                        </div> */}
{/* no need section */}


                       

                    </form>
                </div>

            </section>
        </div>
    );
};

export default DPrediction;