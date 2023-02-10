import React from 'react'
import Image from 'next/image'

interface CardProps {
  cardImage: any;
  title: string;
  description: string;
}

export default function Card(props: CardProps) {

  const { cardImage, title, description } = props;

  return (
    <div className='w-full md:w-[45%] lg:w-[30%] border-[#178474] border-[3px] rounded-lg overflow-hidden bg-[#253239]/80 shadow-[10px_10px_#253239] hover:bg-[#253239]/100 hover:shadow-[0px_0px_#253239] duration-200 ease-in-out'>
      <Image src={cardImage} alt={title} className='w-full h-auto hover:scale-105 duration-500 ease-in-out' />
      <div className='py-4 px-3 text-white font-Lexend'>
        <h1 className='text-xl font-semibold py-2'>{title}</h1>
        <hr className='py-2' />
        <p className='font-normal text-sm'>{description}</p>
        <button className='flex justify-center items-center mt-2 py-2 px-3 bg-blue-600 rounded-md w-full hover:bg-blue-700 duration-200 ease-in-out'>Read More</button>
      </div>
    </div>
  )
}
