import React from 'react';
import Banner from "@/Components/SidePages/Contacts/Banner";
import Socials from "@/Components/SidePages/Contacts/Socials";
import ContactForm from "@/Components/SidePages/Contacts/ContactForm";
import {Metadata} from "next";
export const metadata : Metadata  = {
    title : "بهلند | تماس با ما"
}
function ContactPage() {
    return (
        <div dir="rtl">
            <Banner />
            <Socials />
            <ContactForm />
        </div>
    );
}

export default ContactPage;