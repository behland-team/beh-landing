"use client";
import React, {useState} from 'react';
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
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c === 0 ? teamQuote.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === teamQuote.length - 1 ? 0 : c + 1));

   const visibleCount = 3

    const visibleImages = Array.from({length: visibleCount}, (_, i) => {
        const index = (current + i) % teamQuote.length;
        return teamQuote[index];
    });
    return (
        <section className="my-20 bg-storyBg bg-no-repeat">
            <div className=" flex flex-col gap-10 py-10">
                <div className="space-y-4 px-6">
                    <h2 className="text-xl xxs:text-2xl lg:text-3xl font-bold text-center">تیم ما</h2>
                    <p className="text-base md:text-lg text-center font-medium text-text-gray ">ما برای کنار هم کار کردن و خلق ایده‌های تازه هیجان
                        داریم.</p>
                </div>
                <div className="flex items-start justify-center gap-8 w-full overflow-x-hidden">
                    {
                            visibleImages.map((item , i)=>(
                                <div key={i} className={classNames("px-6 py-4 rounded-xl border border-cream-medium bg-white w-64 space-y-4  md:w-96 lg:w-[600px] shrink-0" , i !==1 && "opacity-30")}>
                                    <Image src={quote} alt={"quote"} className="size-14 mx-auto md:hidden" />
                                        <p className="text-sm sm:text-base text-justify">{item.quote}</p>
                                </div>
                            ))
                    }
                </div>
                <div className="flex items-center justify-center gap-6  mx-auto px-6 md:px-0">
                    <button
                        aria-label="Slide back"
                        onClick={prev}
                        className="border-2 shadow-main p-2 rounded-xl bg-white border-text-dark_Orange icon icon-arrow-back text-text-orange shadow-cream-medium"
                    ></button>
                    <div className="flex items-center gap-2 ">
                        <Image src={visibleImages[1].image} alt={"team image"} className="size-16 rounded-full border border-cream-medium"/>
                        <div className="flex flex-col items-center gap-1 text-sm xxs:text-base sm:text-lg font-medium   md:min-w-44 lg:text-nowrap">
                            <p>{visibleImages[1].name}</p>
                            <p className="line-clamp-1">{visibleImages[1].title}</p>
                        </div>
                    </div>
                    <button
                        aria-label="Slide forward"
                        onClick={next}
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