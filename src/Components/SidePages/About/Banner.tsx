import React from 'react';
import bannerImage from "@/assets/Images/about-banner.png"
import Image from "next/image";
function Banner() {
    return (
        <section className="my-20 ">
            <div
                className="border-cream-medium border rounded-3xl mx-auto w-4/5 xl:max-w-[75rem] bg-[#FEECD8]  flex relative ">
                <div className="flex flex-col gap-4 w-1/2 pr-14 pt-12 pb-20 relative z-[2] ">
                    <h4 className="text-3xl font-semibold leading-10">
                        بهلند؛ جایی که یادگیری مالی واقعی، تبدیل به دارایی دیجیتال و تجربه‌ای بازی‌وار می‌شود
                    </h4>
                    <div className="flex flex-col gap-8">
                        <p className="text-justify">
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
                <div className="w-1/2 relative">
                    <Image src={bannerImage} alt={"about banner"} className="absolute -bottom-10 left-2" />
                </div>
                <p className="absolute left-[clac(50%-30px)] opacity-20  font-bold text-9xl tracking-wide z-[1]   bottom-0 text-white">
                    BEHLAND
                </p>
            </div>
        </section>
    );
}

export default Banner;