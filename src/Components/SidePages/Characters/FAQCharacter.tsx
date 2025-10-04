import React from 'react';
import bannerImage from "@/assets/Images/Questions.png";
import faqIcon from "@/assets/Images/message-question.svg"
import Image from "next/image";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/Components/UI/accordion";

function FAQCharacter() {
    return (
        <section className="my-20 bg-storyBg">
            <div className="3xl:max-w-[85rem] lg::max-w-[75rem] mx-auto px-24 3xl:px-0 py-12 flex flex-col gap-14 ">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <Image src={faqIcon} alt="faq icon" className="size-12"/>
                        <h2 className="text-2xl font-bold">سؤالات <span className="text-cream-medium">متداول</span></h2>
                    </div>
                    <p className="text-[#5E5E5E] text-lg px-4">پر تکرارترین سؤالاتی که پرسیدید</p>
                </div>
                <div className="flex gap-4">
                    <div className="w-3/5">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-6"
                            defaultValue="item-1">
                            <AccordionItem value="item-1" className="bg-white border border-[#404040] py-4 px-6 rounded-xl">
                                <AccordionTrigger className="hover:no-underline focus:outline-none outline-none  ">
                                    <div className="flex items-center justify-start gap-2">
                                        <span className="text-xs px-1.5 py-1 rounded-lg bg-cream-medium/50 text-text-dark_Orange icon icon-add"></span>
                                        <p>آیا انتخاب کاراکتر روی مسیر یادگیری من تاثیری دارد؟</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-[#5D5D5D]">کاراکترهای حیوانی رفتارهای انسانی و ویژگی‌های بازار را ساده و ملموس
                                    نشان می‌دهند. هر حیوان نمادی از یک ویژگی خاص است؛ مثل قدرت، احتیاط، ریسک‌پذیری یا
                                    آرامش. این طراحی باعث می‌شود یادگیری جذاب‌تر، سرگرم‌کننده‌تر و قابل درک‌تر
                                    باشد.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="bg-white border border-[#404040] py-4 px-6 rounded-xl">
                                <AccordionTrigger className="hover:no-underline focus:outline-none outline-none ">
                                    <div className="flex items-center justify-start gap-2">
                                        <span className="text-xs px-1.5 py-1 rounded-lg bg-cream-medium/50 text-text-dark_Orange icon icon-add"></span>
                                        <p>آیا انتخاب کاراکتر روی مسیر یادگیری من تاثیری دارد؟</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-[#5D5D5D]">کاراکترهای حیوانی رفتارهای انسانی و ویژگی‌های بازار را ساده و ملموس
                                    نشان می‌دهند. هر حیوان نمادی از یک ویژگی خاص است؛ مثل قدرت، احتیاط، ریسک‌پذیری یا
                                    آرامش. این طراحی باعث می‌شود یادگیری جذاب‌تر، سرگرم‌کننده‌تر و قابل درک‌تر
                                    باشد.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="bg-white border border-[#404040] py-4 px-6 rounded-xl">
                                <AccordionTrigger className="hover:no-underline focus:outline-none outline-none ">
                                    <div className="flex items-center justify-start gap-2">
                                        <span className="text-xs px-1.5 py-1 rounded-lg bg-cream-medium/50 text-text-dark_Orange icon icon-add"></span>
                                        <p>آیا انتخاب کاراکتر روی مسیر یادگیری من تاثیری دارد؟</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-[#5D5D5D]">کاراکترهای حیوانی رفتارهای انسانی و ویژگی‌های بازار را ساده و ملموس
                                    نشان می‌دهند. هر حیوان نمادی از یک ویژگی خاص است؛ مثل قدرت، احتیاط، ریسک‌پذیری یا
                                    آرامش. این طراحی باعث می‌شود یادگیری جذاب‌تر، سرگرم‌کننده‌تر و قابل درک‌تر
                                    باشد.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4" className="bg-white border border-[#404040] py-4 px-6 rounded-xl">
                                <AccordionTrigger className="hover:no-underline focus:outline-none outline-none ">
                                    <div className="flex items-center justify-start gap-2">
                                        <span className="text-xs px-1.5 py-1 rounded-lg bg-cream-medium/50 text-text-dark_Orange icon icon-add"></span>
                                        <p>آیا انتخاب کاراکتر روی مسیر یادگیری من تاثیری دارد؟</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-[#5D5D5D]">کاراکترهای حیوانی رفتارهای انسانی و ویژگی‌های بازار را ساده و ملموس
                                    نشان می‌دهند. هر حیوان نمادی از یک ویژگی خاص است؛ مثل قدرت، احتیاط، ریسک‌پذیری یا
                                    آرامش. این طراحی باعث می‌شود یادگیری جذاب‌تر، سرگرم‌کننده‌تر و قابل درک‌تر
                                    باشد.</AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="w-2/5 flex justify-center items-start">
                        <Image src={bannerImage} alt={"faq"}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQCharacter;