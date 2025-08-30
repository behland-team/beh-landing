import { useTranslations } from "next-intl";
import React from "react";

export default function Characters() {
  const t = useTranslations("characters");
  return (
    <div
      dir="rtl"
      className=" p-10 bg-CharBg bg-cover bg-no-repeat bg-center bg-cream-light"
    >
      <h2 className="text-3xl text-black font-semibold">{t("title")}</h2>
      <div className="w-full flex flex-wrap justify-between items-center gap-5 mt-4">
        <p className=" text-center text-text-gray text-base font-semibold">
          {t("description")}
        </p>
        <div className="flex items-center gap-4">
          <span className="border-2 shadow-main p-1 rounded-xl bg-white border-text-dark_Orange icon icon-arrow_back text-text-orange">
          </span>
          <span className=" border-2 shadow-main rounded-xl bg-white border-text-dark_Orange   ">
            <span className="icon icon-arrow_back text-text-orange rotate-180 p-1"></span>
          </span>
        </div>
      </div>

      <div>
        <div className="w-full flex flex-wrap justify-center items-center gap-5 mt-10 ">
          {[1, 2, 3, 4].map((item, index) => (
            <div
              key={index}
              className="w-56 h-80  rounded-3xl shadow-main flex flex-col justify-center items-center p-2 bg-card bg-cover bg-center bg-no-repeat"
            >
           
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
