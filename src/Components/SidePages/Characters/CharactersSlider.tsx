"use client";
import React, {useState} from 'react';
import {useCarousel} from "@/hooks/useCarousel";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/Components/UI/carousel";
import Image from "next/image";
import userSquare from "@/assets/Images/user-square.svg";
import calenderTick from "@/assets/Images/calendar-tick.svg"
import userOctagon from "@/assets/Images/user-octagon.svg"
import classNames from "classnames";
import {useTranslations} from "next-intl";
import {characters} from "@/utils/data";


function CharactersSlider() {
    const t = useTranslations("characterPage.slider");
    const [api, setApi] = useState<CarouselApi>()
    const {
        selectedIndex,
        onNextButtonClick,
        nextBtnDisabled,
        prevBtnDisabled,
        onPrevButtonClick,
        onDotBtnClick
    } = useCarousel(api)
    return (
        <section className="my-20 lg:my-28">
            <div
                className="lg:max-w-[75rem] 3xl:max-w-[85rem] mx-auto flex flex-col gap-8 md:gap-12 lg:gap-20 xxs:px-6">
                <div
                    className="flex items-end gap-4 xxs:gap-6  justify-center min-h-56 flex-wrap gap-y-16 md:gap-y-20 max-xxs:px-4">
                    {
                        characters.map((character, index) => (
                            <div
                                className={classNames("rounded-2xl bg-[#FEECD8] min-w-32 md:min-w-44  relative pb-6 shrink-0 flex-1 transition-all duration-500 ease-in cursor-pointer", index !== selectedIndex ? " pt-12" : "flex flex-col-reverse items-center border border-cream-medium gap-3 py-4")}
                                onClick={() => onDotBtnClick(index)}>
                                <p className="text-sm md:text-lg md:font-bold text-center w-fit mx-auto">{character.name} {character.title}</p>
                                <div
                                    className={classNames("rounded-full size-[72px] md:size-24  flex items-center justify-center p-2", selectedIndex === index ? "bg-white" : "bg-gray-200 absolute -top-10 md:-top-16 left-1/2 -translate-x-1/2")}>
                                    <Image src={character.thumbnail} alt={character.name}/>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-12 lg:gap-16">
                    <div className="flex items-center justify-between max-md:hidden">
                        <div className="flex items-center gap-4">
                            <span className="icon icon-quote text-gray-300 text-5xl"/>
                            <div>
                                <h3 className="text-3xl font-bold">{characters[selectedIndex].name} {characters[selectedIndex].title}</h3>
                                <p className="text-lg font-bold">هیچ راهی سخت نیست وقتی کسی کنارت باشه.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 ">
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
                    <Carousel setApi={setApi} opts={{direction: "rtl"}}>
                        <CarouselContent>
                            {
                                characters.map((character, index) => (
                                    <CarouselItem key={index}>
                                        <div
                                            className="rounded-xl grid lg:grid-cols-[1.3fr_1fr_1.5fr] max-sm:gap-4 will-change-transform max-lg:gap-6  p-3 pb-0 xxs:p-6 xxs:pb-0 lg:p-8   shadow-inner shadow-black/40" style={{backgroundColor : character.color}}>
                                            <div className="lg:hidden flex items-center gap-2 relative">
                                                <Image src={character.thumbnail} alt={character.title}
                                                       className="size-16 rounded-full p-2 ring ring-gray-400 bg-white shadow shadow-black/50"/>
                                                <div>
                                                    <h3 className="text-xl font-bold">{character.name} {character.title} </h3>
                                                    <p className="text-sm">هیچ راهی سخت نیست وقتی کسی کنارت باشه.</p>
                                                </div>
                                                <span
                                                    className="absolute top-0 left-0 icon icon-quote text-white/60 text-3xl"></span>
                                            </div>
                                            <div className="bg-white p-4 space-y-2.5 rounded-lg">
                                                <h4 className="tracking-tight font-bold">{t("story")} {character.name}</h4>
                                                <p className="text-justify text-sm text-[#606060]">{character.story}</p>
                                            </div>
                                            <div className="max-lg:hidden flex justify-center">
                                                <Image src={character.image} alt={character.title}/>
                                            </div>
                                            <div className="flex flex-col gap-6 max-sm:gap-4">
                                                <div className="bg-white rounded-lg p-4 space-y-2">
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center gap-2">
                                                            <Image src={userOctagon} alt={"gender"} className="size-8"/>
                                                            <h6 className="font-semibold text-sm ">{t("gender")}</h6>
                                                        </div>
                                                        <p className="text-sm tracking-tight  text-[#43531A]">{character.gender}</p>
                                                    </div>
                                                    <hr className="border-b border-dashed border-gray-400"/>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center gap-2">
                                                            <Image src={calenderTick} alt={"age"} className="size-8"/>
                                                            <h6 className="font-semibold text-sm">{t("age")}</h6>
                                                        </div>
                                                        <p className="text-sm tracking-tight text-[#43531A]">{character.age} سال</p>
                                                    </div>
                                                    <hr className="border-b border-dashed border-gray-400"/>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center gap-2">
                                                            <Image src={userSquare} alt={"character"}
                                                                   className="size-8"/>
                                                            <h6 className="font-semibold text-sm">{t("character")}</h6>
                                                        </div>
                                                        <p className="text-sm tracking-tight text-[#43531A]">{character.character}</p>
                                                    </div>
                                                </div>
                                                <div className="bg-white rounded-lg p-4">
                                                    <h5 className="font-bold">{t("position")}</h5>
                                                    <p className="text-sm text-[#606060]">
                                                        {character.position}
                                                    </p>
                                                </div>
                                                <div className="bg-white rounded-lg p-4">
                                                    <p className="text-sm text-[#606060]"><span
                                                        className="text-base font-bold text-black">{t("goal")}</span>{character.goal}</p>
                                                </div>
                                                <div className="bg-white rounded-lg p-4">
                                                    <p className="text-sm text-[#606060]"><span
                                                        className="text-base font-bold text-black">{t("weakness")}</span>{character.weakness}</p>
                                                </div>
                                                <div className="grid max-lg:grid-cols-[1fr_2fr]">
                                                    <div className="lg:hidden">
                                                        <Image src={character.image} alt={character.title}/>
                                                    </div>
                                                    <div className="space-y-4">
                                                        <h5 className="font-bold">{t("relationship")}</h5>
                                                        <ul className="grid lg:grid-cols-2 gap-6 max-lg:gap-y-2 ">
                                                            {
                                                                character.relationship.map((rel , i)=>(
                                                                    <li  key={i} className="py-4 rounded-lg text-center text-[#606060] text-sm bg-white text-nowrap">
                                                                        {rel}
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </CarouselItem>
                                ))
                            }
                        </CarouselContent>
                        <div
                            className="flex items-center justify-center gap-1.5 bg-[#FCECDB] p-1.5 w-fit mt-4 rounded-lg mx-auto">
                            {
                                characters.map((character, index) => (
                                    <span onClick={() => onDotBtnClick(index)}
                                          key={index}
                                          className={classNames("rounded-full cursor-pointer size-2.5 transition-all duration-300 ease-in-out  ", index === selectedIndex ? "bg-cream-medium w-9" : "bg-white")}></span>
                                ))
                            }
                        </div>
                    </Carousel>

                </div>
            </div>
        </section>
    );
}

export default CharactersSlider;