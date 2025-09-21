import React from 'react';
import mail from "@/assets/Images/contacts/mail.png"
import message from "@/assets/Images/contacts/Message_perspective.png"
import click from "@/assets/Images/contacts/click.png"
import Image from "next/image";

function ContactForm() {
    return (
        <section className="bg-storyBg bg-no-repeat my-20">
            <div className="max-w-[85rem] flex items-center gap-8 mx-auto py-14 relative">
                <Image src={click} alt={"click"} className="absolute right-10 -bottom-4 size-16 " />
                <div className="w-2/3 space-y-6 pr-12 ">
                    <div className="flex items-center gap-2">
                        <span className="size-14"><Image src={message} alt={"contact us"}/></span>
                        <h3 className="text-2xl font-semibold">فرم ارسال پیام</h3>
                    </div>
                    <form className="grid grid-cols-3 gap-6">
                        <input className="border border-black rounded-lg min-h-12 px-6 py-3 bg-white"
                               placeholder="نام و نام خانوداگی" name="name"/>
                        <input className="border border-black rounded-lg min-h-12 px-6 py-3 bg-white"
                               placeholder="ایمیل" name="email"/>
                        <input className="border border-black rounded-lg min-h-12 px-6 py-3 bg-white"
                               placeholder="شماره تلفن" name="phone"/>
                        <textarea className="border border-black rounded-lg col-span-full px-6 py-3 min-h-56 bg-white" placeholder="متن پیام"></textarea>
                        <button className="py-1.5 px-12 col-start-3 mr-auto rounded-lg border bg-[#FEECD8]  w-fit border-cream-medium shadow-main shadow-cream-medium  text-cream-medium flex items-center justify-center gap-2">
                            <span>ارسال پیام</span>
                            <span className="icon icon-call"></span>
                        </button>
                    </form>
                </div>

                <div className="w-1/3 flex items-center justify-center">
                    <Image src={mail} alt={"contact us"}/>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;