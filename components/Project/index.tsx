import React from 'react'

import Card from './card'
import Style from "@/styles/Project.module.css"
import Project1 from "@/assets/images/Project1.jpg"
import Project2 from "@/assets/images/Project2.jpg"

export default function Project() {
  return (
    <>
      <div className='w-full flex justify-center items-center mt-20'>
        <div className={Style.project} id='project'>
          <h1 className='text-2xl lg:text-[32px] text-center font-Lexend font-semibold text-[#253239] my-5'>Project</h1>
          <div className='flex flex-wrap justify-evenly items-center gap-3 py-4'>

            <Card cardImage={Project1} title='Mobile App Developer' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum delectus corrupti, quibusdam hic ab totam esse reiciendis ullam tempora voluptatibus excepturi facere et praesentium reprehenderit facilis architecto! Ratione, atque perspiciatis?' />
            <Card cardImage={Project2} title='Web Developer' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, in!' />

          </div>
        </div>
      </div>
    </>
  )
}
