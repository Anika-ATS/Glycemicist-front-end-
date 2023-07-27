

const SectionTitle = ({Heading, subHeading}) => {
    return (
        <div className=" mx-auto text-center md:w-4/12 my-8">
            <p className="text-3xl mt-16 text-[#1d2939] mb-2 border border-[#64d9b9]">** { subHeading} **</p>
            <h3 className="text-2xl text-[#1d2939] uppercase border-b-4 border-[#64d9b9] py-4">{Heading}</h3>
        </div>
    );
};

export default SectionTitle;