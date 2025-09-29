import React, {ComponentProps} from 'react';
import classNames from "classnames";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/Components/UI/tabs";
import Link from "next/link";

function RecentNewsTab({className, ...props}: ComponentProps<"div">) {
    const data = Array.from({length: 3})
    return (
        <div className={classNames(className, "")} {...props}>
            <Tabs dir={"rtl"} className="space-y-6" defaultValue={"newest"}>
                <TabsList className="w-full bg-transparent">
                    <TabsTrigger value={"newest"}
                                 className="flex-1 rounded-none p-2 data-[state=active]:shadow-none text-gray-500  border-gray-400 border-b-2  data-[state=active]:border-cream-medium  data-[state=active]:text-cream-medium">جدیدن
                        ترین اخبار</TabsTrigger>
                    <TabsTrigger value={"best"}
                                 className="flex-1 rounded-none p-2 data-[state=active]:shadow-none  text-gray-500  border-gray-400 border-b-2  data-[state=active]:border-cream-medium  data-[state=active]:text-cream-medium">اخبار
                        برتر</TabsTrigger>
                </TabsList>
                <TabsContent value={"newest"} className="space-y-4">
                    {data.map((item, i) => (
                        <div key={i} className="border border-[#CCCFD4] rounded-lg p-4 flex gap-6">
                            <div className="size-28 rounded-lg bg-sky-700"></div>
                            <div className="flex flex-col gap-3 ">
                                <div className="space-y-2">
                                    <h3 className="text-sm font-bold">بهلند مسیر یادگیری جدیدی ارائه داد است ؟</h3>
                                    <p className="text-xs tracking-tight"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                        از
                                        صنعت چاپ و با استفاده از طراحان گرافیک است ...</p>
                                </div>
                                <hr className="border  border-b border-dashed"/>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <span className="icon icon-calendar text-cream-medium"></span>
                                            <span className="text-gray-500 text-sm">8 دقیقه</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="icon icon-calendar text-cream-medium"></span>
                                            <span className="text-gray-500 text-sm">1404/04/07</span>
                                        </div>
                                    </div>
                                    <Link href={"/blog/article/crypto/14"}>
                                        <button
                                            className="text-cream-medium border-none outline-none flex items-center gap-2 text-sm">
                                            <p>ادامه مطلب</p>
                                            <span className="icon icon-arrow-back text-xs rotate-180"></span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </TabsContent>
                <TabsContent value={"best"} className="space-y-4">
                    {data.map((item, i) => (
                        <div key={i} className="border border-[#CCCFD4] rounded-lg p-4 flex gap-6">
                            <div className="size-28 rounded-lg bg-sky-700"></div>
                            <div className="flex flex-col gap-3 ">
                                <div className="space-y-2">
                                    <h3 className="text-sm font-bold">بهلند مسیر یادگیری جدیدی ارائه داد است ؟</h3>
                                    <p className="text-xs tracking-tight"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                        از
                                        صنعت چاپ و با استفاده از طراحان گرافیک است ...</p>
                                </div>
                                <hr className="border  border-b border-dashed"/>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <span className="icon icon-calendar text-cream-medium"></span>
                                            <span className="text-gray-500 text-sm">8 دقیقه</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="icon icon-calendar text-cream-medium"></span>
                                            <span className="text-gray-500 text-sm">1404/04/07</span>
                                        </div>
                                    </div>
                                    <Link href={"/blog/article/crypto/12"}>
                                        <button
                                            className="text-cream-medium border-none outline-none flex items-center gap-2 text-sm">
                                            <p>ادامه مطلب</p>
                                            <span className="icon icon-arrow-back text-xs rotate-180"></span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </TabsContent>
            </Tabs>
        </div>
    );
}

export default RecentNewsTab;