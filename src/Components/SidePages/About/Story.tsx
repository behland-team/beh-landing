import React from 'react';
import storyLand from "@/assets/Images/storyLand.png"
import LandBg from "@/assets/Images/behIslandBg.png"
import LandBgMobile from "@/assets/Images/behIslandBgMobile.png"
import Image from "next/image";
function Story() {
    return (
        <section className="bg-storyBg bg-no-repeat w-full my-16 lg:my-40">
            <div className="flex flex-col lg:flex-row 3xl:max-w-[85rem] mx-auto min-h-[500px] relative">
                <div className="pr-12 xl:pr-32 pl-12 py-10 lg:py-14 flex flex-col gap-4 lg:w-2/3 ">
                    <h3 className="font-semibold text-xl xxs:text-2xl md:text-3xl xl:text-4xl">داستان به‌لند</h3>
                    <p className=" text-sm sm:text-base text-justify">
                        اینجا سرزمینی واقعی برای یادگیریِ, رشد, کسب درآمد و ورود به بازار در حوزه دانش مالی است. ما فقط یک
                        پلتفرم آموزشی طراحی نکردیم, بلکه مسیری بازیگونه و مرحله به مرحله آماده کردیم که هر فرد, مثل یک
                        ماجراجو مرحله به مرحله رشد میکنه, آموزش می بینه و با چالش ها و ماموریت های جذاب به یک تحلیلگر حرفه
                        ای تبدیل میشه. هرگام تو رو به یک مهارت واقعی نزدیک تر می کنه و در نهایت میتونی از آموخته هات درآمد
                        داشته باشی. مسیر آموزش به تنهایی خسته کننده است؛ اما شخصیت های بهلند کنار تو هستند تا مسیر آموزش رو
                        مفرح تر و مفهومی تر طی کنی. اگر تو هم به عنوان عضوی از جامعه رو به رشد که آینده مالیش رو خودش میسازه
                        آماده ای تا ماجراجویی مالیت رو شروع کنی و وارد بهلند بشی تبریک میگم؛ همین حالا وقتشه.
                    </p>

                </div>
                <div className="lg:absolute left-1/3 -bottom-8 flex flex-col lg:flex-row items-center lg:items-stretch gap-4 lg:pl-12 p-5  ">
                    <div
                        className="border border-cream-medium rounded-xl px-2.5 py-3 flex  lg:flex-col  items-center gap-4 bg-[#FEECD8] w-full lg:w-[181px]">
                        <div className="rounded-full bg-white/70 py-1.5 px-2  mt-4 flex items-center justify-center">
                            <span className="icon icon-profile text-cream-medium text-4xl"></span>
                        </div>
                        <div className="flex flex-col items-start lg:items-center gap-2">
                            <h6 className="font-bold text-sm lg:text-center">مسیر رشد واقعی</h6>
                            <p className="text-sm lg:text-center text-text-gray">هر قدم تو رو به یک مهارت مالی کاربردی نزدیک‌تر
                                می‌کنه.</p>
                        </div>
                    </div>
                    <div
                        className="border border-cream-medium rounded-xl px-2.5 py-3 flex lg:flex-col  items-center gap-4 bg-[#FEECD8] w-full lg:w-[181px]">
                        <div className="rounded-full bg-white/70 py-1.5 px-2  mt-4 flex items-center justify-center">
                            <span className="icon icon-profile text-cream-medium text-4xl"></span>
                        </div>
                        <div className="flex flex-col items-start lg:items-center gap-2">
                            <h6 className="font-bold text-sm lg:text-center">یادگیری همراه با ماجراجویی</h6>
                            <p className="text-sm lg:text-center text-text-gray">آموزش خشک نیست، بلکه بازی‌گونه و مرحله‌به‌مرحله طراحی شده.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 relative max-lg:min-h-[400px]">
                    <Image src={LandBg} alt={"background island"}  className="absolute top-0 left-0 bottom-5 w-full h-full hidden lg:block"/>
                    <Image src={LandBgMobile} alt={"background"} className="absolute top-0 left-0 right-0 w-full h-full bottom-0 lg:hidden"/>
                    <Image src={storyLand} alt={"story beh land"}   className="absolute lg:right-0 lg:translate-x-0 lg:-bottom-5 xl:-bottom-10 right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2 lg:translate-y-0 max-lg:w-64"/>
                </div>
            </div>
        </section>
    );
}

export default Story;