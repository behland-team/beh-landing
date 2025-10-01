import React from 'react';
import Image from "next/image";
import star from "@/assets/Images/about/star.svg"
import team from "@/assets/Images/about/team-behland.png"
import {useTranslations} from "next-intl";
import Link from "next/link";

function Contact() {
    const t = useTranslations("aboutPage.contact");
    return (
        <section className="mt-20 overflow-hidden">
            <div className="max-w-[85rem] mx-auto  relative ">
                <Image src={star} alt={"star"} className="absolute left-10 top-1/5 -translate-y-1/5 -z-10"/>
                <Image src={star} alt={"star"} className="absolute right-14 rotate-45 top-2/5 -translate-y-2/5 -z-10"/>
                <div className="flex flex-col items-center gap-4 w-full md:w-2/3 mx-auto px-4 lg:px-0">
                    <h3 className="text-lg md:text-xl lg:text-3xl font-bold text-center ">{t("title")}</h3>
                    <p className="text-center text-text-gray">{t("description")}
                    </p>
                    <div className=" mt-4 flex items-center justify-center gap-6 ">
                        <Link href="/contacts"
                            className="py-1.5 max-md:flex-1 px-12 rounded-lg border w-fit border-cream-medium shadow-main shadow-cream-medium  text-cream-medium flex items-center justify-center gap-2">
                            <span>{t("contact")}</span>
                            <span className="icon icon-call"></span>
                        </Link>
                    </div>
                </div>
                <div className="h-48 xxs:h-52 md:h-64 lg:h-[400px]"></div>
                <Image src={team} alt={"team svg"}
                       className="maxw-[75rem] mx-auto absolute -bottom-8 xxs:-bottom-10 sm:-bottom-14 md:-bottom-[4.5rem] lg:-bottom-20  left-1/2 -translate-x-1/2"/>
            </div>
        </section>
    );
}

export default Contact;