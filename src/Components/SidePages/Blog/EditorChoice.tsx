"use client";
import React, {useState} from 'react';
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/Components/UI/carousel";
import {useCarousel} from "@/hooks/useCarousel";
import classNames from "classnames";
import {useTranslations} from "next-intl";

function EditorChoice() {
    const t = useTranslations("blogPage");
    const data = Array.from({length: 10});
    const [api, setApi] = useState<CarouselApi>();
    const {prevBtnDisabled, onPrevButtonClick, onNextButtonClick, nextBtnDisabled ,selectedIndex , onDotBtnClick} = useCarousel(api);
    return (
        <section className="my-10 md:bg-gradient-to-b md:from-50% md:to-50% md:from-[#FBF7F5] md:to-transparent bg-[#FBF7F5]">
            <div className="3xl:max-w-[85rem] mx-auto 3xl:px-0 px-6 lg:px-10 xl:px-28 py-10 space-y-10">
                <div className="md:flex md:flex-col md:gap-3 md:items-center space-y-2">
                    <div className="flex max-md:flex-col items-center justify-center gap-2">
                        <span className="icon icon-language text-text-dark_Orange text-xl max-md:text-3xl font-semibold"></span>
                        <h2 className=" font-semibold text-2xl tracking-tight">{t("editorChoice")}</h2>
                    </div>
                    <p className="text-center text-cream-medium md:hidden">{t("newestArticleDes")}</p>
                    <div className="flex items-center gap-2 justify-center  md:hidden">
                        <button
                            disabled={prevBtnDisabled}
                            onClick={onPrevButtonClick}
                            className=" rounded-lg border-2 disabled:border-[#848484] disabled:text-[#848484] bg-white shadow-text-dark_Orange border-text-dark_Orange  text-text-orange disabled:shadow-[#848484] p-1.5 font-bold shadow-main flex items-center justify-center">
                            <span className="icon icon-arrow-back"></span>
                        </button>
                        <button
                            disabled={nextBtnDisabled}
                            onClick={onNextButtonClick}
                            className=" rounded-lg border-2 disabled:border-[#848484] disabled:text-[#848484] bg-white shadow-text-dark_Orange border-text-dark_Orange  text-text-orange disabled:shadow-[#848484] p-1.5 font-bold shadow-main flex items-center justify-center">
                            <span className="icon icon-arrow-back rotate-180"></span>
                        </button>
                    </div>
                </div>

                <Carousel setApi={setApi} opts={{direction: "rtl"}}
                          className="max-w-[80rem] mx-auto flex max-md:flex-col md:items-center gap-5">
                    <button
                        disabled={prevBtnDisabled}
                        onClick={onPrevButtonClick}
                        className="max-md:hidden rounded-lg border-2 disabled:border-[#848484] disabled:text-[#848484] bg-white shadow-text-dark_Orange border-text-dark_Orange  text-text-orange disabled:shadow-[#848484] p-1.5 font-bold shadow-main flex items-center justify-center">
                        <span className="icon icon-arrow-back"></span>
                    </button>
                    <CarouselContent>
                        {data.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-2/5 xl:basis-1/3 max-md:pt-10 max-md:pb-4">
                                <div
                                    className="rounded-xl border border-[#CCCDF4] max-md:border-text-dark_Orange flex flex-col gap-6 p-4 bg-white relative max-md:pt-20 max-md:shadow-main">
                                    <div className="rounded-xl md:h-52 bg-[#FFFF45]  max-md:border max-md:border-text-dark_Orange max-md:absolute max-md:size-20  -top-6 right-4"></div>
                                    <div className="flex flex-col gap-4">
                                        <div className="space-y-2">
                                            <h5 className="font-bold max-xxs:text-sm">بهلند مسیر یادگیری جدیدی ارائه داد است ؟</h5>
                                            <p className="text-justify text-sm max-xxs:text-xs tracking-tight text-[#606060]">لورم
                                                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                                طراحان گرافیک است چاپگرها و متون بلکه روزنامه </p>
                                        </div>
                                        <hr className="border border-dashed border-[#CCCDF4] max-md:hidden"/>
                                        <div className="flex items-center justify-between max-md:absolute max-md:top-4 max-md:left-2 max-md:w-[calc(100%-106px)] max-md:p-2">
                                            <div className="flex items-center gap-2">
                                                <span className="icon icon-calendar text-text-dark_Orange"></span>
                                                <span className="text-[#848484] text-sm">8 دقیقه</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="icon icon-calendar text-text-dark_Orange"></span>
                                                <span className="text-[#848484] text-sm">1404/04/07</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex items-center justify-center gap-1.5 md:hidden">
                        {data.map((item, index) => (
                            <span key={index} onClick={() => onDotBtnClick(index)}
                                  className={classNames(" rounded-full  cursor-pointer transition-all duration-200 ease-in-out", index === selectedIndex ? "bg-cream-medium size-2.5" : "size-2 bg-gray-300")}></span>
                        ))}
                    </div>
                    <button
                        disabled={nextBtnDisabled}
                        onClick={onNextButtonClick}
                        className="max-md:hidden rounded-lg border-2 disabled:border-[#848484] disabled:text-[#848484] bg-white shadow-text-dark_Orange border-text-dark_Orange  text-text-orange disabled:shadow-[#848484] p-1.5 font-bold shadow-main flex items-center justify-center">
                        <span className="icon icon-arrow-back rotate-180"></span>
                    </button>
                </Carousel>
            </div>
        </section>
    )
        ;
}

export default EditorChoice;