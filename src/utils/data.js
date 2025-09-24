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
        percentage: 10,
        color: "text-chart-ranking",
        bg: "bg-[#A6BD001A]",
        description: " ۱۰٪ صندوق توسعه و رشد اکوسیستم",
        borderColor: "border-chart-ranking",
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
        percentage: 35,
        color: "text-chart-people",
        description: "کاربران یادگیرنده و استخراج‌کننده",
        bg: "bg-[#FF7B001A]",
        borderColor: "border-chart-people",
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
        percentage: 10,
        color: "text-chart-security",
        description: " ۱۰٪ بنیان‌گذار پروژه",
        bg: "bg-[#019F6F1A]",
        borderColor: "border-chart-security",
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
        percentage: 10,
        color: "text-chart-crown",
        description: " ۱۰٪ تبلیغات و توسعه برند",
        bg: "bg-[#8700FF1A]",
        borderColor: "border-chart-crown",
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
        percentage: 5,
        color: "text-chart-award",
        description: " ۵٪  مدیران اصلی پروژه",
        bg: "bg-[#FFBA001A]",
        borderColor: "border-chart-award",
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
        percentage: 5,
        color: "text-chart-smile",
        description: " ۵٪ اعضای تیم اجرایی",
        bg: "bg-[#00A6DE1A]",
        borderColor: "border-chart-smile",
    },
    {
        data: {
            // labels: ["Progress", "Remaining"],
            datasets: [
                {
                    data: [10, 75],
                    backgroundColor: [
                        "rgba(207, 29, 0, 1)", // رنگ پر شده
                        "rgb(229, 229, 229)", // خاکستری برای بقیه
                    ],
                    borderWidth: 0,
                },
            ],
        },
        icon: "/images/charticon/personalcard.svg",
        percentage: 10,
        color: "text-chart-idCard",
        description: "فروش مرحله ای ۱۰%",
        bg: "bg-[#CF1D001A]",
        borderColor: "border-chart-idCard",
    },
];

export const SemiCircleChartData = {
    datasets: [
        {
            data: [35, 5, 10, 25, 5, 10, 10],
            backgroundColor: [
                "#FF7B00",
                "#00A6DE",
                "#8700FF",
                "#CF1D00",
                "#FFBA00",
                "#019F6F",
                "#A6BD00",
            ],
            display: true,
            borderColor: "#FFF"
        }
    ]
};


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
        title: "Senior Web developer ",
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

];

export const saleStages = [
    {
        title: "مرحله اول – Private Sale 1",
        tokens: "۲۰۰,۰۰۰ توکن",
        price: "۰.۱۰ دلار",
        description:
            "تخفیف ویژه برای خریداران داخلی؛ تعداد خریداران محدود (حدود ۷ نفر).",
        badge: "تخفیف ویژه",
        highlight: false,
        discount: discount,
    },
    {
        title: "مرحله دوم – Private Sale 2",
        tokens: "۱۵۰,۰۰۰ توکن",
        price: "۰.۱۰ دلار",
        description:
            "خرید بدون تخفیف؛ با محدودیت بین ۱,۰۰۰ تا ۲,۰۰۰ دلار و ۸ تا ۱۵ خریدار.",
    },
    {
        title: "مرحله سوم – Private Sale 3",
        tokens: "۱۵۰,۰۰۰ توکن",
        price: "۰.۲۰ دلار",
        description:
            "خرید با قیمت بالاتر، در بازه ۵۰۰ تا ۱,۰۰۰ دلار؛ مناسب برای ۳۰ تا ۶۰ خریدار.",
    },
    {
        title: "مرحله چهارم – Pre–Public Sale",
        tokens: "۱۰۰,۰۰۰ توکن",
        price: "۰.۳۰ دلار",
        description:
            "پل بین فروش خصوصی و عمومی؛ خرید از ۱۰۰ تا ۱,۰۰۰ دلار برای ۳۰ تا ۳۰۰ خریدار.",
    },
    {
        title: "مرحله پنجم – DEX Listing (Stage 0)",
        tokens: "۱۰۰,۰۰۰ توکن",
        price: "۰.۴۰ دلار",
        description:
            "لیست در صرافی TON با قیمت شناور؛ بدون محدودیت خرید یا ۱۰۰ تا ۲۰۰ خریدار فعال.",
    },
    {
        title: "مرحله ششم – Public Sale Stage 1",
        tokens: "۱۵۰,۰۰۰ توکن",
        price: "۰.۵۰ تا ۱ دلار",
        description:
            "فروش عمومی از طریق صرافی‌های ایرانی یا OTC؛ مناسب برای ۱۵۰ تا ۳۰۰ خریدار.",
    },
    {
        title: "مرحله هفتم – Public Sale Stage 2",
        tokens: "۱۵۰,۰۰۰ توکن",
        price: "شناور",
        description:
            "آخرین فرصت برای خرید توکن پیش از شروع بازار ثانویه است. فروش کاملاً آزاد و نهایی.",
    },
];

export const phases = [
    {
        title: "phase1",
        number: 1,
        tasks: [
            {
                desc: "طراحی مدل اقتصادی پروژه و مسیر رشد کاربران",
                status: true,
            },
            { desc: "جذب اعضای اولیه تیم و تعیین نقش‌ها", status: true },
            {
                desc: "توسعه نسخه ابتدایی پلتفرم از طریق ربات تلگرام (نمونه اولیه یا MVP)",
                status: true,
            },
            { desc: "تدوین ساختار آموزشی سطوح VIP 0 و VIP1", status: true },
            {
                desc: "طراحی نسخه اولیه سایت و آماده‌سازی زیرساخت‌های فروش",
                status: true,
            },

            {
                desc: "تهیه اسناد رسمی، پرزنتیشن‌ها و مطالب معرفی پروژه",
                status: true,
            },
            {
                desc: " آماده‌سازی تبلیغات مرحله اول فروش خصوصی توکن BEHT از طریق کانال «به‌تحلیل»",
                status: true,
            },
            {
                desc: "تست اولیه کیف پول کاربران و ثبت اطلاعات حساب‌ها",
                status: false,
            },
            { desc: "امنیت و انتشار توکن BEHT روی بلاک‌چین TON", status: false },
        ],
        active: true,
    },
    {
        title: "phase2",
        number: 2,
        active: false,
        tasks: [
            {
                desc: " جذب نهایی اعضای تخصصی تیم و تثبیت ساختار درون‌سازمانی",
                status: false,
            },
            {
                desc: " مینت توکن و انتقال آن به والت های مربوط",
                status: false,
            },
            {
                desc: "  اجرای مرحله اول و دوم پیش‌فروش توکن BEHT لاز طریق کانال «به‌تحلیل»",
                status: false,
            },
            {
                desc: " نهایی‌سازی توسعه و تست ربات تلگرام",
                status: false,
            },
            {
                desc: "اجرای اقدامات حقوقی از جمله احراز هویت کاربران (KYC)، ثبت برند و سیاست‌های حفاظت از داده‌ها",
                status: false,
            },
            {
                desc: " بارگذاری کامل دوره‌های آموزشی سطوح VIP 0 و VIP 1",
                status: false,
            },
            {
                desc: " تست زیرساخت کیف پول داخلی کاربران",
                status: false,
            },
            {
                desc: "آماده‌سازی نسخه نهایی سایت و اتصال آن به ربات تلگرام",
                status: false,
            },
        ],
    },
    {
        title: "phase3",
        number: 3,
        active: false,
        tasks: [
            {
                desc: "  اجرای مرحله سوم و چهارم پیش‌فروش توکن در کانال «به‌تحلیل»",
                status: false,
            },
            {
                desc: "  اجرای مرحله پنجم فروش توکن از طریق یک صرافی غیرمتمرکز (DEX)",
                status: false,
            },
            {
                desc: "  نهایی‌سازی اتصال کامل سایت و ربات تلگرام",
                status: false,
            },
            {
                desc: "  آغاز توسعه مینی‌اپ تلگرام با قابلیت‌های پیشرفته",
                status: false,
            },
            {
                desc: "  بارگذاری کامل دوره‌های آموزشی سطوح VIP 2 و VIP 3",
                status: false,
            },
            {
                desc: "  طراحی و انتشار نسخه‌های اولیه NFT برای کاربران یادگیرنده",
                status: false,
            },
            {
                desc: "  تکمیل توسعه کیف پول داخلی با نمایش دارایی‌ها، امتیازها و مسیر رشد کاربران",
                status: false,
            },
        ],
    },
    {
        title: "phase4",
        number: 4,
        active: false,
        tasks: [
            {
                desc: "آغاز فروش عمومی توکن BEHT در مراحل «استیج اول» و «استیج دوم» از طریق صرافی‌های ایرانی",
                status: false,
            },
            {
                desc: "فراهم‌سازی امکان خرید و فروش توکن توسط کاربران داخلی",
                status: false,
            },
            { desc: "فعال‌سازی اشتراک VIP از طریق پرداخت توکن BEHT", status: false },
            {
                desc: "انتشار رسمی NFTهای مسیر رشد و فراهم‌سازی امکان اشتراک‌گذاری آن‌ها در شبکه‌های اجتماعی",
                status: false,
            },
            {
                desc: "فعال‌سازی مسیرهای آموزشی سطوح VIP 0 تا 3 برای عموم کاربران",
                status: false,
            },
            {
                desc: "آغاز ترجمه و بارگذاری ویدیوهای آموزشی به زبان عربی",
                status: false,
            },
            {
                desc: "توسعه کیف پول اختصاصی با قابلیت‌های فریز و استیک توکن",
                status: false,
            },
            {
                desc: "راه‌اندازی نسخه وب با امکانات داشبورد مالی، رتبه‌بندی کاربران و مدیریت دارایی‌ها",
                status: false,
            },
            {
                desc: "انتشار نسخه پیشرفته مینی‌اپ تلگرام با قابلیت‌های تعاملی گسترده",
                status: false,
            },
            {
                desc: "شروع همکاری با صرافی‌ها و پارتنرهای داخلی و منطقه‌ای",
                status: false,
            },
        ],
    },
    {
        title: "phase5",
        number: 5,
        active: false,
        tasks: [
            {
                desc: "تکمیل دوره‌های آموزشی زبان عربی و آغاز تبلیغات در بازار عرب‌زبان",
                status: false,
            },
            {
                desc: "آغاز ترجمه و بارگذاری دوره‌های آموزشی به زبان انگلیسی",
                status: false,
            },
            {
                desc: "فعال‌سازی سیستم استیکینگ و ارائه پاداش به هولدرهای بلندمدت توکن BEHT",
                status: false,
            },
            {
                desc: "راه‌اندازی سیستم رأی‌گیری ساده (مدل DAO سبک) برای تصمیمات کلان پلتفرم",
                status: false,
            },
            {
                desc: "آغاز کمپین‌های تبلیغاتی بین‌المللی برای جذب کاربران جدید و توسعه بازار جهانی",
                status: false,
            },
        ],
    },
];

export const SocialMedia = [
    {
        name: "instagram",
        link: "https://www.instagram.com/behland.official/",
        disable : true,
    },
    {
        name: "twitter",
        link: "https://www.instagram.com/behland.official/",
        disable : true,
    },
    {
        name: "telegram",
        link: "https://t.me/BehLand_Official",
        disable : false,
    },
    {
        name: "linkedin",
        link: "https://www.instagram.com/behland.official/",
        disable : true,
    },
];


export const faqs = [
    { title: "چطور به مرحله بعد می‌روم؟", content: "با انجام تمرین‌ها و قبولی در آزمون..." },
    { title: "پشتیبانی شامل چه چیزهایی میشه؟", content: "جلسات لایو هفتگی، تیکت نامحدود..." },
    { title: "مناسب افراد مبتدی هست؟", content: "بله، از صفر شروع می‌کنیم..." },


];