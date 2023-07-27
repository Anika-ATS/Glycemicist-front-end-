
import { useEffect, useState } from "react";
const useDoctors = () => {
    const [AllDoc, setAllDoc] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("doc.json")

            .then(res => res.json())
            .then(data =>{
                setAllDoc(data);
                setLoading(false)
            } )



            .catch(error => console.log(error))
    }, [])
    return [AllDoc,loading]
};

export default useDoctors;