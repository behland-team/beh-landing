import React from 'react';
import {useTranslations} from "next-intl";

function Share() {
    const t = useTranslations("articlePage");
    return (
        <div className="space-y-5">
            <div className="rounded-lg border border-cream-medium bg-[#FBF7F5] px-4 py-3 flex items-center justify-between">
                    <button className="border-2 shadow-main rounded-lg bg-white border-text-dark_Orange text-text-orange px-4 py-1 shadow-cream-medium">{t("copy")}</button>
                <div className="flex items-center gap-2 text-[#848484]">
                    <p>https://pvst.ir/ex1</p>
                    <span className="icon icon-link"></span>
                </div>
            </div>
            <div className="rounded-lg border border-cream-medium bg-[#FBF7F5] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#848484]">
                    <span className="icon icon-share"></span>
                    <p>{t("share")}</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="rounded-lg size-8 p-1 shadow-main shadow-cream-medium border-2 border-text-dark_Orange text-text-dark_Orange">
                        <span className="icon icon-telegram"></span>
                    </button>
                    <button className="rounded-lg size-8 p-1 shadow-main shadow-cream-medium border-2 border-text-dark_Orange text-text-dark_Orange">
                        <span className="icon icon-twitter"></span>
                    </button>
                    <button className="rounded-lg size-8 p-1 shadow-main shadow-cream-medium border-2 border-text-dark_Orange text-text-dark_Orange">
                        <span className="icon icon-facebook"></span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Share;