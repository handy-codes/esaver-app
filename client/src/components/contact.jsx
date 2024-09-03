// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import PinterestIcon from '@mui/icons-material/Pinterest';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import XIcon from '@mui/icons-material/X';

import Img1 from "../assets/post/facebook.jpeg";
import Img2 from "../assets/post/intagram.jpg";
import Img3 from "../assets/post/pinterest.png";
import Img4 from "../assets/post/Xlogo.jpeg";
import Img5 from "../assets/post/youtube.png";



const Contact = () => {
    return (
        <div className="flex flex-col gap-8 py-2  pb-8 w-[70vw] sm:flex-row sm:content-center sm:items-center sm:gap-6 sm:justify-between mx-auto">
            <div className="flex flex-col gap-2">
              <span className="text-white font-bold">BE IN TOUCH WITH US</span>
              <div className="flex">
                  <input type="" className="p-2 border border-[#E9B92F] text-white outline-none bg-transparent min-w-[10%]" placeholder='Enter your e-mail...' />
                  <button className="bg-[#E9B92F] radius p-2">Send</button>
              </div>
            </div>
            <div className="icons flex gap-4 ">
                <img src={Img1} alt="" />
                <img src={Img2} alt="" />
                <img src={Img3} alt="" />
                <img src={Img4} alt="" />
                <img src={Img5} alt="" />
            </div>
        </div>
    )
    }

export default Contact

