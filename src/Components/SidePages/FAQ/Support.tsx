import React from 'react';
import bulb from "@/assets/Images/faq/bulb.png";
import question from "@/assets/Images/faq/question.png";
import help from "@/assets/Images/faq/help.png";
import message from "@/assets/Images/faq/messge.png"
import Image from "next/image";
import {useTranslations} from "next-intl";

const cards = [
    {
        title: "پشتیبانی سریع و واقعی",
        des: "تیم به‌لند آماده‌ست تا در کوتاه‌ترین زمان بهت کمک کنه.",
        icon: bulb
    }
    , {
        title: "کنار تو در هر مرحله",
        des: "از اولین قدم یادگیری تا تبدیل شدن به تحلیلگر حرفه‌ای، تنها نمی‌مونی.",
        icon: help
    }
    , {
        title: "اطمینان در یادگیری و درآمد",
        des: "هر چیزی که یاد می‌گیری، پایه‌ای برای رشد واقعی و آینده مالی قدرتمندته",
        icon: question
    }
    , {
        title: "پاسخ‌های همیشه به‌روز",
        des: "جواب‌ها و راهنماها مرتب آپدیت می‌شن تا همیشه جدیدترین مسیر جلوی پاته.",
        icon: message
    }
]

function Support() {
    const t = useTranslations("faqPage.support")
    return (
        <section className="my-20">
            <div
                className="max-w-[75rem] mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-12 xl:px-0 ">
                <div className="lg:w-1/3 flex flex-col items-center lg:items-start gap-3">
                    <h4 className="text-xl md:text-3xl font-semibold">{t("title")}</h4>
                    <p className="text-text-gray lg:text-justify text-center">{t("description")}</p>
                    <button
                        className="py-0.5 px-6 mt-4 rounded-lg border bg-[#FEECD8]  w-fit border-cream-medium shadow-main shadow-cream-medium  text-cream-medium flex items-center justify-center gap-2">
                        <span>{t("contact-us")}</span>
                        <span className="icon icon-call"></span>
                    </button>
                </div>
                <div className="lg:w-2/3 grid xxs:grid-cols-2 gap-6">
                    {cards.map((card , i) => (
                        <div key={i}
                            className="border-2 border-black rounded-xl bg-[#FBF7F5] flex flex-col-reverse md:flex-row items-center gap-8 p-6 justify-between">
                            <div className="flex flex-col gap-2 items-center md:items-start">
                                <h5 className="text-sm md:text-base font-semibold">{card.title}</h5>
                                <p className="text-sm">{card.des}</p>
                            </div>
                            <Image src={card.icon} alt={card.title}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Support;