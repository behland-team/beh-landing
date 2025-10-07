import React from 'react';

const LOGO_ICON_PATH = '/images/beh/behland-logo.svg';
const ATTRIBUTE_ICON_PATH = '/images/beh/bear.svg';
const MEDAL_ICON_PATH = '/images/beh/medal.svg';
const CARD_BACKGROUND_MOBILE_PATH = '/images/beh/Rectangle 235 from Behland (1).png';
const CARD_BACKGROUND_DESKTOP_PATH = '/images/beh/Rectangle 235 from Behland.png';
const MODAL_BACKGROUND_PATH = '/images/beh/image 3.png';

const fullModalBackgroundStyle = {
    backgroundImage: `url('${MODAL_BACKGROUND_PATH}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

interface Attribute {
    text: string;
}

interface CharacterData {
    name: string;
    englishName: string;
    rank: number;
    goal: string;
    description: string;
    highlightedRole: string;
    attributes: Attribute[];
    imagePath: string;
}

const getFullCharacterData = (character: any): CharacterData => {
    return {
        name: character.name || "به بول",
        englishName: character.title || "Behbull",
        rank: 1,
        goal: "هدف نهایی من اینه که هر بلندی و پستی بازار رو به یک فرصت تبدیل کنم.",
        description: "من سال‌هاست در بازارهای مختلف حضور دارم و افت‌وخیزهاش رو از نزدیک تجربه کردم. نظم و دیسیپلین برای من اصل جدیه، چون باور دارم موفقیت بدون برنامه‌ریزی دقیق هیچ معنایی نداره. تو به‌لند، من مربی ارشد تحلیل و استراتژی‌ام؛ اینجایم تا مسیر درست رو نشون بدم و راهنمایی‌های پیشرفته بهتون بدم تا با دید بازتر و اعتماد به نفس بیشتر حرکت کنید.",
        highlightedRole: "مربی ارشد تحلیل و استراتژی‌ام",
        attributes: [
            { text: "به‌کو و به‌بو را به یادگیری عمیق‌تر تشویق می‌کند" },
            { text: "نقش مهمی در تعیین جهت بازار دارد" },
            { text: "سعی می‌کند دیسیپلین مالی را آموزش دهد" },
        ],
        imagePath: character.imagePath || '/images/beh/behcow.png',
    };
};

const highlightText = (text: string, target: string) => {
    if (!text || !target) return text;
    const parts = text.split(new RegExp(`(${target})`, 'g'));
    return parts.map((part, index) =>
        part === target ? (
            <span key={index} className="text-[#CC6D14] font-extrabold">{part}</span>
        ) : (
            part
        )
    );
};

// Main component
export default function CharacterModalContent({ characterData, onClose }: { characterData: any, onClose: () => void }) {
    const fullData = getFullCharacterData(characterData);

    // Mobile background styles
    const mobileCardStyle = {
        backgroundImage: `url('${CARD_BACKGROUND_MOBILE_PATH}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        border: '1px solid #BCAFA0',
        boxShadow: '0px -6px 0px 0px #FEECD8',
    };

    // Desktop orange container styles
    const desktopContainerStyle = {
        backgroundImage: `url('${CARD_BACKGROUND_DESKTOP_PATH}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom right',
        backgroundRepeat: 'no-repeat',

    };

    return (
        <div
            dir="rtl"
            className="relative mx-auto h-auto w-full max-w-lg lg:w-[1440px] lg:h-[672px] lg:max-w-none lg:bg-white lg:p-0 flex-shrink-0 lg:overflow-visible"
            style={fullModalBackgroundStyle}
        >
            {/* Back Button (Outside orange box - Bottom Left) */}
            <button
                onClick={onClose}
                className="hidden lg:flex absolute text-2xl bottom-[5px] left-[90px] items-center justify-center gap-2 bg-transparent p-0 text-text-Bt_Orange transition-colors focus:outline-none focus:ring-0 z-30"
                aria-label="بازگشت"
            >
                بازگشت
                <span className="icon icon-navigate" />
            </button>

            {/* Orange container (Desktop only) */}
            <div
                className="hidden lg:block fixed w-[1185px] h-[511px] bottom-0 right-0 rounded-tl-2xl z-10"
                style={desktopContainerStyle}
            >
                {/* Character Image (Inside orange box but positioned outside) */}
                <img 
                    src={fullData.imagePath} 
                    alt={fullData.name} 
                    className="absolute bottom-0 z-20" 
                    style={{ 
                        left: '-150px',
                        width: '496px',
                        height: '727px',
                        objectFit: 'contain',
                        objectPosition: 'bottom'
                    }}
                    loading="eager" 
                />

                {/* Medal (Positioned higher up, centered over the border line) */}
                <img 
                    src={MEDAL_ICON_PATH} 
                    alt={`Rank ${fullData.rank}`} 
                    className="absolute w-[105px] h-[117px] top-[-58px] right-[17%] translate-x-[50%] z-30" 
                />
                
                {/* Name & English Name and Goal box in same line */}
                <div className="absolute top-[80px] right-[50px] text-right z-30 flex items-center gap-6">
                    {/* Names */}
                    <div className="flex items-center gap-4">
                        <span className="text-3xl font-bold text-[#222222] leading-none">
                            {fullData.name}
                        </span>
                        <span className="text-3xl font-bold text-gray-700 leading-none">
                            {fullData.englishName}
                        </span>
                    </div>
                    
                    {/* Goal box */}
                    <div
                        className="w-[500px] h-[56px] border border-[#00000042] p-2 pr-4 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-none font-yekan font-semibold text-sm text-[#404040] bg-[#FEECD8] flex items-center justify-start overflow-hidden"
                        style={{ boxShadow: '2px 4px 0px 0px #CC6D14' }}
                    >
                        <p className="font-semibold text-base leading-[38px] whitespace-nowrap text-ellipsis overflow-hidden">
                            {fullData.goal}
                        </p>
                    </div>
                </div>
                
                {/* Description Paragraph (Below goal and name) */}
                <p className="absolute top-[160px] right-[50px] w-[630px] h-[150px] z-30 text-justify font-semibold text-[16px] leading-[28px] text-[#404040]">
                    {highlightText(fullData.description, fullData.highlightedRole)}
                </p>
                
                {/* Attribute Boxes (Bottom - three boxes) */}
                <div className="absolute bottom-[60px] right-[50px] flex flex-row gap-4 z-30">
                    {fullData.attributes.map((attr, index) => (
                        <div key={index} className="w-[167px] h-[128px] relative flex items-center justify-center">
                            <div className="absolute top-0 right-[50px] w-[58px] h-[59px] rounded-full overflow-hidden z-40 border-2 border-white shadow-sm bg-white flex items-center justify-center">
                                <img 
                                    src={ATTRIBUTE_ICON_PATH} 
                                    alt="Attribute Icon" 
                                    width={58} 
                                    height={59} 
                                    className="w-full h-full object-cover transform" 
                                />
                            </div>
                            <div className="absolute top-[32px] left-0 w-[167px] h-[96px] border border-[#00000042] bg-[#FEECD8] rounded-lg flex items-end justify-center pb-3 shadow-Attributes_boxes">
                                <p className="w-[151px] text-[#222222] font-normal text-[17px] text-center leading-[100%] tracking-[-0.02em]">
                                    {attr.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile content (Mobile-Only) */}
            <div
                className="lg:hidden relative px-4 pt-4 pb-0 rounded-t-3xl shadow-2xl overflow-hidden h-[1000px] w-full max-h-[95vh] flex flex-col justify-start items-center"
                style={mobileCardStyle}
            >
                <div className="w-full flex justify-between items-start mb-6 pl-2 pr-2">
                    {/* Container */}
                    <div className="flex items-center gap-2">
                        {/* Medal */}
                        <img
                            src={MEDAL_ICON_PATH}
                            alt={`Rank ${fullData.rank}`}
                            className="w-[49px] h-[55px] sm:w-[55px] sm:h-[61px] flex-shrink-0"
                        />
                        {/* Name and English Title */}
                        <div className="flex flex-col items-start justify-center">
                            <span className="text-xl sm:text-2xl font-bold text-[#222222] leading-none">
                                {fullData.name}
                            </span>
                            <span className="text-xl sm:text-2xl font-bold text-gray-700 leading-none">
                                {fullData.englishName}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Goal box */}
                <div 
                    className="w-full max-w-[calc(100%-32px)] border border-[#00000042] p-2 pr-4 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-none font-semibold text-sm text-[#404040] mb-4 bg-[#FEECD8]" 
                    style={{ boxShadow: '2px 4px 0px 0px #CC6D14' }}
                >
                    <p className="text-center leading-[35px] text-[8px] xxs:text-[10px] whitespace-nowrap">
                        {fullData.goal}
                    </p>
                </div>

                {/* Paragraph */}
                <p className="w-full max-w-[calc(100%-32px)] text-justify font-semibold text-[12px] sm:text-[14px] leading-[25px] text-[#404040] mb-6">
                    {highlightText(fullData.description, fullData.highlightedRole)}
                </p>

                {/* Attribute Boxes */}
                <div className="w-full max-w-[calc(100%-32px)] flex flex-col gap-3 items-start mb-4">
                    {fullData.attributes.map((attr, index) => (
                        <div key={index} className="w-full max-w-[280px] sm:max-w-[320px] flex items-center p-1 rounded-lg flex-row shadow-md bg-white/50 backdrop-blur-sm h-10 sm:h-12">
                            <img 
                                src={ATTRIBUTE_ICON_PATH} 
                                alt="Attribute Icon" 
                                width={32} 
                                height={32} 
                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-white shadow-sm flex-shrink-0 mr-1" 
                            />
                            <p className="dark-gray font-normal text-[12px] sm:text-[14px] text-right flex-1 leading-none tracking-[-0.02em]">
                                {attr.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Character Image */}
                <img
                    src={fullData.imagePath}
                    alt={fullData.name}
                    width={180}
                    height={284}
                    className="absolute bottom-[-25px] left-[20px] w-[180px] h-[284px] sm:w-[200px] sm:h-[315px] object-contain z-20"
                    loading="eager"
                />

                {/* Back Button */}
                <button
                    onClick={onClose}
                    className="absolute bottom-6 right-10 flex items-center justify-center gap-2 bg-transparent p-0 text-text-Bt_Orange transition-colors focus:outline-none focus:ring-0 z-30"
                    aria-label="بازگشت"
                >
                    بازگشت
                    <span className='icon icon-navigate' />
                </button>
            </div>
        </div>
    );
}