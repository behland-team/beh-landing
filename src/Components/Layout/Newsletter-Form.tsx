"use client";
import React, {FormEvent, ReactNode} from 'react';
import {toast} from "sonner";

const EmailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g

function NewsletterForm({children}: { children: ReactNode }) {
    const NewsletterRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {email} = e.target as HTMLFormElement;
        toast.custom(() => (
            <div
                className="border-2 border-cream-medium flex items-center text-center justify-center relative overflow-hidden bg-[#FEECD8] px-12 py-2 rounded-lg min-h-16">
                <p className="text-sm font-semibold">
                    {
                        EmailRegex.test(email.value) ? "ایمیل شما با موفقیت ثبت شد ✔️" : "لطفن ایمیل معتبر وارد کنید 🙏"
                    }
                </p>
            </div>
        ));
    }
    return (
        <form onSubmit={NewsletterRegister}>
            {children}
        </form>
    );
}

export default NewsletterForm;