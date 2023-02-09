import React from 'react'
import Card from './card_skils'
import REACT from "@/assets/images/React.png"
import LARAVEL from "@/assets/images/Laravel.png"
import NEXTJS from "@/assets/images/NextJS.png"
import FLUTTER from "@/assets/images/Flutter.png"
import FIGMA from "@/assets/images/Figma.png"
import Image from 'next/image'

import SkilsImage from "@/assets/images/Skils.png";

export default function Skils() {
  return (
    <>
      <div className="w-full h-full mt-20 flex justify-center items-start" id='skils'>
        <div className="w-full bg-center md:bg-right-top">
          <h1 className="text-center text-2xl lg:text-[32px] font-Lexend font-semibold text-[#253239] my-5">Skils</h1>
          <div className='bg-slate-400 w-full h-1'>
          </div>
          <div className="flex gap-4 flex-wrap justify-around items-center p-4 w-full h-fit">
            <Card cardImage={FIGMA} alt='FIGMA' level='Competent' />
            <Card cardImage={REACT} alt='REACT' level='Proficient' />
            <Card cardImage={NEXTJS} alt='NEXTJS' level='Proficient' />
            <Card cardImage={LARAVEL} alt='LARAVEL' level='Proficient' />
            <Card cardImage={FLUTTER} alt='FLUTTER' level='Proficient' />
          </div>
        </div>
      </div>
    </>
  )
}
