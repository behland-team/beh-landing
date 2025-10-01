"use client";
import React, {useEffect, useState} from 'react';
import {useTranslations} from "next-intl";
import {usePathname} from 'next/navigation'
import {toast} from "sonner";
import Toast from "@/Components/Layout/Toast";
import {Skeleton} from "@/Components/UI/skeleton";

function Share() {
    const t = useTranslations("articlePage");
    const [copied, setCopied] = useState(false);
    const [domain , setDomain] = useState("");
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();
    useEffect(()=>{
        if (window.location){
            setDomain(window.location.origin);
            setLoading(false);
        }
    } ,[])

    const url = domain + pathname

    const handleCopy = () => {
        if (!copied) {
            navigator.clipboard.writeText(url)
                .then(() => {
                    setCopied(true);
                    toast.custom(() => (
                        <Toast message={"لینک صفحه با موفقیت کپی شد"}/>
                    ));
                    setTimeout(() => {
                        setCopied(false)
                    }, 4000);
                })

        }
    }

    const handleShare = async () => {
        await navigator.share({
            title: "title",
            text: "description",
            url: url,
        })
    }


    return (
        <div className="space-y-5">
            <div
                className="rounded-lg border border-cream-medium bg-[#FBF7F5] px-4 py-3 flex items-center justify-between">
                {
                    copied ? (
                            <div
                                className="border-2 flex items-center justify-center shadow-main rounded-lg bg-white border-text-dark_Orange px-4 py-0.5 shadow-cream-medium">
                                <span className="text-lg font-bold text-emerald-800">✔</span>
                            </div>
                        )
                        :
                        <button
                            onClick={handleCopy}
                            className="border-2 shadow-main rounded-lg bg-white border-text-dark_Orange text-text-orange px-2 text-sm xxs:text-base xxs:px-4 py-1 shadow-cream-medium">{t("copy")}</button>
                }


                <div className="flex items-center gap-2  w-2/3 text-[#848484]">
                    {
                        loading ? (
                            <>
                                <Skeleton className="w-full h-3" />
                                <Skeleton className="size-5 rounded-full"/>
                            </>
                        ):
                            (
                                <>
                                    <p className="line-clamp-1 text-left" dir="ltr">{url}</p>
                                    <span className="icon icon-link"></span>
                                </>
                            )
                    }

                </div>
            </div>
            <div
                className="rounded-lg border border-cream-medium bg-[#FBF7F5] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#848484]">
                    <span className="icon icon-share"></span>
                    <p>{t("share")}</p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        className="rounded-lg size-8 p-1 shadow-main icon icon-telegram shadow-cream-medium border-2 border-text-dark_Orange text-text-dark_Orange"
                              onClick={() => window.open(`https://telegram.me/share/url?url=${url}&text=${"Crypto News"}`, "_blank")}>
                    </button>
                    <button
                        className="rounded-lg size-8 p-1 shadow-main shadow-cream-medium border-2 border-text-dark_Orange icon icon-twitter text-text-dark_Orange"
                              onClick={() => window.open(`https://twitter.com/intent/tweet?url=${url}&text=${"Crypto News"}`, "_blank")}>
                    </button>
                    <button
                        className="rounded-lg size-8 p-1 shadow-main shadow-cream-medium border-2 border-text-dark_Orange text-text-dark_Orange icon icon-instagram"
                        onClick={handleShare}>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Share;