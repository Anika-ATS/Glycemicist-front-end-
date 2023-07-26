// import pic from '../../../assets/Images/D4.png'
// import P1 from '../../../assets/Images/L1.jpg'
// const {  picture, name,ClientReview } = props.rate;

const Creview = ({ msg }) => {
    const { _id, picture, name, ClientReview } = msg;
    // console.log(_id,  picture, name, ClientReview )
    // className=" w-11 overflow-x-auto  rounded-full" // 
    return (
        <div>
            <div className=" grid place-items-center animate-bounce  " >
                <div className="mt-5 avatar">
                    <div className=" w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                        <img src={picture} />
                    </div>
                </div>
            </div>
            <div className=" container mx-auto flex x-space-4 gap-3 py-5 mb-5 hover:scale-75 translate-x-4 skew-y-3  ">

                <div className="group card  w-96 bg-base-100 shadow-xl border border-blue hover:bg-gradient-to-r from-purple-500 to-pink-500 skew-y-3 gap-6 mt-3 ">
                  <div className="card-body  ">
                        <h2 className="card-title">
                            <h3 className="3xl mx-auto  animate-pulse  text-cyan-500 group-hover:text-white">{name}</h3>

                        </h2>
                        <p className='text-cyan-500 group-hover:text-white '>{ClientReview}</p>

                    </div>

                </div>
            </div>


            {/* <div className="flex space-x-8 bg-white-100 gap-6 ">
                <div className='flex flex-col'>
                    <div className=" mt-5 w-60 border ">

                      

                    </div>
                    <figure className="px-3 pt-5 mt-2">
                        <img className=" object-cover w-[90px] h-[90px]  rounded-full   mt-0" src={picture} alt="" />
                    </figure>
                    <div></div>

                </div>

            
            </div> */}
        </div>
    );
};

export default Creview;













