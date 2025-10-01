"use client";
import React, {useCallback, useEffect, useState} from 'react';
import Amirali from "@/assets/Images/TeamMemebers/Amirali2.png";
import Mehdi from "@/assets/Images/TeamMemebers/Mehdi2.png";
// import Amirhossein from "@/assets/Images/TeamMemebers/Amirhossein.png";
// import Nasrin from "@/assets/Images/TeamMemebers/Narges.png";
import Shiva from "@/assets/Images/TeamMemebers/Shiva.png";
import Davood from "@/assets/Images/TeamMemebers/David.png";
import Parham from "@/assets/Images/TeamMemebers/parham.png";
import Alireza from "@/assets/Images/TeamMemebers/Alireza.png";
// import Yassaman from "@/assets/Images/TeamMemebers/Yassaman.png";
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
        quote: "«من، امیرعلی نیرومند زال پور هستم ، مسیرم را نه در کلاس‌های درس، بلکه از دل کتاب‌ها، بازی‌ها و جست‌وجوی الگوها آغاز کردم. از کودکی یاد گرفتم که پشت هر بازی، داستان و تمدنی، قوانینی پنهان وجود دارد. همین کنجکاوی، مرا به مطالعه‌ی تاریخ، فلسفه، متون کهن و سپس بازارهای مالی کشاند\n" +
            "تحلیل‌گری برای من فقط پیش‌بینی قیمت نبود؛ بلکه درک رفتار انسان‌ها و چرخه‌های اقتصاد بود. اما یک پرسش مسیرم را تغییر داد: چرا یادگیری باید هزینه باشد و نه دارایی؟ پاسخ این پرسش به طراحی مدل‌های نوینی انجامید که در آن دانش و یادگیری به یک دارایی واقعی و اقتصاد توکنی تبدیل می‌شود. امروز در به‌لند، همین رویکرد را دنبال می‌کنیم: پیوند دادن مسیر یادگیری با ارزش‌آفرینی واقعی برای افراد.»\n"
    },
    {
        name: "مهدی خسروی",
        title: "Technical Lead ",
        role: ["مسئول توسعه ربات تلگرام", "مدیریت زیرساخت فنی"],
        image: Mehdi,
        quote: "وقتی 12 سالم بود برای اولین بار یه کامپیوتر داشتیم توی خونمون، اون موقع ها هیچ کاری به جز بازی کردن و فیلم دیدن با کامپیوتر نمیتونستم انجام بدم، ولی عشق به دنیای تکنولوژی از همون روز اول که دستم به موس خورد تو وجودم ساخته شد، تحصیلاتم رو جوری انتخاب کردم که از کامپیوتر دور نشم و برای اولین بار تو دانشگاه دست به کد شدم و برنامه نویسی رو شروع کردم، اونجا نقطه ای بود که غرق شدم در دنیای تکنولوژی و ساخت چیزای جدید، همه خاطرات و تجربیاتم در بازی ها، فیلم ها و تکنولوژی رو جمع کردم تا بتونم نقشی در به لند داشته باشم و این دنیا رو بزرگ تر کنم."

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
        quote: "زندگی من همیشه بین تکنولوژی و هنر گذشته. هنر بهم یاد داد چطور دقیق‌تر ببینم و خلاق‌تر فکر کنم. همین باعث شد به UI/UX برسم؛ دنیایی که میشه برای آدم‌ها تجربه‌هایی ساخت تا زندگی راحت‌تر و زیباتری داشته باشن. سه ساله تو این مسیرم و به‌لند برای من ادامه همین ماجراست"
    },
    // {
    //     name: "مهرداد نظری",
    //     title: "Content & Market Analysis Lead ",
    //     role: ["تدوین تحلیل‌های بازار", "سیگنال‌دهی", "مدیریت محتوای تحلیلی"],
    //     image: Amirhossein,
    //     quote: "از بچگی جذب راز پشت پرده‌ی تکنولوژی بودم. امروز تو به‌لند می‌تونم این عشق رو به ساختن، با رویای بزرگ‌تری ترکیب کنم؛ اینکه هر خط کد، پلی باشه برای یادگیری و آینده‌ای روشن‌تر. باور دارم تکنولوژی فقط ابزار نیست، فرصتیه برای رشد و تغییر زندگی :)"
    //
    // },
    {
        name: "علیرضا نیرومند زال پور",
        title: "Educational Content Lead ",
        role: ["طراحی دوره‌های آموزشی", "تدوین مسیر رشد کاربران"],
        image: Alireza,
        quote: "بهلند برای من فقط یک محل کار نیست جهانی زنده از کشف و اموزش نوین است، اینجا هر روز با جرقه‌های تازه‌ای آغاز می‌شود جایی که ایده‌ها جان می‌گیرند و رویاها به تجربه تبدیل می‌شوند، هر پروژه هر خط کد و هر لحظه همکاری سفری است به عمق یادگیری و فرصتی برای شکل دادن به آینده‌ای روشن‌تر، در این مسیر هر تجربه پلی است به کشف توانمندی‌های نو در نظام اموزشی که پایان ندارد"

    },
    // {
    //     name: "نسرین قادری",
    //     title: "SEO & Documentation Specialist ",
    //     role: ["تنظیم اسناد پروژه", "هماهنگی تیم", "مدیریت زمان‌بندی مستندات"],
    //     image: Nasrin,
    //     quote: "از بچگی جذب راز پشت پرده‌ی تکنولوژی بودم. امروز تو به‌لند می‌تونم این عشق رو به ساختن، با رویای بزرگ‌تری ترکیب کنم؛ اینکه هر خط کد، پلی باشه برای یادگیری و آینده‌ای روشن‌تر. باور دارم تکنولوژی فقط ابزار نیست، فرصتیه برای رشد و تغییر زندگی :)"
    //
    // },
    {
        name: "شیوا محققی",
        title: "PR Development Consultant ",
        role: ["مشاوره در زمینه برندینگ", "ارتباط با مخاطبان"],
        image: Shiva,
        quote: "از بچگی کارایی رو که به سنم نمی‌خورد دوست داشتم انجام بدم . مسیولیت پذیری تو خونم بود خودم رو در گیر مسیولیتهایی میکردم که برای سنم خیلی زیاد. بود ولی احساس مفید بودن برام حال خوب ایجاد میکرد . وقتی بزرگتر شدم حس کردم من یه رسالتی تو دنیا دارم و دلم میخواد اثری ماندگار در دنیا داشته باشم بخاطر همین رفتم سمت خودشناسی و عرفان و مسیرهایی جلوی پام باز شد که آدمهایی که مثل خودم یا نزدیک به من فکر میکردند کم کم اطرافم دیدم و امروز در پروژه ای که بنیانگذارش دوست داره برای مردم یه اثر ارزشمند بگذاره مشغول به کار شدم و می‌دونم خدا ی مهربان مسیرم رو زیبا چیده و با ایمان و انگیزه ی زیاد ادامه خواهم داد ."
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
        quote: "از همون سال‌های اولی که با ریاضی و دنیای اعداد سروکار داشتم، جذب تحلیل و کشف الگوهای پنهان شدم. این علاقه کم‌کم من رو به سمت تحقیقات بازار برد؛ جایی که یاد گرفتم داده‌ها و رفتار آدم‌ها دو روی یک سکه‌ان. ورود به بازارهای مالی هم این مسیر رو کامل‌تر کرد و باعث شد ترکیب دانش و تجربه‌ام رو در عمل ببینم. همیشه دلم می‌خواست راهی بسازم که تازه‌واردها مثل من در شروع مسیر بازارهای مالی سردرگم نشن. وقتی با به‌لند آشنا شدم، مطمئن شدم اینجا همون فرصتیه که می‌تونه این رویا رو به واقعیت تبدیل کنه. حالا خوشحالم که بخشی از تیمی هستم که داره مسیر یادگیری مالی رو برای همه ساده‌تر، شفاف‌تر و جذاب‌تر می‌سازه."
    },
    // {
    //     name: " یاسمین طاهری",
    //     title: "Senior Visual Designer ",
    //     role: [
    //         "تحلیل داده‌های کاربران",
    //         "بررسی بازارهای هدف",
    //         "تدوین استراتژی‌های ورود به بازار",
    //     ],
    //     image: Yassaman,
    //     quote: "از بچگی جذب راز پشت پرده‌ی تکنولوژی بودم. امروز تو به‌لند می‌تونم این عشق رو به ساختن، با رویای بزرگ‌تری ترکیب کنم؛ اینکه هر خط کد، پلی باشه برای یادگیری و آینده‌ای روشن‌تر. باور دارم تکنولوژی فقط ابزار نیست، فرصتیه برای رشد و تغییر زندگی :)"
    //
    // },
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

    useEffect(() => {
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
                                        className={classNames("px-6 py-4 rounded-xl border border-cream-medium bg-white space-y-4  mx-auto md:h-56 lg:h-60 xl:h-64")}>
                                        <Image src={quote} alt={"quote"} className="size-14 mx-auto md:hidden"/>
                                        <p className={classNames("text-xs xxs:text-sm text-justify h-44 md:h-[calc(100%-32px)] overflow-y-auto")}>{item.quote}</p>
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