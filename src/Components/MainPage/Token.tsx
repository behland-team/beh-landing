import {saleStages} from "@/utils/data";
import {useTranslations} from "next-intl";
import React, {FunctionComponent} from "react";

import Crown from "@/assets/Images/WhyBehCrown.svg"
import WhyBehBg from "@/assets/Images/WhyBehMobile.png"
import Image from "next/image";
import classNames from "classnames";

interface TokenProps {
}

export const Token: FunctionComponent<TokenProps> = () => {
    const t = useTranslations("token");
    return (
        <div dir="rtl" className="my-16">
            <div className="w-[clac(100%-48px)] flex flex-col justify-center items-center gap-5 relative mx-6 ">
                <Image src={WhyBehBg} alt={"background"} className="absolute top-0 left-0 w-full h-full md:hidden"/>
                <Image src={Crown} alt={"Wht Beh"}
                       className="absolute -top-8 left-1/2 -translate-x-1/2 md:hidden z-10"/>
                <div className="z-20 flex items-center flex-col gap-2 px-8 py-10 text-center">
                    <p className="text-text-gray text-lg md:text-2xl lg:text-3xl font-semibold">{t("title")}</p>
                    <p className="text-text-gray text-sm md:text-base font-semibold  lg:w-1/2 xl:w-2/3">
                        {t("description")}
                    </p>
                </div>
                <div className="absolute -bottom-2 z-20 flex items-center justify-center gap-3 left-1/2 -translate-x-1/2 md:hidden">
                    <button
                        aria-label="Slide back"
                        className="border-2 shadow-main p-2 rounded-xl bg-white border-text-dark_Orange icon icon-arrow_back text-text-orange"
                    ></button>
                    <button
                        aria-label="Slide forward"
                        className="border-2 shadow-main rounded-xl bg-white border-text-dark_Orange"
                    >
                        <span className="icon icon-arrow_back text-text-orange rotate-180 p-2"></span>
                    </button>
                </div>
            </div>
            <div>
                <div className="md:grid md:grid-cols-12 flex gap-4 overflow-x-auto md:overflow-visible w-full p-10 xl:p-20  ">
                    {saleStages.map((stage, index) => (
                        <div className={classNames(" flex justify-end items-center relative flex-col shrink-0 w-72 md:w-full" , index <3 ? "md:col-span-6 lg:col-span-4 xl:h-60 h-72" : "lg:col-span-4 xl:col-span-3 md:col-span-6 h-72")} key={index}>
                            <div
                                className="rounded-xl bg-cardBg bg-cover w-full bg-no-repeat p-5 h-5/6   flex justify-end items-center shadow-main"
                            >
                                <div
                                    className="bg-crown bg-contain bg-no-repeat bg-center absolute top-1 left-0 h-2/6 w-full flex justify-center items-center">
                                    <p className="text-sm md:text-base font-bold text-[#893D1B]">
                                        {" "}
                                        {stage.title}
                                    </p>
                                </div>
                                <div className={classNames("flex flex-col justify-end w-full h-full",index <3 ? "items-stretch gap-2  xl:items-center xl:gap-5" :"items-stretch gap-2" )}>
                                    <div className={classNames("flex flex-nowrap gap-2 text-sm text-right", index <3  ? " flex-col items-stretch xl:flex-row xl:items-center" :"flex-col items-stretch")}>
                  <span className="bg-[#EAE3CC] text-text-gray text-base font-semibold p-2 rounded-md text-center">
                    تعداد: {stage.tokens}
                  </span>
                                        <span
                                            className="bg-[#FEE6BD] text-text-gray text-base font-semibold p-2 rounded-md text-center">
                    قیمت: {stage.price}
                  </span>
                                    </div>

                                    <p className={classNames(" bg-[#F0E3D5] rounded-lg p-2 text-text-gray text-right leading-relaxed  font-semibold" , index <3 ? "text-base" : "text-sm")}>
                                        {stage.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};
