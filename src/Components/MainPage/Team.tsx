"use client";
import {useTranslations} from "next-intl";
import React from "react";
import Image from "next/image";
import {Teams} from "@/utils/data";
import Bg from "@/assets/Images/TeamIBg.svg";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/Components/UI/carousel";
import {useCarousel} from "@/hooks/useCarousel";

export default function Team() {
    const t = useTranslations("team");
    const [api, setApi] = React.useState<CarouselApi>()
    const {prevBtnDisabled , nextBtnDisabled, onPrevButtonClick , onNextButtonClick} = useCarousel(api);
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
                                disabled={prevBtnDisabled}
                                onClick={onPrevButtonClick}
                                className="border-2 shadow-main rounded-xl bg-white border-text-dark_Orange text-text-orange disabled:border-text-gray disabled:text-text-gray disabled:scale-90"
                            >
                                <span className="icon icon-arrow-back   p-2"></span>
                            </button>
                            <button
                                disabled={nextBtnDisabled}
                                onClick={onNextButtonClick}
                                className="border-2  shadow-main rounded-xl bg-white border-text-dark_Orange  text-text-orange disabled:border-text-gray disabled:text-text-gray disabled:scale-90"
                            >
                                <span className="icon icon-arrow-back rotate-180  p-2"></span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* عکس‌ها */}
                <div className="relative flex items-center justify-center w-full mt-6" >
                    <Carousel opts={{
                        direction : "rtl"
                    }} setApi={setApi} className="flex items-center justify-center w-full  gap-6 py-5 mx-auto overflow-hidden">
                        <CarouselContent>
                            {Teams.map((item, i) => (
                                <CarouselItem
                                    key={i}
                                    className="   w-72 h-80 overflow-hidden shrink-0  max-sm:pl-4 xl:basis-1/4 lg:basis-1/3 md:basis-1/2 max-md:will-change-transform"
                                >
                                    <div className="relative max-w-80 mx-auto ">
                                        <Image src={Bg} alt={"background"} className="absolute w-full h-full -z-10" />
                                        <Image src={item.image} alt="team" className="w-full h-full"/>
                                        <div className="absolute bottom-0 -left-0 right-0 h-24 bg-teamInfoBg bg-no-repeat bg-center bg-cover flex justify-center items-center flex-col gap-2">
                                            <p className=" text-black text-xl font-normal">{item.name}</p>
                                            <p>{item.title}</p>
                                        </div>
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
