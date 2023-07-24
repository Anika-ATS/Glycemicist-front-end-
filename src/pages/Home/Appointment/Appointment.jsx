
import { Controller, useForm } from 'react-hook-form';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';



const Appointment = () => {
    const {
        register,
        handleSubmit,
        control,
        // reset,

        formState: { errors },
    } = useForm();
    const onSubmit = data => console.log(data);



    return (
        <div >
        
        <div className='mb-0'>
        
        <SectionTitle
        subHeading={'Consult Your Doctor'}
        Heading={'Book an Appointment'}
        
        ></SectionTitle>
        </div>
    
        <div className="hero min-h-screen  ">
            
            <div className="card mx-auto w-full max-w-sm shadow-2xl bg-cyan-300 ">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                    <div className="form-control ">

                        <input type="text"  {...register("name", { required: true })} placeholder="Your Name" name='name' className="input input-bordered" />
                        {errors.name && <span className="text-red-600">This field is required</span>}
                    </div>
                    {/* Age */}
                    <div className="form-control  ">
                        <Controller
                            name="age"
                            control={control}
                            rules={{
                                required: 'Age is required ',
                                
                                min: 18
                                // message:'Age must be 18 or older than 18'

                            }}
                            render={({ field }) => (
                                <input type="number" className='py-3  input input-bordered' placeholder="Your Age" {...field} />
                            )}
                        />
                        {errors.age && <div className='text-red-600'>Age must be 18 or older than 18</div>}

                        {/* <input type="number"   {...register("Age", { required: true,min:18 })} placeholder="Age" name='Age' className="mt-3 mx-auto w-11/12 text-black input input-bordered border border-cyan-600" />
                            {errors.Age && <div className="text-red-600 ">This field is required and minimum age must be 18</div>} */}

                    </div>

                    {/* email */}
                    <div className="form-control">

                        <input type="email" {...register("email", {
                            required: true
                            // pattern: {
                            //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/,
                            //     message: 'Invalid email address',
                            //   },
                            //  pattern:/(?=.*[a-z])(?=.*[0-9])+@+(gmail.com)/

                        })} placeholder="Your email" name='email' className="input input-bordered" />
                        {errors.email && <span className="text-red-600">This field is required</span>}
                    </div>

                    {/*Doctors email */}
                    <div className="form-control">

                        <input type="email" {...register("email", {
                            required: true
                            // pattern: {
                            //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/,
                            //     message: 'Invalid email address',
                            //   },
                            //  pattern:/(?=.*[a-z])(?=.*[0-9])+@+(gmail.com)/

                        })} placeholder="Doctor's email" name='DoctorEmail' className="input input-bordered" />
                        {errors.DoctorEmail && <span className="text-red-600">This field is required</span>}
                    </div>



                    {/* phone number */}
                    <div>

                        <Controller
                            name="mobileNumber"
                            control={control}
                            rules={{
                                required: 'Mobile number is required',
                                pattern: {
                                    value: /^(\+?88)?01[3-9]\d{8}/
                                    // message: 'Invalid Bangladeshi mobile number',
                                },
                            }}
                            render={({ field }) => (
                                <input type="number" className='py-3 w-full  input input-bordered'  placeholder="Mobile Number" {...field} />
                            )}
                        />
                        {errors.mobileNumber && <div className="text-red-600 ">Mobile number is required and must be Bangladeshi mobile number</div>}
                    </div>
                    {/* Message */}
                    <div className="form-control">
                        <input type="text" {...register("Msg", {
                            required: true
                        })} placeholder="Your Problem" name='Msg' className="input input-bordered" />
                        {errors.Msg && <span className="text-red-600 ">This field is required</span>}

                    </div>
                     {/* Date */}
                     <div className="form-control">
                        <input type="date" {...register("date", {
                            required: true,
                            // value:
                        })} placeholder="Date" name='date' className="input input-bordered" />
                        {errors.date && <span className="text-red-600 ">This field is required</span>}

                    </div>






                    <div className="form-control mt-6">
                        <input className="btn btn-white text-xl  text-cyan-500 outline outline-cyan-500 " type='submit' value='Book Appointment' />
                        {/* <button className="btn btn-primary">Sign In</button> */}
                    </div>

                </form>
            </div>

     
        </div >
        </div>
    );
};

export default Appointment;