import React from 'react';
import bannerImage from "@/assets/Images/faq/banner.png"
import Image from "next/image";
import {useTranslations} from "next-intl";

function Banner() {
    const t= useTranslations("faqPage.banner")
    return (
        <section className="my-10 md:my-20 px-6 md:px-0">
            <div
                className="border-cream-medium border rounded-3xl mx-auto w-full md:w-4/5 xl:max-w-[75rem] bg-[#FEECD8]  flex flex-col md:flex-row  relative ">
                <div
                    className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/2 px-6 py-8 sm:pl-14 md:pl-0 sm:pr-14 sm:pt-12 sm:pb-20 relative z-[2] ">
                    <h4 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold xl:leading-10">
                        {t("title")}
                    </h4>
                    <div className="flex flex-col gap-8 items-center md:items-start">
                        <p className="text-sm lg:text-base text-justify">{t("description")}
                        </p>
                        <button
                            className="py-1.5 px-12 rounded-lg border bg-[#FEECD8]  w-fit border-cream-medium shadow-main shadow-cream-medium  text-cream-medium flex items-center justify-center gap-2">
                            <span>{t("contact-us")}</span>
                            <span className="icon icon-call"></span>
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <Image src={bannerImage} alt={"about banner"} className="mx-auto sm:w-96 lg:w-[530px] xl:absolute xl:-bottom-10 xl:left-2 "/>
                </div>
                <p className="absolute left-[clac(50%-30px)] opacity-20 max-md:hidden  font-bold text-7xl lg:text-9xl tracking-wide z-[1]   bottom-0 text-white">
                    BEHLAND
                </p>
            </div>
        </section>
    );
}

export default Banner;