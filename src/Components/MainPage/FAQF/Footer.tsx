<<<<<<< HEAD
import { SocialMedia } from "@/utils/data";
=======
"use client";
import {SocialMedia} from "@/utils/data";
>>>>>>> origin/development
import classNames from "classnames";
import { useTranslations } from "next-intl";
import React from "react";
<<<<<<< HEAD
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer
      dir="rtl"
      className="bg-gradient-to-b from-[#54E2D9] to-white px-6 py-12 md:px-10 lg:px-16 xl:px-24 lg:py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-7 lg:gap-5 items-start xl:max-w-screen-2xl xl:mx-auto">
        <div className="col-span-1 flex row-start-1 flex-col gap-2 lg:row-span-full">
          <h4 className="text-base font-extrabold text-balck">{t("aboutBeh")}</h4>
          <p className="text-sm font-normal text-text-gray">{t("descriptionBeh")}</p>
        </div>
        {/* Services */}
        <div className="grid col-span-1 w-full lg:row-span-full">
          <div className="flex flex-col items-center justify-around gap-5 lg:items-start">
            <h4 className="text-base font-extrabold text-text-gray">{t("services")}</h4>
            <ul className="list-disc flex flex-col gap-2 list-inside px-1">
              <li>
                <Link href="/contacts" className="text-sm font-semibold text-text-gray">
                  {t("contactUs")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm font-semibold text-text-gray">
                  {t("FAQ")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm font-semibold text-text-gray">
                  {t("aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm font-semibold text-text-gray">
                  {t("news")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-1 lg:row-span-1 flex items-center flex-col justify-center gap-2 lg:items-start">
          <p className="text-base lg:font-semibold">{t("socialMedia")}</p>
          <div className="flex justify-start items-start gap-5">
            {SocialMedia.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 border-2 border-cream-medium shadow-icon bg-cream-dark_light p-2 rounded-xl"
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
                    "icon text-cream-medium"
                  )}
                ></span>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1 row-start-2 lg:row-start-2 lg:row-span-1 space-y-1">
          <p className="text-base font-semibold">{t("newslatter")}</p>
          <div className="flex items-center justify-between w-full rounded-xl overflow-hidden border border-gray-500">
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="rounded-xl border-0 bg-transparent outline-none w-full mx-1 placeholder:text-sm"
            />
            <button className="rounded-xl border-2 text-cream-medium border-cream-medium px-6 text-sm p-2 bg-cream-dark_light">
              ارسال
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-lg:h-24"></div>
    </footer>
  );
}
=======
import {toast} from "sonner";

export default function Footer() {
    const t = useTranslations("footer");
    return (
        <footer dir="rtl"
                className=" bg-gradient-to-b  from-[#54E2D9]  to-white px-6 py-12  md:px-10 lg:px-16 xl:px-24 lg:py-16 ">
            <div
                className="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 lg:grid-rows-2 gap-7 lg:gap-5 items-start xl:max-w-screen-2xl xl:mx-auto">
                <div className="col-span-1 flex row-start-1 flex-col gap-2 lg:row-span-full">
                    <h4 className="text-base font-extrabold text-balck">{t("aboutBeh")}</h4>
                    <p className="text-sm font-normal text-text-gray text-justify">
                        {t("descriptionBeh")}
                    </p>
                </div>
                <div className="grid col-span-1  w-full lg:row-span-full ">
                    <div className="flex gap-10 items-center justify-evenly lg:justify-center">
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
                    className="col-span-1  lg:row-span-1  flex items-center flex-col justify-center gap-2 lg:items-start">
                    <p className="text-base lg:font-semibold ">
                        {t("socialMedia")}
                    </p>
                    <div className="flex  justify-start items-start gap-5">
                        {SocialMedia.map((item, index) => (
                            <a
                                target="_blank"
                                href={item.link}
                                key={index}
                                className={classNames("flex gap-3 border-2 shadow-icon  p-2 rounded-xl", item.disable ? "text-text-gray shadow shadow-text-gray border-text-gray" : "text-cream-medium border-cream-medium bg-white ")}
                            >
              <span
                  className={classNames(
                      item.name == "instagram"
                          ? "icon-instagram"
                          : item.name == "telegram"
                              ? "icon-telegram"
                              : item.name == "linkedin"
                                  ? "icon-linkedin"
                                  : "icon-twitter",
                      "icon "
                  )}
              ></span>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="col-span-1 row-start-2  lg:row-start-2 lg:row-span-1 space-y-1 ">
                    <p className="text-base font-semibold">{t("newslatter")}</p>
                    <div
                        className="flex items-center justify-between  w-full rounded-xl overflow-hidden   border border-gray-500 ">
                        <input
                            type="email"
                            placeholder="ایمیل خود را وارد کنید"
                            className="rounded-xl border-0 bg-transparent outline-none w-full mx-1 placeholder:text-sm"
                        />
                        <button
                            type="button"
                            onClick={() => {
                            toast.custom(t => (
                                <div
                                    className="border-2 border-cream-medium flex items-center relative overflow-hidden bg-[#FEECD8] px-12 py-2 rounded-lg min-h-16">
                                    <p className="text-sm font-semibold">ایمیل شما با موفقیت ثبت شد ✔</p>
                                </div>
                            ))
                        }}
                                className="rounded-xl border-2 text-cream-medium border-cream-medium px-6 text-sm p-2  bg-cream-dark_light cursor-pointer ">
                            ارسال
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full max-lg:h-24"></div>
        </footer>
    );
}
>>>>>>> origin/development
