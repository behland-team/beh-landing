import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import logo from "../../../public/images/Logo.png";
export default function Header() {
  const t = useTranslations("header");
  return (
    <header className=" flex flex-wrap sm:justify-start sm:flex-nowrap w-full  justify-center items-start h-[10dvh]  bg-cream-light">
      <nav
        dir="rtl"
        className="max-w-[85rem]   mx-auto px-4 sm:flex sm:items-center sm:justify-between bg-header  bg-contain bg-center bg-no-repeat w-4/6 h-full"
      >
        <a
          className="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-white"
          href="#"
          aria-label="Brand"
        >
          <Image src={logo} alt="behland-logo" />
        </a>
        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
          <a
            className="font-medium text-text-black hover:text-gray-400 focus:outline-hidden focus:text-gray-400"
            href="#"
            aria-current="page"
          >
            {t("home")}
          </a>
          <a
            className="font-medium text-text-black hover:text-gray-400 focus:outline-hidden focus:text-gray-400"
            href="#"
          >
            {t("about")}
          </a>
          <a
            className="font-medium text-text-black hover:text-gray-400 focus:outline-hidden focus:text-gray-400"
            href="#"
          >
            {t("contact")}
          </a>
          <a
            className="font-medium text-text-black hover:text-gray-400 focus:outline-hidden focus:text-gray-400"
            href="#"
          >
            {t("FAQ")}
          </a>
          <a
            className="font-medium text-text-black hover:text-gray-400 focus:outline-hidden focus:text-gray-400"
            href="#"
          >
            {t("news")}
          </a>
          <a
            className="font-medium text-text-black hover:text-gray-400 focus:outline-hidden focus:text-gray-400"
            href="#"
          >
            {t("services")}
          </a>
        </div>
        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
          <span className="icon icon-language text-xl text-cream-medium border-2 rounded-full px-2 p-1 border-cream-medium bg-cream-light shadow-main"></span>

          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl shadow-main  hover:bg-cream-medium/80 text-text-orange font-bold p-2 rounded-2xl border-2 border-cream-medium bg-cream-light flex gap-2 items-center ">
            <span className="icon icon-ranking"></span>
            {t("login")}
          </button>
        </div>
      </nav>
    </header>
  );
}
