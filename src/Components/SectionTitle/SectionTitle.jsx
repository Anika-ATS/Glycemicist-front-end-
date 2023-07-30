

const SectionTitle = ({Heading, subHeading,background,fontSize}) => {
    return (
        <div className=" mx-auto text-center md:w-4/12 my-8">
            <p className={` ${background}  text-3xl mt-10 text-[#1d2939]  mb-2 border border-[#64d9b9]`} >** { subHeading} **</p>
            <h3 className={`${fontSize} text-2xl text-[#1d2939] uppercase border-b-4 border-[#64d9b9] py-4`}>{Heading }</h3>
        </div>
    );
};

export default SectionTitle;