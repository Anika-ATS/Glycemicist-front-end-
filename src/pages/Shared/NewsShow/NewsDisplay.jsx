// import React from 'react';

import { Link } from "react-router-dom";

// import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// className='container mx-auto flex x-space-4 gap-3 py-5 mb-5 's
const NewsDisplay = ({article}) => {
    const{title,url,description}=article
    return (
        <div className='container mx-auto flex x-space-4 gap-3 py-5 mb-5  '  >
               {/*  "card w-96  x-space-4 bg-base-100 shadow-2xl " */}
                {/* Display news */}
                <div className="card mx-2  w-96 bg-base-100 shadow-2xl border border-cyan-500 hover:-translate-y-5 ">
                    
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p className="w-full ">{description}</p>
                        
                    
                        <div className="mx-auto  badge bg-cyan-600 text-white h-[50px] w-[100px] ">                           
                            {url.length <10 ? <>{url}</>:<>
                            <Link to={url}>
                             <button className="  rounded-full outline outline-cyan-600">Read More</button>
                            
                            </Link></>}
                        </div>
                            
                        
                       
                    
                    </div>
                </div>
           
        </div>
            
        
    );
};

export default NewsDisplay;