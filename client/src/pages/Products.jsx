import React from 'react'
import Navdara from '../components/Navdara'
import Footerdara from '../components/Footerdara'
import img1 from "../assets/post/dubai2.jpg"
import img2 from "../assets/post/build.jpg"
import img3 from "../assets/post/avatarfood.jpg"
import img4 from "../assets/post/avatar.jpg"
import img5 from "../assets/post/emirates2.jpg"
import img6 from "../assets/post/emirates.jpg"

const Products = () => {
  return (
    <>
    <Navdara/>
    <main className='bg-[#ECEFF1]'>
      <div className="p-6">
        <div className=" bg-blue-800 text-white p-6 text-justify flex flex-col gap-4">
          <h1 className='font-bold text-2xl'>
            What This Website is All about
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consequatur iure facilis voluptates temporibus nulla nam, incidunt, eaque ullam velit magni laudantium. Placeat numquam soluta autem voluptates nemo possimus ipsa provident quam tempore fuga iusto quas neque, ducimus error nesciunt aliquam beatae commodi illum ex praesentium porro quaerat architecto eligendi? Vitae repudiandae labore nihil nam. Quo, aliquam recusandae obcaecati et hic magnam dicta earum maxime deleniti debitis, sed officia voluptate veniam cupiditate consequatur dolorem tempore natus quasi? Dolor culpa animi excepturi ratione asperiores ducimus. Officia dolore distinctio nisi quos illum laudantium ea quo, delectus excepturi expedita totam eaque incidunt explicabo reiciendis amet magni qui quisquam aliquam aliquid minima perspiciatis at, quis optio doloribus. Culpa corrupti hic delectus sunt adipisci voluptatem, consequuntur natus odit fuga cupiditate sequi expedita quis laborum dicta quisquam eius a rem nemo commodi quia vel accusantium recusandae suscipit. Laudantium eligendi quia laborum ea odit. Dolor, eligendi. Amet sed quibusdam voluptatem ab unde! Voluptate temporibus nesciunt explicabo voluptates officiis! Molestias, nam possimus debitis ipsum quia eveniet pariatur aperiam, iure quis perspiciatis laboriosam excepturi aliquid, facilis praesentium mollitia. Veritatis aperiam sint magni dignissimos eligendi pariatur eaque assumenda, tempore vel consequatur ut excepturi labore ullam facere, quam earum provident velit, laudantium impedit ea dicta! Qui omnis iure ratione laudantium! Minima nisi dolore voluptates sed quidem nam tempora expedita ipsam pariatur doloribus, ad, commodi rerum dolorum. Velit, mollitia commodi provident quaerat, qui explicabo nihil amet tenetur magni laudantium ut quibusdam ullam, optio ipsam cum exercitationem saepe assumenda deleniti animi veritatis sequi? Nihil quasi autem facilis placeat ut eaque ipsum earum beatae temporibus incidunt dicta vel, quod, tenetur veritatis nobis magnam eos est praesentium tempore velit dolorem. Fugiat ipsa porro quo praesentium nemo veniam omnis eligendi neque maxime exercitationem rem accusamus est, itaque dicta excepturi possimus odit? Ab facilis aliquid reprehenderit ipsa.</p>
        </div>
        <div className="">
          <div >
            <div className="flex flex-col gap-2 pl-24" >
              <h1 className='text-[7vh] font-bold'>Secure Tomorrow  Save Today!</h1>
              <p className='text-[20px] font-bold z-10'>Discover the Advantages of Savings</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1180px] boll  mx-auto gap-16 p-10 ">
              <img src={img1} alt="" className='h-[350px] w-[100%] object-cover overflow-hidden hover:scale-105  transition' />
              <img src={img2} alt="" className='h-[350px] w-[100%] object-cover hover:scale-105  transition' />
              <img src={img3} alt="" className='h-[350px] w-[100%] object-cover hover:scale-105  transition' />
              <img src={img4} alt="" className='h-[350px] w-[100%] object-cover hover:scale-105  transition' />
              <img src={img5} alt="" className='h-[350px] w-[100%] object-cover hover:scale-105  transition' />
              <img src={img6} alt="" className='h-[350px] w-[100%] object-cover hover:scale-105  transition' />
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footerdara/> 

    </>
  )
}

export default Products

//