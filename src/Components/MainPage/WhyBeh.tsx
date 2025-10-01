import {useTranslations} from "next-intl";
import DoughnutChart from "../Charts/DoughnutChart";

import {ChartData, SemiCircleChartData} from "@/utils/data";
import classNames from "classnames";
import SemiCircleChart from "@/Components/Charts/SemiCircleChart";
import Crown from "@/assets/Images/WhyBehCrown.svg"
import WhyBehBg from "@/assets/Images/WhyBehMobile.png"
import Image from "next/image";


export default function WhyBeh() {
    const t = useTranslations("WhyBeh");
    return (
        <div className="w-full max-sm:p-6 xl:max-w-screen-2xl xl:mx-auto  lg:p-9  ">
            <div
                className="w-full h-80 xl:h-[300px]  md:bg-WhyBehBg bg-no-repeat bg-contain bg-center flex flex-col   md:justify-center   relative mt-4">
                <Image src={WhyBehBg} alt={"background"} className="absolute top-0 left-0 w-full h-full md:hidden"/>
                <Image src={Crown} alt={"Wht Beh"}
                       className="absolute -top-5 left-1/2 -translate-x-1/2 md:hidden z-10"/>
                <div className=" flex flex-col items-center justify-center gap-2  lg:gap-5 mt-14 absolute ">
                    <h3 className="text-black text-center           font-semibold xxs:text-lg lg:text-xl">{t("title")}</h3>
                    <p dir="rtl"
                       className="text-text-gray  font-medium text-sm lg:w-3/4 sm:px-20 text-justify lg:px-2 sm:w-3/4 md:2/4 w-5/6   md:w-full flex-wrap text-balance  md:text-center">
                        {t("description")}
                    </p>
                </div>
            </div>
            <div className=" flex justify-center items-center w-full lg:mt-16">
                <div className="md:hidden flex flex-col gap-10">
                    <SemiCircleChart data={SemiCircleChartData}/>
                    <div className="grid grid-cols-2 gap-4 sm:gap-5">
                        {
                            ChartData.toSorted((a, b) => b.percentage - a.percentage).map((item, index) => (
                                <div
                                    className={classNames(item.bg, "rounded-md border  p-2", item.borderColor, index < 3 ? "col-span-full" : "col-span-1",)}>
                                    <p className={classNames(item.color, "text-center align-middle text-sm sm:text-base")}>{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className=" md:flex flex-wrap justify-center gap-8 items-start flex-row-reverse w-full hidden">
                    {ChartData.map((item, index) => (
                        <div
                            className="flex flex-col items-center justify-center gap-5 w-36 shrink-0 "
                            key={index}
                        >
                            <DoughnutChart
                                data={item.data}
                                key={index}
                                icon={item.icon}
                                percentage={item.percentage}
                                color={item.color}
                            />
                            <div
                                className={classNames(item.bg, "w-full p-2 flex justify-center items-center rounded-md mx-auto")}>
                                <p dir="rtl" className={classNames(item.color, "text-center align-middle")}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
