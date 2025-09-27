import React from 'react';
import Banner from "@/Components/SidePages/Article/Banner";
import Content from "@/Components/SidePages/Article/Content";
import Aside from "@/Components/SidePages/Article/Aside";
import SimilarArticle from "@/Components/SidePages/Article/SimilarArticle";

function Page({params} : {params : {id: string, category: string}}) {
    return (
        <main dir="rtl">
            <Banner />
            <div className="flex gap-14 px-28 3xl:px-0 3xl:max-w-[75rem] mx-auto my-10">
                <Content className="w-4/6" />
                <Aside className="w-2/6" />
            </div>
            <SimilarArticle />
        </main>
    );
}

export default Page;