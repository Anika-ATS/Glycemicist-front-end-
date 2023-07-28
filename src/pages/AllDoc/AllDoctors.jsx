

const AllDoctors = ({doc}) => {
    const{name,image, email,designation,specialization,height}=doc;
    return (
        <div className="flex-row mx-16 space-x-4  mt-20">
            <figure className="  px-3 pt-5">
            <img className="object-cover w-[160px] h-[150px] mt-0 rounded-full shadow-2xl"  src={image}  alt="" />
            </figure>
            <div className="font-bold mt-9 text-xl text-[#64d9b9]">
                <h3 >Name:<span className="mx-2 mb-2 text-[#1d2939]">{name}</span></h3>
                <p>Email:<span className="mx-2 mb-2 text-[#1d2939]">{email}</span></p>
                <p>Class:<span className="mx-2 mb-2 text-[#1d2939]">{designation}</span></p>
                <p>Catagory:<span className="mx-1 mb-2 text-[#1d2939]">{specialization}</span></p>
                <p>Height:<span className="mx-2 mb-2 text-[#1d2939]">{height}</span></p>
            </div>
                
            
            
        </div>
    );
};

export default AllDoctors;