

const SectionTitle = ({Heading, subHeading}) => {
    return (
        <div className=" mx-auto text-center md:w-4/12 my-8">
            <p className="text-2xl mt-16 text-cyan-500 mb-2 border border-cyan-600">** { subHeading} **</p>
            <h3 className="text-3xl uppercase border-b-4 border-cyan-500 py-4">{Heading}</h3>
        </div>
    );
};

export default SectionTitle;