"use client";
import React, {useState} from 'react';
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/Components/UI/carousel";
import {useCarousel} from "@/hooks/useCarousel";

function NewestArticle() {
    const [api , setApi] =useState<CarouselApi>();
    const {prevBtnDisabled , nextBtnDisabled, onPrevButtonClick , onNextButtonClick} = useCarousel(api);
    const data = Array.from({length : 10});
    return (
        <section className="my-20">
            <div className="flex-col gap-8 flex 3xl:max-w-[85rem] mx-auto sm:px-6 md:px-10 xl:px-24 3xl:px-0 ">
                <div className="flex  items-center justify-between">
                        <div className={"space-y-2 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:flex-1"}>
                            <div className="flex items-center max-sm:flex-col  gap-2 font-bold md:text-2xl text-lg">
                                <span className="icon icon-ranking text-text-dark_Orange text-2xl"></span>
                                <h2>جدید ترین مقالات</h2>
                            </div>
                            <p className="text-text-dark_Orange">جدید ترین و به روز ترین مقالات مشاهده کنید .</p>
                        </div>
                    <div className="flex items-center gap-4 max-sm:hidden">
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
                <div>
                    <Carousel setApi={setApi} opts={{direction  :"rtl"}} className="max-sm:flex max-sm:items-center max-sm:gap-2">
                        <button
                            disabled={prevBtnDisabled}
                            onClick={onPrevButtonClick}
                            className="sm:hidden border-2 shadow-main rounded-xl bg-white border-text-dark_Orange text-text-orange disabled:border-text-gray disabled:text-text-gray disabled:scale-90"
                        >
                            <span className="icon icon-arrow-back   p-2"></span>
                        </button>
                        <CarouselContent className="max-xxs:px-4">
                            {data.map((item, i) => (
                                <CarouselItem key={i} className="xxs:basis-4/5 md:basis-2/5 xl:basis-1/4">
                                    <div className="flex flex-col gap-6 p-4 rounded-lg border border-[#848484]">
                                        <div className="bg-[#F8F7BB] rounded-lg h-44"></div>
                                        <div className="space-y-2">
                                            <h5 className="font-bold text-sm ">بهلند مسیر یادگیری جدیدی ارائه داد است ؟</h5>
                                            <div className="text-sm text-[#848484] flex items-center gap-2">
                                                <span className="icon icon-calendar"></span>
                                                <p>۸ دقیقه زمان برای خواندن این مقاله</p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <button
                            disabled={nextBtnDisabled}
                            onClick={onNextButtonClick}
                            className="sm:hidden border-2  shadow-main rounded-xl bg-white border-text-dark_Orange  text-text-orange disabled:border-text-gray disabled:text-text-gray disabled:scale-90"
                        >
                            <span className="icon icon-arrow-back rotate-180  p-2"></span>
                        </button>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default NewestArticle;