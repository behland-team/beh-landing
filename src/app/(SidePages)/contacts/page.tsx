import React from 'react';
import Banner from "@/Components/SidePages/Contacts/Banner";
import Socials from "@/Components/SidePages/Contacts/Socials";
import ContactForm from "@/Components/SidePages/Contacts/ContactForm";

function ContactPage() {
    return (
        <main dir="rtl">
            <Banner />
            <Socials />
            <ContactForm />
        </main>
    );
}

export default ContactPage;