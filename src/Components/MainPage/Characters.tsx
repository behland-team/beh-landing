"use client";
import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/Components/UI/carousel";
import behcow from "@/assets/Images/beh/‌‌‌behcow.png";
import coming from "@/assets/Images/beh/coming.png";
import coming2 from "@/assets/Images/beh/coming2.png";
import behdonk from "@/assets/Images/beh/Behdank.png";
import {useCarousel} from "@/hooks/useCarousel";

const characters = [
  {
    name: "به کو",
    image: behcow,
    title: "behcow",
  },
  {
    name: "به دانک",
    image: behdonk,
    title: "behdonk",
  },
  {
    name: "به‌شیپ",
    image: coming,
    title: "Behsheep",
  },
  {
    name: "به بول",
    image: coming2,
    title: "Behbull",
  },
  {
    name: "به بیر",
    image: coming2,
    title: "Behbear",
    },
    {
    name: "به دانک",
    image: behdonk,
    title: "behdonk",
  }
];

export default function Characters() {
  const t = useTranslations("characters");
  const [api, setApi] = React.useState<CarouselApi>();
    const { onPrevButtonClick , onNextButtonClick} = useCarousel(api);
  return (
    <div
      dir="rtl"
      className="bg-CharBg bg-cover bg-no-repeat bg-center bg-cream-light"
      id={"character"}
    >
      <div className=" md:max-w-screen-md  lg:max-w-screen-2xl md:mx-auto">
        <div className="px-7 pt-12 lg:px-10 xl:px-28 ">
          <h2 className="lg:text-3xl text-center lg:text-right text-[20px] text-black font-semibold">
            {t("title")}
          </h2>
          <div className="w-full flex flex-wrap justify-between items-center gap-6 md:gap-5 mt-4 flex-col lg:flex-row">
            <p className="text-center text-text-gray md:text-base font-semibold text-sm bg-white/60 lg:text-black p-1 rounded-md ">
              {t("description")}
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={onPrevButtonClick}
                className="border-2 shadow-main rounded-xl bg-white border-text-dark_Orange text-text-orange disabled:border-text-gray disabled:text-text-gray disabled:scale-90"
              >
                <span className="icon icon-arrow-back  p-2"></span>
              </button>
              <button
                onClick={onNextButtonClick}
                className="border-2  shadow-main rounded-xl bg-white border-text-dark_Orange  text-text-orange disabled:border-text-gray disabled:text-text-gray disabled:scale-90"
              >
                <span className="icon icon-arrow-back rotate-180  p-2"></span>
              </button>
            </div>
          </div>
        </div>

        {/* عکس‌ها */}
        <div className=" w-full mt-6 px-6 pb-10">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              direction: "rtl",
              loop: true,
            }}
            className="flex  items-center justify-center w-full  gap-6 py-5  overflow-x-hidden"
          >
            <CarouselContent>
              {characters.map((item, i) => (
                <CarouselItem
                  key={i}
                  className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2 will-change-transform"
                >
                  <div className=" bg-card bg-no-repeat bg-contain bg-center w-56 xl:w-[280px] xl:h-96 h-80 mx-auto flex justify-center  relative shrink-0 bg-transparent">
                    <div className="absolute  md:top-1 lg:top-0 xl:-top-1 px-4 py-3 lg:p-5 flex justify-between items-center  gap-5">
                      <p className="text-white  font-black lg:text-stroke-orange  text-[20px] lg:text-2xl">
                        {item.name}
                      </p>
                      <p className="text-white  font-black lg:text-stroke-orange  text-[20px] lg:text-2xl">
                        {item.title}
                      </p>
                    </div>
                    <Image
                      src={item.image}
                      width="256"
                      height="256"
                      alt={item.title}
                      priority
                      loading="eager"
                      className="max-w-56 xl:max-w-[280px] xl:max-h-72 max-h-60 w-full h-full absolute left-1/2 -translate-x-1/2 bottom-6 lg:bottom-7"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
