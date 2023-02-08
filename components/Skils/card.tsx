import React from 'react'
import Image from "next/image";

interface CardProps {
  cardImage: any
  alt: string
}

export default function Card(props: CardProps) {
  const { cardImage, alt } = props;
  return (
    <>
      <div className={`w-[45%] h-fit md:w-[30%] lg:w-[20%] bg-[#253239]/90 flex flex-col justify-start items-center p-2 rounded-lg border-[3px] border-[#178474] shadow-[5px_5px_#178474] hover:bg-[#253239] group hover:shadow-[0px_0px_#178474] group duration-500 ease-in-out`}>
        <Image src={cardImage} alt={alt} className="w-[100px] group-hover:scale-110 duration-500" />
      </div></>
  )
}
