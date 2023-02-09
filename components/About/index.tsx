import React from 'react'
import Image from "next/image";
import Profile from "@/assets/images/profile.png"
import { BiDownload } from "react-icons/bi"

export default function About() {
  return (
    <>
      <div className="w-full h-full mt-20">
        <div className={`w-fit`}>
          <div className="bg-center md:bg-left-top lg:bg-[top_left_15%] font-Lexend font-normal flex flex-col md:flex-row w-fit md:mt-5">
            <div className="flex justify-center items-center my-4 w-full md:w-[50%]">
              <Image src={Profile} alt="Profile" className="rounded-full overflow-hidden w-[50%] border-[5px] border-[#178474] select-none" />
            </div>
            <div className="bg-white/80 max-h-full rounded-md p-2 w-full md:w-[50%] flex flex-col justify-center items-center gap-5">
              <h1 className="text-2xl lg:text-[32px] font-Lexend font-semibold text-center text-[#253239]">About me</h1>
              <p className='font-Lexend font-normal text-[#253239]'>Hi there! I'm Asep Sobarudin, a web and mobile app developer who's all about giving amazing web and app experiences. I've been into design and development since 2020 and I've got the skills to back it up. I love creating gorgeous, easy-to-use, and useful websites and mobile apps.</p>

              <button className={`px-3 py-2 rounded-md border-[3px] font-semibold duration-200 ease-in-out flex justify-center items-center gap-2 select-none border-[#178474] shadow-[5px_5px_#178474] hover:shadow-[0px_0px_#178474] hover:bg-[#178474] text-[#178474] hover:text-white`}>
                <div>Download Cv</div>
                <BiDownload className='text-2xl' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
