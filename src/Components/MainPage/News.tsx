"use client";
import {useTranslations} from "next-intl";
import React, {useState} from "react";
import Image from "next/image";
import {Teams} from "@/utils/data";
import news from "@/assets/Images/news.webp";
import beed from "@/assets/Images/beeds.svg";
import clock from "@/assets/Images/clock.svg";
import classNames from "classnames";

export default function News() {
    const t = useTranslations("newsHead");
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c === 0 ? Teams.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === Teams.length - 1 ? 0 : c + 1));

    const visibleCount = 4;

    const visibleImages = Array.from({length: visibleCount}, (_, i) => {
        const index = (current + i) % Teams.length;
        return Teams[index];
    });
    console.log(visibleImages);
    return (
        <div dir="rtl" className="py-10 md:px-24 px-6  mt-10">
            <div className="w-full flex flex-col xxs:flex-row gap-3  items-center justify-between  mt-4">
                <h2 className=" text-[18px] md:text-2xl xl:text-3xl text-black font-semibold">{t("title")}</h2>
                <div className="flex items-center gap-4">
                    <button
                        aria-label="Slide back"
                        onClick={prev}
                        className="border-2 shadow-main p-2 rounded-xl bg-white border-text-dark_Orange icon icon-arrow_back text-text-orange"
                    ></button>
                    <button
                        aria-label="Slide forward"
                        onClick={next}
                        className="border-2 shadow-main rounded-xl bg-white border-text-dark_Orange"
                    >
                        <span className="icon icon-arrow_back text-text-orange rotate-180 p-2"></span>
                    </button>
                </div>
            </div>
            <div className=" flex md:grid md:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-6 mt-12 overflow-x-auto p-2">
                {visibleImages.map((item, index) => (
                    <div
                        className={classNames("bg-[#FEECD8] shadow-news md:w-full rounded-3xl flex shrink-0 w-72 ", index < 1 ? "xl:col-span-full xl:flex-row col-span-1 flex-col-reverse xl:gap-2 gap-0 xl:min-h-80" : "col-span-1 flex-col-reverse")}>
                        <div
                            className={classNames("flex flex-col flex-1 justify-between items-start sm:p-4 ", index < 1 ? "xl:pt-6 xl:px-6 md:pt-1 md:px-1" : "md:p-1")}>
                            <div className="flex flex-col gap-3 px-2">
                                <h2 className={classNames("text-text-gray font-semibold text-sm", index < 1 ? "xl:text-2xl md:text-base" : "")}>
                                    بهلند یک مسیر آموزشی جدید برای کاربرانش راه‌اندازی کرد
                                </h2>
                                <p className={classNames("text-text-light_black  font-normal leading-6 md:leading-8  text-xs", index < 1 ? "xl:text-base md:text-sm line-clamp-3 xl:line-clamp-none md:leading-8" : "text-sm line-clamp-3 ")}>
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
                                    <Image src={clock} alt={"clock"} />
                                    <p className="font-normal text-text-gray  text-sm">8 دقیقه</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={classNames("flex flex-col md:justify-center md:items-center ", index < 1 ? "xl:w-1/3 w-full" : "w-full")}>
                            <div className=" h-full p-4 rounded-3xl overflow-hidden  ">
                                <Image
                                    src={news}
                                    alt="news"
                                    className={classNames(" overflow-hidden rounded-2xl md:rounded-[34px] w-full h-[120px] md:h-full")}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
