import React from 'react';
import badge from "@/assets/Images/aboutBadge.svg";
import learning from "@/assets/Images/about/learning.png";
import coins from "@/assets/Images/about/conis.png";
import cube from "@/assets/Images/about/cube.png";
import hand from "@/assets/Images/about/hande.png"
import www from "@/assets/Images/about/www.png"
import balance from "@/assets/Images/about/balance.png"
import mind from "@/assets/Images/about/mind.png"
import doc from "@/assets/Images/about/doc.png"
import crown from "@/assets/Images/WhyBehCrown.svg"
import Image from "next/image";

function Perspective() {
    return (
        <section className="my-16 lg:my-20">
            <div className="grid gap-6 lg:gap-4 md:grid-cols-2 lg:grid-cols-[1fr_1.5fr_1fr] 2xl:gap-14 sm:justify-items-center max-w-[75rem] mx-auto">
                <div className="space-y-8 px-7 lg:col-span-1 ">
                    <h5 className="text-xl font-bold">ماموریت بهلند:</h5>
                    <div className="grid xxs:grid-cols-2 md:grid-cols-1 gap-6 w-full">
                        <div className="border border-cream-medium bg-cream-light rounded-lg  flex flex-col sm:flex-row h-40 sm:h-24 w-48 max-sm:mx-auto sm:w-full ">
                            <div className="sm:w-1/3 relative h-20 sm:h-fit ">
                                <Image src={badge} alt={"badge"} className="absolute -top-3 right-1/2 translate-x-1/2"/>
                                <Image src={learning} alt={"icon"} className="absolute -top-1 right-1/2 translate-x-1/2"/>
                            </div>
                            <p className="text-center sm:text-right sm:w-2/3 text-sm font-semibold px-2 py-4">
                                ساده‌سازی مسیر یادگیری مالی با رویکردی بازی‌وار و جذاب
                            </p>
                        </div>
                        <div className="border border-cream-medium bg-cream-light rounded-lg  flex  flex-col sm:flex-row h-40 sm:h-24 w-48 max-sm:mx-auto sm:w-full">
                            <div className="sm:w-1/3 relative h-20 sm:h-fit">
                                <Image src={badge} alt={"badge"} className="absolute -top-3 right-1/2 translate-x-1/2"/>
                                <Image src={coins} alt={"icon"} className="absolute -top-1 right-1/2 translate-x-1/2"/>
                            </div>
                            <p className="text-center sm:text-right sm:w-2/3 text-sm font-semibold px-2 py-4">
                                ارزشمند کردن دانش و تلاش؛ تبدیل آن به دارایی دیجیتال قابل‌مالکیت
                            </p>
                        </div>
                        <div className="border border-cream-medium bg-cream-light rounded-lg  flex  flex-col sm:flex-row h-40 sm:h-24 w-48 max-sm:mx-auto sm:w-full">
                            <div className="sm:w-1/3 relative h-20 sm:h-fit">
                                <Image src={badge} alt={"badge"} className="absolute -top-3 right-1/2 translate-x-1/2"/>
                                <Image src={cube} alt={"icon"} className="absolute -top-1 right-1/2 translate-x-1/2"/>
                            </div>
                            <p className="text-center sm:text-right sm:w-2/3 text-sm font-semibold px-2 py-4">
                                ثبت شفاف و امن دستاوردهای آموزشی روی بلاکچین
                            </p>
                        </div>
                        <div className="border border-cream-medium bg-cream-light rounded-lg  flex  flex-col sm:flex-row h-40 sm:h-24 w-48 max-sm:mx-auto sm:w-full">
                            <div className="sm:w-1/3 relative h-20 sm:h-fit">
                                <Image src={badge} alt={"badge"} className="absolute -top-3 right-1/2 translate-x-1/2"/>
                                <Image src={hand} alt={"icon"} className="absolute -top-1 right-1/2 translate-x-1/2"/>
                            </div>
                            <p className="text-center sm:text-right sm:w-2/3 text-sm font-semibold px-2 py-4">
                                پاداش‌دهی منصفانه فقط در ازای یادگیری و تلاش واقعی
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-storyBg bg-no-repeat w-full h-full relative px-8 py-14 max-lg:col-span-full  max-lg:row-start-1">
                    <Image src={crown} alt={"crown"} className="absolute -top-6 left-1/2 -translate-x-1/2"/>
                    <div className="flex flex-col gap-8">
                        <div className="space-y-4">
                            <h4 className="text-center  font-bold  text-2xl md:text-3xl">ماموریت و چشم‌انداز به لند</h4>
                            <h6 className="text-center font-semibold text-base md:text-lg">ماموریت امروز ما و چشم‌انداز فردا، نقشه
                                راه بهلند را می‌سازد.</h6>
                        </div>
                        <div className="space-y-6">
                            <p className="text-justify text-sm md:text-base">
                                بهلند یک سرزمین آموزشی و اقتصادی است که مسیر یادگیری مالی را واقعی، شفاف و بازی‌وار
                                می‌کند. در بهلند، تلاش و دانش کاربران به دارایی دیجیتال قابل‌مالکیت تبدیل می‌شود و هر
                                دستاورد آموزشی روی بلاکچین ثبت می‌گردد.
                            </p>
                            <p className="text-justify">
                                ماموریت بهلند این است که مسیر یادگیری، تحلیل و تولید محتوا را ساده، جذاب و پاداش‌دهنده
                                کند و به کاربران اجازه دهد با پیشرفت واقعی، درآمد و مالکیت کسب کنند.
                            </p>

                            <p className="text-justify">
                                چشم‌انداز بهلند ساختن یک اکوسیستم جهانی است که در آن دانش، تلاش و مهارت انسانی ارزش
                                واقعی پیدا می‌کند و کاربران در کنار یادگیری، سهامدار و سازندهٔ آیندهٔ خود و جامعه
                                می‌شوند.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space-y-8 px-7 max-lg:row-start-2 ">
                    <h5 className="text-xl font-bold">چشم انداز بهلند:</h5>
                    <div className="grid xxs:grid-cols-2 md:grid-cols-1 gap-6">
                        <div className="border border-cream-medium bg-cream-light rounded-lg  flex  flex-col sm:flex-row h-40 sm:h-24 w-48 max-sm:mx-auto sm:w-full">
                            <div className="sm:w-1/3 relative h-20 sm:h-fit">
                                <Image src={badge} alt={"badge"} className="absolute -top-3 right-1/2 translate-x-1/2"/>
                                <Image src={www} alt={"icon"} className="absolute -top-1 right-1/2 translate-x-1/2"/>
                            </div>
                            <p className="text-center sm:text-right sm:w-2/3 text-sm font-semibold px-2 py-4">
                                ساختن جهانی که در آن «دانش» یک دارایی ارزشمند باشد
                            </p>
                        </div>
                        <div className="border border-cream-medium bg-cream-light rounded-lg  flex  flex-col sm:flex-row h-40 sm:h-24 w-48 max-sm:mx-auto sm:w-full">
                            <div className="sm:w-1/3 relative h-20 sm:h-fit">
                                <Image src={badge} alt={"badge"} className="absolute -top-3 right-1/2 translate-x-1/2"/>
                                <Image src={balance} alt={"icon"} className="absolute -top-1 right-1/2 translate-x-1/2"/>
                            </div>
                            <p className="text-center sm:text-right sm:w-2/3 text-sm font-semibold px-2 py-4">
                                جایگزینی سیگنال‌فروشی و آموزش‌های بی‌کیفیت با یادگیری اثبات‌پذیر
                            </p>
                        </div>
                        <div className="border border-cream-medium bg-cream-light rounded-lg  flex  flex-col sm:flex-row h-40 sm:h-24 w-48 max-sm:mx-auto sm:w-full">
                            <div className="sm:w-1/3 relative h-20 sm:h-fit">
                                <Image src={badge} alt={"badge"} className="absolute -top-3 right-1/2 translate-x-1/2"/>
                                <Image src={mind} alt={"icon"} className="absolute -top-1 right-1/2 translate-x-1/2"/>
                            </div>
                            <p className="text-center sm:text-right sm:w-2/3 text-sm font-semibold px-2 py-4">
                                تبدیل به اولین اکوسیستم آموزشی–اقتصادی مبتنی بر POHW (اثبات کار انسانی)
                            </p>
                        </div>
                        <div className="border border-cream-medium bg-cream-light rounded-lg  flex  flex-col sm:flex-row h-40 sm:h-24 w-48 max-sm:mx-auto sm:w-full">
                            <div className="sm:w-1/3 relative h-20 sm:h-fit">
                                <Image src={badge} alt={"badge"} className="absolute -top-3 right-1/2 translate-x-1/2"/>
                                <Image src={doc} alt={"icon"} className="absolute -top-1 right-1/2 translate-x-1/2"/>
                            </div>
                            <p className="text-center sm:text-right sm:w-2/3 text-sm font-semibold px-2 py-4">
                                ایجاد بستری جهانی برای یادگیری، تحلیل و سهامداری آموزشی
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Perspective;