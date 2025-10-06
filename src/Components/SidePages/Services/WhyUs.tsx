import React from 'react';
import Image from "next/image";
import banner from "@/assets/Images/services/whyUsBanner.svg"
import vector from "@/assets/Images/services/vector.svg"
import newMethod from "@/assets/Images/services/new-method-2.png";
import gaming from "@/assets/Images/services/gaming.png";
import analize from "@/assets/Images/services/analize.png";
import rewords from "@/assets/Images/services/rewords.png";
import grow from "@/assets/Images/services/grow.png";
import badge from "@/assets/Images/aboutBadge.svg";
import classNames from "classnames";
import {useTranslations} from "next-intl";

const services = [
    {
        title: "متدهای به‌روز و نوین",
        icon: newMethod,
        description: "در به‌لند، آموزش فقط تئوری نیست؛ ما از متدهای به‌روز و نوین استفاده می‌کنیم تا یادگیری ساده، جذاب و ماندگار شود. هر درس با تمرین عملی و شبیه‌سازی بازار همراه است تا مفاهیم به شکل واقعی تجربه شوند. این روش باعث می‌شود مسیر یادگیری شما کاربردی‌تر و متفاوت‌تر از آموزش‌های معمول باشد.",
    }, {
        title: " آموزش تعاملی و سرگرم‌کننده",
        icon: gaming,
        description: "یادگیری خسته‌کننده را کنار گذاشته‌ایم؛ با تمرین، کاراکترها و بازی‌های آموزشی، مفاهیم به راحتی قابل درک می‌شوند.یادگیری خسته‌کننده را کنار گذاشته‌ایم",
    }, {
        title: "دسترسی به ابزارهای مالی کاربردی",
        icon: analize,
        description: "ابزارهای حرفه‌ای برای تمرین، تحلیل و شبیه‌سازی بازار در اختیار شماست تا تجربه عملی واقعی داشته باشید.",
    }, {
        title: "پاداش و انگیزه در مسیر یادگیری",
        icon: rewords,
        description: "ابزارهای حرفه‌ای برای تمرین، تحلیل و شبیه‌سازی بازار در اختیار شماست تا تجربه عملی واقعی داشته باشید.",
    }, {
        title: " مسیر مرحله‌ای و شفاف رشد",
        icon: grow,
        description: "ابزارهای حرفه‌ای برای تمرین، تحلیل و شبیه‌سازی بازار در اختیار شماست تا تجربه عملی واقعی داشته باشید.",
    },
]

function WhyUs() {
    const t = useTranslations("servicesPage.whyUs");
    return (
        <section className="my-10">
            <div className="mx-auto xl:max-w-[75rem] space-y-10 px-3 xxs:px-6 md:px-10 xl:px-0">
                <div className="flex flex-col-reverse md:flex-row gap-16 items-center">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-xl font-bold">{t("title")}</h2>
                        <p className="text-[#4d4d4d] text-justify leading-8">{t("des")}</p>
                    </div>
                    <div className="flex flex-1 items-center justify-center relative max-sm:px-4">
                        <Image src={banner} alt={"banner"}/>
                        <Image src={vector} alt={"vector"}
                               className="absolute -z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"/>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6 gap-y-12">
                    {
                        services.map((service, i) => (
                            <div className={classNames("rounded-xl relative bg-[#FFF6ED] border border-cream-medium px-6 pb-4 pt-14 md:pt-20 space-y-2 shadow-[-4px_4px_#FFC78F] col-span-full md:col-span-6 " , i < 2 ? "xl:col-span-6" : "xl:col-span-4") }>
                                <div className={classNames("absolute  -top-3", i  < 2 ? "md:right-4 max-md:left-4" : "left-4")}>
                                    <Image src={badge} alt={"badge"} className="max-md:size-20"/>
                                    <Image src={service.icon} alt={service.title} className="size-10 md:size-14 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3"/>
                                </div>
                                <h3 className={classNames("font-bold absolute top-6" ,i <2 ? " md:right-32 md:top-8" : "md:top-10")}>{service.title}</h3>
                                <p className="text-sm text-justify">{service.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default WhyUs;