"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Image from "next/image";
import { Teams } from "@/utils/data";
import news from "@/assets/Images/news.webp";
import beed from "@/assets/Images/beeds.svg";
export default function News() {
  const t = useTranslations("newsHead");
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? Teams.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === Teams.length - 1 ? 0 : c + 1));

  const visibleCount = 3;

  const visibleImages = Array.from({ length: visibleCount }, (_, i) => {
    const index = (current + i) % Teams.length;
    return Teams[index];
  });
  console.log(visibleImages);
  return (
    <div dir="rtl" className="p-10 mt-10">
      <div className="w-full flex flex-wrap justify-between items-center gap-5 mt-4">
        <h2 className="text-3xl text-black font-semibold">{t("title")}</h2>
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
      <div className="bg-[#FEECD8] shadow-news w-full h-12/12 mt-10 rounded-3xl grid grid-cols-3">
        <div className="col-span-2 flex flex-col justify-between items-start p-10 gap-6 ">
          <div>
            <h2 className="text-text-gray font-semibold text-2xl">
              بهلند یک مسیر آموزشی جدید برای کاربرانش راه‌اندازی کرد
            </h2>
            <p className="text-text-light_black text-base font-normal  leading-8">
              . کاربران می‌توانند با مأموریت‌ها، تمرین‌ها و پشتیبانی همیشگی،
              مهارت‌های خود را مرحله‌به‌مرحله تقویت کنند و حتی از همان مراحل
              اولیه درآمدزایی داشته باشند. این مسیر جدید به‌گونه‌ای طراحی شده که
              تجربه یادگیری هم سرگرم‌کننده باشد و هم عملی، تا کاربران بتوانند
              مهارت واقعی بازار را در کنار درآمدزایی کسب کنند.
            </p>
          </div>
          <div className="border-t border-dashed border-text-orange w-full flex justify-between items-center flex-row-reverse p-2">
            <div className=" flex justify-center items-center">
              <p className="font-normal text-text-orange text-base">
                1402/12/11
              </p>
              <span className="icon icon-calendar text-text-orange mr-2"></span>
            </div>
            <div className="flex justify-center items-center gap-4">
              <Image src={beed} alt="beed" className="h-5 w-5" />
              <p className="text-text-gray/50 font-normal text-sm">
                دوره آموزشی : یادگیری دوره ارزهای دیجیتال
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center ">
          <div className=" h-full p-5 rounded-3xl overflow-hidden  ">
            <Image
              src={news}
              alt="news"
              className="h-full w-full overflow-hidden rounded-[34px]"
            />
          </div>
        </div>
      </div>

      {/* عکس‌ها */}
      <div className="relative flex items-center justify-center w-full mt-6">
        <div className="flex items-center justify-center w-full  gap-6 py-5 mx-auto overflow-hidden">
          {visibleImages.map((item, i) => (
            <div
              key={i}
              className=" bg-newsMini bg-no-repeat bg-contain bg-center w-full h-[30rem]  overflow-hidden rounded-3xl"
            >

        
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
