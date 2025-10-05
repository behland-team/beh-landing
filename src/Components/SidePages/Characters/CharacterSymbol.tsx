import React from 'react';
import crown from "@/assets/Images/WhyBehCrown.svg"
import Image from "next/image";
import {useTranslations} from "next-intl";

function CharacterSymbol() {
    const t = useTranslations("characterPage.symbol")
    const data = Array.from({length: 5})
    return (
        <section className="my-20">
            <div
                className="3xl:max-w-[85rem] lg:max-w-[75rem] mx-auto max-xl:px-6  flex flex-col lg:flex-row items-stretch">
                <div className="lg:w-4/5 bg-storyBg relative lg:min-h-[580px] ">
                    <Image src={crown} alt={"crown"} className="left-1/2 -translate-x-1/2 -top-8 absolute"/>
                    <div className="px-3 xxs:px-6 lg:px-14 py-10 lg:py-20  space-y-4 lg:w-3/4">
                        <h2 className="text-base xxs:text-lg sm:text-xl lg:text-2xl font-bold">{t("title")}</h2>
                        <p className="text-sm md:text-base  text-justify font-semibold text-[#313131] leading-[32px] lg:leading-[40px]">
                            {t("description")}
                        </p>
                    </div>
                </div>
                <div className="lg:1/5 relative">
                    <div className="lg:absolute -right-64 top-8">
                        <ul className="flex flex-col gap-4">
                            {
                                data.map((_, index) => (
                                    <li key={index}
                                        className="bg-white rounded-xl border border-cream-medium py-3 px-4 flex items-center gap-4">
                                        <div  className="rounded-full size-14 md:size-16 bg-gray-200 shrink-0" />
                                        <div className="space-y-2.5">
                                            <h5 className="text-sm xxs:text-base md:text-lg font-semibold">به‌بول  Behbull : </h5>
                                            <p className="text-xs xxs:text-sm md:text-base font-semibold text-[#848484] xxs:text-nowrap">نشان‌دهنده قدرت،
                                                حمایت و مسیر یادگیری تازه‌واردها</p>
                                        </div>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CharacterSymbol;