import Image from "next/image";
import React from "react";
import tree from "@/assets/Images/tree.svg";
import alga from "@/assets/Images/alga.png";

import leftWood from "@/assets/Images/faq/leftWood.png";
import rightWood from "@/assets/Images/faq/rightWood.png";
import board from "@/assets/Images/faq/board.png";
import stone1 from "@/assets/Images/faq/Stones/stone1.png";
import stone2 from "@/assets/Images/faq/Stones/stone2.png";
import stone3 from "@/assets/Images/faq/Stones/stone3.png";
import stone4 from "@/assets/Images/faq/Stones/stone4.png";

import Accordion from "@/Components/UI/Accordion";
import { faqs } from "@/utils/data";
import classNames from "classnames";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("faq");
  return (
    <div dir="rtl" className=" w-full  h-[55dvh] mt-10 flex relative">

        <Image src={stone1} alt="stone1" className="absolute bottom-10"/>
        <Image src={stone2} alt="stone2" className="absolute bottom-10 left-5"/>
        <Image src={stone3} alt="stone2" className="absolute top-2/3 left-10"/>
        <Image src={stone3} alt="stone2" className="absolute bottom-10 left-1/3"/>
        <Image src={stone4} alt="stone2" className="absolute bottom-10 left-1/2"/>
      <div className="w-7/12  h-2/3   ">
        <div
          dir="ltr"
          className="bg-boardFaq h-full w-full bg-no-repeat  bg-contain overflow-hidden relative rounded-xl"
        >
          <Image src={tree} alt="tree" className="absolute right-1/4" />
          <div className=" w-4/6 h-full z-10 flex p-5" dir="rtl">
            <Accordion
              className="w-11/12"
              items={faqs}
              type="single"
              defaultOpen={[0]}
            />
          </div>

          <Image src={alga} alt="alga" className="absolute -top-2 z-0" />
        </div>
      </div>
      <div className="w-3/12 h-2/3  flex justify-end px-5">
        <div className=" w-2/3 h-full  gap-2 px-2  relative">
          <Image
            src={leftWood}
            alt="wood right"
            className=" absolute left-5 -z-10 bottom-0 h-1/2"
          />

          <Image
            src={rightWood}
            alt="wood left"
            className=" absolute right-5 -z-10 bottom-0 h-1/2"
          />
          <div
            dir="rtl"
            className=" h-full flex justify-center items-center bg-boardFaq2 bg-center bg-no-repeat bg-contain "
          >
            <p className="text-white font-bold text-3xl">{t("FAQ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
