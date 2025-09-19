import React from 'react';
import Link from "next/link";
import Image from "next/image";
import services from "@/assets/Images/document-text.svg"
import news from "@/assets/Images/call-calling.svg"
import faq from "@/assets/Images/messages.svg"
import about from "@/assets/Images/like.svg"
import logo from "../../../public/images/Logo.png";
import {useTranslations} from "next-intl";
function MobileMenu() {
    const t = useTranslations("header");
    return (
            <div className="fixed  w-full bottom-0 left-0 right-0  h-28 z-50 bg-mobileMenuBg bg-no-repeat bg-bottom lg:hidden  ">
                <div className="absolute top-6 translate-x-1/2 right-1/2">
                    <Link href={"#"} className="flex flex-col items-center gap-1.5 self-start">
                        <Image src={logo} alt={"login"} className=""/>
                        <p className="text-xs text-cream-medium font-semibold">{t("mobileLogin")}</p>
                    </Link>
                </div>
                <nav  dir="rtl" className="grid grid-cols-5 absolute top-10 left-0 w-full h-20 px-1 xxs:px-6 py-3">
                    <Link href={"#"} className="flex flex-col items-center gap-1.5">
                        <Image src={services} alt={"services"} className="size-6"/>
                        <p className="text-xs text-text-gray">{t("services")}</p>
                    </Link>
                    <Link href={"#"} className="flex flex-col items-center gap-1.5">
                        <Image src={news} alt={"news"} className="size-6"/>
                        <p className="text-xs text-text-gray">{t("news")}</p>
                    </Link>
                    <div></div>
                    <Link href={"#"} className="flex flex-col items-center gap-1.5">
                        <Image src={about} alt={"about"} className="size-6"/>
                        <p className="text-xs text-text-gray">{t("about")}</p>
                    </Link>
                    <Link href={"#"} className="flex flex-col items-center gap-1.5">
                        <Image src={faq} alt={"faq"} className="size-6"/>
                        <p className="text-xs text-text-gray">{t("FAQ")}</p>
                    </Link>
                </nav>
            </div>
    );
}

export default MobileMenu;