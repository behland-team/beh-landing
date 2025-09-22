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
import {useTranslations} from "next-intl";

const missions = [
    {
        des: "ساده‌سازی مسیر یادگیری مالی با رویکردی بازی‌وار و جذاب",
        icon: learning
    }, {
        des: "ارزشمند کردن دانش و تلاش؛ تبدیل آن به دارایی دیجیتال قابل‌مالکیت",
        icon: coins
    }, {
        des: "ثبت شفاف و امن دستاوردهای آموزشی روی بلاکچین",
        icon: cube
    }, {
        des: "پاداش‌دهی منصفانه فقط در ازای یادگیری و تلاش واقعی",
        icon: hand
    }
]

const perspectives = [
    {
        des: "ساختن جهانی که در آن «دانش» یک دارایی ارزشمند باشد",
        icon: www
    }, {
        des: "جایگزینی سیگنال‌فروشی و آموزش‌های بی‌کیفیت با یادگیری اثبات‌پذیر",
        icon: balance
    }, {
        des: "تبدیل به اولین اکوسیستم آموزشی–اقتصادی مبتنی بر POHW (اثبات کار انسانی)",
        icon: mind
    }, {
        des: "ایجاد بستری جهانی برای یادگیری، تحلیل و سهامداری آموزشی",
        icon: doc
    }
]
function Perspective() {
    const t = useTranslations("aboutPage.perspective")
    return (
        <section className="my-16 lg:my-20">
            <div
                className="grid gap-6 lg:gap-4 md:grid-cols-2 lg:grid-cols-[1fr_1.5fr_1fr] 2xl:gap-14 sm:justify-items-center max-w-[75rem] mx-auto">
                <div className="space-y-8 px-7 lg:col-span-1 ">
                    <h5 className="text-xl font-bold">{t("mission")}</h5>
                    <div className="grid xxs:grid-cols-2 md:grid-cols-1 gap-6 w-full">
                        {
                            missions.map((mission , i) => (
                                <div key={i}
                                    className="md:border border-cream-medium bg-cream-light rounded-lg  flex flex-col sm:flex-row h-40 sm:h-24 w-48 max-sm:mx-auto sm:w-full ">
                                    <div className="sm:w-1/3 relative h-20 sm:h-fit ">
                                        <Image src={badge} alt={"badge"} className="absolute -top-3 right-1/2 translate-x-1/2"/>
                                        <Image src={mission.icon} alt={"icon"}
                                               className="absolute -top-1 right-1/2 translate-x-1/2"/>
                                    </div>
                                    <p className="text-center sm:text-right sm:w-2/3 text-sm font-semibold px-2 py-4">
                                        {mission.des}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div
                    className="bg-storyBg bg-no-repeat w-full h-full relative px-8 py-14 max-lg:col-span-full  max-lg:row-start-1">
                    <Image src={crown} alt={"crown"} className="absolute -top-6 left-1/2 -translate-x-1/2"/>
                    <div className="flex flex-col gap-8">
                        <div className="space-y-4">
                            <h4 className="text-center  font-bold  text-2xl md:text-3xl">{t("title")}</h4>
                            <h6 className="text-center font-semibold text-base md:text-lg">{t("subtitle")}</h6>
                        </div>
                        <div className="space-y-6">
                            <p className="text-justify text-sm md:text-base">
                                {t("description-1")}
                            </p>
                            <p className="text-justify">
                                {t("description-2")}
                            </p>

                            <p className="text-justify">
                                {t("description-3")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space-y-8 px-7 max-lg:row-start-2 ">
                    <h5 className="text-xl font-bold">{t("perspective")}</h5>
                    <div className="grid xxs:grid-cols-2 md:grid-cols-1 gap-6">
                        {
                            perspectives.map((item , i)=>(
                                <div key={i}
                                    className="md:border border-cream-medium bg-cream-light rounded-lg  flex  flex-col sm:flex-row h-40 sm:h-24 w-48 max-sm:mx-auto sm:w-full">
                                    <div className="sm:w-1/3 relative h-20 sm:h-fit">
                                        <Image src={badge} alt={"badge"} className="absolute -top-3 right-1/2 translate-x-1/2"/>
                                        <Image src={item.icon} alt={"icon"} className="absolute -top-1 right-1/2 translate-x-1/2"/>
                                    </div>
                                    <p className="text-center sm:text-right sm:w-2/3 text-sm font-semibold px-2 py-4">
                                        {item.des}
                                    </p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Perspective;