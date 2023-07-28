
import useDoctors from '../../Hooks/useDoctors';
import AllDoctors from './AllDoctors';

const Doctors = () => {
    const [AllDoc]=useDoctors();
    return (
        <div>
            <div className="bg-[#e8f4f4]  grid grid-cols-3 gap-4 md:grid-cols-3 gap-4 py-4  ">

                {
                    AllDoc.map(doc => <AllDoctors
                        key={doc._id}
                        doc={doc}
                    ></AllDoctors>



                    )


                }


            </div>

        </div>
    );
};

export default Doctors;