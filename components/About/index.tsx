import React from 'react'
import Image from "next/image";
import Profile from "@/assets/images/profile.png"
import Style from "@/styles/About.module.css"
import { BiDownload } from "react-icons/bi"

export default function About() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center mt-20">
        <div className={Style.about}>
          <h1 className="text-2xl lg:text-[32px] font-Lexend font-semibold text-center text-[#253239]">About Me</h1>
          <div className="font-Lexend font-normal flex flex-col md:flex-row w-full md:mt-5">
            <div className="flex justify-center items-center my-8 md:w-[50%]">
              <Image src={Profile} alt="Profile" className={Style.images} />
            </div>
            <div className="bg-white/80 h-full rounded-md p-2 md:w-[50%] flex flex-col justify-center items-center gap-5">
              <p className='font-Lexend font-normal text-[#253239]'>Hi there! I'm Asep Sobarudin, a web and mobile app developer who's all about giving amazing web and app experiences. I've been into design and development since 2020 and I've got the skills to back it up. I love creating gorgeous, easy-to-use, and useful websites and mobile apps.</p>

              <button className={`${Style.button} border-[#178474] shadow-[5px_5px_#178474] hover:shadow-[0px_0px_#178474] hover:bg-[#178474] text-[#178474] hover:text-white`}>
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
