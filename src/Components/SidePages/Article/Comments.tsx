"use client";
import React, {FormEvent, useState} from 'react';
import badge from "@/assets/Images/Article/badge.svg";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {commentsSchema} from "@/Schemas/CommentsSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/Components/UI/form";
import {dateFormatter, numberFormatter} from "@/utils/helpers";
import StarRating from "@/Components/Layout/StarRating";
import classNames from "classnames";
import {AnimatePresence, motion} from "motion/react";

function Comments() {
    const [replyId, setReplyId] = useState<string | number | null>(null);
    const data = Array.from({length: 4});
    const t = useTranslations("articlePage");
    const form = useForm<z.infer<typeof commentsSchema>>({
        resolver: zodResolver(commentsSchema),
        defaultValues: {
            name: "",
            email: "",
            comment: "",
            rate: 0
        }
    });

    const handleSubmit = (data: z.infer<typeof commentsSchema>) => {
        console.log(data);
        form.reset();
    }

    const handleReply = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setReplyId(null);
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
                {
                    data.map((_, index) => (
                        <div key={index}
                             className="bg-[#FBF7F5] md:bg-white rounded-xl p-4 flex flex-col gap-4 md:gap-2 border border-[#CCCFD4]">
                            <div className="flex items-center justify-between ">
                                <div className="flex items-center gap-2.5">
                                    <div className="bg-sky-300 size-8 rounded-full">
                                    </div>
                                    <p className="font-semibold">مریم السادات حسینی موسوی</p>
                                    <div className="flex items-center gap-1">
                                        <span className="icon icon-star text-yellow-600"></span>
                                        <span className="text-[#848484] tracking-tight">{numberFormatter(4.5)}</span>
                                    </div>
                                </div>
                                <p className="text-[#848484] tracking-tight max-lg:hidden">{dateFormatter(1759473653000, "fa", {
                                    day: "2-digit",
                                    month: "long",
                                    year: "2-digit"
                                })}</p>
                            </div>
                            <hr className="border-b border-gray-400 border-dashed "/>
                            <div className="space-y-2">
                                <p className="text-sm md:text-base text-justify text-text-gray"> ورم ایپسوم متن ساختگی
                                    با تولید
                                    سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                    فعلی
                                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، </p>
                                <AnimatePresence>
                                    {
                                        index === replyId
                                        &&
                                        <motion.div className={classNames("space-y-4 w-full pt-4")}
                                                    key={`reply-${index}`}
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }} >
                                            <hr className="border-b border-gray-400 border-dashed "/>
                                            <form className="flex flex-col gap-2" onSubmit={handleReply}>
                                                <label className="tracking-tight text-[#8C8C8C]">شما در حال پاسخ به
                                                    دیدگاه رها مرادیان فر هستید : </label>
                                                <textarea rows={3}
                                                          className="rounded-lg border border-[#CCCFD4] p-2 outline-none"></textarea>
                                                <button
                                                    className="bg-cream-light border-2 border-cream-medium shadow-main shadow-cream-medium py-1 px-6 rounded-lg text-cream-medium w-fit mr-auto">ارسال
                                                    دیدگاه
                                                </button>
                                            </form>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                                {index !== replyId &&
                                    <div className="flex items-center justify-between">
                                        <p className="text-[#848484] text-sm tracking-tight lg:hidden">{dateFormatter(1759473653000, "fa", {
                                            day: "2-digit",
                                            month: "long",
                                            year: "2-digit"
                                        })}</p>
                                        <button onClick={() => setReplyId(index)}
                                                className="block border border-[#8C8C8C] text-[#8C8C8C] px-4  py-2 rounded-lg font-semibold mr-auto">
                                            {t("replay")}
                                        </button>
                                    </div>
                                }

                            </div>
                        </div>
                    ))
                }

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
                            <FormField control={form.control} render={({field}) => (
                                <FormItem className="flex items-center gap-2 space-y-0">
                                    <FormControl>
                                        <StarRating value={field.value ?? 0} onChange={field.onChange}/>
                                    </FormControl>
                                    <FormLabel className="text-sm text-[#404040]">{t("registerRate")}</FormLabel>
                                </FormItem>
                            )} name={"rate"}/>

                            <button disabled={form.formState.disabled}
                                    className="max-sm:w-full px-6 py-2 rounded-lg border-2 text-nowrap text-sm lg:text-base disabled:text-text-gray disabled:border-text-gray border-cream-medium text-cream-medium bg-[#FEECD8] shadow-main shadow-cream-medium font-semibold">
                                {t("send")}
                            </button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
        ;
}

export default Comments;