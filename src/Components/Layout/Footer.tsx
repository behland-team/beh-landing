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
              <li className="text-sm font-semibold text-text-gray">{t("FAQ")}</li>
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
              <li className="text-sm font-semibold text-text-gray">{t("FAQ")}</li>
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
    </footer>
  );
}
