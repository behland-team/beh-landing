"use client";

import React, {useState} from "react";
import nail from "../../../public/images/nail.svg";
import wood from "../../../public/images/wood.svg";
import branch from "../../../public/images/branch.png";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {phases} from "@/utils/data";
import borde from "@/assets/Images/borde.png"
import classNames from "classnames";

export default function RoadMap() {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabChange = (value: number) => {
        setTimeout(() => {
            setActiveTab(value);
        }, 250); // duration of fade out
    };
    const t = useTranslations("roadMapTitle");
    const tGeneral = useTranslations("roadMap");
    return (
        <div className=" flex-col  w-full  bg-[#a7d8d3] pt-10">
            <div className="w-full flex flex-col justify-center items-center">
                <p className="font-bold text-lg lg:text-3xl text-black">{tGeneral("header")}</p>
                <p className="font-semibold lg:text-xl text-text-gray text-sm xxs:text-base text-center">
                    {tGeneral("description")}
                </p>
            </div>

            <div
                className="bg-roadMap bg-no-repeat bg-cover bg-center   mt-4 w-full lg:h-[1129px]  bg-[#a7d8d3]">
                <div className="flex flex-col lg:flex-row-reverse lg:max-w-screen-3xl w-full h-full  2xl:justify-between lg:mx-auto">
                    <div className="relative h-[440px] sm:h-[570px] md:h-[680px] flex flex-col lg:w-2/5 lg:max-w-xl ">
                        <Image src={branch} alt="branch" className="z-10 w-full"/>
                        <div className="w-[clac(100%-48px)] lg:w-full mx-6 lg:mx-0 absolute left-0 right-0 top-[70px] md:top-36 sm:top-24 lg:top-[50px] xl:top-[100px]   lg:pr-14 xl:pr-20">
                            <Image src={borde} alt={"borde"} className="w-full h-[339px] sm:h-[460px] md:h-[520px]"/>
                            <div
                                className="gap-2 xxs:gap-4 sm:gap-5 lg:gap-6 xl:gap-9 flex flex-col absolute top-10 sm:top-24 md:top-28 sm:right-10 lg:top-14 2xl:top-20 right-4 lg:right-20 xl:right-28  z-0 mx-2 ">
                                {phases?.map((item, index) => (
                                    <div
                                        onClick={() => handleTabChange(item.number)}
                                        dir="rtl"
                                        key={index}
                                        tabIndex={0}
                                        className=" cursor-pointer p-1 rounded-3xl hover:bg-cream-dark_light focus:bg-cream-dark_light hover:shadow-roadMap focus:shadow-roadMap  flex justify-start items-center gap-5 z-0 "
                                    >
                  <span
                      className="shadow-main shadow-cream-medium rounded-full border size-8 md:size-10 border-cream-dark text-cream-dark bg-cream-light font-semibold lg:text-2xl flex items-center justify-center ">
                    {item.number}
                  </span>
                                        <p className="text-text-dark_brown font-bold text-xs xxs:text-sm sm:text-lg md:text-2xl lg:text-[18px]">
                                            {t(`${item.title}`)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="h-[773px] relative lg:w-3/5 mt-auto overflow-hidden lg:max-w-3xl">
                        <div className=" w-full h-full grid grid-cols-1 grid-rows-12 gap-2 px-5 md:px-10  relative">
                            {/* هر آیتم داخل grid با flex و justify-between */}
                            {phases[activeTab - 1]?.tasks?.map((item: any, index) => (
                                <div
                                    dir="rtl"
                                    className="flex justify-between items-center bg-lumber w-full h-auto bg-no-repeat bg-center bg-cover px-3 z-10 sm:px-5 md:px-10 "
                                    key={index}
                                >
                                    <Image src={nail} alt="nail right"/>
                                    <p className={classNames(item.status ? "text-text-dark_Orange" : "text-text-gray", `text-xs xxs:text-sm sm:text-base md:text-lg font-semibold `)}>
                                        {item.desc}

                                    </p>
                                    <Image src={nail} alt="nail left"/>
                                </div>
                            ))}
                        </div>
                        <Image
                            src={wood}
                            alt="wood left"
                            className=" absolute left-6 z-0 bottom-0 lg:-bottom-2"
                        />
                        <Image
                            src={wood}
                            alt="wood right"
                            className=" absolute right-6 z-0 bottom-0  lg:-bottom-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
