import Img1 from "../assets/post/mastercard.jpg";
import Img2 from "../assets/team/heart.jpg";
import Contact from "./contact";

const Footer = () => {
  return ( 
<>
  <div className="bg-[#003B65] px-14 py-2 ">      
    <Contact/>
      <hr className="border-[1px] border-[#e9b92f] " /> 
    <div className="flex flex-col px-6">
      {/* <div className="flex self-center">dara</div> */}
      <div className="flex self-center py-9">
        <div className="text-[#ABBECC] grid grid-cols-2 md:grid-cols-4 gap-12 sm:gap-[70px] md:gap-[100px] lg:gap-[150px] mx-auto">  
          <div className="flex flex-col gap-[2px] ">
            <h1 className='text-white text-[18px]  sm:text-[21px] font-bold'>Savings</h1>
            <span className="">Tenure</span>
            <span>Payment</span>
            <span>Services</span>
            <span>Rollover</span>
            <span>Govt Bond</span>
            <span>Stocks</span>
          </div>
          <div className="flex flex-col gap-[2px]">
            <h1 className='text-white text-[18px] sm:text-[21px] font-bold'>Security</h1>
            <span>Tenure</span>
            <span>Payment</span>
            <span>Services</span>
            <span>Rollover</span>
            <span>Govt Bond</span>
            <span>Stocks</span>
          </div>
          <div className="flex flex-col gap-[2px]">
            <h1 className='text-white text-[18px] sm:text-[21px] font-bold'>Legals</h1>
            <span>Tenure</span>
            <span>Payment</span>
            <span>Service</span>
            <span>Rollover</span>
            <span>Govt Bond</span>
            <span>Stocks</span>
          </div>
          <div className="flex flex-col gap-[2px]">
            <h1 className='text-white text-[18px] sm:text-[21px] font-bold'>Archives</h1>
            <span>Tenure</span>
            <span>Payment</span>
            <span>Service</span>
            <span>Rollover</span>
            <span>Govt Bond</span>
            <span>Stocks</span>
          </div>
        </div>
      </div>
    </div> 
      <hr className="border-[1px] border-[#e9b92f]" /> 
    <div className="flex flex-col justify-center sm:flex-row text-center text-white pt-6 sm:gap-6">
      <div className="flex flex-col sm:ml-2 justify-center sm:flex-row sm:items-center sm:justify-center sm:gap-4 mx-auto pb-3">
        <h1 className="text-center font-bold text-[36px]">eSaver</h1>
        <p className="text-[#ABBECC] text-[14px] sm:mt-3">&copy; Copyright {new Date().getFullYear()} | All Rights Reserved</p>
      </div>
      <div className="flex flex-col  sm:flex-row justify-center gap-[3px] sm:mr-2 sm:gap-2 sm:justify-center sm:items-center text-sm ">
        <div className="flex justify-center gap-3 items-center text-[16px]">
          <p>Made with </p> 
          <img src={Img2} alt="heart" className="w-[17px] h-[17px]" />  
        </div >
        <p className="text-[16px]"> Original Concept of Emeka Owo</p>
        <img src={Img1} alt="mastercard" className='w-20 h-10 items-center hidden sm:inline-block cursor-pointer' />
      </div>
    </div>
  </div>  
</>
)}

export default Footer