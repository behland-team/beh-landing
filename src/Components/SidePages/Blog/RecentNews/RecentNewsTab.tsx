import React, {ComponentProps} from 'react';
import classNames from "classnames";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/Components/UI/tabs";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {dateFormatter, numberFormatter} from "@/utils/helpers";

function RecentNewsTab({className, ...props}: ComponentProps<"div">) {
    const data = Array.from({length: 3})
    const t = useTranslations("blogPage");
    return (
        <div className={classNames(className, "")} {...props}>
            <Tabs dir={"rtl"} className="space-y-6" defaultValue={"newest"}>
                <TabsList className="w-full bg-transparent">
                    <TabsTrigger value={"newest"}
                                 className="flex-1 rounded-none p-2 data-[state=active]:shadow-none text-gray-500  border-gray-400 border-b-2  data-[state=active]:border-cream-medium  data-[state=active]:text-cream-medium">
                        {t("newest")}
                    </TabsTrigger>
                    <TabsTrigger value={"best"}
                                 className="flex-1 rounded-none p-2 data-[state=active]:shadow-none  text-gray-500  border-gray-400 border-b-2  data-[state=active]:border-cream-medium  data-[state=active]:text-cream-medium">
                        {t("best")}
                    </TabsTrigger>
                </TabsList>
                <TabsContent value={"newest"} className="space-y-4">
                    {data.map((item, i) => (
                        <div key={i}
                             className="border border-[#CCCFD4] rounded-lg p-4 grid grid-cols-[80px_1fr] md:grid-cols-[112px_1fr] gap-2 md:gap-4">
                            <div
                                className="w-full  rounded-lg max-h-20 md:max-h-28 bg-sky-700 col-span-1 row-span-2"></div>
                            <div
                                className="flex flex-col gap-3 col-span-1 pb-4 xl:border-b border-dashed ">
                                <div className="space-y-2">
                                    <h3 className="text-sm font-bold max-xxs:text-xs">بهلند مسیر یادگیری جدیدی ارائه داد
                                        است ؟</h3>
                                    <p className="text-xs tracking-tight text-justify"> لورم ایپسوم متن ساختگی با تولید
                                        سادگی نامفهوم
                                        از
                                        صنعت چاپ و با استفاده از طراحان گرافیک است ...</p>
                                </div>
                            </div>
                            <div
                                className="flex items-center justify-between col-span-full xl:col-span-1 xl:col-start-2">
                                <div className="flex items-center gap-2 xxs:gap-4">
                                    <div className="flex items-center gap-2">
                                        <span className="icon icon-clock text-cream-medium"></span>
                                        <span className="text-gray-500 text-xs xxs:text-sm">{numberFormatter(8).concat(`  ${t("min")}`)}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="icon icon-calendar text-cream-medium"></span>
                                        <span className="text-gray-500 text-xs xxs:text-sm">{dateFormatter( 1759473653000)}</span>
                                    </div>
                                </div>
                                <Link href={"/blog/article/crypto/14"}>
                                    <button
                                        className="text-cream-medium border-none outline-none flex items-center gap-2 text-xs xxs:text-sm">
                                        <p>{t("more")}</p>
                                        <span className="icon icon-arrow-back text-xs rotate-180"></span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}

                </TabsContent>
                <TabsContent value={"best"} className="space-y-4">
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default RecentNewsTab;