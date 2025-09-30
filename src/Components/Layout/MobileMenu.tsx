import React from 'react';
import Image from "next/image";
import services from "@/assets/Images/document-text.svg"
import news from "@/assets/Images/call-calling.svg"
import faq from "@/assets/Images/messages.svg"
import about from "@/assets/Images/like.svg"
import logo from "../../../public/images/Logo.png";
import {useTranslations} from "next-intl";
import MenuLink from "@/Components/Layout/MenuLink";
function MobileMenu() {
    const t = useTranslations("header");
    return (
            <div className="fixed  w-full bottom-0 left-0 right-0  h-28 z-50 bg-mobileMenuBg bg-no-repeat bg-bottom lg:hidden  ">
                <div className="absolute top-6 translate-x-1/2 right-1/2 z-10">
                    <MenuLink href={"/"} className="flex flex-col items-center gap-1.5 self-start">
                        <Image src={logo} alt={"login"} className=""/>
                        {/*<p className="text-xs text-cream-medium font-semibold">{t("mobileLogin")}</p>*/}
                        <p className="text-xs  font-semibold">خانه</p>
                    </MenuLink>
                </div>
                <nav  dir="rtl" className="grid grid-cols-5 absolute top-10 left-0 w-full h-20 px-1 xxs:px-6 py-3">
                    <MenuLink href={"/contacts"} className="flex flex-col items-center gap-1.5 data-[state=active]:font-semibold">
                        <Image src={news} alt={"news"} className="size-6 rounded-full"/>
                        {/*<p className="text-[10px] xxs:text-xs text-text-gray">{t("services")}</p>*/}
                        <p className="text-[10px] xxs:text-xs ">تماس با ما</p>
                    </MenuLink>
                    <MenuLink href={"/blog"} className="flex flex-col items-center gap-1.5 data-[state=active]:font-semibold ">
                        <Image src={services} alt={"services"} className="size-6"/>
                        <p className="text-[10px] xxs:text-xs">{t("news")}</p>
                    </MenuLink>
                    <div></div>
                    <MenuLink href={"/about"} className="flex flex-col items-center gap-1.5 data-[state=active]:font-semibold">
                        <Image src={about} alt={"about"} className="size-6"/>
                        <p className="text-[10px] xxs:text-xs">{t("about")}</p>
                    </MenuLink>
                    <MenuLink href={"/faq"} className="flex flex-col items-center gap-1.5 data-[state=active]:font-semibold">
                        <Image src={faq} alt={"faq"} className="size-6"/>
                        <p className="text-[10px] xxs:text-xs ">{t("FAQ")}</p>
                    </MenuLink>
                </nav>
            </div>
    );
}

export default MobileMenu;