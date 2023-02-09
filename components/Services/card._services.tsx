import React from 'react'

interface CardProps {
  title: string;
  icon: any;
}

export default function Card(props: CardProps) {

  const { title, icon } = props;
  return (
    <>
      <div className='bg-gradient-to-tr from-[#253239]/80 to-[#178474]/80 border-[3px] border-[#178474] w-fit p-4 rounded-md shadow-[10px_10px_#253239] hover:bg-gradient-to-tr hover:from-[#253239]/100 hover:to-[#178474]/100 hover:shadow-[0px_0px_#253239] duration-200 ease-in-out'>
        <div className='w-full min-h-[100px] flex flex-col justify-between items-center gap-5'>
          <h1 className='text-white font-Lexend font-semibold'>{title}</h1>
          <div className='text-5xl text-white'>{icon}</div>
          <button className='text-center w-full bg-blue-500 px-3 py-2 rounded-md text-white font-Lexend font-semibold hover:bg-blue-600 duration-200 ease-in-out'>View More</button>
        </div>
      </div>
    </>
  )
}
