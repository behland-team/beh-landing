"use client";
import React from 'react';
import {SocialMedia} from "@/utils/data";
import classNames from "classnames";
import {useTranslations} from "next-intl";
import  alga from "@/assets/Images/alga.png";
import Image from "next/image";
import {toast} from "sonner";

function Footer() {
    const t = useTranslations("footer");
    return (
        <footer dir={"rtl"} className="mb-10">
            <div className="max-w-[75rem] mx-auto bg-[#FEECD8] lg:rounded-xl px-6 py-6 md:px-12 md:py-8 relative">
                <Image src={alga} alt={"alga"} className="max-md:hidden absolute -top-2 left-0"/>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0  rounded-t-xl  bg-white px-3">
                    <p className="text-xs xxs:text-sm md:text-base text-center opacity-50 max-lg:hidden">کلیه حقوق برای به‌لند محفوظ است</p>
                </div>
                <div
                    className="grid max-sm:grid-cols-4 grid-cols-2  lg:grid-cols-3 lg:grid-rows-2 max-sm:gap-x-0 gap-7 lg:gap-5 items-start xl:max-w-screen-2xl xl:mx-auto">
                    <div className="col-span-full md:col-span-1 flex row-start-1 flex-col gap-2 lg:row-span-full">
                        <h4 className="text-base  font-extrabold text-balck">🔥 {t("aboutBeh")}</h4>
                        <p className="text-sm font-normal text-justify text-text-gray">
                            {t("descriptionBeh")}
                        </p>
                    </div>
                    <div className="grid max-sm:col-span-3 col-span-full md:col-span-1  w-full lg:row-span-full ">
                        <div className="flex xxs:gap-10 gap-5 items-center justify-evenly lg:justify-center">
                            <div className="flex flex-col items-center justify-around gap-5">
                                <h4 className="text-base font-extrabold text-text-gray">
                                    {t("services")}
                                </h4>
                                <ul className="list-disc flex flex-col gap-2 list-inside px-1">
                                    <li className="text-sm font-semibold text-text-gray">
                                        {t("contactUs")}
                                    </li>
                                    <li className="text-sm font-semibold text-text-gray">
                                        {t("FAQ")}
                                    </li>
                                    <li className="text-sm font-semibold text-text-gray">
                                        {t("aboutUs")}
                                    </li>
                                    <li className="text-sm font-semibold text-text-gray">
                                        {t("news")}
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col items-center justify-around gap-5">
                                <h4 className="text-base font-extrabold text-text-gray">
                                    {t("services")}
                                </h4>
                                <ul className="list-disc flex flex-col gap-2 list-inside px-1">
                                    <li className="text-sm font-semibold text-text-gray">
                                        {t("contactUs")}
                                    </li>
                                    <li className="text-sm font-semibold text-text-gray">
                                        {t("FAQ")}
                                    </li>
                                    <li className="text-sm font-semibold text-text-gray">
                                        {t("aboutUs")}
                                    </li>
                                    <li className="text-sm font-semibold text-text-gray">
                                        {t("news")}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-span-full max-sm:col-span-1 md:col-span-1  lg:row-span-1  flex items-center flex-col justify-center gap-2 lg:items-start">
                        <p className="text-base lg:font-semibold max-sm:hidden">
                            {t("socialMedia")}
                        </p>
                        <div className="flex max-sm:flex-col justify-start items-start gap-5">
                            {SocialMedia.map((item, index) => (
                                <div
                                    key={index}
                                    className={classNames("flex gap-3 border-2  shadow-icon  p-2 rounded-xl", item.disable ? "text-text-gray shadow shadow-text-gray border-text-gray" : "text-cream-medium border-cream-medium bg-white ")}
                                >
                                  <span
                                      className={classNames(
                                          item.name == "instagram"
                                              ? "icon-instagram"
                                              : item.name == "facebook"
                                                  ? "icon-facebook"
                                                  : item.name == "linkedin"
                                                      ? "icon-linkedin"
                                                      : "icon-twitter",
                                          "icon "
                                      )}
                                  ></span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-full md:col-span-1   space-y-1 ">
                        <p className="text-base font-semibold">{t("newslatter")}</p>
                        <div
                            className="flex items-center justify-between  w-full rounded-lg overflow-hidden   border p-1  bg-white border-gray-500 ">
                            <input
                                type="email"
                                placeholder="ایمیل خود را وارد کنید"
                                className="rounded-full border-0 bg-transparent outline-none w-full mx-1 placeholder:text-sm"
                            />
                            <button type="button"
                                onClick={()=>{
                                    toast.custom(t=>(
                                        <div className="border-2 border-cream-medium flex items-center relative bg-[#FEECD8] px-12 py-2 rounded-lg min-h-16">
                                            <p className="text-sm font-semibold">ایمیل شما با موفقیت ثبت شد ✔</p>
                                        </div>
                                    ))
                                }}
                                className="rounded-lg border-2 text-cream-medium border-cream-medium px-6 text-sm p-1 m-0.5 bg-cream-dark_light cursor-pointer ">
                                ارسال
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-sm:h-16 max-lg:h-24 bg-[#FEECD8]"></div>
        </footer>
    );
}

export default Footer;