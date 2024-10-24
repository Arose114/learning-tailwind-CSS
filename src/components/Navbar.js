import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {FaHome, FaInfo, FaAddressBook, FaPhone, FaAd} from 'react-icons/fa'

const Navbar = () => {
    const [open, setOpen]=useState(false)

    const toggleNav=()=>(
        setOpen(!open)

    )
    
  return (
    
        <div className="flex justify-between items-center max-w-[1240px] h-24 mx-auto px-4  ">
        <a href="#" className=" font-bold w-full text-3xl text-gray-400" >Logo</a>
        <ul className="md:flex hidden">
          <li className="p-4"><a href="3">Home</a></li>
          <li  className="p-4"><a href="3">About</a></li>
          <li  className="p-4"><a href="3">Services</a></li>
          <li  className="p-4"><a href="3">Contact</a></li>

        </ul>
      

            <div onClick={toggleNav} className='block md:hidden'>
            {open?<AiOutlineClose className='size-[20]' />: <AiOutlineMenu className='size-[20]' />}
            </div>
        <div className={open ? "fixed w-[40%] h-full border-r border-r-slate-200 bg-slate-50 left-0 top-0 ease-in-out duration-700 " : "fixed left-[-100%]"}>
      

        <ul className="pt-24 ">
          <li className="p-4 border-b border-gray-200 hover:bg-slate-200 flex"><FaHome className='mr-2 mt-1 text-center'/><a href="3">Home</a></li>
          <li  className="p-4 border-b border-gray-200 hover:bg-slate-200 flex"><FaInfo className='mr-2 mt-1 text-center'/><a href="3">About</a></li>
          <li  className="p-4 border-b border-gray-200 hover:bg-slate-200 flex"><FaAddressBook className='mr-2 mt-1 text-center'/><a href="3">Services</a></li>
          <li  className="p-4 border-b border-gray-200 hover:bg-slate-200 flex"><FaPhone className='mr-2 mt-1 text-center'/><a href="3">Contact</a></li>

        </ul>
        </div>
        </div>
    
  )
}

export default Navbar