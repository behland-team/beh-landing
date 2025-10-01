import React from 'react';
import Banner from "@/Components/SidePages/FAQ/Banner";
import Support from "@/Components/SidePages/FAQ/Support";
import FAQTabs from "@/Components/SidePages/FAQ/FAQTabs";

function FAQPage() {
    return (
        <main dir={"rtl"}>
            <Banner />
            <FAQTabs />
            <Support />
        </main>
    );
}

export default FAQPage;