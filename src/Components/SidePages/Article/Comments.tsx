"use client";
import React from 'react';
import badge from "@/assets/Images/Article/badge.svg";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {commentsSchema} from "@/Schemas/CommentsSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/Components/UI/form";
import {Checkbox} from "@/Components/UI/checkbox";

function Comments() {
    const t = useTranslations("articlePage");
    const form = useForm<z.infer<typeof commentsSchema>>({
        resolver: zodResolver(commentsSchema),
        defaultValues: {
            name: "",
            email: "",
            comment: ""
        }
    });

    const handleSubmit = (data: z.infer<typeof commentsSchema>) => {
        console.log(data);
    }
    return (
        <div className="space-y-10 my-5">
            <div
                className="md:border border-[#CCCFD4] bg-transparent md:bg-[#FBF7F5] md:px-6 pt-8 md:pt-20 pb-8 relative rounded-xl flex flex-col gap-6">
                <div className="absolute -top-2 right-6 w-64 max-md:hidden">
                    <Image src={badge} alt="badge" className="w-full"/>
                    <h3 className="w-full text-center left-1/2 -translate-x-1/2 top-2 absolute font-bold">{t("yourComments")} </h3>
                </div>
                <div>
                    <h3 className="font-bold md:hidden">{t("yourComments")} </h3>
                </div>
                <div
                    className="bg-[#FBF7F5] md:bg-white rounded-xl p-4 flex flex-col gap-4 md:gap-2 border border-[#CCCFD4]">
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center gap-2.5">
                            <div className="bg-sky-300 size-8 rounded-full">
                            </div>
                            <p className="font-semibold">مریم السادات حسینی موسوی</p>
                            <div className="flex items-center gap-1">
                                <span className="icon icon-star text-yellow-600"></span>
                                <span className="text-[#848484] tracking-tight">4/5</span>
                            </div>
                        </div>
                        <p className="text-[#848484] tracking-tight max-lg:hidden">{"1404/اردیبهشت / 04"}</p>
                    </div>
                    <hr className="border-b border-gray-400 border-dashed "/>
                    <div className="space-y-2">
                        <p className="text-sm md:text-base text-justify text-text-gray"> ورم ایپسوم متن ساختگی با تولید
                            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                            تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، </p>
                        <div className="flex items-center justify-between">
                            <p className="text-[#848484] text-sm tracking-tight lg:hidden">{"1404/اردیبهشت / 04"}</p>
                            <button
                                className="block border border-[#8C8C8C] text-[#8C8C8C] px-4  py-2 rounded-lg font-semibold mr-auto">
                                {t("replay")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-[#CCCFD4] bg-[#FBF7F5] px-6 pb-8 pt-20 relative rounded-xl">
                <div className="absolute -top-2 right-6 w-64">
                    <Image src={badge} alt="badge" className="w-full"/>
                    <p className="w-full text-center left-1/2 -translate-x-1/2 top-2 absolute font-bold">{
                        t("writeYourComments")
                    }</p>
                </div>
                <Form {...form}>
                    <form className="grid grid-cols-2 gap-6" onSubmit={form.handleSubmit(handleSubmit)}>
                        <p className="col-span-full text-sm font-semibold text-text-gray">{t("privacy")}</p>
                        <FormField name={"name"}
                                   render={({field}) => (
                                       <FormItem className="col-span-full sm:col-span-1">
                                           <FormControl>
                                               <input placeholder={t("fullName")}
                                                      className=" rounded-lg border w-full border-black outline-none px-6 py-3" {...field}/>
                                           </FormControl>
                                           <FormMessage/>
                                       </FormItem>
                                   )}/>
                        <FormField name={"email"}
                                   render={({field}) => (
                                       <FormItem className="col-span-full sm:col-span-1">
                                           <FormControl>
                                               <input placeholder={t("email")}
                                                      className="col-span-full sm:col-span-1 rounded-lg border border-black outline-none px-6 py-3 w-full" {...field}/>
                                           </FormControl>
                                           <FormMessage/>
                                       </FormItem>
                                   )}/>
                        <FormField name={"comment"}
                                   render={({field}) => (
                                       <FormItem className="col-span-full">
                                           <FormControl>
                                                <textarea placeholder={t("message")} rows={6}
                                                          className="col-span-full rounded-lg border border-black outline-none px-6 py-3 w-full" {...field}></textarea>
                                           </FormControl>
                                           <FormMessage/>
                                       </FormItem>
                                   )}/>
                        <div
                            className="flex flex-col sm:flex-row items-center justify-between gap-6  sm:gap-2 col-span-full">
                                <FormField name={"saveInfo"}
                                           control={form.control}
                                           render={({field}) => (
                                               <FormItem className="flex items-center gap-2 space-y-0">
                                                   <FormControl>
                                                            <Checkbox id="rememberMe" checked={field.value} onCheckedChange={field.onChange} className="data-[state=checked]:bg-cream-medium border-cream-medium"/>
                                                   </FormControl>
                                                   <FormLabel  htmlFor="rememberMe" className="text-sm text-[#404040] ">{t("saveInfo")}</FormLabel>
                                                   <FormMessage/>
                                               </FormItem>
                                           )}/>
                            <button disabled={form.formState.disabled}
                                className="max-sm:w-full px-6 py-2 rounded-lg border-2 text-nowrap text-sm lg:text-base disabled:text-text-gray disabled:border-text-gray border-cream-medium text-cream-medium bg-[#FEECD8] shadow-main shadow-cream-medium font-semibold">
                                {t("send")}
                            </button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}

export default Comments;