import React from 'react';
import Banner from "@/Components/SidePages/Services/Banner";
import Services from "@/Components/SidePages/Services/Services";
import Methods from "@/Components/SidePages/Services/Methods";
import WhyUs from "@/Components/SidePages/Services/WhyUs";
import FAQCharacter from "@/Components/SidePages/Characters/FAQCharacter";

function ServicesPage() {
    return (
        <div dir="rtl">
            <Banner />
            <Services />
            <Methods />
            <WhyUs />
            <FAQCharacter />
        </div>
    );
}

export default ServicesPage;