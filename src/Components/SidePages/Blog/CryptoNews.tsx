"use client";
import React, {useState} from 'react';
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/Components/UI/carousel";
import {useCarousel} from "@/hooks/useCarousel";
import classNames from "classnames";

function CryptoNews() {
    const [api, setApi] = useState<CarouselApi>();
    const {selectedIndex, prevBtnDisabled, onPrevButtonClick, nextBtnDisabled, onNextButtonClick} = useCarousel(api);
    const data = Array.from({length: 10});
    return (
        <section className="my-10 bg-[#FBF7F5] py-16">
            <div className="3xl:max-w-[85rem] mx-auto max-3xl:px-20">
                <Carousel setApi={setApi} className="space-y-4">
                    <div className="absolute top-2 right-2 z-10 flex items-center justify-between w-2/3 ml-auto px-5 ">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span
                                    className="icon icon-dollar-circle text-2xl font-bold text-text-dark_Orange"></span>
                                <h2 className="font-bold text-2xl">ارزهای دیجیتال</h2>
                            </div>
                            <p className="text-[#848484]">جدید ترین و به روز ترین مقالات مشاهده کنید .</p>
                        </div>
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
                    <CarouselContent dir="ltr">
                        {data.map((item, index) => (
                            <CarouselItem key={index} dir="rtl"
                                          className={classNames("basis-1/3 transition-all ease-in-out duration-500 will-change-transform", index === selectedIndex ? "min-h-[500px]" : "mt-auto")}>
                                <div
                                    className={classNames("rounded-xl border  border-[#CCCDF4] flex flex-col gap-6 p-4 bg-white transition-all ease-in-out duration-500", index === selectedIndex ? "h-full" : "h-[400px] ")}>
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
                </Carousel>
            </div>
        </section>
    );
}

export default CryptoNews;