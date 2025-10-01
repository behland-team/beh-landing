"use client";
import React, {useCallback, useEffect, useState} from 'react';
import classNames from "classnames";
import Image from "next/image";
import WhyBehBg from "@/assets/Images/WhyBehMobile.png";
import Crown from "@/assets/Images/WhyBehCrown.svg";
import {useTranslations} from "next-intl";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/Components/UI/carousel";
import {EmblaCarouselType} from "embla-carousel";


function TokenSlider({stages}: { stages: Stage[] }) {
    const t = useTranslations("token");
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
    }, [api, onSelect])
    return (
        <>
            <div
                className="w-[clac(100%-48px)] flex flex-col justify-center items-center gap-5 relative mx-6  md:hidden">
                <Image src={WhyBehBg} alt={"background"} className="absolute top-0 left-0 w-full h-full md:hidden"/>
                <Image src={Crown} alt={"Wht Beh"}
                       className="absolute -top-8 left-1/2 -translate-x-1/2 md:hidden z-10"/>
                <div className="z-20 flex items-center flex-col gap-2 px-8 py-10 text-center">
                    <p className="text-text-gray text-lg md:text-2xl lg:text-3xl font-semibold">{t("title")}</p>
                    <p className="text-text-gray text-sm md:text-base font-semibold  lg:w-1/2 xl:w-2/3">
                        {t("description")}
                    </p>
                </div>
                <div
                    className="absolute -bottom-2 z-20 flex items-center justify-center gap-3 left-1/2 -translate-x-1/2 md:hidden">
                    <button
                        disabled={prevBtnDisabled}
                        onClick={onPrevButtonClick}
                        className="border-2 shadow-main p-2 rounded-xl bg-white border-text-dark_Orange icon icon-arrow-back text-text-orange disabled:border-text-gray disabled:text-text-gray disabled:scale-90"
                    ></button>
                    <button
                        disabled={nextBtnDisabled}
                        onClick={onNextButtonClick}
                        className="border-2 shadow-main rounded-xl bg-white border-text-dark_Orange text-text-orange disabled:border-text-gray disabled:text-text-gray disabled:scale-90"
                    >
                        <span className="icon icon-arrow-back  rotate-180 has  p-2"></span>
                    </button>
                </div>
            </div>
            <Carousel
                opts={{
                    direction : "rtl",
                    align : "center"
                }} setApi={setApi}
                className="flex items-center justify-center w-full  gap-6 py-5 mx-auto overflow-hidden md:hidden ">
                <CarouselContent>
                    {
                        stages.map((stage, i) => (
                            <CarouselItem key={i} className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2 ">
                                <div
                                    className={classNames(" flex justify-end items-center relative flex-col shrink-0 w-72 md:w-full h-72 mx-auto")}>
                                    <div
                                        className="rounded-xl bg-cardBg bg-cover w-full bg-no-repeat p-5 h-5/6   flex justify-end items-center shadow-main"
                                    >
                                        <div
                                            className="bg-crown bg-contain bg-no-repeat bg-center absolute top-1 left-0 h-2/6 w-full flex justify-center items-center">
                                            <div className="flex items-center justify-center gap-2">
                                                {
                                                    stage.discount && (<Image src={stage.discount} alt={"discount"} />)
                                                }
                                                <p className="text-sm md:text-base font-bold text-[#893D1B]">
                                                    {stage.title}
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className={classNames("flex flex-col justify-end w-full h-full items-stretch gap-2")}>
                                            <div
                                                className={classNames("flex flex-nowrap gap-2 text-sm text-right flex-col items-stretch")}>
                  <span className="bg-[#EAE3CC] text-text-gray text-base font-semibold p-2 rounded-md text-center">
                    تعداد: {stage.tokens}
                  </span>
                                                <span
                                                    className="bg-[#FEE6BD] text-text-gray text-base font-semibold p-2 rounded-md text-center">
                    قیمت: {stage.price}
                  </span>
                                            </div>

                                            <p className={classNames(" bg-[#F0E3D5] rounded-lg p-2 text-text-gray text-right leading-relaxed  font-semibold text-sm")}>
                                                {stage.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </Carousel>

        </>
    );
}

export default TokenSlider;