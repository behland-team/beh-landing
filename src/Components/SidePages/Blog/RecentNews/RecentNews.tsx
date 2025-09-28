import React from 'react';
import RecentNewsTab from "@/Components/SidePages/Blog/RecentNews/RecentNewsTab";
import RecentNewsSlider from "@/Components/SidePages/Blog/RecentNews/RecentNewsSlider";

function RecentNews() {
    return (
        <section className="mb-10">
            <div className="flex items-center gap-12 justify-center  3xl:max-w-[75rem] mx-auto max-3xl:px-32">
                <RecentNewsTab className="w-1/2"/>
                <RecentNewsSlider className="w-1/2"/>
            </div>
        </section>
    );
}

export default RecentNews;