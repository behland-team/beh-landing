import React from 'react';
import Link from 'next/link';


interface CharacterData {
    name: string;
    englishName: string;
    rank: number;
    goal: string;
    description: string;
    highlightedRole: string;
    imagePath: string;
    attributes: {
        text: string;
        iconPath: string;
        width: string;
        topOffset: string;
        leftOffset: string;
        textWidth: string;
    }[];
}

const BEH_BULL_DATA: CharacterData = {
    name: "به بول",
    englishName: "Beh bull",
    rank: 1,
    goal: "هدفم: پرورش نسل جدیدی از تریدرهای حرفه‌ای در بهلند",
    description: `من سال‌هاست در بازارهای مختلف حضور دارم و افت‌وخیزهاش رو از نزدیک تجربه کردم. نظم و دیسیپلین برای من اصل جدیه، چون باور دارم موفقیت بدون برنامه‌ریزی دقیق هیچ معنایی نداره.

تو به‌لند، من مربی ارشد تحلیل و استراتژی‌ام؛ اینجایم تا مسیر درست رو نشون بدم و راهنمایی‌های پیشرفته بهتون بدم تا با دید بازتر و اعتماد به نفس بیشتر حرکت کنید.`,
    highlightedRole: "مربی ارشد تحلیل و استراتژی‌ام",
    imagePath: "/images/beh/‌‌‌behcow.png",
    attributes: [
        {
            text: "به‌کو و به‌بو را به یادگیری عمیق‌تر تشویق می‌کند",
            iconPath: "/images/beh/bear.svg",
            width: 'w-[256px]',
            topOffset: 'top-[354px]',
            leftOffset: 'left-[161px]',
            textWidth: 'w-[212px]'
        },
        {
            text: "احترام زیادی برای به‌بیر قائل است",
            iconPath: "/images/beh/bear.svg",
            width: 'w-[204px]',
            topOffset: 'top-[405px]',
            leftOffset: 'left-[213px]',
            textWidth: 'w-[158px]'
        },
        {
            text: "سعی می‌کند به‌دانک را کنترل کند",
            iconPath: "/images/beh/bear.svg",
            width: 'w-[204px]',
            topOffset: 'top-[457px]',
            leftOffset: 'left-[213px]',
            textWidth: 'w-[151px]'
        },
    ]
};



export default function CharacterDetailPage({ characterData = BEH_BULL_DATA }: { characterData?: CharacterData }) {
    const highlightText = (text: string, target: string) => {
        if (!text || !target) return text;
        const parts = text.split(new RegExp(`(${target})`, 'g'));

        return parts.map((part, index) =>
            part === target ? (
                <span key={index} className="text-[#CC6D14] font-extrabold">
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    
    const mainBgColor = '#FEECD8';
    const cardGradient = 'linear-gradient(180deg, #FFD9B1 0%, #FFE1C1 4.56%, #FFD9B1 16.98%)';
    const goalBoxShadow = '2px 4px 0px 0px #CC6D14';
    const cardBorder = '#BCAFA0';
    const cardBottomShadow = '0px -6px 0px 0px #CC6D14';
    const MEDAL_ICON_PATH = '/images/beh/medal.svg';

    const cardStyle = {
        background: cardGradient,
        border: `1px solid ${cardBorder}`,
        boxShadow: cardBottomShadow,
    };

    return (
        <div dir="rtl" className="flex justify-center items-start pt-8 pb-10 min-h-screen font-yekan overflow-x-hidden ">
            
            <div className="w-full md:w-[441px] h-[672px] relative overflow-hidden px-0">
                <div
                    className="relative p-6 rounded-t-3xl overflow-hidden shadow-2xl pt-4 pb-0 mx-auto h-[656px] mt-4"
                    style={cardStyle} 
                >
                    {/* close button */}
                    <Link
                        href="/characters"
                        className="absolute top-[17px] left-[24px] p-1 text-black/70 z-30 focus:outline-none focus:ring-4 focus:ring-[#CC6D14]/50 rounded-full"
                        aria-label="بستن"
                    >
                        <span className="icon icon-close w-6 h-6 inline-block text-black/70"></span>
                    </Link>

                    {/* Header*/}
                    <div className="flex justify-start items-center mb-6 mt-4">
                        <img
                            src={MEDAL_ICON_PATH}
                            alt={`Rank ${characterData.rank}`}
                            className="w-12 h-12 flex-shrink-0 ml-4"
                        />
                        <h1 className="text-right font-yekan font-extrabold text-[20px] text-[#404040]">
                            <span className="text-[20px] font-kalameh">{characterData.name}</span>
                            <span className="mr-2 text-base font-yekan font-bold text-gray-700">{characterData.englishName}</span>
                        </h1>
                    </div>

                    {/*goal box*/}
                    <div
                        className="w-full border border-[#00000042] p-2 pr-4 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-none 
                                   font-yekan font-semibold text-sm text-[#404040] mb-8
                                   bg-[#FEECD8] shadow-[2px_4px_0px_0px_#CC6D14]"
                    >
                        <p className="leading-[38px] font-yekan font-semibold text-[14px]">{characterData.goal}</p>
                    </div>

        
                    <p className="text-justify font-yekan font-semibold text-[12px] leading-[25px] text-[#404040] mb-8">
                        {highlightText(characterData.description, characterData.highlightedRole)}
                    </p>

                    {/*  Boxes */}
                    <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
                        {characterData.attributes.map((attr, index) => {
                            const boxClass = `bg-white/50 backdrop-blur-sm`;
                            return (
                                <div
                                    key={index}
                                    className={`absolute ${attr.topOffset} ${attr.leftOffset} ${attr.width} 
                                                flex items-center justify-start gap-1 p-1 rounded-lg flex-row h-10 
                                                shadow-md pointer-events-auto ${boxClass}`}
                                >
                                    <img
                                        src={attr.iconPath}
                                        alt="Attribute Icon"
                                        className="w-8 h-8 rounded-full border-2 border-white bg-white shadow-sm flex-shrink-0"
                                    />
                                    <p
                                        className="text-[#222222] font-yekan font-normal text-[11px] text-right flex-1 leading-none h-[18px] whitespace-nowrap"
                                        style={{ letterSpacing: '-0.02em', lineHeight: '100%', width: attr.textWidth }}
                                    >
                                        {attr.text}
                                    </p>
                                </div>
                            )
                        })}
                    </div>

                    {/* Character Image */}
                    <img
                        src={characterData.imagePath}
                        alt={characterData.name}
                        className="absolute bottom-[-24px] left-[10px] w-[180px] h-[284px] object-contain z-20"
                        loading="eager"
                    />

                    {/* Back Button */}
                    <Link
                        href="/characters"
                        className="absolute bottom-6 right-6 flex items-center gap-1 bg-transparent p-0 text-[#BD5300] transition-colors focus:outline-none focus:ring-4 focus:ring-[#CC6D14]/50 z-30"
                        aria-label="بازگشت به صفحه کاراکترها"
                    >
                        <i className="icon icon-arrow w-5 h-5 rotate-180 fill-current stroke-current"></i>
                        <span className="font-yekan font-bold text-[16px]">بازگشت</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
