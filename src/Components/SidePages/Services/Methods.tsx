import React from 'react';
import Image from "next/image";
import banner from "@/assets/Images/services/methodBanner.png";
import {useTranslations} from "next-intl";

function Methods() {
    const t = useTranslations("servicesPage.method")
    return (
        <section className="my-10">
            <div className="xl:max-w-[75rem]  mx-auto bg-[#FBF7F5] rounded-xl p-6 md:p-12 space-y-10">
                <div className="space-y-4">
                    <h3 className="md:text-xl font-bold">{t("title")}</h3>
                    <p className="max-sm:text-sm text-justify leading-8 text-[#4d4d4d]">{t("des")}</p>
                </div>
                <div className="flex gap-10 flex-col-reverse lg:flex-row lg:items-center">
                    <div className="space-y-6 flex-1">
                        <h5 className="sm:text-lg font-bold">{t("methods.title")}</h5>
                        <ul className="list-inside list-disc space-y-4 max-sm:text-sm">
                            <li>{t("methods.items.item1")}</li>
                            <li>{t("methods.items.item2")}</li>
                            <li>{t("methods.items.item3")}</li>
                            <li>{t("methods.items.item4")}</li>
                            <li>{t("methods.items.item5")}</li>

                        </ul>
                    </div>
                    <Image src={banner} alt={"methods"} className="rounded-xl flex-1 max-lg:w-full" />
                </div>
                <div className="space-y-4">
                    <h3 className="md:text-xl font-bold">{t("title")}</h3>
                    <p className="max-sm:text-sm text-justify leading-8 text-[#4d4d4d]">{t("des")}</p>
                </div>
            </div>
        </section>
    );
}

export default Methods;