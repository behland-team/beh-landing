"use client"
import React, {FormEvent} from 'react';
import mail from "@/assets/Images/contacts/mail.png"
import message from "@/assets/Images/contacts/Message_perspective.png"
import click from "@/assets/Images/contacts/click.png"
import Image from "next/image";
import {useTranslations} from "next-intl";
import {toast} from "sonner";

function ContactForm() {
    const t = useTranslations("contactPage.form");
    const handleSubmit = (e : FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        toast.custom(()=>(
            <div className="border-2 border-cream-medium flex items-center relative bg-[#FEECD8] px-12 py-2 rounded-lg min-h-16">
                <p className="text-sm font-semibold">در اسرا وقت پیام شما پیگیری میشود 🙏 </p>
            </div>
        ))
    }
    return (
        <section className="bg-storyBg bg-no-repeat my-20">
            <div className="max-w-[85rem] flex flex-col md:flex-row items-center gap-8 mx-auto py-14 relative">
                <Image src={click} alt={"click"} className="absolute right-10 -bottom-4 size-16 max-sm:hidden " />
                <div className="w-full md:w-2/3 space-y-6 px-6 md:pl-0 md:pr-12 ">
                    <div className="flex items-center gap-2">
                        <span className="size-14"><Image src={message} alt={"contact us"}/></span>
                        <h3 className="text-2xl font-semibold">{t("title")}</h3>
                    </div>
                    <p className="text-text-gray text-lg md:hidden">{t("desc")}</p>
                    <form className="grid grid-cols-3 gap-6" onSubmit={handleSubmit}>
                        <input className="max-lg:col-span-full border border-black rounded-lg min-h-12 px-6 py-3 bg-white"
                               placeholder={t("fullName")} name="name"/>
                        <input className="max-lg:col-span-full border border-black rounded-lg min-h-12 px-6 py-3 bg-white"
                               placeholder={t("email")} name="email"/>
                        <input className="max-lg:col-span-full border border-black rounded-lg min-h-12 px-6 py-3 bg-white"
                               placeholder={t("phone")} name="phone"/>
                        <textarea className="border border-black rounded-lg col-span-full px-6 py-3 min-h-56 bg-white" placeholder={t("message")}></textarea>
                        <button className="max-lg:col-span-full py-1.5 px-12 lg:col-start-3 md:mr-auto rounded-lg border md:bg-[#FEECD8] w-full md:w-fit border-cream-medium shadow-main shadow-cream-medium  text-cream-medium flex items-center justify-center gap-2">
                            <span>{t("send")}</span>
                            <span className="icon icon-send"></span>
                        </button>
                    </form>
                </div>

                <div className="md:w-1/3 flex items-center justify-center">
                    <Image src={mail} alt={"contact us"} className="max-md:max-w-96 max-xxs:max-w-72 max-md:mx-auto"/>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;