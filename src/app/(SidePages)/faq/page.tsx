import React from 'react';
import Banner from "@/Components/SidePages/FAQ/Banner";
import Support from "@/Components/SidePages/FAQ/Support";
import FAQTabs from "@/Components/SidePages/FAQ/FAQTabs";
import {Metadata} from "next";

export const metadata : Metadata  = {
    title : "بهلند | سوالات متدوال"
}
function FAQPage() {
    return (
        <div dir={"rtl"}>
            <Banner />
            <FAQTabs />
            <Support />
        </div>
    );
}

export default FAQPage;