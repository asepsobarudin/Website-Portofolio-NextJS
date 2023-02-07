import React from 'react'
import Image from "next/image";
import HTML from "@/assets/images/HTML.png"
import REACT from "@/assets/images/React.png"
import LARAVEL from "@/assets/images/Laravel.png"

export default function Skils() {
  return (
    <>
      <div className="w-full h-screen mt-20" id='skils'>
        <div className='border-[3px] border-[#178474] shadow-[5px_5px_#178474] lg:shadow-[10px_10px_#178474] rounded-md'>
          <h1 className="text-center text-2xl lg:text-[32px] font-Lexend font-semibold text-[#253239] my-5">Skils</h1>
          <div className="flex gap-3 flex-wrap justify-center p-4">
            <div className="w-[45%]  md:w-[30%] lg:w-[20%] bg-[#253239] flex flex-col justify-start items-center p-2 rounded-lg border-[3px] border-[#178474] shadow-[5px_5px_#178474] hover:shadow-[0px_0px_#178474] group duration-500 ease-in-out">
              <Image src={HTML} alt="HTML" className="w-[100px] lg:w-[150px] group-hover:scale-125 duration-500" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
