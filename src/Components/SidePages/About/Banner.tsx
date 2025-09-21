import React from 'react';
import bannerImage from "@/assets/Images/about-banner.png"
import Image from "next/image";
function Banner() {
    return (
        <section className="my-10 md:my-20 px-6 md:px-0">
            <div
                className="border-cream-medium border rounded-3xl mx-auto w-full md:w-4/5 xl:max-w-[75rem] bg-[#FEECD8]  flex flex-col md:flex-row  relative ">
                <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/2 px-6 py-8 sm:pl-14 md:pl-0 sm:pr-14 sm:pt-12 sm:pb-20 relative z-[2] ">
                    <h4 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold xl:leading-10">
                        بهلند؛ جایی که یادگیری مالی واقعی، تبدیل به دارایی دیجیتال و تجربه‌ای بازی‌وار می‌شود
                    </h4>
                    <div className="flex flex-col gap-8 items-center md:items-start">
                        <p className="text-sm lg:text-base text-justify">
                            بهلند مسیری متفاوت برای آموزش بازارهای مالی ساخته؛ مسیری شبیه یک بازی با مأموریت‌ها و
                            تمرین‌های جذاب که یادگیری رو لذت‌بخش می‌کنه. در هر مرحله، مهارتت بیشتر میشه و حتی از همان
                            ابتدا می‌تونی درآمد داشته باشی. با شخصیت‌ها و پشتیبانی همیشگی، قدم‌به‌قدم کنارت هستیم تا
                            تجربه و درآمدت رشد کنه. مسیر آماده است، فقط کافیست بخواهی!
                        </p>
                        <button className="py-1.5 px-12 rounded-lg border bg-[#FEECD8]  w-fit border-cream-medium shadow-main shadow-cream-medium  text-cream-medium flex items-center justify-center gap-2">
                            <span>تماس با ما</span>
                            <span className="icon icon-call"></span>
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 relative max-xxs:min-h-52 max-md:min-h-72">
                    <Image src={bannerImage} alt={"about banner"} className="absolute -bottom-20 md:static xl:absolute xl:-bottom-10 left-2 " />
                </div>
                <p className="absolute left-[clac(50%-30px)] opacity-20 max-md:hidden  font-bold text-7xl lg:text-9xl tracking-wide z-[1]   bottom-0 text-white">
                    BEHLAND
                </p>
            </div>
        </section>
    );
}

export default Banner;