import React from 'react'
import Card from './cardSkils'
import REACT from "@/assets/images/React.png"
import LARAVEL from "@/assets/images/Laravel.png"
import NEXTJS from "@/assets/images/NextJS.png"
import FLUTTER from "@/assets/images/Flutter.png"
import FIGMA from "@/assets/images/Figma.png"

export default function Skils() {
  return (
    <>
      <div className="w-full h-full mt-20 flex justify-center items-start" id='skils'>
        <div className="w-full bg-center md:bg-right-top">
          <h1 className="text-center text-2xl lg:text-[32px] font-Lexend font-semibold text-[#253239] my-5">Skils</h1>
          <div className='bg-slate-400 w-full h-1'>
          </div>
          <div className="flex gap-4 flex-wrap justify-around items-center p-4 w-full h-fit">
            <Card cardImage={FIGMA} alt='FIGMA' level='80' />
            <Card cardImage={REACT} alt='REACT' level='80' />
            <Card cardImage={NEXTJS} alt='NEXTJS' level='70' />
            <Card cardImage={LARAVEL} alt='LARAVEL' level='90' />
            <Card cardImage={FLUTTER} alt='FLUTTER' level='90' />
          </div>
        </div>
      </div>
    </>
  )
}
