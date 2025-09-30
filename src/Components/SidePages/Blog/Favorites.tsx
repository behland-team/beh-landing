import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/Components/UI/tabs";
import classNames from "classnames";
import {useTranslations} from "next-intl";

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
    const t = useTranslations("blogPage");
    const data = Array.from({length: 8});
    return (
        <section className="my-10">
            <div className="flex max-w-[85rem] mx-auto  md:px-6 lg:px-20 3xl:px-0 gap-10 flex-col">
                <div className="flex items-center flex-col gap-2">
                    <div className="flex items-center gap-2 text-lg lg:text-2xl font-semibold tracking-tight">
                        <span className="icon icon-heart-tick text-text-dark_Orange"></span>
                        <h2>{t("favorite")}</h2>
                    </div>
                    <p className="text-cream-medium text-sm md:text-base max-sm:text-[#848484]">{t("newestArticleDes")}</p>
                </div>
                <div>
                    <Tabs dir="rtl" defaultValue={"start"}>
                        <TabsList className="px-4 py-3 h-fit w-full flex items-center overflow-x-auto gap-4 justify-between mb-4 sm:mb-12">
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
                        <TabsContent value={"start"} className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-md:px-4">
                            {
                                data.map((item, index) => (
                                    <div key={index}
                                         className="flex  flex-col gap-4 p-2 xxs:p-4 rounded-lg border border-[#848484]">
                                        <div className="flex md:flex-col gap-2 md:gap-6 max-md:border-b border-dashed border-[#848484] flex-1 pb-4">
                                            <div className="bg-[#F8F7BB] rounded-lg max-md:size-16  md:h-44 max-md:shrink-0 "></div>
                                            <div className="space-y-2">
                                                <h5 className="font-bold text-sm ">بهلند مسیر یادگیری جدیدی ارائه داد است
                                                    ؟</h5>
                                                <div className="text-sm text-[#848484] flex items-center gap-2">
                                                    <span className="icon icon-clock max-md:hidden"></span>
                                                    <p className="max-md:hidden">۸ دقیقه زمان برای خواندن این مقاله</p>
                                                    <p className="md:hidden text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between md:hidden">
                                                <div className="flex items-center gap-2">
                                                    <span className="icon icon-clock text-cream-medium"></span>
                                                    <span className="text-gray-500 text-sm">8 دقیقه</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="icon icon-calendar text-cream-medium"></span>
                                                    <span className="text-gray-500 text-sm">1404/04/07</span>
                                                </div>
                                        </div>                                    </div>
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