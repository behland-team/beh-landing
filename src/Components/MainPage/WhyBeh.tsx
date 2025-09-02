import { useTranslations } from "next-intl";
import DoughnutChart from "../Charts/DoughnutChart";

import { ChartData } from "../../utils/data";
import classNames from "classnames";

export default function WhyBeh() {
  const t = useTranslations("WhyBeh");
  return (
    <div className="w-full h-[45rem] p-10 border border-red-500 ">
      <div className="w-full h-1/2  bg-WhyBehBg bg-no-repeat bg-contain bg-center flex flex-col  justify-end">
        <div className="h-2/3  flex flex-col items-center justify-center gap-5">
          <h3 className="text-black font-semibold text-xl">{t("title")}</h3>
          <p className="text-text-gray font-yekan font-semibold text-sm w-2/3 flex-wrap text-balance  text-center">
            {t("description")}
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center w-full h-1/2">
        <div className=" flex justify-center items-center flex-row-reverse w-2/3">
          {ChartData.map((item, index) => (
            <div
              className="flex flex-col items-center justify-center gap-5 "
              key={index}
            >
              <DoughnutChart
                data={item.data}
                key={index}
                icon={item.icon}
                percentage={item.percentage}
                color={item.color}
              />
              <div className={classNames(item.bg,"w-3/4 p-2 flex justify-center items-center rounded-md")}>
                <p className={classNames(item.color,"text-center align-middle")}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
