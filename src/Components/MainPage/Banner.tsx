import React from "react";
import { useTranslations } from "next-intl";

export default function Banner() {
  const t = useTranslations("Banner");
  const tHeader = useTranslations("header");

  return (
    <div className="w-full h-[100dvh] bg-cream-light pt-5 bg-bannerBg bg-cover  bg-no-repeat bg-center">
      <div className="h-1/2 flex flex-col items-center font-semibold">
        <h3 className=" text-3xl text-text-dark_Orange">{t("title1")}</h3>
        <span className="flex flex-row-reverse  text-4xl text-text-black mt-3">
          <h3 className="">{t("title21")} </h3>
          <h3 className="bg-text-bg p-1">{t("title22")} </h3>
        </span>
        <p className="text-center mt-5 w-1/3 text-text-light_black  text-xl">
          {t("description")}
        </p>

        <button className=" mt-5 px-5 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl shadow-main hover:bg-cream-medium/80 text-text-orange font-bold p-2 rounded-2xl border-2 border-cream-medium bg-cream-light flex gap-2 items-center ">
          {tHeader("login")}
          <span className="icon icon-profile text-xl font-bold"></span>
        </button>
      </div>
    </div>
  );
}
