import React from 'react';
import Image from "next/image";
import banner from "@/assets/Images/article/banner.svg";

function Banner() {
    return (
        <section className=" bg-[#FBF7F5]">
            <div className="space-y-10 3xl:max-w-[75rem] mx-auto max-3xl:px-20 max-lg:px-10 max-md:px-6 pt-5 pb-20">
                <div className="font-light">{"بهلند > طراحی سایت > تبلیغات در اینستاگرام"}</div>
                <div className="flex gap-14  justify-between flex-col-reverse lg:flex-row ">
                    <div className="space-y-8 lg:w-1/2">
                        <div className="flex items-center gap-2">
                                <span
                                    className="size-8 md:size-10 border-cream-medium border text-cream-medium bg-cream-dark_light rounded-full flex items-center justify-center p-1">
                                    <span className="icon icon-share"></span>
                                </span>
                            <ul className="flex items-center gap-2 list-disc text-cream-medium list-inside marker:text-cream-medium text-sm md:text-base">
                                <li className="border-cream-medium border bg-cream-dark_light  px-2 py-1.5 rounded-lg  text-black">به
                                    لند
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold ">بهلند یک مسیر آموزشی جدید برای کاربرانش راه‌اندازی
                                کرد</h1>
                            <p className="text-sm md:text-base tracking-tight text-justify text-text-gray">کاربران می‌توانند با مأموریت‌ها، تمرین‌ها و
                                پشتیبانی همیشگی، مهارت‌های خود را
                                مرحله‌به‌مرحله تقویت کنند و حتی از همان مراحل اولیه درآمدزایی داشته باشند. این مسیر جدید
                                به‌گونه‌ای طراحی شده که تجربه یادگیری هم سرگرم‌کننده باشد و هم عملی، تا کاربران بتوانند
                                مهارت واقعی بازار را در کنار درآمدزایی کسب کنند.کاربران می‌توانند با مأموریت‌ها،
                                تمرین‌ها و پشتیبانی همیشگی، مهارت‌های خود را مرحله‌به‌مرحله تقویت کنند و حتی از همان
                                مراحل اولیه درآمدزایی داشته باشند. این مسیر جدید به‌گونه‌ای طراحی شده که تجربه یادگیری
                                هم سرگرم‌کننده باشد و هم عملی، تا کاربران بتوانند مهارت واقعی بازار را در کنار درآمدزایی
                                کسب کنند.</p>
                            <ul className="mt-5 flex items-center gap-2 text-sm md:text-base">
                                <li className="border-cream-medium border bg-cream-dark_light  px-2 py-1.5 rounded-lg flex items-center gap-2">
                                    <span className="icon icon-calendar text-cream-medium"></span>
                                    <p className="text-text-gray">1404 / اردیبهشت / 04</p>
                                </li>
                                <li className="border-cream-medium border bg-cream-dark_light  px-2 py-1.5 rounded-lg flex items-center gap-2">
                                    <span className="icon icon-information text-cream-medium"></span>
                                    <p className="text-text-gray">8 دقیقه</p>
                                </li>
                                <li className="border-cream-medium border bg-cream-dark_light  px-2 py-1.5 rounded-lg flex items-center gap-2">
                                    <span className="icon icon-calendar text-cream-medium"></span>
                                    <p className="text-text-gray">2 دیدگاه</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="lg:w-1/2 rounded-2xl border border-cream-medium bg-[#FEECD8] flex items-center justify-center">
                        <Image src={banner} alt={"banner"}
                               className=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;