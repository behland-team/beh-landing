import React from 'react';
import telegram from "@/assets/Images/contacts/telegram.svg";
import instagram from "@/assets/Images/contacts/instagram.svg";
import linkdin from "@/assets/Images/contacts/linkdin.svg";
import youtube from "@/assets/Images/contacts/youtube.svg";
import x from "@/assets/Images/contacts/x.svg";
import discord from "@/assets/Images/contacts/discort.svg";
import whatsup from "@/assets/Images/contacts/whatsup.svg";
import gmail from "@/assets/Images/contacts/gmail.svg";
import star from "@/assets/Images/contacts/Star_perspective_matte.svg"
import Image from "next/image";
import badge from "@/assets/Images/aboutBadge.svg";
import {useTranslations} from "next-intl";


const links = [
    {
        title: "یوتوب",
        icon: youtube,
        link: "https://www.youtube.com/@BehLandOfficial",
        disable: true
    }, {
        title: "کانال تلگرام",
        icon: telegram,
        link: "https://t.me/BehLand_Official",
        disable: true
    }, {
        title: "اینستاگرام",
        icon: instagram,
        link: "https://www.instagram.com/behlandofficial/",
        disable: true
    }, {
        title: "لینکدین",
        icon: linkdin,
        link: "#",
        disable: false
    }, {
        title: "توییتر(X)",
        icon: x,
        link: "https://x.com/BehLandOfficial",
        disable: true
    }, {
        title: "دیسکورد",
        icon: discord,
        link: "#",
        disable: false
    }, {
        title: "واتساپ",
        icon: whatsup,
        link: "#",
        disable: false
    }, {
        title: "ایمیل ها",
        icon: gmail,
        link: "support@beh.land",
        disable: true
    },
]

function Socials() {
    const t = useTranslations("contactPage.socials")
    return (
        <section className="my-20">
            <div className="max-w-[75rem] mx-auto flex flex-col gap-16 px-6 md:px-24">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 max-md:justify-center">
                            <Image src={star} alt={"star"} className="size-12 max-md:hidden"/>
                            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{t("title")}</h3>
                        </div>
                        <p className="font-semibold md:text-lg text-sm max-md:text-text-gray max-md:text-center">{t("des")}</p>
                    </div>
                <div className="grid xxs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 md:gap-y-12">
                    {
                        links.map((item, i) => (
                            <a href={item.link} key={i}>
                                <div
                                     className="md:border border-cream-medium bg-cream-light rounded-lg  flex flex-col sm:flex-row h-40 sm:h-24 w-48 max-sm:mx-auto sm:w-full ">
                                    <div className="sm:w-1/3 relative h-20 sm:h-fit ">
                                        <Image src={badge} alt={"badge"} className="absolute -top-3 right-1/2 translate-x-1/2"/>
                                        <Image src={item.icon} alt={"icon"}
                                               className="md:size-8 lg:size-12 absolute -top-1 right-[calc(50%-2px)] translate-x-1/2"/>
                                    </div>
                                    <div className="flex items-center justify-between sm:w-2/3 px-2 py-4 max-sm:mt-4">
                                        <p className="text-center sm:text-right  text-lg font-semibold ">
                                            {item.title}
                                        </p>
                                        <span className="icon icon-arrow-back -rotate-[135deg]"  ></span>
                                    </div>

                                </div>
                            </a>

                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Socials;