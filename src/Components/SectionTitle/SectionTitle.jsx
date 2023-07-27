

const SectionTitle = ({Heading, subHeading}) => {
    return (
        <div className=" mx-auto text-center md:w-4/12 my-8">
            <p className="text-3xl mt-16 text-[#64d9b9] mb-2 border border-[#1d2939]">** { subHeading} **</p>
            <h3 className="text-2xl text-[#64d9b9] uppercase border-b-4 border-[#1d2939] py-4">{Heading}</h3>
        </div>
    );
};

export default SectionTitle;