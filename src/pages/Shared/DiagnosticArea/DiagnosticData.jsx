
import Daignostic from "./Daignostic";
import useDiagnosticData from "../../../Hooks/useDiagnosticData";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const DiagnosticData = () => {
    const [DiagnosticData]=useDiagnosticData();
    
   
    return (
        <div>
           <SectionTitle

            subHeading={'Be Prepare to test your body!!'}
            Heading={'Diabetes Diagnostic Center'}
            fontSize="font-bold text-xl"
            background="mt-2 text-white  h-[90px] w-[350px] outline outline-[#1d2939] bg-gradient-to-r  from-[#64d9b9] to-[#1d2939]"

           ></SectionTitle>

          <div className="bg-[#e8f4f4]  grid grid-cols-1 gap-3 md:grid-cols-3 gap-4 py-4  ">

            {

                 DiagnosticData.map(diagnosis => <Daignostic

                 key ={diagnosis._id}
                 diagnosis={diagnosis}
                 ></Daignostic>

            )


           }


          </div>
        </div>
       


       
    );
};

export default DiagnosticData;