import React from "react";

import {Link} from "react-router-dom";

import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// className='container mx-auto flex x-space-4 gap-3 py-5 mb-5 's

// {article}
const NewsDisplay = ({article}) => {
  const {title, url, description, author} = article;
  return (
    <div className="container mx-auto flex x-space-4 gap-3 py-5 mb-5 ">
      {/* "card w-96  x-space-4 bg-base-100 shadow-2xl " */}
      {/* Display news */}
      <div className="card mx-2  w-96 bg-base-100 shadow-2xl border border-[#1d2939] hover:-translate-y-5 ">
        <div className="card-body">
          <h2 className="card-title text-teal-700">{title}</h2>
          <h3 className="text-lg text-blue-800">{author}</h3>

          <div className="card m-2 p-4 shadow ">
            <p className="w-full text-blue-950 text-lg">{description}</p>
          </div>

          <div className="mx-auto outline outline-[#1d2939] badge bg-[#64d9b9] text-white h-[50px] w-[100px] hover:bg-[#1d2939]">
            {url < 10 ? (
              <>{url}</>
            ) : (
              <>
                <Link to={url}>
                  <button className="  rounded-full ">Read More</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDisplay;
