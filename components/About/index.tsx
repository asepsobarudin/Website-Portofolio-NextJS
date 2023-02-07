import React from 'react'
import Image from "next/image";
import Profile from "@/assets/images/profile.png"
import Style from "@/styles/About.module.css"
import { BiDownload } from "react-icons/bi"

export default function About() {
  return (
    <>
      <div className="w-full h-fit flex flex-col justify-center items-center">
        <div className="bg-white h-full w-full">
          <h1 className="text-2xl lg:text-[32px] font-Lexend font-semibold text-center text-[#253239]">About Me</h1>
          <div className="font-Lexend font-normal flex flex-col md:flex-row w-full md:mt-5">
            <div className="flex justify-center items-center my-8 md:w-[50%]">
              <Image src={Profile} alt="Profile" className={Style.images} />
            </div>
            <div className="md:w-[50%] flex flex-col justify-center items-center gap-5">
              <p className='font-Lexend font-normal text-[#253239]'>Hi! I am Ankit yadav, a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2007. I enjoy creating beautifully designed, intuitive and functional websites.</p>

              <button className={Style.button}>
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
