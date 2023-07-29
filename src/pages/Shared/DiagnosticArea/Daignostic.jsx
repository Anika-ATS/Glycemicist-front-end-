

const Daignostic = ({diagnosis}) => {

    const{_id,test_name,price,token,system}=diagnosis;
    return (
        <div>
            
        <div className='container mx-auto flex x-space-4 gap-3 py-5 mb-5 '  >
        
            {/*  "card w-96  x-space-4 bg-base-100 shadow-2xl " */}
            {/* Display news */}
            <div className="card mx-2  w-96 bg-base-100 shadow-2xl border border-[#1d2939] hover:-translate-y-5 ">

                <div className="card-body font-bold text-[#1d2939]">
                    <h2 className="card-title mx-auto">{token}</h2>
                    <p className="w-full ">Name:{test_name}</p>
                    <p className="w-full ">Price:{price}</p>
                    <p className="w-full ">Payment Method:{system}</p>
                                            
                </div>
             </div>
        </div>
    </div>
      

       
    );
};

export default Daignostic;