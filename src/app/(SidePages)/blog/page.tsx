import React from 'react';
import RecentNews from "@/Components/SidePages/Blog/RecentNews/RecentNews";
import EditorChoice from "@/Components/SidePages/Blog/EditorChoice";
import NewestArticle from "@/Components/SidePages/Blog/NewestArticle";
import CryptoNews from "@/Components/SidePages/Blog/CryptoNews";
import Favorites from "@/Components/SidePages/Blog/Favorites";
import Newsletter from "@/Components/SidePages/Blog/Newsletter";

function Page() {
    return (
        <div dir="rtl">
            <RecentNews />
            <EditorChoice />
            <NewestArticle />
            <CryptoNews />
            <Favorites />
            <Newsletter />
        </div>
    );
}

export default Page;