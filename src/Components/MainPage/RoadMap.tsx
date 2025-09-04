"use client";

import React, { useState } from "react";
import nail from "../../../public/images/nail.svg";
import wood from "../../../public/images/wood.svg";
import branch from "../../../public/images/branch.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { phases } from "@/utils/data";
import classNames from "classnames";
export default function RoadMap() {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabChange = (value:number) => {
    setTimeout(() => {
      setActiveTab(value);
    }, 250); // duration of fade out
  };
  const t = useTranslations("roadMapTitle");
  const tGeneral = useTranslations("roadMap");
  return (
    <div className=" flex-col  w-full  bg-[#a7d8d3] pt-10">
      <div className="w-full flex flex-col justify-center items-center">
        <p className="font-bold text-3xl text-black">{tGeneral("header")}</p>
        <p className="font-semibold text-xl text-text-gray">
          {tGeneral("description")}
        </p>
      </div>

      <div className="bg-roadMap bg-no-repeat bg-auto bg-center flex   mt-4 w-full h-screen bg-[#a7d8d3]">
        <div className="  w-3/5 h-full flex flex-col-reverse  items-center">
          <div className=" w-5/6 h-4/6   overflow-hidden pl-20">
            {/* Content for the lower half */}
            <div className=" w-full h-full grid grid-cols-1 grid-rows-12 gap-2 px-2  relative">
              <Image
                src={wood}
                alt="wood right"
                className=" absolute left-0 z-0 bottom-0"
              />
              {/* هر آیتم داخل grid با flex و justify-between */}
              {phases[activeTab - 1]?.tasks?.map((item:any, index) => (
                <div
                  dir="rtl"
                  className="flex justify-between items-center bg-lumber w-full h-auto bg-no-repeat bg-center bg-cover px-10 z-10 "
                  key={index}
                >
                  <Image src={nail} alt="nail right" />
                  <p className={classNames(item.status?"text-text-dark_Orange":"text-text-gray",`text-base font-semibold `)}>
                  {item.desc}

                  </p>
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
              {phases?.map((item, index) => (
                <div
                  onClick={() => handleTabChange(item.number)}
                  dir="rtl"
                  key={index}
                  tabIndex={0}
                  className=" cursor-pointer p-1 rounded-3xl hover:bg-cream-dark_light focus:bg-cream-dark_light hover:shadow-roadMap focus:shadow-roadMap  flex justify-start items-center gap-5 z-0 "
                >
                  <span className="rounded-full border border-cream-dark text-cream-dark bg-cream-light font-semibold text-2xl p-1 px-3 ">
                    {item.number}
                  </span>
                  <p className="text-text-dark_brown font-bold text-lg">
                    {t(`${item.title}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
