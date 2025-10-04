import React from 'react';
import Image from "next/image";
import behCow from "@/assets/Images/beh/‌‌‌behcow.png";
import behDank from "@/assets/Images/beh/Behdank.png"
import vector from "@/assets/Images/shapeVector.svg";
import {useTranslations} from "next-intl";

function Banner() {
    const t = useTranslations("characterPage.banner");
    return (
        <section className="my-5  px-3 xxs:px-6 lg:px-0">
            <div
                className="border-cream-medium border rounded-3xl mx-auto w-full lg:w-4/5 xl:max-w-[75rem] bg-[#FEECD8]  flex flex-col-reverse md:flex-row relative ">
                <div
                    className="flex flex-col gap-2 md:gap-4 w-full md:w-1/2 px-6 py-8 sm:pl-14 md:pl-0 sm:pr-14 sm:pt-12 sm:pb-20 relative z-[2]  max-md:pt-0">
                    <p className="text-cream-medium font-semibold max-xxs:text-sm md:text-lg lg:text-xl">{t("meetCharacter")}</p>
                    <h4 className="xxs:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold xl:leading-10">
                        {t("story")} , <span className="md:bg-[#BD5300]/30">{t("experience")}</span>
                    </h4>
                    <p className="text-sm lg:text-base text-justify text-[#404040]">{t("description")}
                    </p>
                </div>
                <div className="md:w-1/2 max-md:min-h-72 relative flex items-center justify-center overflow-hidden max-lg:border-2 max-lg:rounded-lg max-lg:border-cream-medium max-lg:m-6 max-lg:bg-[#F3D9BE] ">
                    <Image src={vector} alt={"vector"} className="hidden lg:block absolute top-5 left-0"/>
                    <Image src={behCow} alt={"behcow"}
                           className="max-w-52 xxs:max-w-60 mx-auto md:mx-0 lg:max-w-[500px] absolute max-xxs:bottom-0 lg:bottom-0 translate-x-2/4 lg:translate-x-1/3 right-1/4 lg:right-1/3 2xl:right-[40%]"/>
                    <Image src={behDank} alt={"behDank"}
                           className="max-w-52 xxs:max-w-64 mx-auto md:mx-0 lg:max-w-[500px] absolute max-xxs:bottom-0 lg:bottom-0 translate-x-1/3 right-2/3"/>
                </div>
                <p className="absolute left-[clac(50%-30px)] opacity-20  font-bold text-7xl lg:text-9xl tracking-wide z-[1] max-md:hidden  bottom-0 text-white">
                    BEHLAND
                </p>
            </div>
        </section>
    );
}

export default Banner;