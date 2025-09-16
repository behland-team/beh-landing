import React from "react";
import {useTranslations} from "next-intl";
import Image from "next/image";
import logo from "../../../public/images/Logo.png";

export default function Header() {
    const t = useTranslations("header");
    return (
        <header
            className=" flex  w-full  justify-center items-center pt-[18px] pb-[14px] lg:py-0 h-24  md:h-[10dvh]  lg:h-[12dvh]  bg-cream-light">
            <nav
                dir="rtl"
                className="max-w-[85rem] w-full mx-6  lg:mx-auto px-4 flex items-center justify-between bg-headerMobile md:bg-header bg-contain  bg-center bg-no-repeat md:w-5/6  xl:w-4/6 h-full"
            >
                <span
                    className="icon icon-profile lg:hidden size-[40px]  text-xl text-cream-medium border-[2px] rounded-xl py-1 px-2 border-cream-medium bg-cream-light shadow-main shadow-cream-dark">

                </span>
                <a
                    className="font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-white md:flex-1  flex-none lg:flex-none"
                    href="#"
                    aria-label="Brand"
                >
                    <Image src={logo} alt="behland-logo" className="my-2 md:my-0"/>
                </a>
                <span
                    className="icon icon-profile md:hidden size-[40px]   text-xl text-cream-medium border-[2px] rounded-xl py-1 px-2 border-cream-medium bg-cream-light shadow-main shadow-cream-dark">
                </span>
                <div className="lg:flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5 hidden">
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
                <div className="md:flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5 hidden">
                    <span
                        className="icon icon-language text-xl text-cream-medium border-2 rounded-full px-2 p-1 border-cream-medium bg-cream-light shadow-main"></span>

                    <button
                        className=" shadow-main  hover:bg-cream-medium/80 hover:text-cream-light text-text-orange font-medium text-sm p-2 rounded-xl border-2 border-cream-medium bg-cream-light flex gap-2 items-center ">
                        <span className="icon icon-ranking"></span>
                        {t("login")}
                    </button>
                </div>
            </nav>
        </header>
    );
}
