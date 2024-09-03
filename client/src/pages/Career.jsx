import Img1 from "../assets/team/owo.jpg";
import Opportunities from "../components/Opportunities";

const Career = () => {
  return (
    <>
    <div className="flex justify-center pt-10 pb-4 w-full ">
      <div className="flex sm:max-w-[50%] flex-col p-8 text-justify content-center justify-center w-full text-white bg-[#003b65] h-[70vh]">
        <h1 className="justify-center flex text-4xl pb-6 font-bold">Nurturing Talents</h1>
        <p className="text-lg text-[#ABBECC]">Are you customer-oriented? Then a rewarding career opportunity awaits you at eSaver Financial Technology Co. In our kind of world, Together Everyone Achieves More! Your focus will be on developing our clientelle through quality service and excellent customer relations!</p>
      </div>
      <div className="hidden sm:flex sm:min-w-[50%] flex-1 h-[70vh]">
        <img className="w-full object-cover" src="https://legaltrunk.com/wp-content/uploads/2022/08/How-to-Set-Up-an-Offshore-Company-and-Bank-Account-from-Nigeria-.jpg" alt="" />
      </div>
    </div>
    <Opportunities/>
    </>
  )
}

export default Career