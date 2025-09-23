import React from 'react';
import userStageOne from "@/assets/Images/about/user-stage-1.png"
import userStageTwo from "@/assets/Images/about/user-stage-2.png"
import userStageThree from "@/assets/Images/about/user-stage-3.png"
import userStageFour from "@/assets/Images/about/user-stage-4.png"
import Image from "next/image";
import {useTranslations} from "next-intl";


const stages = [
    {
        title: "کودک جستجوگر مالی",
        des: "اولین قدم به دنیای به‌لند؛ کشف مفاهیم پایه، آشنایی با قهرمان‌ها و شروع ماجراجویی.",
        medal : userStageOne
    },{
        title: "یادگیرنده‌ی مشتاق",
        des: "دسترسی به کورس‌های تخصصی، تمرین با ماموریت‌ها و رشد شخصیت دیجیتال.",
        medal : userStageTwo
    },{
        title: "تحلیلگر تازه‌نفس",
        des: "آزمایش آموخته‌ها، انجام چالش‌های پیشرفته و دریافت پاداش‌های بیشتر.",
        medal : userStageThree
    },{
        title: "پیشه‌ور مالی (حرفه‌ای)",
        des: "تبدیل مهارت‌ها به تجربه واقعی، ورود به بازار و کسب درآمد از دانسته‌ها.",
        medal : userStageFour
    },
]

function UserRoad() {
    const t = useTranslations("aboutPage.userRoad")
    return (
        <section className="my-10">
            <div className="flex flex-col items-center max-w-[74rem] gap-16 lg:gap-24 mx-auto">
                <div className="space-y-4 w-full px-10 md:px-0 md:w-2/3">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">{t("title")}</h3>
                    <p className="text-sm sm:text-base text-center">{t("description")}</p>
                </div>
                <div
                    className="grid md:grid-cols-2 lg:flex lg:items-center lg:justify-between relative gap-4 lg:gap-7 px-6 lg:px-0">
                    <span
                        className="absolute right-0 left-0 top-[calc(50%-2px)] -translate-y-1/2 h-0.5 bg-gray-300 -z-10 hidden lg:block"></span>
                    {
                        stages.map((stage , i)=>(
                            <div key={i}
                                className="flex h-full md:flex-col items-center gap-6 bg-cream-light lg:bg-transparent rounded-lg p-2">
                                <div className="flex flex-col items-center gap-2">
                                    <Image src={stage.medal} alt={stage.title}/>
                                    <div
                                        className="border-2 border-black size-6 rounded-full bg-gray-300 hidden lg:block"></div>
                                </div>
                                <div className="flex flex-col items-start md:items-center gap-2">
                                    <h6 className=" text-right md:text-center font-bold">{stage.title}</h6>
                                    <p className="text-sm text-right md:text-center">{stage.des}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default UserRoad;