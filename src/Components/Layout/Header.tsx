import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import logo from "../../../public/images/Logo.png";
export default function Header() {
  const t = useTranslations("header");
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full  justify-center items-start h-[10dvh]  bg-cream-light">
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
            className="font-medium text-blue-500 focus:outline-hidden"
            href="#"
            aria-current="page"
          >
            {t("home")}
          </a>
          <a
            className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            href="#"
          >
            {t("about")}
          </a>
          <a
            className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            href="#"
          >
            {t("contact")}
          </a>
          <a
            className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            href="#"
          >
            {t("FAQ")}
          </a>
          <a
            className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            href="#"
          >
            {t("news")}
          </a>
          <a
            className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            href="#"
          >
            {t("services")}
          </a>
        </div>
        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
          <button
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            <span className="icon icon-language">

            </span>
         
          </button>
        </div>
      </nav>
    </header>
  );
}
