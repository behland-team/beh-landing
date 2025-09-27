import React from 'react';
import badge from "@/assets/Images/Article/badge.svg";
import Image from "next/image";

function Comments() {
    return (
        <div className="space-y-10 my-5">
            <div
                className="border border-[#CCCFD4] bg-[#FBF7F5] px-6 pt-20 pb-8 relative rounded-xl flex flex-col gap-6">
                <div className="absolute -top-2 right-6 w-64">
                    <Image src={badge} alt="badge" className="w-full"/>
                    <p className="w-full text-center left-1/2 -translate-x-1/2 top-2 absolute font-bold">دیدگاه همراهان
                        ما </p>
                </div>
                <div className="bg-white rounded-xl p-4 flex flex-col gap-2 border border-[#CCCFD4]">
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center gap-2.5">
                            <div className="bg-sky-300 size-8 rounded-full">
                            </div>
                            <p className="font-semibold">مریم السادات حسینی موسوی</p>
                            <div className="flex items-center gap-1">
                                <span className="icon icon-star text-yellow-600"></span>
                                <span className="text-[#848484] tracking-tight">4/5</span>
                            </div>
                        </div>
                        <p className="text-[#848484] tracking-tight">{"1404/اردیبهشت / 04"}</p>
                    </div>
                    <hr className="border-b border-gray-400 border-dashed " />
                    <div className="space-y-2">
                        <p className="text-justify text-text-gray"> ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                            تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، </p>
                        <button className="block border border-[#8C8C8C] text-[#8C8C8C] px-4  py-2 rounded-lg font-semibold mr-auto">پاسخ دادن</button>
                    </div>
                </div>
            </div>
            <div className="border border-[#CCCFD4] bg-[#FBF7F5] px-6 pb-8 pt-20 relative rounded-xl">
                <div className="absolute -top-2 right-6 w-64">
                    <Image src={badge} alt="badge" className="w-full"/>
                    <p className="w-full text-center left-1/2 -translate-x-1/2 top-2 absolute font-bold">دیدگاهتان را
                        بنویسید</p>
                </div>
                <form className="grid grid-cols-2 gap-6">
                    <p className="col-span-full text-sm font-semibold text-text-gray">نشانی ایمیل شما منتشر نخواهد شد.</p>
                    <input placeholder="نام و نام خانوادگی" className="col-span-1 rounded-lg border border-black outline-none px-6 py-3"/>
                    <input placeholder="ایمیل"  className="col-span-1 rounded-lg border border-black outline-none px-6 py-3"/>
                    <textarea placeholder="پیام شما"  rows={6} className="col-span-full rounded-lg border border-black outline-none px-6 py-3"></textarea>
                    <div className="flex items-center justify-between col-span-full">
                            <div className="flex items-center gap-2">
                                <input id="rememberMe" type="checkbox"/>
                                <label htmlFor="rememberMe" className="text-sm text-[#404040]">ذخیره نام ،ایمیل و وبسایت من در مرورگر برای که دورباره دیدگاهی مینویسم.</label>
                            </div>
                        <button className="px-6 py-2 rounded-lg border-2 border-cream-medium text-cream-medium bg-[#FEECD8] shadow-main shadow-cream-medium font-semibold">ارسال دیدگاه</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Comments;