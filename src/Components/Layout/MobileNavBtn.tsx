"use client"
import React, {useState} from 'react';
import MobileNav from "@/Components/Layout/MobileNav";

function MobileNavBtn() {
    const [open ,setOpen ] = useState(false);
    return (
        <>
        <span
            onClick={() => setOpen(true)}
            className="icon icon-profile lg:hidden size-[40px]  text-xl text-cream-medium border-[2px] rounded-xl py-1 px-2 border-cream-medium bg-cream-light shadow-main shadow-cream-dark"></span>
            <MobileNav open={open} setOpen={setOpen}/>
        </>
    );
}

export default MobileNavBtn;