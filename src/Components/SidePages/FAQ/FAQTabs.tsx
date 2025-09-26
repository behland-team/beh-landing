"use client";
import React, {useState} from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/Components/UI/tabs";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/Components/UI/accordion";
import {faqTabs} from "@/utils/data";
import classNames from "classnames";

function FAQTabs() {
    const [activeTab , setActiveTab] = useState(faqTabs[0].id);
    return (
        <section className="my-20">
            <div className="max-w-[75rem] mx-auto flex flex-col gap-16">
                <div className="space-y-4">
                    <h3 className="text-xl lg:text-3xl text-center font-semibold">سوالات پر تکرار</h3>
                    <p className="text-center">پرکاربردترین پرسش‌ها رو جمع کردیم تا بدون اتلاف وقت مسیرت روشن بشه</p>
                </div>
                <div className="sm:px-12 xl:px-0">
                    <Tabs className="flex flex-col lg:flex-row w-full gap-6" dir="rtl"  onValueChange={setActiveTab} value={activeTab}>
                        <TabsList className="flex lg:flex-col flex-nowrap overflow-x-auto gap-2 h-fit bg-[#FBF7F5] p-4 max-sm:px-6  justify-start sm:justify-center">
                            {
                                faqTabs.map((item )=>(
                                    <TabsTrigger value={item.id} key={item.id}
                                                 className="lg:w-full py-3 data-[state=active]:bg-[#FEECD8] font-semibold  justify-start gap-2 font-kalameh data-[state=active]:shadow-none shrink-0 ">
                                        <span className={classNames("icon" , item.icon)}></span>
                                        <p className="text-right">{item.title}</p>
                                    </TabsTrigger>
                                ))
                            }
                        </TabsList>
                        {
                            faqTabs.map((item)=>(
                                <TabsContent value={item.id} key={item.id} className="flex-1 bg-[#FBF7F5] rounded-xl p-8 mt-0">
                                    <Accordion type={"single"} collapsible>
                                        {
                                            item.questions.map((question, i)=>(
                                                <AccordionItem value={`item-${i}`} key={i} className="border-dashed">
                                                    <AccordionTrigger className="hover:no-underline text-text-gray">
                                                        < div className="flex items-center gap-2">
                                            <span
                                                className="size-4 rounded-md  flex items-center justify-center bg-cream-dark_light text-cream-medium">+</span>
                                                            <p className="text-right">{question.title}</p>
                                                        </div>
                                                    </AccordionTrigger>
                                                    <AccordionContent>
                                                        {question.description}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))
                                        }
                                    </Accordion>
                                </TabsContent>
                            ))
                        }
                    </Tabs>
                </div>
            </div>
        </section>
    );
}

export default FAQTabs;