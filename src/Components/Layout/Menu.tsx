import React from 'react';
import Image from "next/image";
import logo from "../../../public/images/Logo.png";
import {useTranslations} from "next-intl";
import Link from 'next/link';
import MenuLink from "@/Components/Layout/MenuLink";

function Menu() {
    const t = useTranslations("header");
    return (
        <div
            className="fixed top-0 left-1/2 -translate-x-1/2 z-50 flex w-full  justify-center items-center  xl:max-w-screen-2xl xl:mx-auto max-w-[440px] md:max-w-full mx-auto pt-[18px] pb-[14px] lg:py-0 h-24  md:h-[10dvh]  lg:h-[15dvh] ">
            <nav
                dir="rtl"
                className=" max-w-[85rem] w-full mx-6  lg:mx-auto px-4 flex items-center justify-between bg-headerMobile md:bg-header bg-contain  bg-center bg-no-repeat md:w-5/6 lg:w-[90%]  xl:w-4/5 h-full">
                {/*<MobileNavBtn/>*/}
                <Link
                    className="font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-white md:flex-1  flex-none lg:flex-none"
                    href="/"
                    aria-label="Brand">
                    <Image src={logo} alt="behland-logo" className="my-2 md:my-0"/>
                </Link>
                <span
                    className="icon icon-profile md:hidden size-[40px]   text-xl text-cream-medium border-[2px] rounded-xl py-1 px-2 border-cream-medium bg-cream-light shadow-main shadow-cream-dark">
                </span>
                <div
                    className="lg:flex flex-row items-center gap-1  xl:gap-3 mt-5 sm:justify-end sm:mt-0 sm:ps-5 hidden">
                   <MenuLink href={"/"}>
                       {t("home")}
                   </MenuLink>
                    <span className="rotate-[105deg] h-px w-4 bg-gray-500"></span>
                    {/*<Link*/}
                    {/*    className="font-medium text-text-black lg:text-sm xl:text-base hover:text-gray-400 focus:outline-hidden focus:text-gray-400"*/}
                    {/*    href="#">*/}
                    {/*    {t("services")}*/}
                    {/*</Link>*/}
                    {/*<span className="rotate-[105deg] h-px w-4 bg-gray-500"></span>*/}
                    <MenuLink href={"/#character"}>
                        {t("character")}
                    </MenuLink>
                    <span className="rotate-[105deg] h-px w-4 bg-gray-500"></span>
                    <MenuLink href={"/faq"}>
                        {t("FAQ")}
                    </MenuLink>
                    <span className="rotate-[105deg] h-px w-4 bg-gray-500"></span>
                    <MenuLink href={"/blog"}>
                        {t("news")}
                    </MenuLink>
                    <span className="rotate-[105deg] h-px w-4 bg-gray-500"></span>
                    <MenuLink href={"/contacts"}>
                        {t("contact")}
                    </MenuLink>
                    <span className="rotate-[105deg] h-px w-4 bg-gray-500"></span>
                    <MenuLink href={"/about"}>
                        {t("about")}
                    </MenuLink>
                </div>
                <div></div>
                {/* <div className="md:flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5 hidden">
                    <span
                        className="icon icon-language text-xl text-cream-medium border-2 rounded-full px-2 p-1 border-cream-medium bg-cream-light shadow-main"></span>
                    <button
                        className=" shadow-main  hover:bg-cream-medium/80 hover:text-cream-light text-text-orange font-medium text-sm p-2 rounded-xl border-2 border-cream-medium bg-cream-light flex gap-2 items-center ">
                        <span className="icon icon-ranking"></span>
                        {t("login")}
                    </button>
                </div> */}
            </nav>
        </div>
    );
}

export default Menu;