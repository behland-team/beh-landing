import React from 'react';
import storyLand from "@/assets/Images/storyLand.png"
import LandBg from "@/assets/Images/behIslandBg.png"
import Image from "next/image";
function Story() {
    return (
        <section className="bg-storyBg bg-no-repeat w-full  my-40">
            <div className="flex 3xl:max-w-[85rem] mx-auto min-h-[500px] relative">
                <div className="pr-32 pl-12 py-14 flex flex-col gap-4 w-2/3 ">
                    <h3 className="font-semibold text-4xl">داستان به‌لند</h3>
                    <p className="text-justify">
                        اینجا سرزمینی واقعی برای یادگیریِ, رشد, کسب درآمد و ورود به بازار در حوزه دانش مالی است. ما فقط یک
                        پلتفرم آموزشی طراحی نکردیم, بلکه مسیری بازیگونه و مرحله به مرحله آماده کردیم که هر فرد, مثل یک
                        ماجراجو مرحله به مرحله رشد میکنه, آموزش می بینه و با چالش ها و ماموریت های جذاب به یک تحلیلگر حرفه
                        ای تبدیل میشه. هرگام تو رو به یک مهارت واقعی نزدیک تر می کنه و در نهایت میتونی از آموخته هات درآمد
                        داشته باشی. مسیر آموزش به تنهایی خسته کننده است؛ اما شخصیت های بهلند کنار تو هستند تا مسیر آموزش رو
                        مفرح تر و مفهومی تر طی کنی. اگر تو هم به عنوان عضوی از جامعه رو به رشد که آینده مالیش رو خودش میسازه
                        آماده ای تا ماجراجویی مالیت رو شروع کنی و وارد بهلند بشی تبریک میگم؛ همین حالا وقتشه.
                    </p>

                </div>
                <div className="absolute left-1/3 -bottom-8 flex gap-4 pl-12 ">
                    <div
                        className="border border-cream-medium rounded-xl px-2.5 py-3 flex flex-col  items-center gap-4 bg-[#FEECD8] w-[181px]">
                        <div className="rounded-full bg-white/70 py-1.5 px-2  mt-4 flex items-center justify-center">
                            <span className="icon icon-profile text-cream-medium text-4xl"></span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <h6 className="font-bold text-sm text-center">مسیر رشد واقعی</h6>
                            <p className="text-sm text-center text-text-gray">هر قدم تو رو به یک مهارت مالی کاربردی نزدیک‌تر
                                می‌کنه.</p>
                        </div>
                    </div>
                    <div
                        className="border border-cream-medium rounded-xl px-2.5 py-3 flex flex-col  items-center gap-4 bg-[#FEECD8] w-[181px]">
                        <div className="rounded-full bg-white/70 py-1.5 px-2  mt-4 flex items-center justify-center">
                            <span className="icon icon-profile text-cream-medium text-4xl"></span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <h6 className="font-bold text-sm text-center">یادگیری همراه با ماجراجویی</h6>
                            <p className="text-sm text-center text-text-gray">آموزش خشک نیست، بلکه بازی‌گونه و مرحله‌به‌مرحله طراحی شده.</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 relative">
                    <Image src={LandBg} alt={"background island"}  className="absolute top-0 left-0 bottom-5 w-full h-full"/>
                    <Image src={storyLand} alt={"story beh land"}   className="absolute right-0 -bottom-10"/>
                </div>
            </div>
        </section>
    );
}

export default Story;