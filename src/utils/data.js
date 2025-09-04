export const ChartData = [
    {
        data: {
            // labels: ["Progress", "Remaining"],
            datasets: [
                {
                    data: [10, 90], // 40% رنگی، 60% خاکستری
                    backgroundColor: [
                        "rgba(166, 189, 0, 1)", // رنگ پر شده
                        "rgb(229, 229, 229)", // خاکستری برای بقیه
                    ],
                    borderWidth: 0,
                },
            ],

        },
        icon: "/images/charticon/ranking.svg",
        percentage: "۱۰%",
        color: "text-chart-ranking",
        bg: "bg-[#A6BD001A]",
        description: " ۱۰٪ صندوق توسعه و رشد اکوسیستم"

    },
    {
        data: {
            // labels: ["Progress", "Remaining"],
            datasets: [
                {
                    data: [35, 65], // 40% رنگی، 60% خاکستری
                    backgroundColor: [
                        "rgba(255, 123, 0, 1)", // رنگ پر شده
                        "rgb(229, 229, 229)", // خاکستری برای بقیه
                    ],
                    borderWidth: 0,
                },
            ],
        },
        icon: "/images/charticon/people.svg",
        percentage: "۳۵%",
        color: "text-chart-people",
        description: "کاربران یادگیرنده و استخراج‌کننده",
        bg: "bg-[#FF7B001A]",
    },
    {
        data: {
            // labels: ["Progress", "Remaining"],
            datasets: [
                {
                    data: [10, 90], // 40% رنگی، 60% خاکستری
                    backgroundColor: [
                        "rgba(1, 159, 111, 1)", // رنگ پر شده
                        "rgb(229, 229, 229)", // خاکستری برای بقیه
                    ],
                    borderWidth: 0,
                },
            ],
        },
        icon: "/images/charticon/security-card.svg",
        percentage: "۱۰%",
        color: "text-chart-security",
        description: " ۱۰٪ بنیان‌گذار پروژه",
        bg: "bg-[#019F6F1A]",

    },
    {
        data: {
            // labels: ["Progress", "Remaining"],
            datasets: [
                {
                    data: [10, 90], // 40% رنگی، 60% خاکستری
                    backgroundColor: [
                        "rgba(135, 0, 255, 1)", // رنگ پر شده
                        "rgb(229, 229, 229)", // خاکستری برای بقیه
                    ],
                    borderWidth: 0,
                },
            ],
        },
        icon: "/images/charticon/crown.svg",
        percentage: "۱۰%",
        color: "text-chart-crown",
        description: " ۱۰٪ تبلیغات و توسعه برند",
        bg: "bg-[#8700FF1A]",

    },
    {
        data: {
            // labels: ["Progress", "Remaining"],
            datasets: [
                {
                    data: [5, 95], // 40% رنگی، 60% خاکستری
                    backgroundColor: [
                        "rgba(255, 166, 0, 1)", // رنگ پر شده
                        "rgb(229, 229, 229)", // خاکستری برای بقیه
                    ],
                    borderWidth: 0,
                },
            ],
        },
        icon: "/images/charticon/award.svg",
        percentage: "۵%",
        color: "text-chart-award",
        description: " ۵٪  مدیران اصلی پروژه",
        bg: "bg-[#FFBA001A]",


    },
    {
        data: {
            // labels: ["Progress", "Remaining"],
            datasets: [
                {
                    data: [5, 95], // 40% رنگی، 60% خاکستری
                    backgroundColor: [
                        "rgba(0, 166, 222, 1)", // رنگ پر شده
                        "rgb(229, 229, 229)", // خاکستری برای بقیه
                    ],
                    borderWidth: 0,
                },
            ],
        },
        icon: "/images/charticon/emoji-normal.svg",
        percentage: "۵%",
        color: "text-chart-smile",
        description: " ۵٪ اعضای تیم اجرایی",
        bg: "bg-[#00A6DE1A]",

    },
    {
        data: {
            // labels: ["Progress", "Remaining"],
            datasets: [
                {
                    data: [25, 75],
                    backgroundColor: [
                        "rgba(207, 29, 0, 1)", // رنگ پر شده
                        "rgb(229, 229, 229)", // خاکستری برای بقیه
                    ],
                    borderWidth: 0,
                },
            ],
        },
        icon: "/images/charticon/personalcard.svg",
        percentage: "۲۵%",
        color: "text-chart-idCard",
        description: "کاربران یادگیرنده و استخراج‌کننده",
        bg: "bg-[#CF1D001A]",

    },

]

import Amirali from "../assets/Images/TeamMemebers/Amirali2.png";
import Mehdi from "../assets/Images/TeamMemebers/Mehdi2.png";
import Amirhossein from "../assets/Images/TeamMemebers/Amirhossein.png";
import Nasrin from "../assets/Images/TeamMemebers/Narges.png";
import Shiva from "../assets/Images/TeamMemebers/Shiva.png";
import Davood from "../assets/Images/TeamMemebers/David.png";
import Parham from "../assets/Images/TeamMemebers/parham.png";
import Alireza from "../assets/Images/TeamMemebers/Alireza.png";
import Yassaman from "../assets/Images/TeamMemebers/Yassaman.png";
import Abbasi from "../assets/Images/TeamMemebers/Abbasi.png";
import discount from "../assets/Images/discount.png";
export const Teams = [
    {
        name: "امیرعلی نیرومند زال پور",
        title: "Founder & CEO",
        role: ["مسئول نظارت کلی", "مدیریت استراتژیک پروژه", "تعیین مسیر رشد"],
        image: Amirali,
    },
    {
        name: "مهدی خسروی",
        title: "Technical Lead ",
        role: ["مسئول توسعه ربات تلگرام", "مدیریت زیرساخت فنی"],
        image: Mehdi,
    },
    {
        name: "پرهام حسن‌زاده",
        title: "Senior Web Designer ",
        role: [],
        image: Parham,
    },
    {
        name: "فاطمه عباسی",
        title: "Senior  UI/UX Designer ",
        role: [],
        image: Abbasi,
    },
    {
        name: "مهرداد نظری",
        title: "Content & Market Analysis Lead ",
        role: ["تدوین تحلیل‌های بازار", "سیگنال‌دهی", "مدیریت محتوای تحلیلی"],
        image: Amirhossein,
    },
    {
        name: "علیرضا نیرومند زال پور",
        title: "Educational Content Lead ",
        role: ["طراحی دوره‌های آموزشی", "تدوین مسیر رشد کاربران"],
        image: Alireza,
    },
    {
        name: "نسرین قادری",
        title: "SEO & Documentation Specialist ",
        role: ["تنظیم اسناد پروژه", "هماهنگی تیم", "مدیریت زمان‌بندی مستندات"],
        image: Nasrin,
    },
    {
        name: "شیوا محققی",
        title: "PR Development Consultant ",
        role: ["مشاوره در زمینه برندینگ", "ارتباط با مخاطبان"],
        image: Shiva,
    },
    {
        name: "داوود سپهریان",
        title: "Data Analyst & Market Researcher ",
        role: [
            "تحلیل داده‌های کاربران",
            "بررسی بازارهای هدف",
            "تدوین استراتژی‌های ورود به بازار",
        ],
        image: Davood,
    },
    {
        name: " یاسمین طاهری",
        title: "Senior Visual Designer ",
        role: [
            "تحلیل داده‌های کاربران",
            "بررسی بازارهای هدف",
            "تدوین استراتژی‌های ورود به بازار",
        ],
        image: Yassaman,
    },
];


export const saleStages = [
    {
        title: "مرحله اول – Private Sale 1",
        tokens: "۲۰۰,۰۰۰ توکن",
        price: "۰.۱۰ دلار",
        description: "تخفیف ویژه برای خریداران داخلی؛ تعداد خریداران محدود (حدود ۷ نفر).",
        badge: "تخفیف ویژه",
        highlight: false,
        discount: discount
    },
    {
        title: "مرحله دوم – Private Sale 2",
        tokens: "۱۵۰,۰۰۰ توکن",
        price: "۰.۱۰ دلار",
        description: "خرید بدون تخفیف؛ با محدودیت بین ۱,۰۰۰ تا ۲,۰۰۰ دلار و ۸ تا ۱۵ خریدار.",
    },
    {
        title: "مرحله سوم – Private Sale 3",
        tokens: "۱۵۰,۰۰۰ توکن",
        price: "۰.۲۰ دلار",
        description: "خرید با قیمت بالاتر، در بازه ۵۰۰ تا ۱,۰۰۰ دلار؛ مناسب برای ۳۰ تا ۶۰ خریدار.",
    },
    {
        title: "مرحله چهارم – Pre–Public Sale",
        tokens: "۱۰۰,۰۰۰ توکن",
        price: "۰.۳۰ دلار",
        description: "پل بین فروش خصوصی و عمومی؛ خرید از ۱۰۰ تا ۱,۰۰۰ دلار برای ۳۰ تا ۳۰۰ خریدار.",
    },
    {
        title: "مرحله پنجم – DEX Listing (Stage 0)",
        tokens: "۱۰۰,۰۰۰ توکن",
        price: "۰.۴۰ دلار",
        description: "لیست در صرافی TON با قیمت شناور؛ بدون محدودیت خرید یا ۱۰۰ تا ۲۰۰ خریدار فعال.",
    },
    {
        title: "مرحله ششم – Public Sale Stage 1",
        tokens: "۱۵۰,۰۰۰ توکن",
        price: "۰.۵۰ تا ۱ دلار",
        description: "فروش عمومی از طریق صرافی‌های ایرانی یا OTC؛ مناسب برای ۱۵۰ تا ۳۰۰ خریدار.",
    },
    {
        title: "مرحله هفتم – Public Sale Stage 2",
        tokens: "۱۵۰,۰۰۰ توکن",
        price: "شناور",
        description: "آخرین فرصت برای خرید توکن پیش از شروع بازار ثانویه است. فروش کاملاً آزاد و نهایی.",
    },
];