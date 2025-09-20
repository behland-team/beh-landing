"use client";
import {useTranslations} from "next-intl";
import React, {useState} from "react";
import Image from "next/image";
import {Teams} from "@/utils/data";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function Team() {
    const t = useTranslations("team");
    const [current, setCurrent] = useState(0);
    const {width} = useWindowDimensions();

    const prev = () => setCurrent((c) => (c === 0 ? Teams.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === Teams.length - 1 ? 0 : c + 1));

    const visibleCount = () => {
        if (width >= 1280) return 4
        if (width >= 1024) return 3
        if (width >= 640) return 2
        return 1;
    };

    const visibleImages = Array.from({length: visibleCount()}, (_, i) => {
        const index = (current + i) % Teams.length;
        return Teams[index];
    });
    return (
        <div
            dir="rtl"
            className="p-5 xxs:p-10 bg-CharBg bg-cover bg-no-repeat bg-center bg-cream-light"
        >
            <div className="xl:max-w-screen-2xl xl:mx-auto">
                <div className="md:px-16 px-6">
                    <h2 className="lg:text-3xl md:text-2xl text-black font-semibold text-lg text-center lg:text-right">{t("title")}</h2>

                    <div
                        className="w-full flex flex-nowrap flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 mt-4">
                        <p className="text-center text-text-gray text-sm lg:text-base font-semibold bg-[#FFFFFF99] p-2 rounded-lg ">
                            {t("description")}
                        </p>
                        <div className="flex items-center gap-4 ">
                            <button
                                aria-label="Slide back"
                                onClick={prev}
                                className="border-2 shadow-main p-2 rounded-xl bg-white border-text-dark_Orange icon icon-arrow-back text-text-orange"
                            ></button>
                            <button
                                aria-label="Slide forward"
                                onClick={next}
                                className="border-2 shadow-main rounded-xl bg-white border-text-dark_Orange"
                            >
                                <span className="icon icon-arrow-back text-text-orange rotate-180 p-2"></span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* عکس‌ها */}
                <div className="relative flex items-center justify-center w-full mt-6">
                    <div className="flex items-center justify-center w-full  gap-6 py-5 mx-auto overflow-hidden">
                        {visibleImages.map((item, i) => (
                            <div
                                key={i}
                                className=" bg-teamBg bg-no-repeat bg-contain bg-center w-72 h-fit overflow-hidden shrink-0  reletive"
                            >
                                <Image src={item.image} alt="cow" className="w-full h-full "/>
                                <div
                                    className=" bg-teamInfoBg bg-no-repeat bg-cover bg-center w-72 h-1/4 overflow-hidden   absolute bottom-0 p-5 flex justify-center items-center flex-col gap-2">
                                    <p className=" text-black text-xl font-normal">{item.name}</p>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
