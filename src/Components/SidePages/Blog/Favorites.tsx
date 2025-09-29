import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/Components/UI/tabs";
import classNames from "classnames";

const tabs = [
    {
        title: "شروع و عضویت",
        id: "start"
    }, {
        title: "جامعه و رشد",
        id: "community"
    }, {
        title: "پشیتبانی و فنی",
        id: "support"
    }, {
        title: "پاداش و درامد",
        id: "income"
    }, {
        title: "اموزش و دوره ها",
        id: "course"
    },
]

function Favorites() {
    const data = Array.from({length: 8});
    return (
        <section className="my-10">
            <div className="flex max-w-[85rem] mx-auto max-3xl:px-20 gap-10 flex-col">
                <div className="flex items-center flex-col gap-2">
                    <div className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
                        <span className="icon icon-ranking text-text-dark_Orange"></span>
                        <h2>محبوب ترین های به لند</h2>
                    </div>
                    <p className="text-cream-medium">جدید ترین و به روز ترین مقالات مشاهده کنید .</p>
                </div>
                <div>
                    <Tabs dir="rtl" defaultValue={"start"}>
                        <TabsList className="px-4 py-3 h-fit w-full flex items-center gap-4 justify-between mb-12">
                            {
                                tabs.map((item , index)=>(
                                    <TabsTrigger value={item.id} key={index}
                                                 className=" py-3 data-[state=active]:bg-[#FEECD8] font-semibold  justify-start gap-2 font-kalameh data-[state=active]:shadow-none shrink-0 px-6 rounded-lg">
                                        <span className={classNames("icon icon-crown")}></span>
                                        <p className="text-right">{item.title}</p>
                                    </TabsTrigger>
                                ))
                            }
                        </TabsList>
                        <TabsContent value={"start"} className="grid grid-cols-4 gap-6">
                            {
                                data.map((item, index) => (
                                    <div key={index}
                                         className="flex flex-col gap-6 p-4 rounded-lg border border-[#848484]">
                                        <div className="bg-[#F8F7BB] rounded-lg h-44"></div>
                                        <div className="space-y-2">
                                            <h5 className="font-bold text-sm ">بهلند مسیر یادگیری جدیدی ارائه داد است
                                                ؟</h5>
                                            <div className="text-sm text-[#848484] flex items-center gap-2">
                                                <span className="icon icon-calendar"></span>
                                                <p>۸ دقیقه زمان برای خواندن این مقاله</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    );
}

export default Favorites;