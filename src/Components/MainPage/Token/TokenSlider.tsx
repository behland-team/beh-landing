"use client";
import React, {useState} from 'react';
import classNames from "classnames";
import Image from "next/image";
import WhyBehBg from "@/assets/Images/WhyBehMobile.png";
import Crown from "@/assets/Images/WhyBehCrown.svg";
import {useTranslations} from "next-intl";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import {Teams} from "@/utils/data";



function TokenSlider({stages}: { stages: Stage[] }) {
    const [current, setCurrent] = useState(0);
    const t = useTranslations("token");
    const {width} = useWindowDimensions();

    const prev = () => setCurrent((c) => (c === 0 ? Teams.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === Teams.length - 1 ? 0 : c + 1));

    const visibleCount = () => {
        if (width >= 1280) return 4
        if (width >= 1024) return 3
        if (width >= 640) return 2
        return 1;
    };
    const VisibleStages = Array.from({length: visibleCount()}, (_, i) => {
        const index = (current + i) % stages.length;
        return stages[index];
    });
    return (
        <>
            <div className="w-[clac(100%-48px)] flex flex-col justify-center items-center gap-5 relative mx-6  md:hidden">
                <Image src={WhyBehBg} alt={"background"} className="absolute top-0 left-0 w-full h-full md:hidden"/>
                <Image src={Crown} alt={"Wht Beh"}
                       className="absolute -top-8 left-1/2 -translate-x-1/2 md:hidden z-10"/>
                <div className="z-20 flex items-center flex-col gap-2 px-8 py-10 text-center">
                    <p className="text-text-gray text-lg md:text-2xl lg:text-3xl font-semibold">{t("title")}</p>
                    <p className="text-text-gray text-sm md:text-base font-semibold  lg:w-1/2 xl:w-2/3">
                        {t("description")}
                    </p>
                </div>
                <div className="absolute -bottom-2 z-20 flex items-center justify-center gap-3 left-1/2 -translate-x-1/2 md:hidden">
                    <button
                        onClick={prev}
                        aria-label="Slide back"
                        className="border-2 shadow-main p-2 rounded-xl bg-white border-text-dark_Orange icon icon-arrow-back text-text-orange"
                    ></button>
                    <button
                        onClick={next}
                        aria-label="Slide forward"
                        className="border-2 shadow-main rounded-xl bg-white border-text-dark_Orange"
                    >
                        <span className="icon icon-arrow-back text-text-orange rotate-180 p-2"></span>
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center w-full  gap-6 py-5 mx-auto overflow-hidden md:hidden ">
                {
                    VisibleStages.map((stage) => (
                        <div className={classNames(" flex justify-end items-center relative flex-col shrink-0 w-72 md:w-full h-72" )}>
                            <div
                                className="rounded-xl bg-cardBg bg-cover w-full bg-no-repeat p-5 h-5/6   flex justify-end items-center shadow-main"
                            >
                                <div
                                    className="bg-crown bg-contain bg-no-repeat bg-center absolute top-1 left-0 h-2/6 w-full flex justify-center items-center">
                                    <p className="text-sm md:text-base font-bold text-[#893D1B]">
                                        {" "}
                                        {stage.title}
                                    </p>
                                </div>
                                <div className={classNames("flex flex-col justify-end w-full h-full items-stretch gap-2")}>
                                    <div className={classNames("flex flex-nowrap gap-2 text-sm text-right flex-col items-stretch")}>
                  <span className="bg-[#EAE3CC] text-text-gray text-base font-semibold p-2 rounded-md text-center">
                    تعداد: {stage.tokens}
                  </span>
                                        <span
                                            className="bg-[#FEE6BD] text-text-gray text-base font-semibold p-2 rounded-md text-center">
                    قیمت: {stage.price}
                  </span>
                                    </div>

                                    <p className={classNames(" bg-[#F0E3D5] rounded-lg p-2 text-text-gray text-right leading-relaxed  font-semibold text-sm")}>
                                        {stage.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

</>
    );
}

export default TokenSlider;