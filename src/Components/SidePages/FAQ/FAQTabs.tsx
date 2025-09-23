import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/Components/UI/tabs";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/Components/UI/accordion";

function FAQTabs() {
    return (
        <section className="my-20">
            <div className="max-w-[75rem] mx-auto flex flex-col gap-16">
                <div className="space-y-4">
                    <h3 className="text-xl lg:text-3xl text-center font-semibold">سوالات پر تکرار</h3>
                    <p className="text-center">پرکاربردترین پرسش‌ها رو جمع کردیم تا بدون اتلاف وقت مسیرت روشن بشه</p>
                </div>
                <div className="sm:px-12 xl:px-0">
                    <Tabs className="flex flex-col lg:flex-row w-full gap-6" dir="rtl">
                        <TabsList className="flex lg:flex-col flex-nowrap overflow-x-auto gap-2 h-fit bg-[#FBF7F5] lg:w-1/5 p-4 max-sm:px-6  justify-start sm:justify-center">
                            <TabsTrigger value="start"
                                         className="lg:w-full py-3 data-[state=active]:bg-[#FEECD8] font-semibold  justify-start font-kalameh data-[state=active]:shadow-none shrink-0 ">شروع
                                و عضویت</TabsTrigger>
                            <TabsTrigger value="course"
                                         className="lg:w-full py-3 data-[state=active]:bg-[#FEECD8] font-semibold  justify-start font-kalameh data-[state=active]:shadow-none shrink-0">آموزش
                                و دوره ها</TabsTrigger>
                            <TabsTrigger value="rewird"
                                         className="lg:w-full py-3 data-[state=active]:bg-[#FEECD8] font-semibold  justify-start font-kalameh data-[state=active]:shadow-none shrink-0">پاداش و درآمدو عضویت</TabsTrigger>
                            <TabsTrigger value="support"
                                         className="lg:w-full py-3 data-[state=active]:bg-[#FEECD8] font-semibold  justify-start font-kalameh data-[state=active]:shadow-none shrink-0">پشتیبانی و فنی</TabsTrigger>
                        </TabsList>
                        <TabsContent value={"start"} className="flex-1 bg-[#FBF7F5] rounded-xl p-8 mt-0">
                            <Accordion type={"single"} collapsible>
                                <AccordionItem value={"item1"} className="border-dashed">
                                    <AccordionTrigger className="hover:no-underline text-text-gray">
                                        < div className="flex items-center gap-2">
                                            <span
                                                className="size-4 rounded-md  flex items-center justify-center bg-cream-dark_light text-cream-medium">+</span>
                                            <p >چطور می‌تونم عضو به‌لند بشم؟</p>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, fugiat.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value={"item2"} className="border-dashed">
                                    <AccordionTrigger className="hover:no-underline text-text-gray">
                                        < div className="flex items-center gap-2">
                                            <span
                                                className="size-4 rounded-md  flex items-center justify-center bg-cream-dark_light text-cream-medium">+</span>
                                            <p >چطور می‌تونم عضو به‌لند بشم؟</p>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, fugiat.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value={"item3"} className="border-dashed">
                                    <AccordionTrigger className="hover:no-underline text-text-gray">
                                        < div className="flex items-center gap-2">
                                            <span
                                                className="size-4 rounded-md  flex items-center justify-center bg-cream-dark_light text-cream-medium">+</span>
                                            <p >چطور می‌تونم عضو به‌لند بشم؟</p>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, fugiat.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </TabsContent>
                        <TabsContent value={"course"}>

                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    );
}

export default FAQTabs;