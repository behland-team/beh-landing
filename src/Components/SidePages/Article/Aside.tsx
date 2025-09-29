import React, {ComponentProps} from 'react';
import classNames from "classnames";
import badge from "@/assets/Images/Article/badge.svg";
import Image from "next/image";
import Share from "@/Components/SidePages/Article/Share";

function Aside({className, ...props}: ComponentProps<"aside">) {
    return (
        <aside className={classNames("space-y-5 md:sticky md:top-32 h-fit", className)} {...props}>
            <div className="border border-cream-medium bg-[#FEECD8] px-4 py-10 relative rounded-xl">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-64 max-w-64">
                    <Image src={badge} alt={"badge"} className="w-full"/>
                    <p className="absolute top-2 left-1/2 -translate-x-1/2 w-full text-center font-bold">در این مقاله
                        میخوانید : </p>
                </div>
                <ul className="list-disc list-inside mt-6 space-y-3 text-text-gray">
                    <li>بهلند با معرفی مسیر آموزشی تازه</li>
                    <li>راه‌اندازی مسیر آموزشی جدید در بهلند؛ تجربه‌ای متفاوت برای یادگیری</li>
                </ul>
            </div>
            <div className="max-md:hidden">
                <Share/>
            </div>
            <div className="h-56 flex items-center justify-center bg-cream-light rounded-lg max-md:hidden">
                <p className="font-bold">بنر تبلیغاتی</p>
            </div>
        </aside>
    );
}

export default Aside;