import React from 'react';
import Image from "next/image";
import star from "@/assets/Images/about/star.svg"
import team from "@/assets/Images/about/team-behland.png"
function Contact() {
    return (
        <section className="mt-20">
            <div className="max-w-[85rem] mx-auto  relative ">
                <Image src={star} alt={"star"} className="absolute left-10 top-1/5 -translate-y-1/5 -z-10" />
                <Image src={star} alt={"star"} className="absolute right-14 rotate-45 top-2/5 -translate-y-2/5 -z-10" />
                <div className="flex flex-col items-center gap-4 w-2/3 mx-auto">
                    <h3 className="text-3xl font-bold text-center ">مسیر تازهی تو در دنیای مالی</h3>
                    <p className="text-center">
                        بهلند مسیری متفاوت برای آموزش بازارهای مالی ساخته؛ مسیری شبیه یک بازی با مأموریت‌ها و تمرین‌های
                        جذاب که یادگیری رو لذت‌بخش می‌کنه. در هر مرحله، مهارتت بیشتر میشه و حتی از همان ابتدا می‌تونی
                        درآمد داشته باشی. با شخصیت‌ها و پشتیبانی همیشگی، قدم‌به‌قدم کنارت هستیم تا تجربه و درآمدت رشد
                        کنه. مسیر آماده است، فقط کافیست بخواهی!
                    </p>
                    <div className=" mt-4 flex items-center justify-center gap-6">
                        <button className="py-1.5 px-12 rounded-lg border bg-[#FEECD8]  w-fit border-cream-medium shadow-main shadow-cream-medium  text-cream-medium flex items-center justify-center gap-2">
                            <span>تماس با ما</span>
                            <span className="icon icon-call"></span>
                        </button>
                        <button className="py-1.5 px-12 rounded-lg border w-fit border-cream-medium shadow-main shadow-cream-medium  text-cream-medium flex items-center justify-center gap-2">
                            <span>تماس با ما</span>
                            <span className="icon icon-call"></span>
                        </button>
                    </div>
                </div>
                <div className="h-[400px]"></div>
                <Image src={team} alt={"team svg"}  className="maxw-[75rem] mx-auto absolute -bottom-20  left-1/2 -translate-x-1/2"/>
            </div>
        </section>
    );
}

export default Contact;