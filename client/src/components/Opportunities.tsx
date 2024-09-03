import React from 'react'

import Img1 from "../assets/post/emirates2.jpg";
import Img2 from "../assets/post/bungalow.jpg";
import Img3 from "../assets/post/benz20221.webp";
import Img4 from "../assets/post/school_girl.jpg";
import Img5 from "../assets/post/market_woman.jpeg";
import Img6 from "../assets/post/wedding.webp";


const ProductsData = [
    {
      id: 1,
      img: Img1,
      desc: "You can save to 'Japa'",
    },
    {
      id: 2,
      img: Img2,
      desc: "For that dream Home",
    },
    {
      id: 3,
      img: Img3,
      desc: "Save for a new Ride",
    },
    {
      id: 4,
      img: Img4,
      desc: "For her School Fees...",
    },
];
  
const Opportunities = () => {
    return (
  <div className="p-5 px-11">
    <div className="pb-7 pt-0">
      <div className="py-2 md:ml-16">
        <h1 className="text-[30px] font-bold">
          Opportunities at <span className='text-[#003b65] text-[36px]'>eSaver</span> 
        </h1>
        <p className="font-bold text-xl">
        The coporate environment adds so much value to you!
        </p>
      </div>
        <div className=''>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1180px] mx-auto gap-10 p-6">
             {ProductsData.map((data) => (
            <div key={data.id} className="flex justify-center max-sm:w-[100vw]items-center overflow-hidden flex-col text-lg bg-white text-[#003b65] 
              hover:bg-[#003b65] hover:text-white transition duration-300"
              >
              <img
                src={data.img}
                alt=""
                className="h-[45vh] w-[100%] object-cover hover:scale-105 transition-scale duration-300"
              />
              <div className=''>
                <h1 className="font-bold p-6 justify-center flex">{data.desc}</h1>
              </div>
            </div>
             ))}
          </div>
        </div>
    </div>
  </div>
)}

export default Opportunities




