"use client";
import React, {useState} from 'react';
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/Components/UI/carousel";
import {useCarousel} from "@/hooks/useCarousel";
import classNames from "classnames";
import {useTranslations} from "next-intl";

function CryptoNews() {
    const t = useTranslations("blogPage");
    const [api, setApi] = useState<CarouselApi>();
    const {selectedIndex, prevBtnDisabled, onPrevButtonClick, nextBtnDisabled, onNextButtonClick ,onDotBtnClick} = useCarousel(api);
    const data = Array.from({length: 10});
    return (
        <section className="my-10 bg-[#FBF7F5] py-16">
            <div className="3xl:max-w-[85rem] mx-auto 3xl:px-0  md:px-6 xl:px-20">
                <Carousel setApi={setApi} className="space-y-6 " opts={{}} >
                    <div
                        className="lg:absolute top-2 right-2 z-10 flex items-center justify-between lg:w-2/3 lg:ml-auto px-5 ">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span
                                    className="icon icon-dollar-circle text-2xl font-bold text-text-dark_Orange"></span>
                                <h2 className="font-bold text-lg  md:text-2xl">{t("crypto")}</h2>
                            </div>
                            <p className="text-[#848484] text-sm lg:text-base">{t("newestArticleDes")}</p>
                        </div>
                        <div className="flex items-center gap-4 max-md:flex-row-reverse">
                            <button
                                disabled={prevBtnDisabled}
                                onClick={onPrevButtonClick}
                                className="border-2 shadow-main rounded-xl bg-white border-text-dark_Orange text-text-orange disabled:border-text-gray disabled:text-text-gray disabled:scale-90"
                            >
                                <span className="icon icon-arrow-back max-lg:rotate-180   p-2"></span>
                            </button>
                            <button
                                disabled={nextBtnDisabled}
                                onClick={onNextButtonClick}
                                className="border-2  shadow-main rounded-xl bg-white border-text-dark_Orange  text-text-orange disabled:border-text-gray disabled:text-text-gray disabled:scale-90"
                            >
                                <span className="icon icon-arrow-back rotate-180 max-lg:rotate-0  p-2"></span>
                            </button>
                        </div>
                    </div>
                    <CarouselContent dir="ltr" className="max-md:px-2">
                        {data.map((item, index) => (
                            <CarouselItem key={index} dir="rtl"
                                          className={classNames("xxs:basis-5/6 lg:basis-1/3 transition-all ease-in-out duration-500 will-change-transform ", index === selectedIndex ? "lg:min-h-[500px] min-h-[450px]" : "mt-auto")}>

                                <div
                                    className={classNames("rounded-xl border  border-[#CCCDF4] flex flex-col gap-6 p-4 bg-white transition-all ease-in-out duration-1000 relative overflow-hidden ", index === selectedIndex ? "h-full" : "lg:h-[400px] max-lg:opacity-50")}>
                                    {
                                        selectedIndex !== index && <div className="lg:hidden w-full h-full absolute top-0 left-0 bg-black/60  z-10 rounded-xl"></div>
                                    }
                                    <div className="rounded-xl h-52 bg-[#FEF8F5] "></div>
                                    <div className="flex flex-col gap-4 justify-between flex-1">
                                        <div className="space-y-2">
                                            <h5 className="font-bold">بهلند مسیر یادگیری جدیدی ارائه داد است ؟</h5>
                                            <p className="text-justify text-sm tracking-tight text-[#606060]">لورم
                                                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                                طراحان گرافیک است چاپگرها و متون بلکه روزنامه </p>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <hr className="border border-dashed border-[#CCCDF4]"/>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <span className="icon icon-calendar text-text-dark_Orange"></span>
                                                    <span className="text-[#848484] text-sm">8 دقیقه</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="icon icon-calendar text-text-dark_Orange"></span>
                                                    <span className="text-[#848484] text-sm">10 دیدگاه</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="icon icon-calendar text-text-dark_Orange"></span>
                                                    <span className="text-[#848484] text-sm">1404/04/07</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="lg:hidden flex flex-row-reverse items-center justify-center gap-1.5 ">
                        {data.map((item, index) => (
                            <span key={index} onClick={() => onDotBtnClick(index)}
                                  className={classNames(" rounded-full  cursor-pointer transition-all duration-200 ease-in-out", index === selectedIndex ? "bg-cream-medium size-2.5" : "size-2 bg-gray-300")}></span>
                        ))}
                    </div>
                </Carousel>
            </div>
        </section>
    );
}

export default CryptoNews;