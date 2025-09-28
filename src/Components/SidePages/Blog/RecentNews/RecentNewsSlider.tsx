"use client";
import React, {ComponentProps, useState} from 'react';
import classNames from "classnames";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/Components/UI/carousel";
import {useCarousel} from "@/hooks/useCarousel";


function RecentNewsSlider({className, ...props}: ComponentProps<"div">) {
    const data = Array.from({length: 5});
   const [api , setApi] = useState<CarouselApi>();
   const {onDotBtnClick ,selectedIndex} = useCarousel(api)
    return (
        <div className={classNames(className, "")} {...props}>
            <Carousel setApi={setApi} opts={{direction: "rtl", align: "center"}} className="w-full">
                <CarouselContent>
                    {
                        data.map((item, index) => (
                            <CarouselItem className="w-full" key={index}>
                                <div className="rounded-lg border border-[#CCCFD4] p-4 flex flex-col gap-6">
                                    <div className="w-full h-56 rounded-lg bg-pink-700"></div>
                                    <div className="flex flex-col gap-12 ">
                                        <div className="space-y-2">
                                            <h3 className="text-sm font-bold">بهلند مسیر یادگیری جدیدی ارائه داد است
                                                ؟</h3>
                                            <p className="text-xs tracking-tight"> لورم ایپسوم متن ساختگی با تولید سادگی
                                                نامفهوم
                                                از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                                                روزنامه و
                                                مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                                                نیاز، و
                                                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، </p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-2">
                                                    <span className="icon icon-calendar text-cream-medium"></span>
                                                    <span className="text-gray-500 text-sm">8 دقیقه</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="icon icon-calendar text-cream-medium"></span>
                                                    <span className="text-gray-500 text-sm">1404/04/07</span>
                                                </div>
                                            </div>
                                            <button
                                                className="text-cream-medium border-none outline-none flex items-center gap-2 text-sm">
                                                <p>ادامه مطلب</p>
                                                <span className="icon icon-arrow-back text-xs rotate-180"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <div className="absolute bottom-2 z-10  left-1/2 -translate-x-1/2 flex items-center justify-center gap-1 mt-3">
                    {data.map((item, index) => (
                        <span key={index} onClick={() => onDotBtnClick(index)}
                              className={classNames(" rounded-full  cursor-pointer transition-all duration-200 ease-in-out", index === selectedIndex ? "bg-cream-medium size-2.5" : "size-2 bg-gray-300")}></span>
                    ))}
                </div>
            </Carousel>
        </div>
    );
}

export default RecentNewsSlider;