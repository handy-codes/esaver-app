
import Img1 from "../assets/post/emirates2.jpg";
import Img2 from "../assets/post/bungalow.jpg";
import Img3 from "../assets/post/benz20221.webp";
import Img4 from "../assets/post/school_girl.jpg";
import Img5 from "../assets/post/market_woman.jpeg";
import Img6 from "../assets/post/wedding.webp";
// import { FaStar } from "react-icons/fa6";

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
    {
      id: 5,
      img: Img5,
      desc: "For Business Capital",
    },
    {
      id: 6,
      img: Img6,
      desc: "Save for that D-day!",
    },
];
  
const Advantages = () => {
return (
  <div className="p-5">
    <div className="pb-7">
      <div className="py-4 md:ml-16">
        <h1 className="text-[30px] font-bold">
          Secure Tomorrow | <span className='text-[#003b65] text-[36px]'>Save</span> Today!
        </h1>
        <p className="font-bold text-xl">
          Discover the Advantages of Savings
        </p>
      </div>
        <div className='px-2 sm:px-4 md:px-6'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 sm:gap-12 md:gap-14">
          <div className="item">
            <div className="images">
              <img src={Img3} alt="" />
            </div>
            <div className="desc">
              <h2>For that dream Home</h2>
            </div>
          </div> 
          <div className="item">
            <div className="images">
              <img src={Img3} alt="" />
            </div>
            <div className="desc">
              <h2>For that dream Home</h2>
            </div>
          </div> 
          <div className="item">
            <div className="images">
              <img src={Img3} alt="" />
            </div>
            <div className="desc">
              <h2>For that dream Home</h2>
            </div>
          </div> 
          <div className="item">
            <div className="images">
              <img src={Img3} alt="" />
            </div>
            <div className="desc">
              <h2>For that dream Home</h2>
            </div>
          </div> 
          <div className="item">
            <div className="images">
              <img src={Img3} alt="" />
            </div>
            <div className="desc">
              <h2>For that dream Home</h2>
            </div>
          </div> 
          <div className="item">
            <div className="images">
              <img src={Img3} alt="" />
            </div>
            <div className="desc">
              <h2>For that dream Home</h2>
            </div>
          </div> 

            {/* {ProductsData.map((data) => (
            <div key={data.id} className="flex items-center overflow-hidden flex-col text-lg bg-white text-[#003b65] 
              hover:bg-[#003b65] hover:text-white transition duration-300"
              >
                
              <img
                src={data.img}
                alt=""
                className="h-[50vh] w-[100%] object-cover hover:scale-110 transition-scale duration-500"
              />
              <div className=''>
                <h1 className="font-bold p-7 text-[20px]">{data.desc}</h1>
              </div>
            </div>
            ))} */}
          </div>
        </div>
    </div>
  </div>
)}

export default Advantages


{/* <div className="item">
  <div className="images">
    <img src={Img3} alt="" />
  </div>
  <div className="desc">
    <h2>For that dream Home</h2>
  </div>
</div>  */}


