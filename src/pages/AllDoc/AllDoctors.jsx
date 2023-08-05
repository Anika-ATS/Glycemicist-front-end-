const AllDoctors = ({doc}) => {
  const {name, image, email, affiliation, specialization} = doc;
  return (
    <div className="flex-row mx-16 space-x-4   mb-20 bg-[#E8F4F4]">
      <div className="card mx-auto w-96  bg-blue-950 shadow-2xl  ">
        <div className="card w-full h-[500px] bg-base-100 border border-[#1d2939] shadow-xl mb-3 py-5 px-5 hover:-translate-y-5">
          <figure className="  px-3 pt-5">
            <img
              className="object-cover w-full h-min mt-0 rounded-full shadow-2xl"
              src={image}
              alt=""
            />
          </figure>
          <div className="card-body font-bold text-blue-950 text-center">
            <h3 className="mx-2 mb-2 text-[#1d2939]">{name}</h3>
            <p className="w-full ">{email}</p>
            <p className="w-full ">{specialization}</p>
            <p className="mx-2 mb-2 text-[#1d2939]">{affiliation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDoctors;
