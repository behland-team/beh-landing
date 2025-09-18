"use client";
import {useTranslations} from "next-intl";
import React, {useState} from "react";
import cow from "../../../public/images/cow.svg"
import Image from "next/image";

const images = [
    "https://picsum.photos/id/1015/400/400",
    "https://picsum.photos/id/1016/400/400",
    "https://picsum.photos/id/1018/400/400",
    "https://picsum.photos/id/1019/400/400",
    "https://picsum.photos/id/1020/400/400",
    "https://picsum.photos/id/1021/400/400",
    "https://picsum.photos/id/1022/400/400",
];

export default function Characters() {
    const t = useTranslations("characters");
    const [current, setCurrent] = useState(0);

    const prev = () =>
        setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    const next = () =>
        setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));


    const visibleCount = 4;


    const visibleImages = Array.from({length: visibleCount}, (_, i) => {
        const index = (current + i) % images.length;
        return images[index];
    });

    return (
        <div
            dir="rtl"
            className="bg-CharBg bg-cover bg-no-repeat bg-center bg-cream-light"
        >
            <div className=" md:max-w-screen-md  lg:max-w-screen-2xl md:mx-auto">
                <div className="px-7 pt-12 lg:px-10 xl:px-28 ">
                    <h2 className="lg:text-3xl text-center lg:text-right text-[20px] text-black font-semibold">{t("title")}</h2>
                    <div
                        className="w-full flex flex-wrap justify-between items-center gap-6 md:gap-5 mt-4 flex-col lg:flex-row">
                        <p className="text-center text-text-gray md:text-base font-semibold text-sm bg-white/60 lg:text-black p-1 rounded-md ">
                            {t("description")}
                        </p>
                        <div className="flex items-center gap-4">
                            <button
                                aria-label="Slide back"
                                onClick={prev}
                                className="border-2 shadow-main p-2 rounded-xl bg-white border-text-dark_Orange icon icon-arrow_back text-text-orange"
                            ></button>
                            <button
                                aria-label="Slide forward"
                                onClick={next}
                                className="border-2 shadow-main rounded-xl bg-white border-text-dark_Orange"
                            >
                                <span className="icon icon-arrow_back text-text-orange rotate-180 p-2"></span>
                            </button>
                        </div>
                    </div>

                </div>

                {/* عکس‌ها */}
                <div className=" w-full mt-6 pr-6 pb-10">
                    <div className="flex  items-center justify-start md:justify-center w-full  gap-6 py-5  overflow-x-hidden">
                        {visibleImages.map((src, i) => (
                            <div
                                key={i}
                                className=" bg-card bg-no-repeat bg-contain bg-center w-56 xl:w-[280px] xl:h-96 h-80 flex justify-center  relative shrink-0"
                            >
                                <div
                                    className="absolute  md:top-1 lg:top-0 xl:-top-1 px-4 py-3 lg:p-5 flex justify-between items-center  gap-5">
                                    <p className="text-white  font-black lg:text-stroke-orange  text-[20px] lg:text-2xl">
                                        به‌بول
                                    </p>
                                    <p className="text-white  font-black lg:text-stroke-orange  text-[20px] lg:text-2xl">
                                        behbull
                                    </p>
                                </div>
                                <Image src={cow} alt="cow"
                                       className="size-52 xl:size-64  absolute left-1/2 -translate-x-1/2 bottom-8 lg:bottom-7"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
