import React from 'react';
import announcement from "@/assets/Images/announcement.png";
import mail from "@/assets/Images/mail.png";
import badge from "@/assets/Images/Article/badge.svg";
import Image from "next/image";
import {useTranslations} from "next-intl";
import NewsletterForm from "@/Components/Layout/Newsletter-Form";

function Newsletter() {
    const t = useTranslations("blogPage.newsletter");
    return (
        <section className={"my-10"}>
            <div className="3xl:max-w-[85rem] mx-auto flex items-center justify-center px-4 xxs:px-6 md:px-10 xl:px-24 gap-7">
                <Image src={announcement} alt={"announcement"} className="max-lg:hidden"/>
                <div
                    className="rounded-lg bg-[#FBF7F5] border-[#CCCDF4] border px-4 xxs:px-6 md:px-8 pb-6 pt-20 max-md:w-full  lg:w-1/2 relative">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 max-md:w-72 max-w-64">
                        <Image src={badge} alt={"badge"} className="w-full"/>
                        <p className="w-full text-center font-semibold md:text-lg absolute left-1/2 -translate-x-1/2 top-2"> {t("title")}</p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-center max-xxs:text-sm md:text-right">{t("description")}
                        </p>
                        <NewsletterForm>
                            <div
                                className="flex items-center justify-between  w-full rounded-lg overflow-hidden   border p-1  bg-white border-gray-500 ">
                                <input
                                    type="email"
                                    placeholder={t("emailPlaceholder")}
                                    name={"email"}
                                    className="h-full  border-0 bg-transparent outline-none w-full mx-1 placeholder:text-sm focus:bg-transparent focus:outline-none text-sm sm:text-base"
                                />
                                <button
                                    type="submit"
                                    className="rounded-lg border-2 text-cream-medium border-cream-medium px-2 xxs:px-4 sm:px-6 text-sm p-1 m-0.5 bg-white cursor-pointer shadow-main shadow-text-dark_Orange"
                                >
                                    {t("send")}
                                </button>
                            </div>
                        </NewsletterForm>
                    </div>
                </div>
                <Image src={mail} alt={"mail"} className="max-lg:hidden"/>
            </div>
        </section>
    );
}

export default Newsletter;