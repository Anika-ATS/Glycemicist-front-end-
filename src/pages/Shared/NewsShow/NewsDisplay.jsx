// import React from 'react';

import { Link } from "react-router-dom";

// import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// className='container mx-auto flex x-space-4 gap-3 py-5 mb-5 's
const NewsDisplay = ({article}) => {
    const{title,url,description}=article
    return (
        <div className='container mx-auto flex x-space-4 gap-3 py-5 mb-5 bg-[#e8f4f4] '  >
               {/*  "card w-96  x-space-4 bg-base-100 shadow-2xl " */}
                {/* Display news */}
                <div className="card mx-2  w-96 bg-base-100 shadow-2xl border border-[#1d2939] hover:-translate-y-5 ">
                    
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p className="w-full ">{description}</p>
                        
                    
                        <div className="mx-auto outline outline-[#1d2939] badge bg-[#64d9b9] text-white h-[50px] w-[100px] hover:bg-[#1d2939]">                           
                            {url.length <10 ? <>{url}</>:<>
                            <Link to={url}>
                             <button className="  rounded-full ">Read More</button>
                            
                            </Link></>}
                        </div>
                            
                        
                       
                    
                    </div>
                </div>
           
        </div>
            
        
    );
};

export default NewsDisplay;