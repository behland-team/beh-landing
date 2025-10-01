"use client"
import React from 'react';
import mail from "@/assets/Images/contacts/mail.png"
import message from "@/assets/Images/contacts/Message_perspective.png"
import click from "@/assets/Images/contacts/click.png"
import Image from "next/image";
import {useTranslations} from "next-intl";
import {toast} from "sonner";
import Toast from "@/Components/Layout/Toast";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {contactSchema} from "@/Schemas/ContactSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/Components/UI/form";


function ContactForm() {
    const t = useTranslations("contactPage.form");
    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues : {
            fullName: "",
            email: "",
            message: ""
        }
    });
    const handleSubmit = (data: z.infer<typeof contactSchema>) => {
        console.log(data);
        toast.custom(() => (
            <Toast message={"در اسرا وقت پیام شما پیگیری میشود 🙏"}/>
        ))
    }
    return (
        <section className="bg-storyBg bg-no-repeat my-20">
            <div className="max-w-[85rem] flex flex-col md:flex-row items-center gap-8 mx-auto py-14 relative">
                <Image src={click} alt={"click"} className="absolute right-10 -bottom-4 size-16 max-sm:hidden "/>
                <div className="w-full md:w-2/3 space-y-6 px-6 md:pl-0 md:pr-12 ">
                    <div className="flex items-center gap-2">
                        <span className="size-14"><Image src={message} alt={"contact us"}/></span>
                        <h3 className="text-2xl font-semibold">{t("title")}</h3>
                    </div>
                    <p className="text-text-gray text-lg md:hidden">{t("desc")}</p>
                    <Form {...form} >
                        <form className="grid grid-cols-3 gap-6" onSubmit={form.handleSubmit(handleSubmit)}>
                            <FormField name={"fullName"} render={({field}) => (
                                <FormItem className="max-lg:col-span-full ">
                                    <FormControl>
                                        <input
                                            className="border border-black rounded-lg min-h-12 px-6 py-3 bg-white w-full"
                                            placeholder={t("fullName")} {...field}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                            />
                            <FormField name={"email"} render={({field}) => (
                                <FormItem className="max-lg:col-span-full ">
                                    <FormControl>
                                        <input
                                            className=" border border-black rounded-lg min-h-12 px-6 py-3 bg-white w-full"
                                            placeholder={t("email")} {...field}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                            />
                            <FormField name={"phone"} render={({field}) => (
                                <FormItem className="max-lg:col-span-full ">
                                    <FormControl>
                                        <input
                                            className=" border border-black rounded-lg min-h-12 px-6 py-3 bg-white w-full "
                                            placeholder={t("phone")} {...field}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                            />
                            <FormField name={"message"} render={({field}) => (
                                <FormItem className="col-span-full">
                                    <FormControl>
                                          <textarea
                                              className="border border-black rounded-lg px-6 py-3 min-h-56 bg-white w-full"
                                              placeholder={t("message")} {...field}></textarea>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                            />
                            <button
                                className="max-lg:col-span-full py-1.5 px-12 lg:col-start-3 md:mr-auto rounded-lg border md:bg-[#FEECD8] w-full md:w-fit border-cream-medium shadow-main shadow-cream-medium  text-cream-medium flex items-center justify-center gap-2">
                                <span>{t("send")}</span>
                                <span className="icon icon-send"></span>
                            </button>
                        </form>
                    </Form>
                </div>

                <div className="md:w-1/3 flex items-center justify-center">
                    <Image src={mail} alt={"contact us"} className="max-md:max-w-96 max-xxs:max-w-72 max-md:mx-auto"/>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;