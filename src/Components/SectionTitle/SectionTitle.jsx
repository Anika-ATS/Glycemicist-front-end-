import {FaStar} from "react-icons/fa";

const SectionTitle = ({Heading, subHeading, background, fontSize}) => {
  return (
    <div className=" mx-auto text-center w-1/2 my-8">
      {subHeading && (
        <div
          className={` ${background}  text-3xl mt-10 text-[#1d2939]  mb-2 border border-[#64d9b9] flex justify-center items-center gap-2`}
        >
          <FaStar className="text-sm text-[#64d9b9]" />{" "}
          <FaStar className="text-sm" />
          {subHeading} <FaStar className="text-sm" />{" "}
          <FaStar className="text-sm text-[#64d9b9]" />
        </div>
      )}
      <h3
        className={`${fontSize} text-2xl text-[#1d2939] uppercase border-b-4 border-[#64d9b9] py-4`}
      >
        {Heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
