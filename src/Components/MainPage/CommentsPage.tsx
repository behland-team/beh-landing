"use client";

import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from "@/Components/UI/carousel";
import { Button } from "@/Components/UI/button";
import { cn } from "@/lib/utils";
import type { CarouselApi } from "@/Components/UI/carousel";
import beed from "@/assets/Images/beeds.svg";

// آیکون ستاره
const StarIcon = () => (
    <div className="w-6 h-6 flex items-center justify-center">
        <i className="icon icon-star text-[#CC6D14] text-xl"></i>
    </div>
);

// کامپوننت کارت نظر
const TestimonialCard = ({ testimonial, logoSrc }: { testimonial: any, logoSrc?: string }) => {
    return (
        <div className="relative w-[288px] h-[275px] lg:w-[320px] xl:w-[391px] lg:h-[280px] xl:h-[308px] mx-auto lg:mx-0 bg-[#FEECD8] rounded-[21.2px] z-50 border border-[#00000042] shadow-[2px_4px_0px_0px_#CC6D14] lg:flex-shrink-0" 
             style={{
                 backgroundImage: 'url("/images/texture-pattern.png")',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',
                 backgroundPosition: 'center'
             }}>
            {/* لوگو - دقیقاً مطابق فیگما */}
            <div className="absolute w-[54.59px] h-11 lg:w-[60px] xl:w-[67px] lg:h-[55px] xl:h-[63px] top-0 left-[116.7px] lg:left-[130px] xl:left-[162px] z-[100]">
                {logoSrc ? (
                    <img 
                        src={logoSrc} 
                        alt="لوگو" 
                        className="w-full h-full object-contain"
                    />
                ) : (
                    <div className="w-full h-full bg-[#E0E0E0] border border-[#CCCCCC] rounded flex items-center justify-center text-xs text-[#666666] font-medium">
                    </div>
                )}
            </div>

            {/* پروفایل و نام و امتیاز - مطابق فیگما */}
            <div className="absolute w-[264px] lg:w-[300px] xl:w-[367px] h-8 top-[62px] left-3 flex justify-between items-center z-50">
                {/* پروفایل و نام */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full border border-[#CC6D14] bg-gray-200 flex items-center justify-center text-xs">
                        <i className="icon icon-profile text-[#CC6D14] text-sm"></i>
                    </div>
                    <span className="text-[#222222] font-iransansxnoen font-semibold text-sm leading-[27px] truncate">
                        {testimonial.name}
                    </span>
                </div>

                {/* امتیاز و ستاره */}
                <div className="flex items-center gap-0.5 flex-shrink-0">
                    <span className="text-[#515151] font-poppins font-normal text-base leading-none">
                        {testimonial.rank}
                    </span>
                    <StarIcon />
                </div>
            </div>

            {/* متن نظر - مطابق فیگما */}
            <div className="absolute w-[264px] lg:w-[300px] xl:w-[367px] h-[108px] lg:h-[110px] xl:h-[120px] top-[110px] lg:top-[115px] xl:top-[120px] left-3 z-50">
                <p className="text-[#404040] text-justify text-[10px] lg:text-[11px] xl:text-[12px] leading-[18px] lg:leading-[19px] xl:leading-[20px] tracking-[-0.02em] font-iransansxnoen font-normal overflow-hidden">
                    {testimonial.text}
                </p>
            </div>

            {/* خط جداکننده - مطابق فیگما */}
            <div className="absolute w-[287px] lg:w-[315px] xl:w-[390px] h-0 top-[226px] lg:top-[235px] xl:top-[252px] left-0.5 z-50">
                <div className="border-t border-dashed border-[#CC6D1461] w-full"></div>
            </div>

            {/* عنوان دوره - مطابق فیگما */}
            <div className="absolute w-[264px] lg:w-[300px] xl:w-[367px] h-6 lg:h-6 xl:h-7 top-[234px] lg:top-[243px] xl:top-[262px] left-3 flex justify-center items-center gap-2 z-50">
                <Image src={beed} alt="beed" className="h-5 w-5 lg:h-5 lg:w-5 xl:h-6 xl:w-6 flex-shrink-0"/>
                <span className="text-[#8C8C8C] text-[12px] lg:text-[12px] xl:text-[14px] font-yekan font-normal leading-none text-center truncate">
                    {testimonial.course}
                </span>
            </div>
        </div>
    );
};

// داده‌های نمونه
const testimonialsData = [
    {
        id: 1,
        name: "مریم السادات حسینی",
        rank: "4.5",
        course: "دوره آموزشی : یادگیری دوره ارزهای دیجیتال",
        text: "وقتی شروع کردم تقریباً هیچ شناختی از بازارهای مالی نداشتم و همیشه فکر می‌کردم یادگیریش پر از اصطلاحات سخت و خسته‌کننده‌ست. اما بهلند با روشی که شبیه یک بازی طراحی شده، باعث شد از همون روزهای اول انگیزه بگیرم. هر مرحله برام مثل رد کردن یک مأموریت جدید بود و وقتی تمرین‌ها رو انجام می‌دادم، حس می‌کردم واقعاً مهارت پیدا کردم.",
        logoSrc: "/images/Comments/logo.svg"
    },
    {
        id: 2,
        name: "علی محمدی",
        rank: "4.8",
        course: "دوره آموزشی : تحلیل تکنیکال پیشرفته",
        text: "من قبلاً با مفاهیم بازار آشنا بودم، اما این دوره دیدگاه من رو کاملاً عوض کرد. تمرکز روی جنبه‌های عملی و سناریوهای واقعی بازار باعث شد بتونم تحلیل‌هام رو بهبود بدم و با اطمینان بیشتری وارد معاملات بشم. واقعا یک تجربه متفاوت و کاربردی بود.",
        logoSrc: "/images/Comments/logo.svg"
    },
    {
        id: 3,
        name: "سارا رضایی",
        rank: "4.2",
        course: "دوره آموزشی : مدیریت ریسک و سرمایه",
        text: "نقطه ضعف من همیشه مدیریت ریسک بود. بعد از این دوره، فهمیدم که چطور میشه هیجان و استرس معامله رو کنترل کرد و با برنامه‌ریزی درست، ضررهای احتمالی رو به حداقل رسوند. روش تدریس بازی‌گونه واقعاً کمک کرد تا مفاهیم خشک مالی برام جذاب بشن.",
        logoSrc: "/images/Comments/logo.svg"
    },
];

// کامپوننت اصلی
const TestimonialsSection = () => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(true);

    React.useEffect(() => {
        if (!api) return;

        const updateScrollState = () => {
            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
        };

        updateScrollState();
        api.on("select", updateScrollState);

        return () => {
            api.off("select", updateScrollState);
        };
    }, [api]);

    const scrollPrev = () => {
        api?.scrollPrev();
    };

    const scrollNext = () => {
        api?.scrollNext();
    };

    return (
        <div dir="rtl" className="relative w-full h-[550px] lg:h-[469px] overflow-visible">
            {/* کانتینر بک‌گراند آبی - مطابق فیگما - چسبیده به کناره‌ها */}
            <div className="relative w-full h-[385px] lg:h-[469px] bg-[#A7D8D3] rounded-[21.2px] lg:rounded-none overflow-hidden lg:overflow-visible">
                {/* شاخه - مطابق فیگما - فقط در موبایل */}
                <div className="absolute w-[191.62px] h-[82.92px] top-[-22px] rotate-360 opacity-100 z-10 lg:hidden">
                    <img 
                        src="/images/Comments/Tree.svg" 
                        alt="شاخه تزئینی" 
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* عنوان - مطابق فیگما - فقط موبایل */}
                <h2 className="absolute w-[132px] h-[31px] top-[81px] left-[290px] right-[26px] font-kalameh font-semibold text-lg leading-none text-center text-black z-10 lg:hidden">
                    نظرات همراهان ما
                </h2>

                {/* دکمه‌های کنترل - مطابق فیگما - فقط موبایل */}
                <div className="absolute w-[88px] h-10 top-[76px] left-[30px] flex gap-4 z-40 lg:hidden">
                    {/* دکمه قبلی (چپ) */}
                    <button
                        disabled={!canScrollPrev}
                        onClick={scrollPrev}
                        className={cn(
                            "w-8 h-8 rounded-lg border-2 border-[#9E9E9E] bg-white shadow-[0_4px_0_0_#858585] transition-all duration-200 flex items-center justify-center",
                            "hover:w-10 hover:h-10 hover:rounded-xl hover:border-[#BD5300] hover:shadow-[0_4px_0_0_#CC6D14]",
                            "active:translate-y-1 active:shadow-none",
                            "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:w-8 disabled:hover:h-8 disabled:hover:rounded-lg disabled:hover:border-[#9E9E9E] disabled:hover:shadow-[0_4px_0_0_#858585]"
                        )}
                        aria-label="اسلاید قبلی"
                        type="button"
                    >
                        <i className="icon icon-arrow-back text-base" style={{color: '#333'}}></i>
                    </button>

                    {/* دکمه بعدی (راست) */}
                    <button
                        disabled={!canScrollNext}
                        onClick={scrollNext}
                        className={cn(
                            "w-8 h-8 rounded-lg border-2 border-[#9E9E9E] bg-white shadow-[0_4px_0_0_#858585] transition-all duration-200 flex items-center justify-center",
                            "hover:w-10 hover:h-10 hover:rounded-xl hover:border-[#BD5300] hover:shadow-[0_4px_0_0_#CC6D14]",
                            "active:translate-y-1 active:shadow-none",
                            "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:w-8 disabled:hover:h-8 disabled:hover:rounded-lg disabled:hover:border-[#9E9E9E] disabled:hover:shadow-[0_4px_0_0_#858585]"
                        )}
                        aria-label="اسلاید بعدی"
                        type="button"
                    >
                        <i className="icon icon-arrow-back text-base rotate-180" style={{color: '#333'}}></i>
                    </button>
                </div>

                {/* پاراگراف توضیحی - مطابق فیگما - فقط موبایل */}
                <p className="absolute w-[292px] h-11 top-[132px] right-[26px] left-6 text-[#434343] text-justify text-sm leading-none tracking-[-0.02em] font-yekan font-normal z-10 lg:hidden">
                    اینجا بخشی از تجربه‌ها و احساسات کسانی رو می‌بینید که قدم‌به‌قدم با ما جلو اومدن و حالا داستان موفقیت خودشون رو تعریف می‌کنن.
                </p>

                {/* نمایش دسکتاپ - دو ستونی */}
                <div className="hidden lg:flex lg:w-full lg:h-full lg:max-w-[1447px] lg:mx-auto lg:px-[60px]">
                    {/* ستون چپ: عنوان، پاراگراف و دکمه‌ها - 40% عرض */}
                    <div className="lg:flex lg:flex-col lg:justify-center lg:items-start lg:w-[40%] lg:min-w-0">
                        {/* عنوان دسکتاپ */}
                        <h2 className="lg:w-full lg:max-w-[337px] lg:text-white lg:text-[40px] lg:font-bold-[700px] lg:leading-[63px] lg:tracking-[-0.02em] lg:text-center lg:mb-6" style={{WebkitTextStroke: '1px solid #000000'}}>
                            نظرات همراهان ما
                        </h2>

                        {/* پاراگراف توضیحی دسکتاپ */}
                        <p className="lg:w-full lg:max-w-[337px] lg:h-auto lg:min-h-[66px] lg:text-[#434343] lg:text-[18px] xl:text-[18px] lg:text-[16px] lg:font-medium lg:leading-relaxed lg:text-justify lg:tracking-[-0.02em] lg:mb-8">
                            اینجا بخشی از تجربه‌ها و احساسات کسانی رو می‌بینید که قدم‌به‌قدم با ما جلو اومدن و حالا داستان موفقیت خودشون رو تعریف می‌کنن.
                        </p>

                        {/* دکمه‌های کنترل دسکتاپ */}
                        <div className="lg:w-[112px] lg:h-12 lg:flex lg:gap-2 lg:flex-shrink-0">
                            <button
                                disabled={!canScrollPrev}
                                onClick={scrollPrev}
                                className="lg:w-[47.84px] lg:h-[47.84px] lg:rounded-[12px] lg:border-2 lg:border-[#BD5300] lg:bg-[#FEECD8] lg:shadow-[0_4px_0_0_#CC6D14] lg:transition-all lg:duration-200 lg:flex lg:items-center lg:justify-center lg:flex-shrink-0 lg:p-2 disabled:opacity-50 disabled:cursor-not-allowed lg:hover:scale-105"
                                aria-label="اسلاید قبلی"
                                type="button"
                            >
                                <i className="icon icon-arrow-back lg:text-[21.33px] lg:rotate-360" style={{color: '#CC6D14'}}></i>
                            </button>

                            <button
                                disabled={!canScrollNext}
                                onClick={scrollNext}
                                className="lg:w-[47.84px] lg:h-[47.84px] lg:rounded-[12px] lg:border-2 lg:border-[#BD5300] lg:bg-[#FEECD8] lg:shadow-[0_4px_0_0_#CC6D14] lg:transition-all lg:duration-200 lg:flex lg:items-center lg:justify-center lg:flex-shrink-0 lg:p-2 disabled:opacity-50 disabled:cursor-not-allowed lg:hover:scale-105"
                                aria-label="اسلاید بعدی"
                                type="button"
                            >
                                <i className="icon icon-arrow-back lg:text-[21.33px] lg:rotate-180" style={{color: '#CC6D14'}}></i>
                            </button>
                        </div>
                    </div>

                    {/* ستون راست: دو باکس نظر کنار هم - 60% عرض */}
                    <div className="lg:flex lg:flex-row lg:gap-4 xl:gap-6 lg:items-center lg:justify-end lg:w-[60%] lg:min-w-0 z-50">
                        <div className="lg:flex-shrink-0 lg:w-auto z-50">
                            <TestimonialCard testimonial={testimonialsData[0]} logoSrc={testimonialsData[0].logoSrc} />
                        </div>
                        <div className="lg:flex-shrink-0 lg:w-auto z-50">
                            <TestimonialCard testimonial={testimonialsData[1]} logoSrc={testimonialsData[1].logoSrc} />
                        </div>
                    </div>
                </div>
            </div>

            {/* کروسل نظرات - مطابق فیگما - فقط موبایل */}
            <div className="absolute top-[200px] left-0 w-full z-30 lg:hidden">
                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "start",
                        direction: "rtl",
                        loop: true,
                        skipSnaps: false,
                        dragFree: false,
                        slidesToScroll: 1
                    }}
                    className="w-full z-30"
                >
                    <CarouselContent className="w-full pl-6 pr-6 gap-4 z-30">
                        {testimonialsData.map((testimonial) => (
                            <CarouselItem
                                key={testimonial.id}
                                className="basis-auto min-w-0 flex-shrink-0 z-30"
                            >
                                <TestimonialCard testimonial={testimonial} logoSrc={testimonial.logoSrc} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
};

export default TestimonialsSection;

// کامپوننت اصلی CommentsPage
export function CommentsPage() {
    return (
        <div className="relative min-h-screen bg-[#2A7575] py-8 lg:py-16 overflow-hidden">
            {/* نمایش درخت/شاخه فقط در موبایل */}
            <div className="absolute top-4 right-4 w-24 h-28 lg:hidden">
                <img 
                    src="/images/branch.png" 
                    alt="شاخه تزئینی" 
                    className="w-full h-full object-contain opacity-80"
                />
            </div>

            {/* کانتینر اصلی - در موبایل: تمام عرض، در دسکتاپ: تمام عرض بدون padding */}
            <div className="w-full lg:w-full">
                <TestimonialsSection />
            </div>
        </div>
    );
}