

const AllDoctors = ({doc}) => {
    const{name,image, email,designation,specialization,height}=doc;
    return (
        <div className="flex-row mx-16 space-x-4  mt-20">
            <figure className="  px-3 pt-5">
            <img className="object-cover w-[160px] h-[150px] mt-0 rounded-full shadow-2xl"  src={image}  alt="" />
            </figure>
            <div className=" mt-9">
                <h3>Name:<span className="4xl text-green-600 ">{name}</span></h3>
                <p>Email:{email}</p>
                <p>Class:{designation}</p>
                <p>Catagory:{specialization}</p>
                <p>Height:{height}</p>
            </div>
                 
            
            
        </div>
    );
};

export default AllDoctors;