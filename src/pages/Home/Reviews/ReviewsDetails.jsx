
import  { useEffect, useState } from 'react';

import Creview from '../../Shared/CReview/Creview';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const ReviewsDetails = () => {
    const [ReviewData, setReviewData]=useState([]);
  
    useEffect(()=>{
        fetch("reviews.json")
      
            .then(res=>res.json())
            .then(data=>setReviewData(data))
            
            .catch(error=>console.log(error))

     },[])
    return (
        <div>
            
           
            <SectionTitle
              subHeading={'Clents Review'}
              Heading={'Happy Clients'}
            
            ></SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12'>
            {
                  ReviewData.map(msg=><Creview
                  
                    key={msg._id}
                    msg={msg}></Creview>

                  )
              
               }
            </div>
            
        </div>
    );
};

export default ReviewsDetails;