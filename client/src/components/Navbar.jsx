// import { Link } from "react-router-dom";

import { useState } from "react";
import { FaTimes } from "react-icons/fa"
import { CiMenuBurger } from "react-icons/ci"


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const content = <>
    <div className="lg:hidden z-50 block absolute top-20 w-full left-0 ring-0 bg-slate-400 backdrop-blur-lg bg-opacity-30 transition">
        <ul className="text-center text-xl p-10">
            <li className="my-4 py-4 border-b border-pink-200 hover:text-pink-950 transition-all duration-150 hover:bg-pink-200 hover:rounded">Home</li>               
            <li className="my-4 py-4 border-b border-pink-200 hover:text-pink-950 transition-all duration-150 hover:bg-pink-200 hover:rounded">Shop</li>                 
            <li className="my-4 py-4 border-b border-pink-200 hover:text-pink-950 transition-all duration-150 hover:bg-pink-200 hover:rounded">Pages</li>
            <li >
                {/*Mega menu start  */}
               <div className="group">
                <button className="hover:text-green-400 transition border-b-2 border-white hover:border-green-400 cursor-pointer">Product</button>
                <div className="hidden group-hover:flex flex-col absolute left-0 top-16 p-10 w-full bg-white z-20 text-black duration-300 ">
                <div className="grid grid-col-2 md:grid-cols-4 gap-5">
                    <div className="flex flex-col">
                    <h3 className="mb-4 text-2xl text-pink-400">Beauty Products</h3>
                    <a href="" className="hover:underline hover:text-pink-400">Daily Savings</a>
                    <a href="" className="hover:underline hover:text-pink-400">Bills Payment</a>
                    <a href="" className="hover:underline hover:text-pink-400">Bulk Transfer</a>
                    <a href="" className="hover:underline hover:text-pink-400">Home Investment</a>
                    <a href="" className="hover:underline hover:text-pink-400">Education Fund</a>
                    </div>
                    <div className="flex flex-col">
                    <h3 className="mb-4 text-2xl text-pink-400">Beauty Products</h3>
                    <a href="" className="hover:underline hover:text-pink-400">Daily Savings</a>
                    <a href="" className="hover:underline hover:text-pink-400">Bills Payment</a>
                    <a href="" className="hover:underline hover:text-pink-400">Bulk Transfer</a>
                    <a href="" className="hover:underline hover:text-pink-400">Home Investment</a>
                    <a href="" className="hover:underline hover:text-pink-400">Education Fund</a>
                    </div>
                    <div className="flex flex-col">
                    <h3 className="mb-4 text-2xl text-pink-400">Beauty Products</h3>
                    <a href="" className="hover:underline hover:text-pink-400">Daily Savings</a>
                    <a href="" className="hover:underline hover:text-pink-400">Bills Payment</a>
                    <a href="" className="hover:underline hover:text-pink-400">Bulk Transfer</a>
                    <a href="" className="hover:underline hover:text-pink-400">Home Investment</a>
                    <a href="" className="hover:underline hover:text-pink-400">Education Fund</a>
                    </div>
                    <div className="flex flex-col">
                    <h3 className="mb-4 text-2xl text-pink-400">Beauty Products</h3>
                    <a href="" className="hover:underline hover:text-pink-400">Daily Savings</a>
                    <a href="" className="hover:underline hover:text-pink-400">Bills Payment</a>
                    <a href="" className="hover:underline hover:text-pink-400">Bulk Transfer</a>
                    <a href="" className="hover:underline hover:text-pink-400">Home Investment</a>
                    <a href="" className="hover:underline hover:text-pink-400">Education Fund</a>
                    </div>
                </div>
            </div>
            </div>
                {/*Mega menu end */}
            </li>
            <li className="hover:text-green-400 transition border-b-2 border-white hover:border-green-400 cursor-pointer">Contact</li>
        </ul>
    </div>
    </>
    return (
      <nav className="z-50 ">
          <div className="h-10vh flex justify-between lg:py-8 px-20 py-20 border-b">
              <div className="flex items-center flex-1">
                  <h2 className="text-3xl font-bold text-green-400">Beauty</h2>
              </div>
              <div className="lg:flex md:flex flex-1 justify-center items font-normal hidden">
                  <ul className="flex gap-8 mr-16 text-[18px]">
                     <li className="hover:text-green-400 transition border-b-2 border-white hover:border-green-400 cursor-pointer">Home</li>               
                     <li className="hover:text-green-400 transition border-b-2 border-white hover:border-green-400 cursor-pointer">Shop</li>                 
                     <li className="hover:text-green-400 transition border-b-2 border-white hover:border-green-400 cursor-pointer">Pages</li>
                     <li >
                                  {/*Mega menu start  */}
                                  <div className="group">
                                      <button className="hover:text-green-400 transition border-b-2 border-white hover:border-green-400 cursor-pointer">Product</button>
                                      <div className="hidden group-hover:flex flex-col absolute left-0 top-16 p-10 w-full bg-white z-20 text-black duration-300 ">
                                         <div className="grid grid-col-2 md:grid-cols-4 gap-5">
                                         <div className="flex flex-col">
                                          <h3 className="mb-4 text-2xl text-pink-400">Beauty Products</h3>
                                          <a href="" className="hover:underline hover:text-pink-400">Daily Savings</a>
                                          <a href="" className="hover:underline hover:text-pink-400">Bills Payment</a>
                                          <a href="" className="hover:underline hover:text-pink-400">Bulk Transfer</a>
                                          <a href="" className="hover:underline hover:text-pink-400">Home Investment</a>
                                          <a href="" className="hover:underline hover:text-pink-400">Education Fund</a>
                                         </div>
                                         <div className="flex flex-col">
                                          <h3 className="mb-4 text-2xl text-pink-400">Beauty Products</h3>
                                          <a href="" className="hover:underline hover:text-pink-400">Daily Savings</a>
                                          <a href="" className="hover:underline hover:text-pink-400">Bills Payment</a>
                                          <a href="" className="hover:underline hover:text-pink-400">Bulk Transfer</a>
                                          <a href="" className="hover:underline hover:text-pink-400">Home Investment</a>
                                          <a href="" className="hover:underline hover:text-pink-400">Education Fund</a>
                                         </div>
                                         <div className="flex flex-col">
                                          <h3 className="mb-4 text-2xl text-pink-400">Beauty Products</h3>
                                          <a href="" className="hover:underline hover:text-pink-400">Daily Savings</a>
                                          <a href="" className="hover:underline hover:text-pink-400">Bills Payment</a>
                                          <a href="" className="hover:underline hover:text-pink-400">Bulk Transfer</a>
                                          <a href="" className="hover:underline hover:text-pink-400">Home Investment</a>
                                          <a href="" className="hover:underline hover:text-pink-400">Education Fund</a>
                                         </div>
                                         <div className="flex flex-col">
                                          <h3 className="mb-4 text-2xl text-pink-400">Beauty Products</h3>
                                          <a href="" className="hover:underline hover:text-pink-400">Daily Savings</a>
                                          <a href="" className="hover:underline hover:text-pink-400">Bills Payment</a>
                                          <a href="" className="hover:underline hover:text-pink-400">Bulk Transfer</a>
                                          <a href="" className="hover:underline hover:text-pink-400">Home Investment</a>
                                          <a href="" className="hover:underline hover:text-pink-400">Education Fund</a>
                                         </div>
                                         </div>
                                      </div>
                                  </div>
                                  {/*Mega menu end */}
                      </li>
                     <li className="hover:text-green-400 transition border-b-2 border-white hover:border-green-400 cursor-pointer">Contact</li>
                  </ul>
              </div>
              <div className="">
                {click && content}                
              </div>
              <button className="block sm:hidden transition-none" onClick={handleClick}>
                {click ? <FaTimes classNametext-black/> : <CiMenuBurger classNametext-black/>}
              </button>
          </div>    
      </nav>
    );
  };
  
  export default Navbar



// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (

//     <header>
//         <nav className='z-50'>
//             <div className="h-10vh flex justify-between px-20 lg:py-5 py-20 border-b">
//                 <div className="flex items-center flex-1">
//                     <h1 className='text-3xl font-bold text-pink-900'>eSaver</h1>
//                 </div>
//                 <div className="flex">
//                     <ul className='flex justify-between items-center gap-8 mr-16 text-[18px]'>
//                         <Link to={"/"}>
//                             <li className='hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer'>Home</li>
//                         </Link>
//                         <Link to={"/demo"}>
//                             <li className='hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer'>Demo</li>
//                         </Link>
//                         <Link to={"/demo"}>

//                             <li>
//                                 <div className='group'>
//                                     <button className='hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer'>Products</button>
//                                     <div className="hidden group-hover:flex flex-col absolute left-0 p-10 w-full bg-white z-20 text-black duration-300 "></div>
//                                         <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
//                                             <h3>eSaver Products</h3>                                    
//                                             <a href="">Makeup Kit</a>
//                                             <a href="">Makeup Kit</a>
//                                             <a href="">Makeup Kit</a>
//                                             <a href="">Makeup Kit</a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </li>
//                             </Link>

//                         <Link to={"/career"}>
//                             <li className='hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer'>Career</li>
//                         </Link>
//                         <Link to={"/login"}>
//                             <li className='hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer'>Login</li>
//                         </Link>
//                         <Link to={"/logout"}>
//                             <li className='hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400'>Logout</li>
//                         </Link>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     </header>
//   )
// }

// export default Navbar