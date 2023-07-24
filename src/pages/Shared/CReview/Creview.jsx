import pic from '../../../assets/Images/D4.png'
// import P1 from '../../../assets/Images/L1.jpg'
// const {  picture, name,ClientReview } = props.rate;

const Creview = ({msg}) => {
    const {_id,picture, name, ClientReview } =msg ||{};
    // console.log(_id,  picture, name, ClientReview )
        return (
            <div className="hero min-h-screen " style={{ backgroundImage: `url(${pic})` }} >
                <div className="hero-overlay bg-opacity-70 "></div>
                <div className="flex space-x-2 bg-bage-300">
                    <div className='flex flex-col'>
                    <div className="mt-5 w-56">
                            
                            <p className=' text-white '>{ClientReview}</p>
                        
                        </div>
                        <figure className="px-3 pt-5 mt-2">
                        <img className="object-cover w-[90px] h-[90px]  rounded-full   mt-0"  src={picture}  alt="" />
                        </figure>
                        <div><h3 className="3xl text-white ">{name}</h3></div>
                        
                   </div>
                
                
                </div>
                {/* <div className='flex gap-4'>
                    <div className="card w-44 bg-base-100 shadow-xl">
                        <div >
                            <p className=' h-32 bg-base-white text-cyan-500'>I had concerns about my diabetes risk, but thanks to this prediction service, I got valuable insights about my health and lifestyle. Highly recommended!</p></div>
                        <figure>
                            <img  src={P1} className='w-10 rounded-full' />
                        </figure>
                        <div ><p>Mr.Mridul Sen</p></div>
                    </div>  */}
    
    
    
    
    
                {/* <div className='flex gap-4'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p className='w-32 h-32 bg-base-white text-cyan-500'>{clientReview}</p></div>
                        <figure>
                            <img  src={picture} className='w-12 rounded-full' />
                        </figure>
                        <div ><p>{name}</p></div>
                    </div> */}
    
    
    
                
    
    
            </div>
    
    
    
    
    
        );
    };

export default Creview;