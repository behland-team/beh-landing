"use client"
import React from 'react';
import logo from "../../../public/images/Logo.png";
import Image from "next/image";
import home from "@/assets/Images/home.svg"
import {useTranslations} from "next-intl";
import {AnimatePresence, motion} from "framer-motion";

interface MobileNavInterface {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileNav({open, setOpen}: MobileNavInterface) {
    const t = useTranslations("header");
    return (
        <AnimatePresence>
            {
                open && (<>
                    <div onClick={() => setOpen(false)}
                         className="lg:hidden h-screen w-full bg-black/50  fixed top-0 right-0 z-40">
                    </div>
                    <motion.div initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                key="menu"
                                transition={{ duration: 0.5}}
                                className="lg:hidden  h-screen w-4/5 md:w-2/5 bg-cream-light  fixed top-0 right-0  flex flex-col justify-between px-6 py-10 z-50">
                        <div className="flex flex-col gap-14">
                            <div className="flex items-center justify-between">
                                <Image src={logo} alt={"logg"} className={"w-16"}/>
                                <span
                                    className="icon icon-profile lg:hidden size-[40px]  text-xl text-cream-medium border-[2px] rounded-xl py-1 px-2 border-cream-medium bg-cream-light shadow-main shadow-cream-dark"></span>
                            </div>
                            <nav>
                                <ul className="flex flex-col gap-4">
                                    <li className="flex items-center gap-3">
                                        <Image src={home} alt={"home"} className="w-6"/>
                                        <span className={"text-cream-medium font-semibold"}> {t("home")}</span>
                                    </li>
                                    <hr className="text-gray-400"/>
                                    <li className="flex items-center gap-3">
                                        <Image src={home} alt={"home"} className="w-6"/>
                                        <span className={"text-text-gray font-semibold"}> {t("about")}</span>
                                    </li>
                                    <hr className="text-gray-400"/>
                                    <li className="flex items-center gap-3">
                                        <Image src={home} alt={"home"} className="w-6"/>
                                        <span className={"text-text-gray font-semibold"}> {t("contact")}</span>
                                    </li>
                                    <hr className="text-gray-400"/>
                                    <li className="flex items-center gap-3">
                                        <Image src={home} alt={"home"} className="w-6"/>
                                        <span className={"text-text-gray font-semibold"}> {t("news")}</span>
                                    </li>
                                    <hr className="text-gray-400"/>
                                    <li className="flex items-center gap-3">
                                        <Image src={home} alt={"home"} className="w-6"/>
                                        <span className={"text-text-gray font-semibold"}> {t("services")}</span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <button
                                className={"w-full flex justify-center items-center gap-2 rounded-lg border-2 space-x-2 font-bold shadow-main  hover:bg-cream-medium/80 hover:text-cream-light text-text-orange border-cream-medium outline-none py-1.5 "}>
                                <span className="icon icon-ranking"></span>
                                <span>
                                {t("login")}
                        </span>
                            </button>
                        </div>
                    </motion.div>
                </>)}
        </AnimatePresence>
    );
}

export default MobileNav;