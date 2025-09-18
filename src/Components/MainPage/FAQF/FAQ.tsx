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
import stone5 from "@/assets/Images/faq/Stones/stone5.png";
import branch from "@/assets/Images/branch.png"
import grass from "@/assets/Images/faq/grass.png"
import littleGrass from "@/assets/Images/faq/grass2.png"

import Accordion from "@/Components/UI/Accordion";
import { faqs } from "@/utils/data";
import classNames from "classnames";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("faq");
  return (
      <div className="overflow-hidden">
          <div className="relative h-[200px] max-w-[440px] ml-auto md:hidden">
              <Image src={branch} alt={"branch"} className="w-full" />
              <Image src={board} alt={"board"} className="absolute h-28  xxs:h-[130px] left-1/2 -translate-x-1/2 top-16 xxs:top-20 -z-10" />
              <p className="absolute top-28 xxs:top-32 z-10 text-xl xxs:text-4xl text-center w-fit left-1/2 -translate-x-1/2 text-white font-bold ">سوالات متداول</p>
          </div>
          <div dir="rtl" className=" w-full  mt-10  md:px-10 lg:px-20  relative ">
              <div
                  className="absolute -bottom-40 left-0 w-full h-[380px] lg:h-[400px] 3xl:h-[450px] bg-island bg-no-repeat max-sm:bg-center  bg-cover  -z-30 "
              />
              <Image src={stone1} alt="stone1" className="absolute bottom-0 md:right-10 hidden md:block"/>
              <Image src={stone2} alt="stone2" className="absolute md:bottom-2 md:left-1/3 bottom-6 max-md:-right-5  z-10"/>
              <Image src={stone3} alt="stone2" className="absolute top-2/3 left-10 hidden md:block "/>
              <Image src={stone3} alt="stone2" className="absolute bottom-10 left-1/3 hidden md:block"/>
              <Image src={stone4} alt="stone2" className="absolute bottom-10 left-1/2 hidden md:block"/>
              <Image src={stone5} alt="stone5" className="absolute -bottom-5 left-4 md:hidden"/>
              <Image src={grass} alt="grass right" className="size-24 absolute right-2 bottom-36  z-30 md:hidden"/>
              <Image src={littleGrass} alt="grass left" className="w-14 absolute left-2   bottom-36 z-30 md:hidden "/>

              <div className="flex lg:justify-around max-w-screen-2xl xl:mx-auto">
                  <div className="h-[475px] xxs:h-[425px] sm:h-[470px] md:h-[550px] lg:h-[450px] xl:h-[420px] 3xl:h-[475px]"></div>
                  <div className="w-full px-6 md:px-0 sm:w-3/4 sm:mx-auto  lg:w-[550px] h-full xl:w-[724px] lg:h-full md:h-2/3 ">
                      <div
                          dir="ltr"
                          className="bg-boardFaq h-full w-full  bg-no-repeat  bg-cover lg:bg-contain xl:bg-cover overflow-hidden relative rounded-xl "
                      >
                          <Image src={tree} alt="tree" className="absolute right-0 hidden md:block lg:right-10 md:-right-4 xl:-right-4"/>
                          <div className="w-full md:w-11/12 h-full z-10 flex p-5 pb-10 items-start justify-center xl:justify-start" dir="rtl">
                              <Accordion
                                  className="w-full md:w-10/12 h-full"
                                  items={faqs}
                                  type="single"
                                  defaultOpen={[0]}
                              />
                          </div>

                          <Image src={alga} alt="alga" className="absolute -top-2  z-0 hidden md:block"/>
                      </div>
                  </div>
                  <div className="w-full md:flex md:items-center md:justify-end lg:w-4/12 px-5  hidden mb-44 ">
                      <div className=" w-full  gap-2 px-2  relative overflow-hidden h-2/3 lg:h-full mt-auto max-w-[260px] ">
                          <Image
                              src={leftWood}
                              alt="wood right"
                              className=" absolute left-5 -z-10 bottom-0 "
                          />

                          <Image
                              src={rightWood}
                              alt="wood left"
                              className=" absolute right-5 -z-10 bottom-0 "
                          />
                          <div className="absolute -top-3">
                              <Image src={board} alt={"board"} />
                              <p className="absolute z-20 text-xl xxs:text-3xl text-center  left-1/2 -translate-x-1/2 text-white font-bold top-10 text-nowrap">سوالات متداول</p>
                          </div>
                          <Image
                              src={grass}
                              alt="grass right"
                              className="size-28 absolute right-8 bottom-0 "
                          />
                          <Image
                              src={littleGrass}
                              alt="grass left"
                              className="w-14 absolute left-8   bottom-0 "
                          />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
