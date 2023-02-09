import React from 'react'
import Image from "next/image";

interface CardProps {
  cardImage: any
  alt: string
  level: string
}

export default function Card(props: CardProps) {
  const { cardImage, alt, level } = props;
  return (
    <>
      <div className="h-[200px] w-fit bg-[#253239]/90 flex flex-col justify-center items-center gap-3 p-4 rounded-lg border-[3px] border-[#178474] shadow-[5px_5px_#178474] hover:bg-[#253239] group hover:shadow-[0px_0px_#178474] group duration-500 ease-in-out" >
        <Image src={cardImage} alt={alt} className="w-fit h-[100px] group-hover:scale-110 duration-500" />
        <div className='flex justify-center items-center gap-2'>
          <h1 className='text-white font-Lexend font-semibold'>{level}</h1>
        </div>
      </div></>
  )
}