"use client";
import React, {useState} from 'react';
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/Components/UI/carousel";
import {useCarousel} from "@/hooks/useCarousel";

function EditorChoice() {
    const data = Array.from({length: 10});
    const [api, setApi] = useState<CarouselApi>();
    const {prevBtnDisabled, onPrevButtonClick, onNextButtonClick, nextBtnDisabled} = useCarousel(api);
    return (
        <section className="my-10 bg-gradient-to-b from-50% to-50% from-[#FBF7F5] to-transparent">
            <div className="3xl:max-w-[85rem] mx-auto max-3xl:px-28 py-10 flex flex-col items-center gap-10">
                <div className="flex items-center justify-center gap-2">
                    <span className="icon icon-language text-text-dark_Orange text-xl font-semibold"></span>
                    <h2 className=" font-semibold text-2xl tracking-tight">انتخاب سردبیر</h2>
                </div>
                <div className="flex items-center gap-5 justify-center">
                    <button
                        disabled={prevBtnDisabled}
                        onClick={onPrevButtonClick}
                        className="rounded-lg border-2 disabled:border-[#848484] disabled:text-[#848484] bg-white shadow-text-dark_Orange border-text-dark_Orange  text-text-orange disabled:shadow-[#848484] p-1.5 font-bold shadow-main flex items-center justify-center">
                        <span className="icon icon-arrow-back"></span>
                    </button>
                    <Carousel setApi={setApi} opts={{direction: "rtl"}} className="max-w-[80rem] mx-auto">
                        <CarouselContent>
                            {data.map((item, index) => (
                                <CarouselItem key={index} className="basis-1/3">
                                    <div
                                        className="rounded-xl border border-[#CCCDF4] flex flex-col gap-6 p-4 bg-white">
                                        <div className="rounded-xl h-52 bg-[#FEF8F5]"></div>
                                        <div className="flex flex-col gap-4">
                                            <div className="space-y-2">
                                                <h5 className="font-bold">بهلند مسیر یادگیری جدیدی ارائه داد است ؟</h5>
                                                <p className="text-justify text-sm tracking-tight text-[#606060]">لورم
                                                    ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                                    طراحان گرافیک است چاپگرها و متون بلکه روزنامه </p>
                                            </div>
                                            <hr className="border border-dashed border-[#CCCDF4]"/>
                                            <div className="flex items-center justify-between">
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
                    </Carousel>
                    <button
                        disabled={nextBtnDisabled}
                        onClick={onNextButtonClick}
                        className="rounded-lg border-2 disabled:border-[#848484] disabled:text-[#848484] bg-white shadow-text-dark_Orange border-text-dark_Orange  text-text-orange disabled:shadow-[#848484] p-1.5 font-bold shadow-main flex items-center justify-center">
                        <span className="icon icon-arrow-back rotate-180"></span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default EditorChoice;