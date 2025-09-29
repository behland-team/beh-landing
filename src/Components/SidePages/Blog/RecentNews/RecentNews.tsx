import React from 'react';
import RecentNewsTab from "@/Components/SidePages/Blog/RecentNews/RecentNewsTab";
import RecentNewsSlider from "@/Components/SidePages/Blog/RecentNews/RecentNewsSlider";

function RecentNews() {
    return (
        <section className="mb-10">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 lg: justify-center  3xl:max-w-[75rem] mx-auto xl:px-32 3xl:px-0 lg:px-10 px-6 py-10 md:py-4">
                <RecentNewsTab className="lg:w-1/2"/>
                <RecentNewsSlider className="lg:w-1/2"/>
            </div>
        </section>
    );
}

export default RecentNews;