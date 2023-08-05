const Daignostic = ({diagnosis}) => {
  const {_id, test_name, price, test_picture} = diagnosis;
  return (
    <div>
      <div className="container mx-auto flex x-space-4 gap-3 py-5 mb-5 ">
        {/* Display tests */}
        <div className="card mx-auto w-96 bg-blue-950 shadow-2xl  ">
          <div className="card w-96 bg-base-100 border border-[#1d2939]  h-[350px] shadow-xl mb-3 py-5 px-5 hover:-translate-y-5">
            <figure className="px-5 pt-5  mt-2">
              <img src={test_picture} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body font-bold text-blue-950 text-center">
              <p className="w-full ">{test_name}</p>
              <p className="w-full ">{price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daignostic;
