"use client";
import React, {useCallback, useEffect, useState} from 'react';
import Amirali from "@/assets/Images/TeamMemebers/Amirali2.png";
import Mehdi from "@/assets/Images/TeamMemebers/Mehdi2.png";
import Amirhossein from "@/assets/Images/TeamMemebers/Amirhossein.png";
import Nasrin from "@/assets/Images/TeamMemebers/Narges.png";
import Shiva from "@/assets/Images/TeamMemebers/Shiva.png";
import Davood from "@/assets/Images/TeamMemebers/David.png";
import Parham from "@/assets/Images/TeamMemebers/parham.png";
import Alireza from "@/assets/Images/TeamMemebers/Alireza.png";
import Yassaman from "@/assets/Images/TeamMemebers/Yassaman.png";
import Abbasi from "@/assets/Images/TeamMemebers/Abbasi.png";
import quote from "@/assets/Images/about/quote.png";
import classNames from "classnames";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/Components/UI/carousel";


const teamQuote = [
    {
        name: "امیرعلی نیرومند زال پور",
        title: "Founder & CEO",
        role: ["مسئول نظارت کلی", "مدیریت استراتژیک پروژه", "تعیین مسیر رشد"],
        image: Amirali,
        quote: "از بچگی جذب راز پشت پرده‌ی تکنولوژی بودم. امروز تو به‌لند می‌تونم این عشق رو به ساختن، با رویای بزرگ‌تری ترکیب کنم؛ اینکه هر خط کد، پلی باشه برای یادگیری و آینده‌ای روشن‌تر. باور دارم تکنولوژی فقط ابزار نیست، فرصتیه برای رشد و تغییر زندگی :)"
    },
    {
        name: "مهدی خسروی",
        title: "Technical Lead ",
        role: ["مسئول توسعه ربات تلگرام", "مدیریت زیرساخت فنی"],
        image: Mehdi,
        quote: "از بچگی جذب راز پشت پرده‌ی تکنولوژی بودم. امروز تو به‌لند می‌تونم این عشق رو به ساختن، با رویای بزرگ‌تری ترکیب کنم؛ اینکه هر خط کد، پلی باشه برای یادگیری و آینده‌ای روشن‌تر. باور دارم تکنولوژی فقط ابزار نیست، فرصتیه برای رشد و تغییر زندگی :)"

    },
    {
        name: "پرهام حسن‌زاده",
        title: "Senior Web Designer ",
        role: [],
        image: Parham,
        quote: "از بچگی جذب راز پشت پرده‌ی تکنولوژی بودم. امروز تو به‌لند می‌تونم این عشق رو به ساختن، با رویای بزرگ‌تری ترکیب کنم؛ اینکه هر خط کد، پلی باشه برای یادگیری و آینده‌ای روشن‌تر. باور دارم تکنولوژی فقط ابزار نیست، فرصتیه برای رشد و تغییر زندگی :)"

    },
    {
        name: "فاطمه عباسی",
        title: "Senior  UI/UX Designer ",
        role: [],
        image: Abbasi,
        quote: "از بچگی جذب راز پشت پرده‌ی تکنولوژی بودم. امروز تو به‌لند می‌تونم این عشق رو به ساختن، با رویای بزرگ‌تری ترکیب کنم؛ اینکه هر خط کد، پلی باشه برای یادگیری و آینده‌ای روشن‌تر. باور دارم تکنولوژی فقط ابزار نیست، فرصتیه برای رشد و تغییر زندگی :)"

    },
    {
        name: "مهرداد نظری",
        title: "Content & Market Analysis Lead ",
        role: ["تدوین تحلیل‌های بازار", "سیگنال‌دهی", "مدیریت محتوای تحلیلی"],
        image: Amirhossein,
        quote: "از بچگی جذب راز پشت پرده‌ی تکنولوژی بودم. امروز تو به‌لند می‌تونم این عشق رو به ساختن، با رویای بزرگ‌تری ترکیب کنم؛ اینکه هر خط کد، پلی باشه برای یادگیری و آینده‌ای روشن‌تر. باور دارم تکنولوژی فقط ابزار نیست، فرصتیه برای رشد و تغییر زندگی :)"

    },
    {
        name: "علیرضا نیرومند زال پور",
        title: "Educational Content Lead ",
        role: ["طراحی دوره‌های آموزشی", "تدوین مسیر رشد کاربران"],
        image: Alireza,
        quote: "از بچگی جذب راز پشت پرده‌ی تکنولوژی بودم. امروز تو به‌لند می‌تونم این عشق رو به ساختن، با رویای بزرگ‌تری ترکیب کنم؛ اینکه هر خط کد، پلی باشه برای یادگیری و آینده‌ای روشن‌تر. باور دارم تکنولوژی فقط ابزار نیست، فرصتیه برای رشد و تغییر زندگی :)"

    },
    {
        name: "نسرین قادری",
        title: "SEO & Documentation Specialist ",
        role: ["تنظیم اسناد پروژه", "هماهنگی تیم", "مدیریت زمان‌بندی مستندات"],
        image: Nasrin,
        quote: "از بچگی جذب راز پشت پرده‌ی تکنولوژی بودم. امروز تو به‌لند می‌تونم این عشق رو به ساختن، با رویای بزرگ‌تری ترکیب کنم؛ اینکه هر خط کد، پلی باشه برای یادگیری و آینده‌ای روشن‌تر. باور دارم تکنولوژی فقط ابزار نیست، فرصتیه برای رشد و تغییر زندگی :)"

    },
    {
        name: "شیوا محققی",
        title: "PR Development Consultant ",
        role: ["مشاوره در زمینه برندینگ", "ارتباط با مخاطبان"],
        image: Shiva,
        quote: "از بچگی جذب راز پشت پرده‌ی تکنولوژی بودم. امروز تو به‌لند می‌تونم این عشق رو به ساختن، با رویای بزرگ‌تری ترکیب کنم؛ اینکه هر خط کد، پلی باشه برای یادگیری و آینده‌ای روشن‌تر. باور دارم تکنولوژی فقط ابزار نیست، فرصتیه برای رشد و تغییر زندگی :)"

    },
    {
        name: "داوود سپهریان",
        title: "Data Analyst & Market Researcher ",
        role: [
            "تحلیل داده‌های کاربران",
            "بررسی بازارهای هدف",
            "تدوین استراتژی‌های ورود به بازار",
        ],
        image: Davood,
        quote: "از بچگی جذب راز پشت پرده‌ی تکنولوژی بودم. امروز تو به‌لند می‌تونم این عشق رو به ساختن، با رویای بزرگ‌تری ترکیب کنم؛ اینکه هر خط کد، پلی باشه برای یادگیری و آینده‌ای روشن‌تر. باور دارم تکنولوژی فقط ابزار نیست، فرصتیه برای رشد و تغییر زندگی :)"

    },
    {
        name: " یاسمین طاهری",
        title: "Senior Visual Designer ",
        role: [
            "تحلیل داده‌های کاربران",
            "بررسی بازارهای هدف",
            "تدوین استراتژی‌های ورود به بازار",
        ],
        image: Yassaman,
        quote: "از بچگی جذب راز پشت پرده‌ی تکنولوژی بودم. امروز تو به‌لند می‌تونم این عشق رو به ساختن، با رویای بزرگ‌تری ترکیب کنم؛ اینکه هر خط کد، پلی باشه برای یادگیری و آینده‌ای روشن‌تر. باور دارم تکنولوژی فقط ابزار نیست، فرصتیه برای رشد و تغییر زندگی :)"

    },
];

function Team() {
    const t = useTranslations("aboutPage.team");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [api, setApi] = React.useState<CarouselApi>()

    const onPrevButtonClick = useCallback(() => {
        if (!api) return
        api.scrollPrev()
    }, [api])

    const onNextButtonClick = useCallback(() => {
        if (!api) return
        api.scrollNext()
    }, [api])

    useEffect(() =>{
        if (!api) return;
        const onSelect = () => {
            setSelectedIndex(api?.selectedScrollSnap())
        }
        api.on("select", onSelect)
        onSelect()
        return () => {
            api.off("select", onSelect);
        };
    }, [api])
    return (
        <section className="my-20 bg-storyBg bg-no-repeat">
            <div className=" flex flex-col gap-10 py-10">
                <div className="space-y-4 px-6">
                    <h2 className="text-xl xxs:text-2xl lg:text-3xl font-bold text-center">{t("title")}</h2>
                    <p className="text-base md:text-lg text-center font-medium text-text-gray ">{t("description")}</p>
                </div>
                <Carousel setApi={setApi} opts={{loop: true, align: "center", direction: "rtl"}}
                          className="flex items-start justify-center gap-8 w-full overflow-x-hidden">
                    <CarouselContent>
                        {
                            teamQuote.map((item, i) => (
                                <CarouselItem key={i}
                                              className={classNames("basis-3/5 sm:basis-2/3  md:basis-2/4 xl:basis-2/5 transition-opacity mx-auto", i === selectedIndex ? "opacity-100" : "opacity-50")}>
                                    <div
                                        className={classNames("px-6 py-4 rounded-xl border border-cream-medium bg-white space-y-4  mx-auto ")}>
                                        <Image src={quote} alt={"quote"} className="size-14 mx-auto md:hidden"/>
                                        <p className="text-sm sm:text-base text-justify">{item.quote}</p>
                                    </div>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                </Carousel>
                <div className="flex items-center justify-center gap-6  mx-auto px-6 md:px-0">
                    <button
                        onClick={onPrevButtonClick}
                        className="border-2 shadow-main p-2 rounded-xl bg-white border-text-dark_Orange icon icon-arrow-back text-text-orange shadow-cream-medium"
                    ></button>
                    <div className="flex items-center gap-2 ">
                        <Image src={teamQuote[selectedIndex].image} alt={"team image"}
                               className="size-16 rounded-full border border-cream-medium"/>
                        <div
                            className="flex flex-col items-center gap-1 text-sm xxs:text-base sm:text-lg font-medium   md:min-w-44 lg:text-nowrap">
                            <p>{teamQuote[selectedIndex].name}</p>
                            <p className="line-clamp-1">{teamQuote[selectedIndex].title}</p>
                        </div>
                    </div>
                    <button
                        onClick={onNextButtonClick}
                        className="border-2 shadow-main rounded-xl bg-white border-text-dark_Orange shadow-cream-medium"
                    >
                        <span className="icon icon-arrow-back text-text-orange rotate-180 p-2"></span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Team;