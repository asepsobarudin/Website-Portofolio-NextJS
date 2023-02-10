import React from 'react'
import Card from './cardServices'

import { BsGlobe2 } from "react-icons/bs"
import { FiFigma } from "react-icons/fi"
import { CiMobile3 } from "react-icons/ci"
import { BsWordpress } from "react-icons/bs"
import { MdDeveloperMode } from "react-icons/md"

export default function Services() {
  return (
    <>
      <div className='w-full flex justify-center items-center mt-20'>
        <div className="bg-center md:bg-right-top w-full">
          <h1 className='text-2xl lg:text-[32px] text-center text-[#253239] font-Lexend font-semibold'>Services</h1>
          <div className='bg-slate-400 w-full h-1 my-4'>
          </div>
          <div className="flex flex-wrap gap-4 justify-around items-center w-full">
            <Card title='UI/UX Desain' icon={<FiFigma />} />
            <Card title='Web Developer' icon={<BsGlobe2 />} />
            <Card title='Mobile App Developer' icon={<CiMobile3 />} />
            <Card title='Wordpres' icon={<BsWordpress />} />
            <Card title='Backand Developer' icon={<MdDeveloperMode />} />
          </div>
        </div>
      </div>
    </>
  )
}
