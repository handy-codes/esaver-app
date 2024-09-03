import img1 from "../assets/post/facebook.jpeg"
import img2 from "../assets/post/pinterest.png"
import img3 from "../assets/post/youtube.png"
import img4 from "../assets/post/Xlogo.jpeg"


const Footerdara = () => {
  return (
    <>
    <footer>
        <div className='bg-blue-500 text-white flex justify-between '>
            <h1  className='flex justify-between '>
                DaraMola
            </h1>
            <div className='flex justify-between mr-6 gap-6 dara'>
                <a href="#"><img className="w-6 rounded-full" src={img1} alt="" /></a>
                <a href="#"><img className="w-6 rounded-full" src={img2} alt="" /></a>
                <a href="#"><img className="w-6 rounded-full" src={img3} alt="" /></a>
                <a href="#"><img className="w-6 rounded-full" src={img4} alt="" /></a><br/>
                <div>
            <h1 className='text-white font-bold'>Home</h1>
            <div className="flex flex-col gap-2 ">
                <h1>owner</h1>
                <h1>owner</h1>
                <h1>owner</h1>
                <h1>owner</h1>
                <h1>owner</h1>
                <h1>owner</h1>
          </div>

          </div>

            </div>
        </div>
    </footer>
    </>
  )
}

export default Footerdara