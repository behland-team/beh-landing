"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import cow from "../../../public/images/cow.svg"
import Image from "next/image";

const images = [
  "https://picsum.photos/id/1015/400/400",
  "https://picsum.photos/id/1016/400/400",
  "https://picsum.photos/id/1018/400/400",
  "https://picsum.photos/id/1019/400/400",
  "https://picsum.photos/id/1020/400/400",
  "https://picsum.photos/id/1021/400/400",
  "https://picsum.photos/id/1022/400/400",
];

export default function Team() {
  const t = useTranslations("team");
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  
  const visibleCount = 4;


  const visibleImages = Array.from({ length: visibleCount }, (_, i) => {
    const index = (current + i) % images.length;
    return images[index];
  });

  return (
    <div
      dir="rtl"
      className="p-10 bg-CharBg bg-cover bg-no-repeat bg-center bg-cream-light"
    >
      <h2 className="text-3xl text-black font-semibold">{t("title")}</h2>

      <div className="w-full flex flex-wrap justify-between items-center gap-5 mt-4">
        <p className="text-center text-text-gray text-base font-semibold">
          {t("description")}
        </p>
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

      {/* عکس‌ها */}
      <div className="relative flex items-center justify-center w-full mt-6">
        <div className="flex items-center justify-center w-full  gap-6 py-5 mx-auto overflow-hidden">
          {visibleImages.map((src, i) => (
            <div
              key={i}
              className=" bg-card bg-no-repeat bg-contain bg-center w-72 h-96 flex justify-center items-end relative"
            >
              <div className="absolute top-0 p-5 flex justify-between items-center  gap-5">
                  <p className="text-white text-stroke-orange font-black text-3xl">
                  به‌بول
                </p>
                <p className="text-white text-stroke-orange font-black text-3xl">
                  behbull
                </p>
              
              </div>
              
              <Image src={cow} alt="cow" className="size-90 pb-7" />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
