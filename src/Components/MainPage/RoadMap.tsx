import React from 'react'
import nail from "../../../public/images/nail.svg"
import wood from "../../../public/images/wood.svg"
import Image from 'next/image'
export default function RoadMap() {
  return (
<div className="bg-roadMap bg-no-repeat bg-center bg-[length:100%_100%] flex w-full h-[90dvh]">
          <div className='  w-1/2 h-full flex flex-col-reverse'>
              <div className=' w-full h-5/6  '>
                  {/* Content for the lower half */}
                  <div className=' w-full h-full grid grid-cols-1 grid-rows-12 gap-2 px-2 relative'>
                      <Image src={wood} alt="wood right" className=' absolute left-0 z-0 bottom-0' />
                      {/* هر آیتم داخل grid با flex و justify-between */}
                      {
                          [1, 2, 3, 5, 6, 5, 5, 4].map((item, index) => (
                              <div
                                  dir="rtl"
                                  className='flex justify-between items-center bg-lumber w-full h-auto bg-no-repeat bg-center bg-cover px-10 z-10'
                                   key={index}
                              >
                                  <Image src={nail} alt="nail right" />
                                  {item}
                                  <Image src={nail} alt="nail left" />
                              </div>
                          ))
                      }
                       <Image src={wood} alt="wood left" className=' absolute right-0 z-0 bottom-0' />
                  </div>
                  
              </div>
          </div>
          <div className=' w-1/2 h-full'>
      
          </div>
    </div>
  )
}
