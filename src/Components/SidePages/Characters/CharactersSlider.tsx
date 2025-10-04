"use client";
import React, {useState} from 'react';
import {useCarousel} from "@/hooks/useCarousel";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/Components/UI/carousel";
import {characters} from "@/Components/MainPage/Characters";
import Image from "next/image";
import behDank from "@/assets/Images/beh/Behdonk2.png";
import userSquare from "@/assets/Images/user-square.svg";
import calenderTick from "@/assets/Images/calendar-tick.svg"
import userOctagon from "@/assets/Images/user-octagon.svg"
import classNames from "classnames";


function CharactersSlider() {
    const [api, setApi] = useState<CarouselApi>()
    const {
        selectedIndex,
        onNextButtonClick,
        nextBtnDisabled,
        prevBtnDisabled,
        onPrevButtonClick,
        onDotBtnClick
    } = useCarousel(api)
    return (
        <section className="my-28">
            <div className="lg:max-w-[75rem] 3xl:max-w-[85rem] mx-auto flex flex-col gap-20 px-6">
                <div className="flex items-end gap-6  justify-center min-h-56 flex-wrap">
                    {
                        characters.map((character, index) => (
                            <div className={classNames("rounded-2xl bg-[#FEECD8] min-w-44  relative pb-6 shrink-0 flex-1 transition-all duration-300 ease-in-out cursor-pointer" ,index !==selectedIndex ? " pt-12" : "flex flex-col-reverse items-center border border-cream-medium gap-3 py-4")} onClick={()=>onDotBtnClick(index)}>
                                <p className="text-lg font-bold text-center w-fit mx-auto">{character.name} {character.title}</p>
                                <div
                                       className={classNames("rounded-full size-24  flex items-center justify-center p-2" , selectedIndex === index  ? "bg-white" : "bg-gray-200 absolute -top-16 left-1/2 -translate-x-1/2")}>
                                    <Image src={character.image} alt={character.name} />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-16">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <span className="icon icon-quote text-gray-300 text-5xl"/>
                            <div>
                                <h3 className="text-3xl font-bold">به کو Behcow : </h3>
                                <p className="text-lg font-bold">هیچ راهی سخت نیست وقتی کسی کنارت باشه.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <button
                                disabled={prevBtnDisabled}
                                onClick={onPrevButtonClick}
                                className="border-2 shadow-main rounded-xl bg-white border-text-dark_Orange text-text-orange disabled:border-text-gray disabled:text-text-gray disabled:scale-90"
                            >
                                <span className="icon icon-arrow-back   p-2"></span>
                            </button>
                            <button
                                disabled={nextBtnDisabled}
                                onClick={onNextButtonClick}
                                className="border-2  shadow-main rounded-xl bg-white border-text-dark_Orange  text-text-orange disabled:border-text-gray disabled:text-text-gray disabled:scale-90"
                            >
                                <span className="icon icon-arrow-back rotate-180  p-2"></span>
                            </button>
                        </div>
                    </div>
                    <Carousel setApi={setApi} opts={{direction : "rtl"}} >
                        <CarouselContent>
                            {
                                characters.map((character, index) => (
                                    <CarouselItem key={index} >
                                        <div
                                            className="rounded-xl grid grid-cols-[1.3fr_1fr_1.5fr] bg-gray-200 p-8   shadow-inner shadow-black/40">
                                            <div className="bg-white p-4 space-y-2.5 rounded-lg">
                                                <h4 className="tracking-tight font-bold">داستان گذشته به کو :‌</h4>
                                                <p className="text-justify text-sm text-[#606060]"> در یک خانواده ساده و پرتلاش بزرگ شد.
                                                    همیشه دوست داشت پلی باشد بین تازه‌کارها و دنیای
                                                    بزرگ بازار. با اینکه سن کمی دارد، با گوش‌دادن به مشکلات دیگران و روحیه حمایت‌گرانه‌اش
                                                    جایگاه خاصی در بهلند پیدا کرده است.در یک خانواده ساده و پرتلاش بزرگ شد. همیشه دوست داشت
                                                    پلی باشد بین تازه‌کارها و دنیای بزرگ بازار. با اینکه سن کمی دارد، با گوش‌دادن به مشکلات
                                                    دیگران و روحیه حمایت‌گرانه‌اش جایگاه خاصی در بهلند پیدا کرده است.در یک خانواده ساده و
                                                    پرتلاش بزرگ شد. همیشه دوست داشت پلی باشد بین تازه‌کارها و دنیای بزرگ بازار. با اینکه سن
                                                    کمی دارد، با گوش‌دادن به مشکلات دیگران و روحیه حمایت‌گرانه‌اش جایگاه خاصی در بهلند پیدا
                                                    کرده است.در یک خانواده ساده و پرتلاش بزرگ شد. همیشه دوست داشت پلی باشد بین تازه‌کارها و
                                                    دنیای بزرگ بازار. با اینکه سن کمی دارد، با گوش‌دادن به مشکلات دیگران و روحیه
                                                    حمایت‌گرانه‌اش جایگاه خاصی در بهلند پیدا کرده است.در یک خانواده ساده و پرتلاش بزرگ شد.
                                                    همیشه دوست داشت پلی باشد بین تازه‌کارها و دنیای بزرگ بازار. با اینکه سن کمی دارد، با
                                                    گوش‌دادن به مشکلات دیگران و روحیه حمایت‌گرانه‌اش جایگاه خاصی در بهلند پیدا کرده است.</p>
                                            </div>
                                            <div>
                                                <Image src={behDank} alt={"behdank"}/>
                                            </div>
                                            <div className="flex flex-col gap-6">
                                                <div className="bg-white rounded-lg p-4 space-y-2">
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center gap-2">
                                                            <Image src={userOctagon} alt={"gender"} className="size-8"/>
                                                            <h6 className="font-semibold text-sm">جنسیت و گونه:</h6>
                                                        </div>
                                                        <p className="text-sm tracking-tight text-text-gray"> الاغ نر پرهیجان</p>
                                                    </div>
                                                    <hr className="border-b border-dashed border-gray-400"/>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center gap-2">
                                                            <Image src={calenderTick} alt={"age"} className="size-8"/>
                                                            <h6 className="font-semibold text-sm"> سن: </h6>
                                                        </div>
                                                        <p className="text-sm tracking-tight text-text-gray">۲۰ سال</p>
                                                    </div>
                                                    <hr className="border-b border-dashed border-gray-400"/>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center gap-2">
                                                            <Image src={userSquare} alt={"character"} className="size-8"/>
                                                            <h6 className="font-semibold text-sm">شخصیت کلی: </h6>
                                                        </div>
                                                        <p className="text-sm tracking-tight text-text-gray"> عاشق هیجان، پرریسک، بی‌پروا</p>
                                                    </div>
                                                </div>
                                                <div className="bg-white rounded-lg p-4">
                                                    <h5 className="font-bold">نقش در بهلند:</h5>
                                                    <p className="text-sm text-[#606060]">
                                                        نمونه زنده ریسک‌های کنترل‌نشده؛ کاربران با دیدن اشتباهات او مفهوم مدیریت ریسک را می‌آموزند.
                                                    </p>
                                                </div>
                                                <div className="bg-white rounded-lg p-4">
                                                    <p className="text-sm text-[#606060]"><span className="text-base font-bold text-black">هدف شخصی: </span>رسیدن به یک معامله بزرگ که او را ثروتمند کند.</p>
                                                </div>
                                                <div className="bg-white rounded-lg p-4">
                                                    <p className="text-sm text-[#606060]"><span className="text-base font-bold text-black">نقطه ضعف شخصیتی: </span>اعتیاد به ریسک و بی‌توجهی به هشدارها.</p>
                                                </div>
                                                <div className="space-y-4">
                                                    <h5 className="font-bold">رابطه با دیگر کاراکترها:</h5>
                                                    <ul className="grid grid-cols-2 gap-6 ">
                                                        <li className="py-4 rounded-lg text-center text-[#606060] text-sm bg-white text-nowrap">
                                                            باعث نگرانی به‌کو و به‌شیپ
                                                        </li>
                                                        <li className="py-4 rounded-lg text-center text-[#606060] text-sm bg-white text-nowrap">
                                                            درگیر بحث ریسک با به‌بول و به‌بیر.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </CarouselItem>
                                ))
                            }
                        </CarouselContent>
                        <div className="flex items-center justify-center gap-1.5 bg-[#FCECDB] p-1.5 w-fit mt-4 rounded-lg mx-auto">
                            {
                                characters.map((character, index) => (
                                    <span onClick={()=>onDotBtnClick(index)}
                                        key={index} className={classNames("rounded-full cursor-pointer size-2.5 transition-all duration-300 ease-in-out  ", index ===selectedIndex ? "bg-cream-medium w-9" : "bg-white")}></span>
                                ))
                            }
                        </div>
                    </Carousel>

                </div>
            </div>
        </section>
    );
}

export default CharactersSlider;