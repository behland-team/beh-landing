"use client";
import React, {FormEvent, ReactNode} from 'react';
import {toast} from "sonner";
import Toast from "@/Components/Layout/Toast";

const EmailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g

function NewsletterForm({children}: { children: ReactNode }) {
    const NewsletterRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {email} = e.target as HTMLFormElement;
        toast.custom(() => (
            <Toast
                message={EmailRegex.test(email.value) ? "ایمیل شما با موفقیت ثبت شد ✔️" : "لطفن ایمیل معتبر وارد کنید 🙏"}/>
        ))
    }
    return (
        <form onSubmit={NewsletterRegister}>
            {children}
        </form>
    );
}

export default NewsletterForm;