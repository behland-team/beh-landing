"use client";
import {useTranslations} from "next-intl";
import React, {useCallback, useEffect, useState} from "react";
import Image from "next/image";
import news from "@/assets/Images/news.webp";
import beed from "@/assets/Images/beeds.svg";
import clock from "@/assets/Images/clock.svg";
import classNames from "classnames";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/Components/UI/carousel";
import {EmblaCarouselType} from "embla-carousel";

export default function News() {
    const t = useTranslations("newsHead");
    const data = Array.from({length: 6});
    const [api, setApi] = React.useState<CarouselApi>()
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
        if (!api) return
        api.scrollPrev()
    }, [api])

    const onNextButtonClick = useCallback(() => {
        if (!api) return
        api.scrollNext()
    }, [api])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!api) return

        onSelect(api)
        api.on('reInit', onSelect).on('select', onSelect)

        return () => {
            api.off('reInit', onSelect).off('select', onSelect)
        }
    }, [api, onSelect])
    return (
        <div dir="rtl" className="py-10 lg:px-28 px-6  mt-10 xl:max-w-screen-2xl xl:mx-auto" id="news">
            <div className="w-full flex flex-col xxs:flex-row gap-3  items-center justify-between  mt-4">
                <h2 className=" text-[18px] md:text-2xl xl:text-3xl text-black font-semibold">{t("title")}</h2>
                <div className="flex items-center gap-4">
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
            <div className="flex flex-col gap-8 mt-12">
                <div
                    className={classNames("bg-[#FEECD8] shadow-news w-full rounded-3xl flex   xl:gap-2 gap-0 lg:min-h-80 max-md:hidden")}>
                    <div
                        className={classNames("flex flex-col flex-1 justify-between items-start pt-6 px-6")}>
                        <div className="flex flex-col gap-3 px-2">
                            <h2 className={classNames("text-text-gray font-semibold text-sm xl:text-2xl md:text-base")}>
                                بهلند یک مسیر آموزشی جدید برای کاربرانش راه‌اندازی کرد
                            </h2>
                            <p className={classNames("text-text-light_black text-justify  font-normal leading-6 md:leading-8  text-xs xl:text-base md:text-sm ")}>
                                کاربران می‌توانند با مأموریت‌ها، تمرین‌ها و پشتیبانی همیشگی،
                                مهارت‌های خود را مرحله‌به‌مرحله تقویت کنند و حتی از همان مراحل
                                اولیه درآمدزایی داشته باشند. این مسیر جدید به‌گونه‌ای طراحی شده که
                                تجربه یادگیری هم سرگرم‌کننده باشد و هم عملی، تا کاربران بتوانند
                                مهارت واقعی بازار را در کنار درآمدزایی کسب کنند.
                            </p>
                        </div>
                        <div
                            className="md:border-t border-dashed border-text-orange w-full flex justify-between items-center flex-row-reverse px-2 py-4 md:py-5 ">
                            <div className=" flex justify-center items-center">
                                <p className="font-normal text-text-gray md:text-text-orange text-sm ">
                                    1402/12/11
                                </p>
                                <span className="icon icon-calendar text-text-orange mr-2"></span>
                            </div>
                            <div className="md:flex justify-center items-center gap-4 hidden">
                                <Image src={beed} alt="beed" className="h-5 w-5"/>
                                <p className="text-text-gray/50 font-normal text-sm">
                                    دوره آموزشی : یادگیری دوره ارزهای دیجیتال
                                </p>
                            </div>
                            <div className=" flex justify-center items-center gap-1 md:hidden">
                                <Image src={clock} alt={"clock"}/>
                                <p className="font-normal text-text-gray  text-sm">8 دقیقه</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={classNames("flex flex-col md:justify-center md:items-center  w-2/5 lg:w-1/3")}>
                        <div className=" h-full p-4 rounded-3xl overflow-hidden  ">
                            <Image
                                src={news}
                                alt="news"
                                className={classNames(" overflow-hidden rounded-2xl md:rounded-[34px] w-full h-full")}
                            />
                        </div>
                    </div>
                </div>
                <Carousel setApi={setApi} opts={{direction: "rtl", align: "start" ,}}>
                    <CarouselContent>
                        {data.map((item, index) => (
                            <CarouselItem key={index} className="basis-2/3 md:basis-1/2 lg:basis-1/3 ">
                                <div
                                    className={classNames("bg-[#FEECD8] rounded-3xl flex lg:max-w-96 xl:max-w-[400px] mx-auto flex-col-reverse xl:min-h-80")}>
                                    <div
                                        className={classNames("flex flex-col flex-1 justify-between items-start sm:p-4 md:p-1")}>
                                        <div className="flex flex-col gap-3 px-2">
                                            <h2 className={classNames("text-text-gray font-semibold text-sm")}>
                                                بهلند یک مسیر آموزشی جدید برای کاربرانش راه‌اندازی کرد
                                            </h2>
                                            <p className={classNames("text-text-light_black  font-normal leading-6 md:leading-8  text-xs md:text-sm line-clamp-3 ")}>
                                                . کاربران می‌توانند با مأموریت‌ها، تمرین‌ها و پشتیبانی همیشگی،
                                                مهارت‌های خود را مرحله‌به‌مرحله تقویت کنند و حتی از همان مراحل
                                                اولیه درآمدزایی داشته باشند. این مسیر جدید به‌گونه‌ای طراحی شده که
                                                تجربه یادگیری هم سرگرم‌کننده باشد و هم عملی، تا کاربران بتوانند
                                                مهارت واقعی بازار را در کنار درآمدزایی کسب کنند.
                                            </p>
                                        </div>
                                        <div
                                            className="md:border-t border-dashed border-text-orange w-full flex justify-between items-center flex-row-reverse px-2 py-4 md:py-5 ">
                                            <div className=" flex justify-center items-center">
                                                <p className="font-normal text-text-gray md:text-text-orange text-sm ">
                                                    1402/12/11
                                                </p>
                                                <span className="icon icon-calendar text-text-orange mr-2"></span>
                                            </div>
                                            <div className="md:flex justify-center items-center gap-4 hidden">
                                                <Image src={beed} alt="beed" className="h-5 w-5"/>
                                                <p className="text-text-gray/50 font-normal text-sm">
                                                    دوره آموزشی : یادگیری دوره ارزهای دیجیتال
                                                </p>
                                            </div>
                                            <div className=" flex justify-center items-center gap-1 md:hidden">
                                                <Image src={clock} alt={"clock"}/>
                                                <p className="font-normal text-text-gray  text-sm">8 دقیقه</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" h-full p-4 rounded-3xl overflow-hidden  ">
                                        <Image
                                            src={news}
                                            alt="news"
                                            className={classNames(" overflow-hidden rounded-2xl md:rounded-[34px] max-h-40 w-full")}
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

        </div>
    );
}
