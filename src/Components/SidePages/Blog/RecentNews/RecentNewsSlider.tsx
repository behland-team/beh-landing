"use client";
import React, {ComponentProps, useState} from 'react';
import classNames from "classnames";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/Components/UI/carousel";
import {useCarousel} from "@/hooks/useCarousel";
import {useTranslations} from "next-intl";
import {dateFormatter, numberFormatter} from "@/utils/helpers";


function RecentNewsSlider({className, ...props}: ComponentProps<"div">) {
    const data = Array.from({length: 5});
   const [api , setApi] = useState<CarouselApi>();
   const {onDotBtnClick ,selectedIndex , onPrevButtonClick ,prevBtnDisabled , nextBtnDisabled , onNextButtonClick} = useCarousel(api);
   const t = useTranslations("blogPage")
    return (
        <div className={classNames(className, "max-md:px-6 max-xxs:px-0")} {...props}>
            <Carousel setApi={setApi} opts={{direction: "rtl", align: "center"}} className="w-full">
                <CarouselContent>
                    {
                        data.map((item, index) => (
                            <CarouselItem className="w-full" key={index}>
                                <div className="rounded-lg border border-[#CCCFD4] p-4 flex flex-col gap-6">
                                    <div className="w-full h-56 rounded-lg bg-pink-700"></div>
                                    <div className="flex flex-col gap-12 max-md:gap-6">
                                        <div className="space-y-2 ">
                                            <h3 className="text-sm font-bold">بهلند مسیر یادگیری جدیدی ارائه داد است
                                                ؟</h3>
                                            <p className="text-xs text-justify tracking-tight"> لورم ایپسوم متن ساختگی با تولید سادگی
                                                نامفهوم
                                                از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                                                روزنامه و
                                                مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                                                نیاز، و
                                                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، </p>
                                        </div>
                                        <hr className="border-b border-dashed border-[#848484] md:hidden" />
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4 max-md:justify-between max-md:flex-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="icon icon-clock text-cream-medium"></span>
                                                    <span className="text-gray-500 text-sm">{numberFormatter(8).concat(`  ${t("min")}`)}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="icon icon-calendar text-cream-medium"></span>
                                                    <span className="text-gray-500 text-sm">{dateFormatter( 1759473653000)}</span>
                                                </div>
                                            </div>
                                            <button
                                                className="text-cream-medium border-none outline-none flex items-center gap-2 text-sm max-md:hidden">
                                                <p>{t("more")}</p>
                                                <span className="icon icon-arrow-back text-xs rotate-180"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <div className="flex items-center justify-center gap-2 mt-3">
                    <button
                        disabled={prevBtnDisabled}
                        onClick={onPrevButtonClick}
                        className="md:hidden rounded-lg border-2 disabled:border-[#848484] disabled:text-[#848484] bg-white shadow-text-dark_Orange border-text-dark_Orange  text-text-orange disabled:shadow-[#848484] p-1.5 font-bold shadow-main flex items-center justify-center">
                        <span className="icon icon-arrow-back"></span>
                    </button>
                    {data.map((item, index) => (
                        <span key={index} onClick={() => onDotBtnClick(index)}
                              className={classNames(" rounded-full  cursor-pointer transition-all duration-200 ease-in-out", index === selectedIndex ? "bg-cream-medium size-2.5" : "size-2 bg-gray-300")}></span>
                    ))}
                    <button
                        disabled={nextBtnDisabled}
                        onClick={onNextButtonClick}
                        className="md:hidden rounded-lg border-2 disabled:border-[#848484] disabled:text-[#848484] bg-white shadow-text-dark_Orange border-text-dark_Orange  text-text-orange disabled:shadow-[#848484] p-1.5 font-bold shadow-main flex items-center justify-center">
                        <span className="icon icon-arrow-back rotate-180"></span>
                    </button>
                </div>
            </Carousel>
        </div>
    );
}

export default RecentNewsSlider;