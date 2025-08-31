import { useTranslations } from "next-intl";

export default function WhyBeh() {
  const t = useTranslations("WhyBeh");
  return (
    <div className="w-full h-[30em] p-10 ">
      <div className="w-full h-full  bg-WhyBehBg bg-no-repeat bg-contain bg-center flex flex-col  justify-end">
        <div className="h-2/3  flex flex-col items-center justify-center gap-5">
          <h3 className="text-black font-semibold text-xl">{t("title")}</h3>
          <p className="text-text-gray font-yekan font-semibold text-sm w-2/3 flex-wrap text-balance  text-center">
            {t("description")}
          </p>
        </div>
      </div>
    </div>
  );
}
