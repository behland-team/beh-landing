import React from 'react';

function SimilarArticle() {
    const data = Array.from({length: 3});
    return (
        <section className="my-10 xl:my-32">
            <div className="px-6 md:px-10 xl:px-28 3xl:px-0 3xl:max-w-[75rem] mx-auto space-y-4 md:space-y-11">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <span className={"icon icon-document text-cream-medium text-xl xl:text-3xl font-semibold"}></span>
                            <h3 className="text-lg md:text-xl xl:text-3xl font-semibold tracking-tight">مقالات مشابه</h3>
                        </div>
                        <p className="text-[#848484] max-md:hidden">جدید ترین و به روز ترین مقالات مشاهده کنید .</p>
                    </div>
                    <button type="button" className="text-[#848484] flex items-center gap-2 md:hidden">
                        <p>مشاهده همه</p>
                        <span className="icon icon-arrow-back -rotate-[135deg]"></span>
                    </button>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((item , i) => (
                        <div key={i} className="p-4 rounded-lg border border-[#CCCDF4] flex flex-col gap-6">
                            <div className="h-52 bg-[#FEF8D6] rounded-lg"></div>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <h4 className="font-bold">بهلند مسیر یادگیری جدیدی ارائه داد است ؟</h4>
                                    <p className="text-sm tracking-tight text-justify text-[#606060]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است چاپگرها و متون بلکه روزنامه </p>
                                </div>
                                <hr className="border-b border-[#CCCDF4] border-dashed" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="icon icon-calendar text-cream-medium"></span>
                                        <span className="text-text-gray/60">۸ دقیقه</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="icon icon-calendar text-cream-medium"></span>
                                        <span className="text-text-gray/60">1404 /04/07</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="icon icon-calendar text-cream-medium"></span>
                                        <span className="text-text-gray/60">2 دیدگاه</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SimilarArticle;