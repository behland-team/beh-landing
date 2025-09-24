"use client";
import {useTranslations} from "next-intl";
import React, {useCallback} from "react";
import Image from "next/image";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/Components/UI/carousel";

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
    const [api, setApi] = React.useState<CarouselApi>()

    const onPrevButtonClick = useCallback(() => {
        if (!api) return
        api.scrollPrev()
    }, [api])

    const onNextButtonClick = useCallback(() => {
        if (!api) return
        api.scrollNext()
    }, [api])


    return (
        <div
            dir="rtl"
            className="bg-CharBg bg-cover bg-no-repeat bg-center bg-cream-light"
            id={"character"}
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
                                onClick={onPrevButtonClick}
                                className="border-2 shadow-main rounded-xl bg-white border-text-dark_Orange text-text-orange disabled:border-text-gray disabled:text-text-gray disabled:scale-90"
                            >
                                <span className="icon icon-arrow-back  p-2"></span>
                            </button>
                            <button
                                onClick={onNextButtonClick}
                                className="border-2  shadow-main rounded-xl bg-white border-text-dark_Orange  text-text-orange disabled:border-text-gray disabled:text-text-gray disabled:scale-90"
                            >
                                <span className="icon icon-arrow-back rotate-180  p-2"></span>
                            </button>
                        </div>
                    </div>

                </div>

                {/* عکس‌ها */}
                <div className=" w-full mt-6 px-6 pb-10">
                    <Carousel setApi={setApi} opts={{
                        align : "center",
                        direction : "rtl",
                        loop : true
                    }} className="flex  items-center justify-center w-full  gap-6 py-5  overflow-x-hidden">
                        <CarouselContent>
                        {images.map((src, i) => (
                            <CarouselItem key={i} className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2 will-change-transform">
                            <div
                                className=" bg-card bg-no-repeat bg-contain bg-center w-56 xl:w-[280px] xl:h-96 h-80 mx-auto flex justify-center  relative shrink-0 bg-transparent"
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
                                <Image src={"/images/cow.svg"} width="256" height="256" alt="cow" priority loading="eager"
                                       className="size-52 xl:size-64  absolute left-1/2 -translate-x-1/2 bottom-8 lg:bottom-7"/>
                            </div>
                            </CarouselItem>
                        ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
