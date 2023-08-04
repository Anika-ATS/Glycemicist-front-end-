const AllDoctors = ({doc}) => {
  const {name, image, email, designation, specialization} = doc;
  return (
    <div className="flex-row mx-16 space-x-4  mt-28 mb-20">
      <figure className="  px-3 pt-5">
        <img
          className="object-cover w-[160px] h-[150px] mt-0 rounded-full shadow-2xl"
          src={image}
          alt=""
        />
      </figure>
      <div className="font-bold mt-9 text-xl text-[#64d9b9]">
        <h3 className="mx-2 mb-2 text-[#1d2939]">{name}</h3>
        <p className="mx-2 mb-2 text-[#1d2939]">{email}</p>
        <p className="mx-2 mb-2 text-[#1d2939]">{designation}</p>
        <p className="mx-2 mb-2 text-[#1d2939]">{specialization}</p>
        {/* <p className="mx-2 mb-2 text-[#1d2939]">{height}</p> */}
      </div>
    </div>
  );
};

export default AllDoctors;
