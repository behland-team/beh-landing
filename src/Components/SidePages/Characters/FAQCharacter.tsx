import React from 'react';
import bannerImage from "@/assets/Images/Questions.png";
import faqIcon from "@/assets/Images/message-question.svg"
import Image from "next/image";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/Components/UI/accordion";
import {useTranslations} from "next-intl";

function FAQCharacter() {
    const t = useTranslations("characterPage.faq")
    return (
        <section className="mt-10 md:my-20 bg-storyBg">
            <div className="xl:max-w-[75rem] mx-auto px-3 xxs:px-6 md:px-12 lg:px-24 3xl:px-0 py-12 flex flex-col  gap-6 lg:gap-14 ">
                <div className="md:space-y-2">
                    <div className="flex items-center max-sm:justify-center gap-2">
                        <Image src={faqIcon} alt="faq icon" className="size-10 md:size-12"/>
                        <h2 className="text-lg md:text-xl lg:text-2xl font-bold">{t("subTitle")} <span className="text-cream-medium">{t("title")}</span></h2>
                    </div>
                    <p className="text-[#5E5E5E] max-sm:text-center text-base md:text-lg px-4">{t("des")}</p>
                </div>
                <div className="flex flex-col gap-4 lg:flex-row">
                    <div className="lg:w-3/5">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-6"
                            defaultValue="item-1">
                            <AccordionItem value="item-1" className="bg-white border border-[#404040] py-4 px-6 max-md:px-4 max-md:py-3 rounded-xl">
                                <AccordionTrigger className="hover:no-underline focus:outline-none outline-none group ">
                                    <div className="flex items-center justify-start gap-2">
                                        <span className="text-xs px-1.5 py-1 rounded-lg bg-cream-medium/50 text-text-dark_Orange icon icon-add group-data-[state=open]:icon-minus"></span>
                                        <p className="max-md:text-sm text-right max-xxs:text-xs">آیا انتخاب کاراکتر روی مسیر یادگیری من تاثیری دارد؟</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-[#5D5D5D]">کاراکترهای حیوانی رفتارهای انسانی و ویژگی‌های بازار را ساده و ملموس
                                    نشان می‌دهند. هر حیوان نمادی از یک ویژگی خاص است؛ مثل قدرت، احتیاط، ریسک‌پذیری یا
                                    آرامش. این طراحی باعث می‌شود یادگیری جذاب‌تر، سرگرم‌کننده‌تر و قابل درک‌تر
                                    باشد.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="bg-white border border-[#404040] py-4 px-6 max-md:px-4 max-md:py-3 rounded-xl">
                                <AccordionTrigger className="hover:no-underline focus:outline-none outline-none group ">
                                    <div className="flex items-center justify-start gap-2">
                                        <span className="text-xs px-1.5 py-1 rounded-lg bg-cream-medium/50 text-text-dark_Orange icon icon-add group-data-[state=open]:icon-minus"></span>
                                        <p className="max-md:text-sm text-right max-xxs:text-xs">آیا انتخاب کاراکتر روی مسیر یادگیری من تاثیری دارد؟</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-[#5D5D5D]">کاراکترهای حیوانی رفتارهای انسانی و ویژگی‌های بازار را ساده و ملموس
                                    نشان می‌دهند. هر حیوان نمادی از یک ویژگی خاص است؛ مثل قدرت، احتیاط، ریسک‌پذیری یا
                                    آرامش. این طراحی باعث می‌شود یادگیری جذاب‌تر، سرگرم‌کننده‌تر و قابل درک‌تر
                                    باشد.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="bg-white border border-[#404040] py-4 px-6 max-md:px-4 max-md:py-3 rounded-xl">
                                <AccordionTrigger className="hover:no-underline focus:outline-none outline-none group ">
                                    <div className="flex items-center justify-start gap-2">
                                        <span className="text-xs px-1.5 py-1 rounded-lg bg-cream-medium/50 text-text-dark_Orange icon icon-add group-data-[state=open]:icon-minus"></span>
                                        <p className="max-md:text-sm text-right max-xxs:text-xs">آیا انتخاب کاراکتر روی مسیر یادگیری من تاثیری دارد؟</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-[#5D5D5D]">کاراکترهای حیوانی رفتارهای انسانی و ویژگی‌های بازار را ساده و ملموس
                                    نشان می‌دهند. هر حیوان نمادی از یک ویژگی خاص است؛ مثل قدرت، احتیاط، ریسک‌پذیری یا
                                    آرامش. این طراحی باعث می‌شود یادگیری جذاب‌تر، سرگرم‌کننده‌تر و قابل درک‌تر
                                    باشد.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4" className="bg-white border border-[#404040] py-4 px-6 max-md:px-4 max-md:py-3 rounded-xl">
                                <AccordionTrigger className="hover:no-underline focus:outline-none outline-none group ">
                                    <div className="flex items-center justify-start gap-2">
                                        <span className="text-xs px-1.5 py-1 rounded-lg bg-cream-medium/50 text-text-dark_Orange icon icon-add group-data-[state=open]:icon-minus"></span>
                                        <p className="max-md:text-sm text-right max-xxs:text-xs">آیا انتخاب کاراکتر روی مسیر یادگیری من تاثیری دارد؟</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-[#5D5D5D]">کاراکترهای حیوانی رفتارهای انسانی و ویژگی‌های بازار را ساده و ملموس
                                    نشان می‌دهند. هر حیوان نمادی از یک ویژگی خاص است؛ مثل قدرت، احتیاط، ریسک‌پذیری یا
                                    آرامش. این طراحی باعث می‌شود یادگیری جذاب‌تر، سرگرم‌کننده‌تر و قابل درک‌تر
                                    باشد.</AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="lg:w-2/5 flex justify-center items-start">
                        <Image src={bannerImage} alt={"faq"} className="max-md:max-w-72"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQCharacter;