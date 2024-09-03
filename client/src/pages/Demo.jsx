import React from 'react'

const Demo = () => {
  return (
    <main className=' py-6 px-0 mx-0'>
      <div className="flex flex-col lg:flex-row lg:py-12 bg-[#2B1120]">
          <div className="py-8 px-3 ">
            <div className='px-2 sm:px-4 md:px-6'>
              <div className="grid grid-cols-1 lg:grid-cols-3 min-w-6 mx-auto gap-6 sm:gap-12 md:gap-14">
              <div className="flex lg:flex-col flex-row-reverse justify-between gap-6 screen lg:h-[200px]">
                <div className="max-lg:max-w-28 max-lg:min-w-28 max-lg:min-h-24 ">
                  <img className='rounded-lg ' src="https://c76c7bbc41.mjedge.net/wp-content/uploads/tc/2024/04/zig-2-690x375.jpeg" alt="" />
                </div>
                <div className="desc">
                  <h3 className='text-red-600 font-bold'>Hello</h3>
                  <h1 className='text-white text-[22px] font-bold'>For that dream Home</h1>
                  <h6 className='text-white'>Hello there | just now</h6>
                </div>
              </div> 
              <div className="flex lg:flex-col flex-row-reverse justify-between  p6 gap-2 screen">
                <div className="max-lg:max-w-28 max-lg:min-w-28 max-lg:min-h-24">
                  <img className='rounded-lg' src="https://c76c7bbc41.mjedge.net/wp-content/uploads/tc/2024/04/zig-2-300x163.jpeg" alt="" />
                </div>
                <div className="desc">
                  <h3 className='text-red-600 '>Hello</h3>
                  <h2 className='text-white text-[22px] font-bold'>For that dream Home</h2>
                  <h4 className='text-white'>Hello there | just now</h4>

                </div>
              </div> 
              <div className="flex lg:flex-col flex-row-reverse justify-between p6 gap-2 screen">
                <div className="max-lg:max-w-28 max-lg:min-w-28 max-lg:min-h-24">
                  <img className='rounded-lg' src="https://c76c7bbc41.mjedge.net/wp-content/uploads/tc/2024/09/Lagos_land_records_to_get_a_blockchain_upgrade_more_registries_go_digital_in_Africa_01-1-300x180.jpg" alt="" />
                </div>
                <div className="desc">
                  <h3 className='text-red-600 '>Hello</h3>
                  <h2 className='text-white text-[22px] font-bold'>For that dream Home</h2>
                  <h4 className='text-white'>Hello there | just now</h4>

                </div>
              </div> 
              <div className="flex lg:flex-col flex-row-reverse justify-between p6 gap-2 screen">
                <div className="max-lg:max-w-28 max-lg:min-w-28 max-lg:min-h-24">
                  <img className='rounded-lg' src="https://c76c7bbc41.mjedge.net/wp-content/uploads/tc/2024/08/cccc-300x169.jpg" alt="" />
                </div>
                <div className="desc">
                  <h3 className='text-red-600 '>Hello</h3>
                  <h2 className='text-white text-[22px] font-bold'>For that dream Home</h2>
                  <h4 className='text-white'>Hello there | just now</h4>

                </div>
              </div> 
              <div className="flex lg:flex-col flex-row-reverse justify-between p6 gap-2 screen">
                <div className="max-lg:max-w-28 max-lg:min-w-28 max-lg:min-h-24">
                  <img className='rounded-lg' src="https://c76c7bbc41.mjedge.net/wp-content/uploads/tc/2024/09/image0-1-240x160.jpg" alt="" />
                </div>
                <div className="desc">
                  <h3 className='text-red-600 '>Hello</h3>
                  <h2 className='text-white text-[22px] font-bold'>For that dream Home</h2>
                  <h4 className='text-white'>Hello there | just now</h4>
                </div>
              </div> 
              <div className="flex lg:flex-col flex-row-reverse justify-between p6 gap-2 screen">
                <div className="max-lg:max-w-28 max-lg:min-w-28 max-lg:min-h-24">
                  <img className='rounded-lg w-9' src="https://c76c7bbc41.mjedge.net/wp-content/uploads/tc/2024/09/image0-1-240x160.jpg" alt="" />
                </div>
                <div className="desc">
                  <h3 className='text-red-600 '>Hello</h3>
                  <h2 className='text-white text-[22px] font-bold'>For that dream Home</h2>
                  <h4 className='text-white'>Hello there | just now</h4>

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
          <div className="p-6 ">
            <form className='bg-[#FFE1DA] flex-col justify-center flex rounded-lg p-6 h-[100%] max-lg:max-w-xl lg:w-[23vw] mx-auto' action="">
              <h1 className='font-bold text-[20px] pb-6'>Get the best African Fintech newsletters in your inbox</h1>
              <div className="flex flex-col">
                <input className='outline-none p-2 shadow-sm border-b' placeholder='Enter Your Name'  type="text" name="" id="" /><br />
                <input className='outline-none p-2 shadow-sm border-b' placeholder='Enter Your Name' type="text" name="" id="" /><br />
                <input className='outline-none p-2 shadow-sm border-b' placeholder='Enter Your Name' type="text" name="" id="" /><br />
                <input className='outline-none p-2 shadow-sm border-b' placeholder='Enter Your Name' type="text" name="" id="" /><br />
              </div>
              <button className='justify-center text-[18px] font-bold hover:opacity-95 p-3 rounded-lg bg-[#F23204] text-white ' type='button'>Subscribe</button>
            </form>
          </div>
      </div>
    </main>
  )
}

export default Demo