import React from "react";
import Image from "next/image";
import Style from "@/styles/Leading.module.css";

import imgLeading from "@/assets/images/leading_page.png";
import { BsMouse } from "react-icons/bs"

export default function Leanding() {
  return (
    <>
      <div className={`${Style.container}`}>
        <div className="pt-16 md:pt-0 lg:pt-0 flex flex-col justify-center w-full h-full">
          <section className="flex flex-col justify-between h-[50%] w-full md:flex-row" id="leanding">
            <div className="flex flex-col justify-center items-start md:w-[50%] sm:w-full gap-1">
              <h1 className="font-Lexend w-full font-normal text-[#253239] text-base lg:text-[20px]">
                Welcome my portofolio
              </h1>
              <h1 className="text-2xl lg:text-[32px] font-Lexend font-semibold w-full leading-tight text-[#253239]">Hi! I’m Web Developer and Mobile Developer<div className="inline-block animate-wiggle trasform origin-bottom-right select-none">👋
              </div>
              </h1>
              <button className={`${Style.buttonContent} shadow-[5px_5px_#178474] hover:shadow-[0px_0px_black] hover:bg-[#178474] hover:text-white`}>CONTECT US</button>
            </div>

            <div className="flex w-full md:w-[50%] justify-center items-center pt-20">
              <Image
                src={imgLeading}
                className="w-full h-auto select-none"
                alt="Image1"
              />
            </div>
          </section>

          <div className="w-full h-[50%] flex justify-center items-center select-none">
            <BsMouse className="animate-bounce text-slate-500 text-5xl relative -top-10 lg:-top-28" />
          </div>
        </div>
      </div>
    </>
  );
}
