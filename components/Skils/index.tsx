import React from 'react'
import Style from "@/styles/Skils.module.css"
import Card from './card'
import HTML from "@/assets/images/HTML.png"
import REACT from "@/assets/images/React.png"
import LARAVEL from "@/assets/images/Laravel.png"
import PHP from "@/assets/images/Php.png"
import NEXTJS from "@/assets/images/NextJS.png"
import FIGMA from "@/assets/images/Figma.png"

export default function Skils() {
  return (
    <>
      <div className="w-full h-full mt-20 flex justify-center items-start" id='skils'>
        <div className={Style.skils}>
          <h1 className="text-center text-2xl lg:text-[32px] font-Lexend font-semibold text-[#253239] my-5">Skils</h1>
          <div className="flex gap-3 flex-wrap justify-evenly items-center p-4 w-full min-h-[300px]">
            <Card cardImage={HTML} alt='HTML' />
            <Card cardImage={PHP} alt='PHP' />
            <Card cardImage={REACT} alt='REACT' />
            <Card cardImage={NEXTJS} alt='NEXTJS' />
            <Card cardImage={LARAVEL} alt='LARAVEL' />
            <Card cardImage={FIGMA} alt='FIGMA' />
          </div>
        </div>
      </div>
    </>
  )
}
