import React from 'react';
import Footer from "@/Components/SidePages/Footer";
import Header from "@/Components/Layout/Header";

function SidePagesLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
}

export default SidePagesLayout;