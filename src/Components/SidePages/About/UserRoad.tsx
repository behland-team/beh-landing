import React from 'react';
import userStageOne from "@/assets/Images/about/user-stage-1.png"
import userStageTwo from "@/assets/Images/about/user-stage-2.png"
import userStageThree from "@/assets/Images/about/user-stage-3.png"
import userStageFour from "@/assets/Images/about/user-stage-4.png"
import Image from "next/image";

function UserRoad() {
    return (
        <section className="my-10">
            <div className="flex flex-col items-center max-w-[74rem] gap-24 mx-auto">
                <div className="space-y-4 w-2/3">
                    <h3 className="text-3xl font-bold text-center">مسیر کاربر در بهلند</h3>
                    <p className="text-center">مسیر کاربر در بهلند از سه مرحله اصلی عبور می‌کند: آغاز مسیر با کورس‌های
                        رایگان، یادگیری و رشد
                        شخصیت دیجیتال با دریافت نشان‌ها و توکن، و در نهایت تبدیل شدن به متخصص بازار با تولید محتوا و
                        درآمد پایدار.</p>
                </div>
                <div className="flex items-center justify-between relative gap-7 ">
                    <span className="absolute right-0 left-0 top-[calc(50%-2px)] -translate-y-1/2 h-0.5 bg-gray-300 -z-10" ></span>
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex flex-col items-center gap-2">
                            <Image src={userStageOne} alt={"stage 1"}/>
                            <div className="border-2 border-black size-6 rounded-full bg-gray-300"></div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <h6 className="text-center font-bold">کودک جستجوگر مالی</h6>
                            <p className="text-sm text-center">اولین قدم به دنیای به‌لند؛ کشف مفاهیم پایه، آشنایی با قهرمان‌ها و شروع ماجراجویی.</p>
                        </div>

                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex flex-col items-center gap-2">
                            <Image src={userStageTwo} alt={"stage 2"}/>
                            <div className="border-2 border-black size-6 rounded-full bg-gray-300"></div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <h6 className="text-center font-bold">یادگیرنده‌ی مشتاق</h6>
                            <p className="text-sm text-center">دسترسی به کورس‌های تخصصی، تمرین با ماموریت‌ها و رشد شخصیت دیجیتال.</p>
                        </div>

                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex flex-col items-center gap-2">
                            <Image src={userStageThree} alt={"stage 3"}/>
                            <div className="border-2 border-black size-6 rounded-full bg-gray-300"></div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <h6 className="text-center font-bold">تحلیلگر تازه‌نفس</h6>
                            <p className="text-sm text-center">آزمایش آموخته‌ها، انجام چالش‌های پیشرفته و دریافت پاداش‌های بیشتر.</p>
                        </div>

                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex flex-col items-center gap-2">
                            <Image src={userStageFour} alt={"stage 4"}/>
                            <div className="border-2 border-black size-6 rounded-full bg-gray-300"></div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <h6 className="text-center font-bold">پیشه‌ور مالی (حرفه‌ای)</h6>
                            <p className="text-sm text-center">تبدیل مهارت‌ها به تجربه واقعی، ورود به بازار و کسب درآمد از دانسته‌ها.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserRoad;