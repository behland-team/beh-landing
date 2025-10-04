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
        <div className="relative w-[288px] h-[275px] mx-auto bg-[#FEECD8] rounded-lg shadow-sm z-40">
            {/* لوگو - دقیقاً مطابق فیگما */}
            <div className="absolute w-[54.59px] h-11 top-0 left-[116.7px] z-60">
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
            <div className="absolute w-[264px] h-8 top-[62px] left-3 flex justify-between items-center z-50">
                {/* پروفایل و نام */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full border border-[#CC6D14] bg-gray-200 flex items-center justify-center text-xs">
                        <i className="icon icon-profile text-[#CC6D14] text-sm"></i>
                    </div>
                    <span className="text-[#222222] font-iransansxnoen font-semibold text-sm leading-[27px]">
                        {testimonial.name}
                    </span>
                </div>

                {/* امتیاز و ستاره */}
                <div className="flex items-center gap-0.5">
                    <span className="text-[#515151] font-poppins font-normal text-base leading-none">
                        {testimonial.rank}
                    </span>
                    <StarIcon />
                </div>
            </div>

            {/* متن نظر - مطابق فیگما */}
            <div className="absolute w-[264px] h-[108px] top-[110px] left-3 z-50">
                <p className="text-[#404040] text-justify text-[10px] leading-[18px] tracking-[-0.02em] font-iransansxnoen font-normal overflow-hidden">
                    {testimonial.text}
                </p>
            </div>

            {/* خط جداکننده - مطابق فیگما */}
            <div className="absolute w-[287px] h-0 top-[226px] left-0.5 z-50">
                <div className="border-t border-dashed border-[#CC6D1461] w-full"></div>
            </div>

            {/* عنوان دوره - مطابق فیگما */}
            <div className="absolute w-[264px] h-6 top-[234px] left-3 flex justify-center items-center gap-2 z-50">
                <Image src={beed} alt="beed" className="h-5 w-5"/>
                <span className="text-[#8C8C8C] text-[12px] font-yekan font-normal leading-none text-center">
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
        <div dir="rtl" className="relative w-full h-[550px] overflow-visible">
            {/* کانتینر بک‌گراند آبی - قابل تنظیم */}
            <div className="relative w-full h-[400px] bg-[#A7D8D3]">
                {/* شاخه - مطابق فیگما */}
                <div className="absolute w-[191.62px] h-[82.92px] top-[-22px] rotate-360 opacity-100 z-10">
                    <img 
                        src="/images/Comments/Tree.svg" 
                        alt="شاخه تزئینی" 
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* عنوان - مطابق فیگما */}
                <h2 className="absolute w-[132px] h-[31px] top-[81px] left-[290px] right-[26px] font-kalameh font-semibold text-lg leading-none text-center text-black z-10">
                    نظرات همراهان ما
                </h2>

                {/* دکمه‌های کنترل - مطابق فیگما */}
                <div className="absolute w-[88px] h-10 top-[76px] left-[30px]  flex gap-4 z-40">
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

                {/* پاراگراف توضیحی - مطابق فیگما */}
                <p className="absolute w-[392px] h-11 top-[132px]  right-[26px] left-6 text-[#434343] text-justify text-sm leading-none tracking-[-0.02em] font-yekan font-normal z-10">
                    اینجا بخشی از تجربه‌ها و احساسات کسانی رو می‌بینید که قدم‌به‌قدم با ما جلو اومدن و حالا داستان موفقیت خودشون رو تعریف می‌کنن.
                </p>
            </div>

            {/* کروسل نظرات - مطابق فیگما */}
            <div className="absolute top-[200px] left-0 w-full z-30">
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