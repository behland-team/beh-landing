import React from 'react';
import Image from "next/image";
import bannerImage from "@/assets/Images/contacts/banner.png";

function Banner() {
    return (
        <section className="my-10 md:my-20 px-6 md:px-0">
            <div
                className="border-cream-medium border rounded-3xl mx-auto w-full md:w-4/5 xl:max-w-[75rem] bg-[#FEECD8]  flex  relative ">
                <div
                    className="flex flex-col gap-4 w-full md:w-1/2 px-6 py-8 sm:pl-14 md:pl-0 sm:pr-14 sm:pt-12 sm:pb-20 relative z-[2] ">
                    <h4 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold xl:leading-10">
                        کوتاه‌ترین مسیرها برای گفت‌وگو با ما
                    </h4>
                    <div className="flex flex-col gap-8">
                        <p className="text-sm lg:text-base text-justify">
                            ما همیشه خوشحال می‌شیم صدای شما رو بشنویم. چه سوالی درباره خدمات ما داشته باشین، چه نیاز به
                            راهنمایی داشته باشین یا حتی فقط بخواین نظر و پیشنهادتون رو با ما به اشتراک بذارین، تیم
                            پشتیبانی ما آماده پاسخگویی به شماست. می‌تونین از طریق فرم تماس، ایمیل یا تلفن با ما در
                            ارتباط باشین و مطمئن باشین که در سریع‌ترین زمان ممکن پاسخ شما داده می‌شه. ارتباط با شما برای
                            ما فقط یک راه پشتیبانی نیست، بلکه فرصتیه برای ایجاد همکاری‌های جدید و بهبود کیفیت خدماتمون.
                        </p>
                        <button
                            className="py-1.5 px-12 rounded-lg border bg-[#FEECD8]  w-fit border-cream-medium shadow-main shadow-cream-medium  text-cream-medium flex items-center justify-center gap-2">
                            <span>تماس با ما</span>
                            <span className="icon icon-call"></span>
                        </button>
                    </div>
                </div>
                <div className="w-1/2 relative hidden md:flex items-center justify-center ">
                    <Image src={bannerImage} alt={"about banner"} className="max-w-[500px]"/>
                </div>
                <p className="absolute left-[clac(50%-30px)] opacity-20  font-bold text-7xl lg:text-9xl tracking-wide z-[1]   bottom-0 text-white">
                    BEHLAND
                </p>
            </div>
            <Image src={bannerImage} alt={"about banner"} className="w-96 mx-auto md:hidden "/>
        </section>
    );
}

export default Banner;