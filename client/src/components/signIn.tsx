import React from "react"
import { HiOutlineMail } from "react-icons/hi";
import { TbPasswordFingerprint } from "react-icons/tb";

const signIn = () => {
  return (
    <div className='h-[100%] w-[100%] flex font-lexend'>


   {/* //first half */}
    <div className='h-[100vh] w-[50%] bg-[#F8F9FA]'>

        <div className='flex  mt-3'>
                  <img  src='../../assets/logo.png' alt='logo' className="h-[45px] mt-2 ml-2"></img>
                  <h2 className='text-2xl mt-4 font-semi'>Civic</h2>
          </div>

          <div className="flex flex-col justify-center items-center">

            <h1 className="font-bold text-[28px]">Sign in</h1>

            <div className="relative">

            <label className="flex flex-col mt-4">Email<input type="email" placeholder="Enter your email" className="w-[415px] h-[43px] rounded-md py-[26px] text-1rem px-[10px] placeholder: pl-9 bg-[#F3F4F6] text-[#9095A1]"></input></label>
            <HiOutlineMail className="absolute translate-y-[-33px] ml-3"/>

            </div>

            <div className="relative">

            <label className="flex flex-col mt-4">Password<input type="password" placeholder="Enter your email" className="w-[415px] h-[43px] rounded-md py-[26px] text-1rem px-[10px] placeholder: pl-9 bg-[#F3F4F6] text-[#9095A1]"></input></label>
            <TbPasswordFingerprint className="absolute translate-y-[-33px] ml-3"/>

            </div>

            

          </div>
      

      

      </div>
      
    <div className='h-[100vh] w-[50%] bg-[#d5d9e2] flex justify-center items-center flex-col'>
    </div>

    </div>
  )
}

export default signIn