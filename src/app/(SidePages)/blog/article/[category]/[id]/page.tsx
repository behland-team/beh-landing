import React from 'react';
import Banner from "@/Components/SidePages/Article/Banner";
import Content from "@/Components/SidePages/Article/Content";
import Aside from "@/Components/SidePages/Article/Aside";
import SimilarArticle from "@/Components/SidePages/Article/SimilarArticle";

function Page({params} : {params : {id: string, category: string}}) {
    return (
        <div dir="rtl">
            <Banner />
            <div className="flex flex-col-reverse md:flex-row md:gap-4 lg:gap-14 px-6 lg:px-10 2xl:px-28 3xl:px-0 3xl:max-w-[75rem] mx-auto my-10">
                <Content className="md:w-3/5 lg:w-4/6" />
                <Aside className="md:w-2/5 lg:w-2/6" />
            </div>
            <SimilarArticle />
        </div>
    );
}

export default Page;