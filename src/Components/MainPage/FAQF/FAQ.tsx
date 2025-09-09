import Image from "next/image";
import React from "react";
import tree from "@/assets/Images/tree.svg";
import alga from "@/assets/Images/alga.png";
import Accordion from "@/Components/UI/Accordion";
import { faqs } from "@/utils/data";
export default function FAQ() {
  return (
    <div dir="rtl" className=" w-full h-[55dvh] ">
      <div className="w-7/12  h-2/3  ">
        <div
          dir="ltr"
          className="bg-boardFaq h-full w-full bg-no-repeat  bg-contain overflow-hidden relative"
        >
          <Image src={tree} alt="tree" className="absolute right-1/4" />
          <div className=" w-4/6 h-full z-10 flex p-5" dir="rtl">
            <Accordion className="w-11/12" items={faqs} type="single" defaultOpen={[0]} />
                  </div>
                  
          <Image src={alga} alt="alga" className="absolute -top-2 z-0" />
        </div>
      </div>
      <div className="w-2/6 bg-green-500"></div>
    </div>
  );
}
