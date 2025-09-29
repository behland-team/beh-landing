import React from 'react';
import Banner from "@/Components/SidePages/About/Banner";
import Story from "@/Components/SidePages/About/Story";
import Perspective from "@/Components/SidePages/About/Perspective";
import UserRoad from "@/Components/SidePages/About/UserRoad";
import Team from "@/Components/SidePages/About/Team";
import Contact from "@/Components/SidePages/About/Contact";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "بهلند | درباره ما"
}

function AboutPage() {
    return (
        <div dir={"rtl"}>
            <Banner/>
            <Story/>
            <Perspective/>
            <UserRoad/>
            <Team/>
            <Contact/>
        </div>
    );
}

export default AboutPage;