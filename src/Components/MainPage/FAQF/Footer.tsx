import { SocialMedia } from "@/utils/data";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import React from "react";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer dir="rtl" className="grid grid-cols-3 ">
      <div className="grid col-span-1  gap-5">
        <h4 className="text-base font-extrabold text-balck">{t("aboutBeh")}</h4>
        <p className="text-sm font-normal text-text-gray">
          {t("descriptionBeh")}
        </p>
      </div>
      <div className="grid col-span-1  w-full ">
        <div className="flex gap-10 items-center justify-center">
          <div className="flex flex-col items-center justify-around gap-5">
            <h4 className="text-base font-extrabold text-text-gray">
              {t("services")}
            </h4>
            <ul className="list-disc flex flex-col gap-2">
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
          <div className="flex flex-col items-center justify-around gap-5 ">
            <h4 className="text-base font-extrabold text-balck">
              {t("services")}
            </h4>
            <ul className="list-disc flex flex-col gap-2">
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
      <div className="grid col-span-1 flex-col  gap-3 ">
        <p className="text-base font-extrabold text-balck">
          {t("socialMedia")}
        </p>
        <div className="flex  justify-start items-start gap-5">
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
        <p className="text-base font-extrabold text-balck">{t("newslatter")}</p>
        <div className="flex items-center justify-between md:w-4/6 w-full rounded-2xl overflow-hidden bg-[#FFFFFF26]/30 p-2 border border-gray-500 ">
          <input
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            className="rounded-full border-0"
          />
          <button className="text-black rounded-lg border border-cream-medium px-4 p-2 bg-cream-dark_light shadow-icon">
            ارسال
          </button>
        </div>
      </div>
    </footer>
  );
}
