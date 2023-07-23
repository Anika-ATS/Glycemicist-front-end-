import "react-responsive-carousel/lib/styles/carousel.min.css";
 // requires a loader
import { Carousel } from 'react-responsive-carousel';

import p1 from '../../../assets/Images/D1.jpg';
// import p2 from '../../../assets/Images/D3.jpg';
// import p3 from '../../../assets/Images/B-D4.png';
// import p3 from '../../../assets/Images/B-D--4.png';
//  style={{width:'1440px',height:'400px'}} 
const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img className="object-cover h-[500] w-screen" src={p1} />
               
                </div>
               
              
        </Carousel>

        // <div className="carousel h-[400] ">
        //         <div id="slide1" className="carousel-item relative lg:w-full  ">
        //             <img className="object-cover    w-screen"   src={p1} />
        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide3" className="btn btn-circle">❮</a>
        //                 <a href="#slide2" className="btn btn-circle">❯</a>
        //             </div>

        //             <div className="absolute  right-5  bottom-1/2 ">
        //                 {/* <div className='pe-5 pt-2 space-y-7 w-1/3'>
        //                     <h2 className=' ps-10  text-4xl'>Let's Visit  <span className='text-bold text-purple-800'>Nyama Hoard</span> with our special customers!!</h2>
                            
        //                 </div> */}


        //             </div>
                    
        //         </div>
        //         {/* 2 */}
        //         <div id="slide2" className="carousel-item relative w-full  ">
        //             <img className=" object-cover  w-screen  "  src={p3} />
        //             <div className="absolute flex justify-between transform -translate-y-1/2   left-5 right-5 top-1/2">
        //                 <a href="#slide1" className="btn btn-circle">❮</a>
        //                 <a href="#slide3" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //         {/* 3 */}
        //         <div id="slide3" className="carousel-item relative w-full ">
        //             <img className=" object-cover  w-screen  " src={p2} />
        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide2" className="btn btn-circle">❮</a>
        //                 <a href="#slide1" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>


        // </div>
    );
};

export default Banner;
