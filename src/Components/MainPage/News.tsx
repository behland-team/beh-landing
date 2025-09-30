"use client";
import {useTranslations} from "next-intl";
import React from "react";
import Image from "next/image";
import beed from "@/assets/Images/beeds.svg";
import clock from "@/assets/Images/clock.svg";
import classNames from "classnames";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/Components/UI/carousel";

import mainNewsPic from "@/assets/Images/news/main-news.png";
import newsOne from "@/assets/Images/news/news-2.png";
import newsTwo from "@/assets/Images/news/news-1.png";
import newsThree from "@/assets/Images/news/news-3.png";
import {useCarousel} from "@/hooks/useCarousel";


const headNews = {
    title: "مسیر آموزش کاربران در به‌لند؛ از نوزاد تا تحلیلگر حرفه‌ای",
    description: "یادگیری مثل یک بازی، نه یک کلاس خشک\n" +
        "به‌لند یک دانشگاه سنتی نیست. اینجا هیچ خبری از کلاس‌های خسته‌کننده و پر از فرمول‌های خشک نیست. یادگیری در به‌لند شبیه یک بازی ماجراجویانه است؛ پر از مأموریت، چالش و پاداش. هر کاربر مسیر شخصی خودش را طی می‌کند، از نقطه‌ی صفر شروع می‌کند و قدم‌به‌قدم به یک تحلیلگر مستقل و توانمند در بازارهای مالی تبدیل می‌شود.",
    image: mainNewsPic,
    create_at: "1404/07/03"
}
const allNews = [
    {
        title: " چرا به‌لند ساخته شد؟",
        description: "دنیای مالی امروز با سرعتی سرسام‌آور در حال تغییره. هر روز مفاهیم تازه‌ای متولد می‌شن و خیلی از دانسته‌های دیروز به‌سرعت بی‌اعتبار می‌شن. توی این شرایط یه سؤال اساسی پیش روی همه ماست: چطور می‌تونیم در این دنیای پرشتاب نه‌تنها عقب نمونیم، بلکه جلوتر هم حرکت کنیم؟پاسخ ما «به‌لند»ه؛ سرزمینی نو که یادگیری مالی، رشد شخصی و کسب درآمد واقعی رو در کنار هم معنا می‌کنه.",
        image: newsOne,
        create_at: "1404/07/03"
    }, {
        title: " اقتصاد نوین به‌لند؛ مدلی که نمی‌تواند شکست بخورد",
        description: "هر پلتفرم آموزشی می‌تواند محتوایی تولید کند و هر پروژه بلاکچینی می‌تواند یک توکن بسازد. اما واقعیت این است که بیشتر آن‌ها یا به دلیل نداشتن مدل اقتصادی پایدار شکست می‌خورند، یا خیلی زود جذابیتشان را از دست می‌دهند. به‌لند دقیقاً برعکس این مسیر طراحی شده است؛ یک اکوسیستم زنده و خودکفا که از همان ابتدا بر پایه نیاز واقعی کاربران و مصرف مداوم توکن بنا شده است.",
        image: newsTwo,
        create_at: "1404/07/03"
    }, {
        title: " چشم‌انداز به‌لند",
        description: "به‌لند فقط یک پلتفرم آموزشی نیست؛یک سرزمین در حال شکل‌گیریه.سرزمینی که از روز اول با نگاه به آینده ساخته شد و مأموریت اصلیش تغییر در نحوه یادگیری و تجربه مالیه. چشم‌انداز به‌لند چیزی فراتر از یک وب‌سایت یا اپلیکیشنه؛ هدف ما خلق یک اکوسیستم جهانیه که در اون دانش، سرگرمی و درآمد در هم تنیده می‌شن.",
        image: newsThree,
        create_at: "1404/07/03"
    },
]

export default function News() {
    const t = useTranslations("newsHead");
    const [api, setApi] = React.useState<CarouselApi>()
    const {prevBtnDisabled , nextBtnDisabled, onPrevButtonClick , onNextButtonClick} = useCarousel(api);
    return (
        <div dir="rtl" className="py-10 lg:px-28 px-2 xxs:px-6  mt-10 xl:max-w-screen-2xl xl:mx-auto" id="news">
            <div className="w-full flex flex-col xxs:flex-row gap-3  items-center justify-between  mt-4">
                <h2 className=" text-[18px] md:text-2xl xl:text-3xl text-black font-semibold">{t("title")}</h2>
                <div className="flex items-center gap-4">
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
            <div className="flex flex-col gap-8 mt-12">
                <div
                    className={classNames("bg-[#FEECD8] shadow-news w-full rounded-3xl flex   xl:gap-2 gap-0 lg:min-h-64 max-md:hidden")}>
                    <div
                        className={classNames("flex flex-col flex-1 justify-between items-start pt-6 px-6")}>
                        <div className="flex flex-col gap-3 px-2">
                            <h2 className={classNames("text-text-gray font-semibold text-sm xl:text-2xl md:text-base")}>
                                {headNews.title}
                            </h2>
                            <p className={classNames("text-text-light_black text-justify  font-normal leading-6 md:leading-8  text-xs xl:text-base md:text-sm ")}>
                                {headNews.description}
                            </p>
                        </div>
                        <div
                            className="md:border-t border-dashed border-text-orange w-full flex justify-between items-center flex-row-reverse px-2 py-4 md:py-5 ">
                            <div className=" flex justify-center items-center">
                                <p className="font-normal text-text-gray md:text-text-orange text-sm ">
                                    {headNews.create_at}
                                </p>
                                <span className="icon icon-calendar text-text-orange mr-2"></span>
                            </div>
                            <div className="md:flex justify-center items-center gap-4 hidden">
                                <Image src={beed} alt="beed" className="h-5 w-5"/>
                                <p className="text-text-gray/50 font-normal text-sm">
                                    دوره آموزشی : یادگیری دوره ارزهای دیجیتال
                                </p>
                            </div>
                            <div className=" flex justify-center items-center gap-1 md:hidden">
                                <Image src={clock} alt={"clock"}/>
                                <p className="font-normal text-text-gray  text-sm">8 دقیقه</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={classNames("flex flex-col md:justify-center md:items-center  w-2/5 lg:w-1/3")}>
                        <div className=" h-full p-4 rounded-3xl overflow-hidden  ">
                            <Image
                                src={headNews.image}
                                alt="news"
                                className={classNames(" overflow-hidden rounded-2xl md:rounded-[34px] w-full h-full")}
                            />
                        </div>
                    </div>
                </div>
                <Carousel setApi={setApi} opts={{direction: "rtl", align: "start",}}>
                    <CarouselContent>
                        {allNews.map((item, index) => (
                            <CarouselItem key={index} className="basis-2/3 md:basis-1/2 lg:basis-2/5 xl:basis-1/3 ">
                                <div
                                    className={classNames("bg-[#FEECD8] rounded-xl md:rounded-3xl flex lg:max-w-96 xl:max-w-[400px] mx-auto flex-col-reverse h-full")}>
                                    <div
                                        className={classNames("flex flex-col flex-1 justify-between items-start sm:p-4 md:p-1")}>
                                        <div className="flex flex-col gap-3 px-2">
                                            <h2 className={classNames("text-text-gray font-semibold text-sm")}>
                                                {item.title}
                                            </h2>
                                            <p className={classNames("text-text-light_black text-justify font-normal leading-6 md:leading-8  text-xs md:text-sm max-sm:line-clamp-4")}>
                                                {item.description}
                                            </p>
                                        </div>
                                        <div
                                            className="md:border-t border-dashed border-text-orange w-full flex justify-between items-center flex-row-reverse px-2 py-4 md:py-5 ">
                                            <div className=" flex justify-center items-center">
                                                <p className="font-normal text-text-gray md:text-text-orange text-sm ">
                                                    {item.create_at}
                                                </p>
                                                <span className="icon icon-calendar text-text-orange mr-2"></span>
                                            </div>
                                            <div className="md:flex justify-center items-center gap-4 hidden">
                                                <Image src={beed} alt="beed" className="h-5 w-5"/>
                                                <p className="text-text-gray/50 font-normal text-sm">
                                                    دوره آموزشی : یادگیری دوره ارزهای دیجیتال
                                                </p>
                                            </div>
                                            <div className=" flex justify-center items-center gap-1 md:hidden">
                                                <Image src={clock} alt={"clock"}/>
                                                <p className="font-normal text-text-gray  text-sm">8 دقیقه</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-1.5 xxs:p-4 rounded-3xl overflow-hidden  ">
                                        <Image
                                            src={item.image}
                                            alt="news"
                                            className={classNames(" overflow-hidden rounded-xl xl:rounded-2xl md:rounded-[34px] w-full")}
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

        </div>
    );
}
