import React from 'react';
import newMethod from "@/assets/Images/services/newMethod.png";
import updateMethod from "@/assets/Images/services/updateMethod.png";
import accessTo from "@/assets/Images/services/accessTo.png";
import rewords from "@/assets/Images/services/rewords.png";
import educate from "@/assets/Images/services/educate.png";
import Image from "next/image";
import classNames from "classnames";

const services = [
    {
        title: "روش آموزش نوین",
        image: newMethod
    }, {
        title: " به روزترین متدهای آموزشی",
        image: updateMethod
    }, {
        title: "دسترسی به ابزارهای مالی",
        image: accessTo
    }, {
        title: "  پاداشت در ازای اموزش ",
        image: rewords
    }, {
        title: " یادگیری و اموزش ",
        image: educate
    },
]

function Services() {
    return (
        <section className="my-10">
            <div className="xl:max-w-[75rem]  mx-auto grid xxs:grid-cols-6 md:grid-cols-3 xl:grid-cols-5 gap-6 px-3 xxs:px-6 md:px-12 lg:px-24 xl:px-0">
                {
                    services.map((service, index) => (
                        <div key={index}
                             className={classNames("flex flex-col gap-4 items-center px-6 py-4 md:px-10 md:py-7 rounded-xl bg-[#FFF6ED] shrink-0 border-2 border-transparent cursor-pointer hover:border-cream-medium hover:shadow-lg hover:shadow-black/70 transition-all duration-300 ease-in-out max-xxs:col-span-full" , index < 2 ? "max-md:col-span-3" : "max-md:col-span-2")}>
                            <Image src={service.image} alt={service.title} className="max-sm:size-10"/>
                            <h5 className="font-semibold lg:text-lg text-nowrap text-xs sm:text-base ">{service.title}</h5>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Services;