import { saleStages } from "@/utils/data";
import { useTranslations } from "next-intl";
import { FunctionComponent } from "react";

interface TokenProps {}

export const Token: FunctionComponent<TokenProps> = () => {
  const t = useTranslations("token");
  return (
    <div dir="rtl" className="my-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <p className="text-text-gray text-3xl font-semibold">{t("title")}</p>
        <p className="text-text-gray text-base font-semibold w-1/3">
          {t("description")}
        </p>
      </div>
      <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible w-full p-20 ">
        {saleStages.slice(0, 3).map((stage, index) => (
          <div className="  h-60 flex justify-end items-center relative flex-col ">
            <div
              key={index}
              className="rounded-xl bg-cardBg bg-cover w-full bg-no-repeat p-5 h-5/6   flex justify-end items-center shadow-main"
            >
              <div className="bg-crown bg-contain bg-no-repeat bg-center absolute top-1 left-0 h-2/6 w-full flex justify-center items-center">
                <p className="text-base font-bold text-[#893D1B]">
                  {" "}
                  {stage.title}
                </p>
              </div>
              <div className="flex flex-col justify-end items-center w-full h-full gap-5">
                <div className="flex flex-wrap gap-2 text-sm text-right">
                  <span className="bg-[#EAE3CC] text-text-gray text-base font-semibold p-2 rounded-md">
                    تعداد: {stage.tokens}
                  </span>
                  <span className="bg-[#FEE6BD] text-text-gray text-base font-semibold p-2 rounded-md">
                    قیمت: {stage.price}
                  </span>
                </div>

                <p className=" bg-[#F0E3D5] rounded-lg p-2 text-text-gray text-right leading-relaxed text-base font-semibold">
                  {stage.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible w-full p-10">
        {saleStages.slice(3, 7).map((stage, index) => (
          <div className="  h-60 flex justify-end items-center relative flex-col ">
            <div
              key={index}
              className="rounded-xl bg-cardMiniBg bg-cover w-full bg-no-repeat p-5 h-5/6   flex justify-center items-center shadow-main"
            >
              <div className="bg-crown bg-contain bg-no-repeat bg-center absolute top-1 left-0  right-0  h-2/6 w-full flex justify-center items-center">
                <p className="text-base font-bold text-[#893D1B]">
                  {" "}
                  {stage.title}
                </p>
              </div>
              <div className="flex flex-col justify-end items-center w-full h-full gap-5">
                <div className="flex flex-wrap gap-2 text-sm text-right">
                  <span className="bg-[#EAE3CC] text-text-gray text-base font-semibold p-2 rounded-md">
                    تعداد: {stage.tokens}
                  </span>
                  <span className="bg-[#FEE6BD] text-text-gray text-base font-semibold p-2 rounded-md">
                    قیمت: {stage.price}
                  </span>
                </div>

                <p className=" bg-[#F0E3D5] rounded-lg p-2 text-text-gray text-right leading-relaxed text-base font-semibold">
                  {stage.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
