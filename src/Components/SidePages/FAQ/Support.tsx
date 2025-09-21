import React from 'react';
import bulb from "@/assets/Images/faq/bulb.png";
import question from "@/assets/Images/faq/question.png";
import help from "@/assets/Images/faq/help.png";
import message from "@/assets/Images/faq/messge.png"
import Image from "next/image";
function Support() {
    return (
        <section className="my-20">
            <div className="max-w-[75rem] mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-12 xl:px-0 ">
                    <div className="lg:w-1/3 flex flex-col items-center lg:items-start gap-3">
                        <h4 className="text-xl md:text-3xl font-semibold">همیشه کنارت هستیم</h4>
                        <p className="text-text-gray lg:text-justify text-center">در به‌لند تو هیچ‌وقت تنها نیستی. از اولین قدم‌های یادگیری تا ورود به بازار و کسب درآمد، تیم ما همراهته. هر جا به سؤال، پشتیبانی یا راهنمایی نیاز داشتی، فقط کافیه دست دراز کنی؛ ما همیشه کنار تو هستیم.</p>
                        <button
                            className="py-0.5 px-6 mt-4 rounded-lg border bg-[#FEECD8]  w-fit border-cream-medium shadow-main shadow-cream-medium  text-cream-medium flex items-center justify-center gap-2">
                            <span>تماس با ما</span>
                            <span className="icon icon-call"></span>
                        </button>
                    </div>
                    <div className="lg:w-2/3 grid xxs:grid-cols-2 gap-6">
                            <div className="border-2 border-black rounded-xl bg-[#FBF7F5] flex flex-col-reverse md:flex-row items-center gap-8 p-6 justify-between">
                                    <div className="flex flex-col gap-2 items-center md:items-start">
                                        <h5 className="text-sm md:text-base font-semibold">پشتیبانی سریع و واقعی</h5>
                                        <p className="text-sm">تیم به‌لند آماده‌ست تا در کوتاه‌ترین زمان بهت کمک کنه.</p>
                                    </div>
                                    <Image src={bulb} alt={"fast support"} />
                            </div>
                            <div className="border-2 border-black rounded-xl bg-[#FBF7F5] flex flex-col-reverse md:flex-row items-center gap-8 p-6 justify-between">
                                    <div className="flex flex-col gap-2 items-center md:items-start">
                                        <h5 className="text-sm md:text-base font-semibold">کنار تو در هر مرحله</h5>
                                        <p className="text-xs text-center md:text-sm md:text-start">از اولین قدم یادگیری تا تبدیل شدن به تحلیلگر حرفه‌ای، تنها نمی‌مونی.</p>
                                    </div>
                                    <Image src={help} alt={"hepling support"} />
                            </div>
                            <div className="border-2 border-black rounded-xl bg-[#FBF7F5] flex flex-col-reverse md:flex-row items-center gap-8 p-6 justify-between">
                                    <div className="flex flex-col gap-2 items-center md:items-start">
                                        <h5 className="text-sm md:text-base font-semibold">اطمینان در یادگیری و درآمد</h5>
                                        <p className="text-xs text-center md:text-sm md:text-start">هر چیزی که یاد می‌گیری، پایه‌ای برای رشد واقعی و آینده مالی قدرتمندته</p>
                                    </div>
                                    <Image src={question} alt={"learning insurance"} />
                            </div>
                            <div className="border-2 border-black rounded-xl bg-[#FBF7F5] flex  flex-col-reverse md:flex-row items-center gap-8 p-6 justify-between">
                                    <div className="flex flex-col gap-2 items-center md:items-start">
                                        <h5 className="text-sm md:text-base font-semibold">پاسخ‌های همیشه به‌روز</h5>
                                        <p className="text-xs text-center md:text-sm md:text-start">جواب‌ها و راهنماها مرتب آپدیت می‌شن تا همیشه جدیدترین مسیر جلوی پاته.</p>
                                    </div>
                                    <Image src={message} alt={"updated support"} />
                            </div>
                    </div>
            </div>
        </section>
    );
}

export default Support;