import React from 'react';
import badge from "@/assets/Images/Article/badge.svg";
import Image from "next/image";
import {useTranslations} from "next-intl";

function Comments() {
    const t = useTranslations("articlePage");
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
                <form className="grid grid-cols-2 gap-6">
                    <p className="col-span-full text-sm font-semibold text-text-gray">{t("privacy")}</p>
                    <input placeholder={t("fullName")}
                           className="col-span-full sm:col-span-1 rounded-lg border border-black outline-none px-6 py-3"/>
                    <input placeholder={t("email")}
                           className="col-span-full sm:col-span-1 rounded-lg border border-black outline-none px-6 py-3"/>
                    <textarea placeholder={t("message")} rows={6}
                              className="col-span-full rounded-lg border border-black outline-none px-6 py-3"></textarea>
                    <div
                        className="flex flex-col sm:flex-row items-center justify-between gap-6  sm:gap-2 col-span-full">
                        <div className="flex items-center gap-2">
                            <input id="rememberMe" type="checkbox"/>
                            <label htmlFor="rememberMe" className="text-sm text-[#404040]">{t("saveInfo")}</label>
                        </div>
                        <button
                            className="max-sm:w-full px-6 py-2 rounded-lg border-2 text-nowrap text-sm lg:text-base border-cream-medium text-cream-medium bg-[#FEECD8] shadow-main shadow-cream-medium font-semibold">
                            {t("send")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Comments;