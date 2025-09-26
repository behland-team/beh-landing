"use client";
import React from 'react';
import {SocialMedia} from "@/utils/data";
import classNames from "classnames";
import {useTranslations} from "next-intl";
import alga from "@/assets/Images/alga.png";
import Image from "next/image";
import {toast} from "sonner";

function Footer() {
  const t = useTranslations("footer");
  return (
    <footer dir={"rtl"} className="mb-10">
      <div className="max-w-[75rem] mx-auto bg-[#FEECD8] lg:rounded-xl px-6 py-6 md:px-12 md:py-8 relative">
        <Image src={alga} alt={"alga"} className="max-md:hidden absolute -top-2 left-0" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 rounded-t-xl bg-white px-3">
          <p className="text-xs xxs:text-sm md:text-base text-center opacity-50 max-lg:hidden">
            کلیه حقوق برای به‌لند محفوظ است
          </p>
        </div>

        <div className="grid max-sm:grid-cols-4 grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 max-sm:gap-x-0 gap-7 lg:gap-5 items-start xl:max-w-screen-2xl xl:mx-auto">
          <div className="col-span-full md:col-span-1 flex row-start-1 flex-col gap-2 lg:row-span-full">
            <h4 className="text-base font-extrabold text-black">🔥 {t("aboutBeh")}</h4>
            <p className="text-sm font-normal text-justify text-text-gray">{t("descriptionBeh")}</p>
          </div>

          <div className="grid max-sm:col-span-3 col-span-full md:col-span-1 w-full lg:row-span-full">
            <div className="flex xxs:gap-10 gap-5 items-center justify-evenly lg:justify-center">
              <div className="flex flex-col items-center justify-around gap-5">
                <h4 className="text-base font-extrabold text-text-gray">{t("services")}</h4>
                <ul className="list-disc flex flex-col gap-2 list-inside px-1">
                  <li className="text-sm font-semibold text-text-gray">{t("contactUs")}</li>
                  <li className="text-sm font-semibold text-text-gray">{t("FAQ")}</li>
                  <li className="text-sm font-semibold text-text-gray">{t("aboutUs")}</li>
                  <li className="text-sm font-semibold text-text-gray">{t("news")}</li>
                </ul>
              </div>

              <div className="flex flex-col items-center justify-around gap-5">
                <h4 className="text-base font-extrabold text-text-gray">{t("services")}</h4>
                <ul className="list-disc flex flex-col gap-2 list-inside px-1">
                  <li className="text-sm font-semibold text-text-gray">{t("contactUs")}</li>
                  <li className="text-sm font-semibold text-text-gray">{t("FAQ")}</li>
                  <li className="text-sm font-semibold text-text-gray">{t("aboutUs")}</li>
                  <li className="text-sm font-semibold text-text-gray">{t("news")}</li>
                </ul>
              </div>
            </div>
