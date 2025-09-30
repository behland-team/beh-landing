"use client";
import { useTranslations } from "next-intl";
import React, { useCallback, useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/Components/UI/carousel";
import behcow from "@/assets/Images/beh/‌‌‌behcow.png";
import coming from "@/assets/Images/beh/coming.png";
import coming2 from "@/assets/Images/beh/coming2.png";
import behdonk from "@/assets/Images/beh/Behdank.png";

// ایمپورت کامپوننت مدال (CharacterModalContent)
import CharacterModalContent from "../UI/CharacterModalContent"; // مسیر صحیح به کامپوننت CharacterModalContent
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";


// تعریف تایپ کاراکتر با اضافه شدن فیلد Image
interface CharacterItem {
  name: string;
  image: StaticImageData;
  title: string; // استفاده به عنوان EnglishName
  imagePath: string; // مسیر واقعی تصویر
}

const characters: CharacterItem[] = [
  {
    name: "به کو",
    image: behcow,
    title: "behcow",
    imagePath: behcow.src,
  },
  {
    name: "به دانک",
    image: behdonk,
    title: "behdonk",
    imagePath: behdonk.src,
  },
  {
    name: "به‌شیپ",
    image: coming,
    title: "Behsheep",
    imagePath: coming.src,
  },
  {
    name: "به بول",
    image: coming2,
    title: "Behbull",
    imagePath: coming2.src,
  },
  {
    name: "به بیر",
    image: coming2,
    title: "Behbear",
    imagePath: coming2.src,
  },
  {
    name: "به دانک",
    image: behdonk,
    title: "behdonk",
    imagePath: behdonk.src,
  }
];

export default function Characters() {
  const t = useTranslations("characters");
  const [api, setApi] = React.useState<CarouselApi>();
  
  // ۱. تعریف حالت مدال و کاراکتر انتخاب شده
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterItem | null>(null);

  // ۲. توابع باز و بسته کردن مدال
  const openModal = (character: CharacterItem) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };
  
  const onPrevButtonClick = useCallback(() => {
    if (!api) return;
    api.scrollPrev();
  }, [api]);

  const onNextButtonClick = useCallback(() => {
    if (!api) return;
    api.scrollNext();
  }, [api]);

  return (
    <div
      dir="rtl"
      className="bg-CharBg bg-cover bg-no-repeat bg-center bg-cream-light"
      id={"character"}
    >

     
      <div className="w-full mt-6 px-6 pb-10">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            direction: "rtl",
            loop: true,
          }}
          className="flex items-center justify-center w-full gap-6 py-5 overflow-x-hidden"
        >
          <CarouselContent>
            {characters.map((item, i) => (
              <CarouselItem
                key={i}
                className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2 will-change-transform"
              >
                <div
                  className="bg-card bg-no-repeat bg-contain bg-center w-56 xl:w-[280px] xl:h-96 h-80 mx-auto flex justify-center relative shrink-0 bg-transparent cursor-pointer"
                  onClick={() => openModal(item)} // فراخوانی openModal هنگام کلیک
                >
                  <div className="absolute md:top-1 lg:top-0 xl:-top-1 px-4 py-3 lg:p-5 flex justify-between items-center gap-5">
                    <p className="text-white font-black lg:text-stroke-orange text-[20px] lg:text-2xl">
                      {item.name}
                    </p>
                    <p className="text-white font-black lg:text-stroke-orange text-[20px] lg:text-2xl">
                      {item.title}
                    </p>
                  </div>
                  <Image
                    src={item.image}
                    width="256"
                    height="256"
                    alt={item.title}
                    priority
                    loading="eager"
                    className="max-w-56 xl:max-w-[280px] xl:max-h-72 max-h-60 w-full h-full absolute left-1/2 -translate-x-1/2 bottom-6 lg:bottom-7"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      

      {selectedCharacter && ( 
        <Modal 
          open={isModalOpen} 
          onClose={closeModal} 
          center 
          classNames={{
            modalContainer: 'flex justify-center items-center w-full h-full p-4 lg:p-0', 
            modal: 'rounded-none shadow-none p-0 overflow-visible max-w-full w-full h-full',
            
            overlay: 'bg-black/70 backdrop-blur-sm',
            closeButton: 'hidden' 
          }}
     
          styles={{
      modal: {
              width: 'auto',
              minWidth: '320px',
              maxWidth: '95vw', 
              maxHeight: '95vh', 
              margin: 'auto',
              
            }
          }}
        >
          <CharacterModalContent 
            characterData={selectedCharacter}
            onClose={closeModal} 
          />
        </Modal>
      )}
    </div>
  );
}