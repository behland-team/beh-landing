import React from "react";
import nail from "../../../public/images/nail.svg";
import wood from "../../../public/images/wood.svg";
import branch from "../../../public/images/branch.png";
import Image from "next/image";
export default function RoadMap() {
  return (
    <div className="bg-roadMap bg-no-repeat bg-auto bg-center flex w-full h-screen bg-[#a7d8d3]">
      <div className="  w-3/5 h-full flex flex-col-reverse  items-center">
        <div className=" w-5/6 h-4/6   overflow-hidden px-10 ">
          {/* Content for the lower half */}
          <div className=" w-full h-full grid grid-cols-1 grid-rows-12 gap-2 px-2 relative">
            <Image
              src={wood}
              alt="wood right"
              className=" absolute left-0 z-0 bottom-0"
            />
            {/* هر آیتم داخل grid با flex و justify-between */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
              <div
                dir="rtl"
                className="flex justify-between items-center bg-lumber w-full h-auto bg-no-repeat bg-center bg-cover px-10 z-10"
                key={index}
              >
                <Image src={nail} alt="nail right" />
                {item}
                <Image src={nail} alt="nail left" />
              </div>
            ))}
            <Image
              src={wood}
              alt="wood left"
              className=" absolute right-0 z-0 bottom-0"
            />
          </div>
        </div>
      </div>
      <div className=" w-2/5 h-full">
        <div className=" flex  justify-end z-10">
          <Image src={branch} alt="branch" className="z-10" />
        </div>
        <div className="w-full flex justify-center items-center h-full relative z-0">
                  <div className="bg-branch bg-contain bg-no-repeat w-4/5 p-10 pt-16 gap-5 flex flex-col h-full absolute -top-10 z-0">
                      
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div
                dir="rtl"
                    key={item}
                      tabIndex={0} 
                className=" cursor-pointer p-3 rounded-3xl hover:bg-cream-dark_light focus:bg-cream-dark_light hover:shadow-roadMap focus:shadow-roadMap  flex justify-start items-center gap-5 z-0"
              >
                <span className="rounded-full border border-cream-dark text-cream-dark bg-cream-light font-semibold text-2xl p-1 px-3 ">
                  {item}
                </span>
                <p className="text-text-dark_brown font-bold text-lg">
                  فاز اول :آماده سازی توسعه اولیه
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
