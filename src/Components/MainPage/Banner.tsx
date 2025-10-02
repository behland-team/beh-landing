import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import CloudLeft from "@/assets/Images/cloud-left.svg"
import CloudRight from "@/assets/Images/cloud-right.svg"
import logo from "../../../public/images/Logo.png";
export default function Banner() {
  const t = useTranslations("Banner");
  const tHeader = useTranslations("header");

  return (
    <div className="w-full h-[87dvh]  bg-cream-light pt-12 bg-bannerBg bg-cover  bg-no-repeat bg-center relative">
        <Image src={CloudRight} alt={"cloud-right"} className={"absolute right-0 top-[232px] md:hidden"} />
        <Image src={CloudLeft} alt={"cloud-left"} className={"absolute left-0 top-[382px] md:hidden "} />
      <div className="h-1/2 flex flex-col items-center font-semibold mt-[83px] md:mt-0  ">
          <Image src={logo} alt={"logo"} className="lg:hidden w-24  mb-6"/>
        <h3 className="text-sm xxs:text-[18px] md:text-2xl lg:text-3xl text-text-dark_Orange">{t("title1")}</h3>
        <span className="flex flex-row-reverse xxs:text-[22px] md:text-3xl lg:text-4xl text-text-black md:mt-3">
          <h3 className="">{t("title21")} </h3>
          <h3 className="md:bg-text-bg  p-1">{t("title22")} </h3>
        </span>
        <p dir="rtl" className="text-center mt-4 md:mt-5 lg:mt-10 w-full px-7 md:w-2/3 lg:w-2/4 text-text-light_black font-[400] md:font-medium  lg:text-xl z-20">
          {t("description")}
        </p>
{/* 
        <button className=" mt-5 lg:mt-7 px-5 font-medium z-10 text-sm lg:text-lg  shadow-main hover:bg-cream-medium/80 hover:text-cream-light  text-text-orange  p-2 rounded-2xl border-2 border-cream-medium bg-cream-light flex gap-2 items-center shadow-cream-dark ">
          {tHeader("login")}
          <span className="icon icon-profile text-xl font-medium"></span>
        </button> */}
      </div>
    </div>
  );
}
