import React from 'react';
import Image from "next/image";
import abbasi from "@/assets/Images/TeamMemebers/Abbasi.png"

function Author() {
    return (
        <div className="flex flex-col gap-5 border border-[#CCCFD4]  rounded-lg px-6 py-7">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image src={abbasi} alt={"abbasi"} className="size-14 rounded-full bg-red-800"/>
                    <h4 className="font-semibold text-lg ">فاطمه عباسی</h4>
                </div>
                <button className="rounded-lg px-4 py-3 text-cream-medium/70 bg-[#FBF7F5] text-sm">سایر مقالات نویسنده
                </button>
            </div>
            <p className="text-justify text-[#404040] leading-8">«نوشتن، قفل‌هایی را باز میکند که به ظاهر غیرقابل‌‌نفوذ هستند». این باور نیکان او
                را به سمت دنیای کلمات فرستاد و حالا چندسالی است که نوشته‌هایش قفل ذهن مخاطب‌های حوزه تکنولوژی را باز
                می‌کند.</p>
        </div>
    );
}

export default Author;