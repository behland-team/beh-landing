import bannerImage from "@/assets/Images/services/services-banner.svg"
import Image from "next/image";
import {useTranslations} from "next-intl";
import Link from 'next/link';
function Banner() {
    const t = useTranslations("servicesPage.banner")
    return (
        <section className="my-6 px-3 xxs:px-6 xl:px-0">
            <div
                className="border-cream-medium border rounded-3xl mx-auto w-full  xl:max-w-[75rem] bg-[#FEECD8]  flex flex-col md:flex-row  relative ">
                <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/2 px-6 py-8 sm:pl-14 md:pl-0 sm:pr-14 sm:pt-12 sm:pb-20 relative z-[2] ">
                    <p className="text-sm xxs:text-base md:text-lg lg:text-xl font-semibold text-cream-medium"> {t("subtitle")}</p>
                    <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold xl:leading-10">
                        {t("educate")}،
                        <span className="bg-cream-medium/30">{t("opportunity")}</span>
                    </h2>
                    <div className="flex flex-col gap-8 items-center md:items-start">
                        <p className="text-sm lg:text-base text-justify">
                            {t("des")}
                        </p>
                        <Link href={"/contacts"}>
                            <button className="py-1.5 px-12 rounded-lg border bg-[#FEECD8]  w-fit border-cream-medium shadow-main shadow-cream-medium  text-cream-medium flex items-center justify-center gap-2">
                                <span>{t("contact-us")}</span>
                                <span className="icon icon-call"></span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="md:w-1/2 flex items-center justify-center">
                    <Image src={bannerImage} alt={"services"} className="max-md:max-w-96 max-sm:max-w-72 "/>
                </div>
                <p className="absolute left-[clac(50%-30px)] opacity-20 max-md:hidden  font-bold text-7xl lg:text-9xl tracking-wide z-[1]   bottom-0 text-white">
                    BEHLAND
                </p>
            </div>
        </section>
    );
}

export default Banner;