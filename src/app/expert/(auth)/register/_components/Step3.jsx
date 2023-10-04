import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import Image from 'next/image'
//components
import StepController from './StepController'
//assets
import Clipboard_list from '@/public/icons/Clipboard_list.svg'
import Clipboard_check from '@/public/icons/Clipboard_check.svg'
import Clipboard from '@/public/icons/Clipboard.svg'

const services = [
    { id: 1, name: 'تهران' }
]

const parts = [
    {
        "id": 355,
        "name": "شریعتی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7466 51.4373)",
        "approved": 1
    },
    {
        "id": 358,
        "name": "ولیعصر",
        "similar_names": "شیخ هادی",
        "geo_center_text": "POINT(35.7446 51.4094)",
        "approved": 1
    },
    {
        "id": 425,
        "name": "اسفندیار",
        "similar_names": "",
        "geo_center_text": "POINT(35.7602 51.4173)",
        "approved": 1
    },
    {
        "id": 423,
        "name": "بلوار آفریقا",
        "similar_names": "",
        "geo_center_text": "POINT(35.7568 51.4144)",
        "approved": 1
    },
    {
        "id": 393,
        "name": "بزرگراه شهید همت",
        "similar_names": null,
        "geo_center_text": "POINT(35.7535 51.3212)",
        "approved": 1
    },
    {
        "id": 3907,
        "name": "احتشامیه",
        "similar_names": "",
        "geo_center_text": "POINT(35.7687 51.448)",
        "approved": 1
    },
    {
        "id": 418,
        "name": "دولت ( کلاهدوز )",
        "similar_names": "",
        "geo_center_text": "POINT(35.7676 51.4477)",
        "approved": 1
    },
    {
        "id": 9289,
        "name": "لویزان",
        "similar_names": "",
        "geo_center_text": "POINT(35.7543 51.5409)",
        "approved": 1
    },
    {
        "id": 6996,
        "name": "15 خرداد",
        "similar_names": "",
        "geo_center_text": "POINT(35.6748 51.4375)",
        "approved": 1
    },
    {
        "id": 570,
        "name": "16 آذر",
        "similar_names": "",
        "geo_center_text": "POINT(35.706 51.3969)",
        "approved": 1
    },
    {
        "id": 518,
        "name": "35 متری گلستان ( مخبری )",
        "similar_names": "",
        "geo_center_text": "POINT(35.76202936884872 51.31083011627198)",
        "approved": 1
    },
    {
        "id": 3916,
        "name": "45 متری زرند",
        "similar_names": "",
        "geo_center_text": "POINT(35.6713 51.3311)",
        "approved": 1
    },
    {
        "id": 295,
        "name": "آبادان",
        "similar_names": "",
        "geo_center_text": "POINT(35.8037 51.5086)",
        "approved": 1
    },
    {
        "id": 370,
        "name": "آبشار",
        "similar_names": "",
        "geo_center_text": "POINT(35.7818 51.3374)",
        "approved": 1
    },
    {
        "id": 383,
        "name": "آتی ساز",
        "similar_names": "",
        "geo_center_text": "POINT(35.7866 51.3903)",
        "approved": 1
    },
    {
        "id": 299,
        "name": "آجودانیه",
        "similar_names": "اجودانیه",
        "geo_center_text": "POINT(35.805 51.4842)",
        "approved": 1
    },
    {
        "id": 10933,
        "name": "آذری",
        "similar_names": "",
        "geo_center_text": "POINT(35.6664 51.3523)",
        "approved": 1
    },
    {
        "id": 15341,
        "name": "آرارات",
        "similar_names": "ارارات",
        "geo_center_text": "POINT(35.76782567333085 51.40005111694337)",
        "approved": 1
    },
    {
        "id": 11567,
        "name": "آرژانتین",
        "similar_names": "",
        "geo_center_text": "POINT(35.737 51.4153)",
        "approved": 1
    },
    {
        "id": 426,
        "name": "آرش",
        "similar_names": "",
        "geo_center_text": "POINT(35.7711 51.4309)",
        "approved": 1
    },
    {
        "id": 405,
        "name": "آرش مهر",
        "similar_names": "",
        "geo_center_text": "POINT(35.7222 51.3753)",
        "approved": 1
    },
    {
        "id": 11617,
        "name": "آزادشهر",
        "similar_names": "",
        "geo_center_text": "POINT(35.7352 51.1901)",
        "approved": 1
    },
    {
        "id": 36768,
        "name": "آسمان سپاه",
        "similar_names": "اسمان سپاه",
        "geo_center_text": "POINT(35.75399350046242 51.2034559249878)",
        "approved": 1
    },
    {
        "id": 9592,
        "name": "آهنگ",
        "similar_names": "",
        "geo_center_text": "POINT(35.6634 51.4796)",
        "approved": 1
    },
    {
        "id": 3967,
        "name": "ابوذر",
        "similar_names": "",
        "geo_center_text": "POINT(35.6566 51.3664)",
        "approved": 1
    },
    {
        "id": 9427,
        "name": "ابوریحان",
        "similar_names": "",
        "geo_center_text": "POINT(35.7106 51.4939)",
        "approved": 1
    },
    {
        "id": 491,
        "name": "اتحاد",
        "similar_names": "",
        "geo_center_text": "POINT(35.7366 51.5642)",
        "approved": 1
    },
    {
        "id": 9512,
        "name": "اتی ساز",
        "similar_names": "",
        "geo_center_text": "POINT(35.785 51.3864)",
        "approved": 1
    },
    {
        "id": 11088,
        "name": "اجاره دار",
        "similar_names": "",
        "geo_center_text": "POINT(35.7122 51.4467)",
        "approved": 1
    },
    {
        "id": 490,
        "name": "احسان",
        "similar_names": "",
        "geo_center_text": "POINT(35.7339 51.563)",
        "approved": 1
    },
    {
        "id": 13715,
        "name": "احمد آباد",
        "similar_names": "",
        "geo_center_text": "POINT(35.636650836763486 51.209335327148445)",
        "approved": 1
    },
    {
        "id": 11060,
        "name": "اختیاریه",
        "similar_names": "",
        "geo_center_text": "POINT(35.7875 51.4623)",
        "approved": 1
    },
    {
        "id": 13377,
        "name": "اراج",
        "similar_names": "",
        "geo_center_text": "POINT(35.7975 51.4876)",
        "approved": 1
    },
    {
        "id": 10915,
        "name": "ارامنه",
        "similar_names": "",
        "geo_center_text": "POINT(35.7214 51.4411)",
        "approved": 1
    },
    {
        "id": 439,
        "name": "ارسباران",
        "similar_names": "",
        "geo_center_text": "POINT(35.7451 51.4438)",
        "approved": 1
    },
    {
        "id": 15370,
        "name": "ارم",
        "similar_names": null,
        "geo_center_text": "POINT(35.72505377866856 51.29164695739747)",
        "approved": 1
    },
    {
        "id": 298,
        "name": "ازگل",
        "similar_names": "",
        "geo_center_text": "POINT(35.7908 51.4992)",
        "approved": 1
    },
    {
        "id": 453,
        "name": "استاد حسن بنا",
        "similar_names": "",
        "geo_center_text": "POINT(35.7477 51.4734)",
        "approved": 1
    },
    {
        "id": 9361,
        "name": "استاد معین",
        "similar_names": "",
        "geo_center_text": "POINT(35.6889 51.3501)",
        "approved": 1
    },
    {
        "id": 14056,
        "name": "استانبول",
        "similar_names": "استانبول",
        "geo_center_text": "POINT(35.794877123524635 51.42863273620606)",
        "approved": 1
    },
    {
        "id": 481,
        "name": "استخر",
        "similar_names": "",
        "geo_center_text": "POINT(35.7606 51.552)",
        "approved": 1
    },
    {
        "id": 541,
        "name": "اسد آبادی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7286 51.4038)",
        "approved": 1
    },
    {
        "id": 36654,
        "name": "اسکان سبز",
        "similar_names": null,
        "geo_center_text": "POINT(35.76360523513214 51.24165058135987)",
        "approved": 1
    },
    {
        "id": 9481,
        "name": "اسلام شهر",
        "similar_names": "",
        "geo_center_text": "POINT(35.5493 51.2292)",
        "approved": 1
    },
    {
        "id": 447,
        "name": "اسلامی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7645 51.4616)",
        "approved": 1
    },
    {
        "id": 5395,
        "name": "اشرفی اصفهانی",
        "similar_names": null,
        "geo_center_text": "POINT(35.7467 51.3361)",
        "approved": 1
    },
    {
        "id": 9466,
        "name": "افسریه",
        "similar_names": "",
        "geo_center_text": "POINT(35.65677320389239 51.49463653564454)",
        "approved": 1
    },
    {
        "id": 23728,
        "name": "افشاری",
        "similar_names": "",
        "geo_center_text": "POINT(35.71717957435762 51.485087871551514)",
        "approved": 1
    },
    {
        "id": 493,
        "name": "افق ( طباطبایی )",
        "similar_names": "",
        "geo_center_text": "POINT(35.7335 51.5867)",
        "approved": 1
    },
    {
        "id": 550,
        "name": "اقاقیا",
        "similar_names": "",
        "geo_center_text": "POINT(35.735 51.418)",
        "approved": 1
    },
    {
        "id": 40240,
        "name": "اقبال لاهوری",
        "similar_names": null,
        "geo_center_text": "POINT(35.69916353482011 51.450304985046394)",
        "approved": 1
    },
    {
        "id": 415,
        "name": "اکبری",
        "similar_names": "",
        "geo_center_text": "POINT(35.7031 51.3543)",
        "approved": 1
    },
    {
        "id": 15343,
        "name": "المهدی",
        "similar_names": null,
        "geo_center_text": "POINT(35.77311831573066 51.32606506347657)",
        "approved": 1
    },
    {
        "id": 4888,
        "name": "الهیه",
        "similar_names": "",
        "geo_center_text": "POINT(35.789377059455475 51.42803192138672)",
        "approved": 1
    },
    {
        "id": 372,
        "name": "الوند ( مراد آباد )",
        "similar_names": "",
        "geo_center_text": "POINT(35.7834 51.3311)",
        "approved": 1
    },
    {
        "id": 513,
        "name": "الوند ( منطقه 5 )",
        "similar_names": "",
        "geo_center_text": "POINT(35.7824 51.3313)",
        "approved": 1
    },
    {
        "id": 9312,
        "name": "امام حسین",
        "similar_names": "",
        "geo_center_text": "POINT(35.7061 51.447)",
        "approved": 1
    },
    {
        "id": 4589,
        "name": "امام خمینی ( سپه )",
        "similar_names": null,
        "geo_center_text": "POINT(35.6844 51.3621)",
        "approved": 1
    },
    {
        "id": 26732,
        "name": "امام زاده قاسم",
        "similar_names": null,
        "geo_center_text": "POINT(35.81224507919506 51.440563201904304)",
        "approved": 1
    },
    {
        "id": 39848,
        "name": "امامت",
        "similar_names": null,
        "geo_center_text": "POINT(35.712562698906275 51.489701271057136)",
        "approved": 1
    },
    {
        "id": 12403,
        "name": "امانیه",
        "similar_names": "",
        "geo_center_text": "POINT(35.7827 51.4199)",
        "approved": 1
    },
    {
        "id": 36657,
        "name": "امید دژبان",
        "similar_names": null,
        "geo_center_text": "POINT(35.7600532075875 51.23143672943116)",
        "approved": 1
    },
    {
        "id": 5396,
        "name": "امیر ابراهیم",
        "similar_names": "امیرابراهیم",
        "geo_center_text": "POINT(35.745 51.3202)",
        "approved": 1
    },
    {
        "id": 9723,
        "name": "امیر بهادر",
        "similar_names": "",
        "geo_center_text": "POINT(35.6704 51.4033)",
        "approved": 1
    },
    {
        "id": 40603,
        "name": "امیر کبیر",
        "similar_names": "خیابان امیر کبیر، امیرکبیر",
        "geo_center_text": "POINT(35.6841808566119 51.44102094842887)",
        "approved": 1
    },
    {
        "id": 5867,
        "name": "امیرآباد",
        "similar_names": "امیراباد،امیر آباد،امیر اباد",
        "geo_center_text": "POINT(35.7327 51.3928)",
        "approved": 1
    },
    {
        "id": 8041,
        "name": "امیریه",
        "similar_names": "",
        "geo_center_text": "POINT(35.6791 51.403)",
        "approved": 1
    },
    {
        "id": 39844,
        "name": "امین آباد",
        "similar_names": "امین اباد",
        "geo_center_text": "POINT(35.57963903352951 51.48588180541993)",
        "approved": 1
    },
    {
        "id": 9370,
        "name": "اندیشه",
        "similar_names": "",
        "geo_center_text": "POINT(35.744 51.2763)",
        "approved": 1
    },
    {
        "id": 3708,
        "name": "انقلاب",
        "similar_names": "",
        "geo_center_text": "POINT(35.7 51.4257)",
        "approved": 1
    },
    {
        "id": 9722,
        "name": "اوقاف",
        "similar_names": "",
        "geo_center_text": "POINT(35.7475 51.514)",
        "approved": 1
    },
    {
        "id": 10910,
        "name": "اوین",
        "similar_names": "",
        "geo_center_text": "POINT(35.8023 51.388)",
        "approved": 1
    },
    {
        "id": 389,
        "name": "ایران زمین",
        "similar_names": "",
        "geo_center_text": "POINT(35.7625 51.3733)",
        "approved": 1
    },
    {
        "id": 362,
        "name": "با هنر",
        "similar_names": "",
        "geo_center_text": "POINT(35.8075 51.4537)",
        "approved": 1
    },
    {
        "id": 9690,
        "name": "بازار تهران",
        "similar_names": "",
        "geo_center_text": "POINT(35.672 51.4246)",
        "approved": 1
    },
    {
        "id": 15421,
        "name": "باغ آذری",
        "similar_names": "باغ اذری",
        "geo_center_text": "POINT(35.6526235984887 51.43000602722169)",
        "approved": 1
    },
    {
        "id": 11102,
        "name": "باغ فردوس",
        "similar_names": "",
        "geo_center_text": "POINT(35.8032 51.4216)",
        "approved": 1
    },
    {
        "id": 12908,
        "name": "باغ فیض",
        "similar_names": "پاکدشت",
        "geo_center_text": "POINT(35.7451 51.3233)",
        "approved": 1
    },
    {
        "id": 564,
        "name": "باقرخان",
        "similar_names": "",
        "geo_center_text": "POINT(35.7106 51.3759)",
        "approved": 1
    },
    {
        "id": 12712,
        "name": "بام تهران",
        "similar_names": "",
        "geo_center_text": "POINT(35.7981 51.3607)",
        "approved": 1
    },
    {
        "id": 549,
        "name": "بخارست",
        "similar_names": "",
        "geo_center_text": "POINT(35.7336 51.4151)",
        "approved": 1
    },
    {
        "id": 302,
        "name": "بدیعی",
        "similar_names": "",
        "geo_center_text": "POINT(35.8046 51.4792)",
        "approved": 1
    },
    {
        "id": 52863,
        "name": "برادران رحمانی",
        "similar_names": "",
        "geo_center_text": "POINT(35.70467936478669 51.33119344711304)",
        "approved": 1
    },
    {
        "id": 41617,
        "name": "برزیل",
        "similar_names": null,
        "geo_center_text": "POINT(35.7541049474113 51.4061450958252)",
        "approved": 1
    },
    {
        "id": 3994,
        "name": "بریانک",
        "similar_names": "",
        "geo_center_text": "POINT(35.6728 51.3748)",
        "approved": 1
    },
    {
        "id": 3984,
        "name": "بزرگراه آیت الله سعیدی",
        "similar_names": "",
        "geo_center_text": "POINT(35.6548 51.3407)",
        "approved": 1
    },
    {
        "id": 348,
        "name": "بزرگراه ارتش",
        "similar_names": "",
        "geo_center_text": "POINT(35.7953 51.5166)",
        "approved": 1
    },
    {
        "id": 501,
        "name": "بزرگراه امام علی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7019167328534 51.45841598510742)",
        "approved": 1
    },
    {
        "id": 499,
        "name": "بزرگراه بابایی",
        "similar_names": null,
        "geo_center_text": "POINT(35.7631 51.5622)",
        "approved": 1
    },
    {
        "id": 502,
        "name": "بزرگراه باقری",
        "similar_names": null,
        "geo_center_text": "POINT(35.7449 51.5219)",
        "approved": 1
    },
    {
        "id": 537,
        "name": "بزرگراه باکری",
        "similar_names": null,
        "geo_center_text": "POINT(35.7444 51.2964)",
        "approved": 1
    },
    {
        "id": 2652,
        "name": "بزرگراه بویین زهرا",
        "similar_names": "",
        "geo_center_text": "POINT(35.6988 50.7123)",
        "approved": 1
    },
    {
        "id": 399,
        "name": "بزرگراه جلال آل احمد",
        "similar_names": "",
        "geo_center_text": "POINT(35.7251 51.3616)",
        "approved": 1
    },
    {
        "id": 12376,
        "name": "بزرگراه جناح",
        "similar_names": "بزرگراه محمدعلی جناح",
        "geo_center_text": "POINT(35.7144 51.3357)",
        "approved": 1
    },
    {
        "id": 443,
        "name": "بزرگراه چمران",
        "similar_names": null,
        "geo_center_text": "POINT(35.7621 51.3926)",
        "approved": 1
    },
    {
        "id": 398,
        "name": "بزرگراه حکیم",
        "similar_names": "",
        "geo_center_text": "POINT(35.7366 51.3493)",
        "approved": 1
    },
    {
        "id": 503,
        "name": "بزرگراه رسالت",
        "similar_names": "",
        "geo_center_text": "POINT(35.734669008006456 51.50733947753907)",
        "approved": 1
    },
    {
        "id": 536,
        "name": "بزرگراه ستاری",
        "similar_names": null,
        "geo_center_text": "POINT(35.739 51.3145)",
        "approved": 1
    },
    {
        "id": 535,
        "name": "بزرگراه شهید آبشناسان",
        "similar_names": null,
        "geo_center_text": "POINT(35.7674 51.3158)",
        "approved": 1
    },
    {
        "id": 437,
        "name": "بزرگراه شهید حقانی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7575 51.4271)",
        "approved": 1
    },
    {
        "id": 9307,
        "name": "بزرگراه شهید خرازی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7567 51.1641)",
        "approved": 1
    },
    {
        "id": 454,
        "name": "بزرگراه شهید زین الدین",
        "similar_names": "",
        "geo_center_text": "POINT(35.7476 51.5182)",
        "approved": 1
    },
    {
        "id": 416,
        "name": "بزرگراه شیخ فضل الله نوری",
        "similar_names": "",
        "geo_center_text": "POINT(35.71418299132001 51.34855270385743)",
        "approved": 1
    },
    {
        "id": 424,
        "name": "بزرگراه صدر",
        "similar_names": "",
        "geo_center_text": "POINT(35.78551286273961 51.43996238708497)",
        "approved": 1
    },
    {
        "id": 500,
        "name": "بزرگراه صیاد شیرازی",
        "similar_names": null,
        "geo_center_text": "POINT(35.7447 51.462)",
        "approved": 1
    },
    {
        "id": 538,
        "name": "بزرگراه علامه جعفری",
        "similar_names": null,
        "geo_center_text": "POINT(35.7359 51.287)",
        "approved": 1
    },
    {
        "id": 10758,
        "name": "بزرگراه فتح",
        "similar_names": "",
        "geo_center_text": "POINT(35.6855 51.2277)",
        "approved": 1
    },
    {
        "id": 444,
        "name": "بزرگراه کردستان",
        "similar_names": null,
        "geo_center_text": "POINT(35.7479 51.4001)",
        "approved": 1
    },
    {
        "id": 441,
        "name": "بزرگراه مدرس",
        "similar_names": null,
        "geo_center_text": "POINT(35.7531 51.423)",
        "approved": 1
    },
    {
        "id": 380,
        "name": "بزرگراه نیایش",
        "similar_names": "",
        "geo_center_text": "POINT(35.7744 51.3826)",
        "approved": 1
    },
    {
        "id": 373,
        "name": "بزرگراه یادگار امام",
        "similar_names": "",
        "geo_center_text": "POINT(35.737177137796664 51.34700775146485)",
        "approved": 1
    },
    {
        "id": 374,
        "name": "بلوار 24 متری سعادت آباد",
        "similar_names": "",
        "geo_center_text": "POINT(35.7827 51.3832)",
        "approved": 1
    },
    {
        "id": 520,
        "name": "بلوار آیت الله کاشانی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7352 51.3096)",
        "approved": 1
    },
    {
        "id": 532,
        "name": "بلوار ابوذر ( منطقه 5 )",
        "similar_names": "",
        "geo_center_text": "POINT(35.7302 51.3202)",
        "approved": 1
    },
    {
        "id": 41510,
        "name": "بلوار ابوذر (منطقه 15)",
        "similar_names": "ابوذر",
        "geo_center_text": "POINT(35.64871789058102 51.48279190063477)",
        "approved": 1
    },
    {
        "id": 41601,
        "name": "بلوار اردستانی",
        "similar_names": "اردستانی",
        "geo_center_text": "POINT(35.75208494531366 51.156163215637214)",
        "approved": 1
    },
    {
        "id": 478,
        "name": "بلوار استقلال",
        "similar_names": "",
        "geo_center_text": "POINT(35.765 51.528)",
        "approved": 1
    },
    {
        "id": 528,
        "name": "بلوار الهام",
        "similar_names": "",
        "geo_center_text": "POINT(35.7345 51.2834)",
        "approved": 1
    },
    {
        "id": 8213,
        "name": "بلوار اندرزگو",
        "similar_names": "",
        "geo_center_text": "POINT(35.7996 51.4496)",
        "approved": 1
    },
    {
        "id": 511,
        "name": "بلوار انصارالمهدی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7729 51.3103)",
        "approved": 1
    },
    {
        "id": 296,
        "name": "بلوار اوشان",
        "similar_names": "",
        "geo_center_text": "POINT(35.8068 51.5055)",
        "approved": 1
    },
    {
        "id": 391,
        "name": "بلوار ایوانک",
        "similar_names": "",
        "geo_center_text": "POINT(35.7641 51.3657)",
        "approved": 1
    },
    {
        "id": 293,
        "name": "بلوار بسیج",
        "similar_names": "",
        "geo_center_text": "POINT(35.803 51.5115)",
        "approved": 1
    },
    {
        "id": 498,
        "name": "بلوار بهار",
        "similar_names": "",
        "geo_center_text": "POINT(35.7399 51.584)",
        "approved": 1
    },
    {
        "id": 378,
        "name": "بلوار پاکنژاد",
        "similar_names": "",
        "geo_center_text": "POINT(35.7718 51.3596)",
        "approved": 1
    },
    {
        "id": 489,
        "name": "بلوار پروین",
        "similar_names": "",
        "geo_center_text": "POINT(35.7267 51.5273)",
        "approved": 1
    },
    {
        "id": 367,
        "name": "بلوار پیام",
        "similar_names": "",
        "geo_center_text": "POINT(35.7888 51.3596)",
        "approved": 1
    },
    {
        "id": 527,
        "name": "بلوار تعاون",
        "similar_names": "",
        "geo_center_text": "POINT(35.7394 51.285)",
        "approved": 1
    },
    {
        "id": 509,
        "name": "بلوار جنت آباد",
        "similar_names": "",
        "geo_center_text": "POINT(35.7597 51.3098)",
        "approved": 1
    },
    {
        "id": 14560,
        "name": "بلوار خزر",
        "similar_names": "",
        "geo_center_text": "POINT(35.68734809950461 51.23984813690186)",
        "approved": 1
    },
    {
        "id": 11062,
        "name": "بلوار خلیج فارس",
        "similar_names": "",
        "geo_center_text": "POINT(35.6678 51.2643)",
        "approved": 1
    },
    {
        "id": 386,
        "name": "بلوار خوردین",
        "similar_names": "",
        "geo_center_text": "POINT(35.7677 51.3736)",
        "approved": 1
    },
    {
        "id": 360,
        "name": "بلوار دانشجو",
        "similar_names": "",
        "geo_center_text": "POINT(35.8038 51.399)",
        "approved": 1
    },
    {
        "id": 384,
        "name": "بلوار دریا",
        "similar_names": "",
        "geo_center_text": "POINT(35.7711 51.3704)",
        "approved": 1
    },
    {
        "id": 11149,
        "name": "بلوار دستواره",
        "similar_names": "",
        "geo_center_text": "POINT(35.6263 51.4194)",
        "approved": 1
    },
    {
        "id": 475,
        "name": "بلوار دلاوران",
        "similar_names": "",
        "geo_center_text": "POINT(35.7472 51.508)",
        "approved": 1
    },
    {
        "id": 8052,
        "name": "بلوار رشیدالدین فضل الله",
        "similar_names": null,
        "geo_center_text": "POINT(35.7963 51.4009)",
        "approved": 1
    },
    {
        "id": 402,
        "name": "بلوار سازمان آب",
        "similar_names": "",
        "geo_center_text": "POINT(35.7286 51.3411)",
        "approved": 1
    },
    {
        "id": 508,
        "name": "بلوار سیمون بولیوار",
        "similar_names": "",
        "geo_center_text": "POINT(35.7746 51.3199)",
        "approved": 1
    },
    {
        "id": 292,
        "name": "بلوار شاهد",
        "similar_names": "",
        "geo_center_text": "POINT(35.802 51.5202)",
        "approved": 1
    },
    {
        "id": 519,
        "name": "بلوار شاهین",
        "similar_names": "",
        "geo_center_text": "POINT(35.7505 51.3063)",
        "approved": 1
    },
    {
        "id": 531,
        "name": "بلوار شقایق",
        "similar_names": "",
        "geo_center_text": "POINT(35.7302 51.3019)",
        "approved": 1
    },
    {
        "id": 368,
        "name": "بلوار شقایق ( ایثار )",
        "similar_names": "",
        "geo_center_text": "POINT(35.7882 51.3533)",
        "approved": 1
    },
    {
        "id": 526,
        "name": "بلوار شهر زیبا",
        "similar_names": "شهر زیبا",
        "geo_center_text": "POINT(35.7465 51.2905)",
        "approved": 1
    },
    {
        "id": 8258,
        "name": "بلوار شهرداری",
        "similar_names": "",
        "geo_center_text": "POINT(35.5908 51.4227)",
        "approved": 1
    },
    {
        "id": 523,
        "name": "بلوار عدل",
        "similar_names": "",
        "geo_center_text": "POINT(35.7633 51.3267)",
        "approved": 1
    },
    {
        "id": 497,
        "name": "بلوار فجر",
        "similar_names": "",
        "geo_center_text": "POINT(35.736 51.5912)",
        "approved": 1
    },
    {
        "id": 8147,
        "name": "بلوار فرحزادی",
        "similar_names": null,
        "geo_center_text": "POINT(35.7681 51.3572)",
        "approved": 1
    },
    {
        "id": 529,
        "name": "بلوار فردوس",
        "similar_names": "",
        "geo_center_text": "POINT(35.7272 51.307)",
        "approved": 1
    },
    {
        "id": 8032,
        "name": "بلوار فردوس شرقی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7244 51.3148)",
        "approved": 1
    },
    {
        "id": 8055,
        "name": "بلوار فردوس غربی",
        "similar_names": null,
        "geo_center_text": "POINT(35.7318 51.2888)",
        "approved": 1
    },
    {
        "id": 8222,
        "name": "بلوار فرهنگ",
        "similar_names": "",
        "geo_center_text": "POINT(35.7816 51.385)",
        "approved": 1
    },
    {
        "id": 290,
        "name": "بلوار قائم",
        "similar_names": "",
        "geo_center_text": "POINT(35.8026 51.5191)",
        "approved": 1
    },
    {
        "id": 361,
        "name": "بلوار کاوه",
        "similar_names": "",
        "geo_center_text": "POINT(35.7867 51.4446)",
        "approved": 1
    },
    {
        "id": 567,
        "name": "بلوار کشاورز",
        "similar_names": "",
        "geo_center_text": "POINT(35.7091 51.3925)",
        "approved": 1
    },
    {
        "id": 524,
        "name": "بلوار کمالی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7668 51.3283)",
        "approved": 1
    },
    {
        "id": 504,
        "name": "بلوار کوهسار",
        "similar_names": "",
        "geo_center_text": "POINT(35.7679 51.2789)",
        "approved": 1
    },
    {
        "id": 9628,
        "name": "بلوار کوهک",
        "similar_names": "",
        "geo_center_text": "POINT(35.727952781420534 51.23742135242385)",
        "approved": 1
    },
    {
        "id": 291,
        "name": "بلوار گلها",
        "similar_names": "",
        "geo_center_text": "POINT(35.8031 51.527)",
        "approved": 1
    },
    {
        "id": 521,
        "name": "بلوار لاله  ( منطقه 5 )",
        "similar_names": "",
        "geo_center_text": "POINT(35.7449 51.3024)",
        "approved": 1
    },
    {
        "id": 533,
        "name": "بلوار مجاهد کبیر",
        "similar_names": "",
        "geo_center_text": "POINT(35.7419 51.3109)",
        "approved": 1
    },
    {
        "id": 385,
        "name": "بلوار مدیریت",
        "similar_names": "",
        "geo_center_text": "POINT(35.7737 51.3799)",
        "approved": 1
    },
    {
        "id": 431,
        "name": "بلوار میرداماد",
        "similar_names": "",
        "geo_center_text": "POINT(35.7618 51.4262)",
        "approved": 1
    },
    {
        "id": 525,
        "name": "بلوار میرزابابایی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7652 51.3271)",
        "approved": 1
    },
    {
        "id": 548,
        "name": "بلوار نلسون ماندلا",
        "similar_names": "",
        "geo_center_text": "POINT(35.77221302029195 51.42065048217774)",
        "approved": 1
    },
    {
        "id": 297,
        "name": "بلوار نیروی زمینی",
        "similar_names": "",
        "geo_center_text": "POINT(35.79 51.502)",
        "approved": 1
    },
    {
        "id": 351,
        "name": "بلوار نیروی هوایی",
        "similar_names": "",
        "geo_center_text": "POINT(35.8021 51.5197)",
        "approved": 1
    },
    {
        "id": 39315,
        "name": "بنی هاشمی",
        "similar_names": null,
        "geo_center_text": "POINT(35.749995234014875 51.470518112182624)",
        "approved": 1
    },
    {
        "id": 4389,
        "name": "بهار شیراز",
        "similar_names": null,
        "geo_center_text": "POINT(35.7169 51.4356)",
        "approved": 1
    },
    {
        "id": 15365,
        "name": "بهاران",
        "similar_names": null,
        "geo_center_text": "POINT(35.760303944039634 51.281261444091804)",
        "approved": 1
    },
    {
        "id": 9488,
        "name": "بهارستان",
        "similar_names": "",
        "geo_center_text": "POINT(35.692 51.4328)",
        "approved": 1
    },
    {
        "id": 410,
        "name": "بهبودی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7121 51.3608)",
        "approved": 1
    },
    {
        "id": 15348,
        "name": "بهجت آباد",
        "similar_names": "بهجت اباد",
        "geo_center_text": "POINT(35.71362547506703 51.41292572021485)",
        "approved": 1
    },
    {
        "id": 428,
        "name": "بهروز",
        "similar_names": null,
        "geo_center_text": "POINT(35.7617 51.4418)",
        "approved": 1
    },
    {
        "id": 553,
        "name": "بهشتی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7298 51.4263)",
        "approved": 1
    },
    {
        "id": 452,
        "name": "بوستان",
        "similar_names": "",
        "geo_center_text": "POINT(35.7629 51.4634)",
        "approved": 1
    },
    {
        "id": 53051,
        "name": "بوستان سعدی",
        "similar_names": "",
        "geo_center_text": "POINT(35.69156091006495 51.37271931046981)",
        "approved": 1
    },
    {
        "id": 9758,
        "name": "بوستان ولایت",
        "similar_names": "",
        "geo_center_text": "POINT(35.6367 51.3825)",
        "approved": 1
    },
    {
        "id": 13748,
        "name": "بوکان",
        "similar_names": "",
        "geo_center_text": "POINT(35.81958790196707 51.44116401672364)",
        "approved": 1
    },
    {
        "id": 11323,
        "name": "بومهن",
        "similar_names": "",
        "geo_center_text": "POINT(35.734 51.8672)",
        "approved": 1
    },
    {
        "id": 514,
        "name": "بیست و چهار متری زیتون",
        "similar_names": "",
        "geo_center_text": "POINT(35.7729 51.3282)",
        "approved": 1
    },
    {
        "id": 551,
        "name": "بیهقی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7369 51.4173)",
        "approved": 1
    },
    {
        "id": 41621,
        "name": "پارک ساعی",
        "similar_names": null,
        "geo_center_text": "POINT(35.73372843896833 51.41120910644532)",
        "approved": 1
    },
    {
        "id": 15354,
        "name": "پارک شهر",
        "similar_names": null,
        "geo_center_text": "POINT(35.68504754570482 51.41447067260743)",
        "approved": 1
    },
    {
        "id": 15347,
        "name": "پارک لاله",
        "similar_names": null,
        "geo_center_text": "POINT(35.70916520463913 51.393356323242195)",
        "approved": 1
    },
    {
        "id": 11054,
        "name": "پارک وی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7909 51.4161)",
        "approved": 1
    },
    {
        "id": 3937,
        "name": "پاستور",
        "similar_names": "",
        "geo_center_text": "POINT(35.6891 51.3911)",
        "approved": 1
    },
    {
        "id": 419,
        "name": "پاسداران",
        "similar_names": "",
        "geo_center_text": "POINT(35.78123395953055 51.46734237670899)",
        "approved": 1
    },
    {
        "id": 9630,
        "name": "پاکدشت",
        "similar_names": "",
        "geo_center_text": "POINT(35.47968330337166 51.689987182617195)",
        "approved": 1
    },
    {
        "id": 13242,
        "name": "پامنار",
        "similar_names": "",
        "geo_center_text": "POINT(35.6812 51.4277)",
        "approved": 1
    },
    {
        "id": 9273,
        "name": "پردیس",
        "similar_names": "",
        "geo_center_text": "POINT(35.7433 51.7916)",
        "approved": 1
    },
    {
        "id": 15513,
        "name": "پردیسان",
        "similar_names": null,
        "geo_center_text": "POINT(35.75142320933904 51.36692047119141)",
        "approved": 1
    },
    {
        "id": 39738,
        "name": "پرستار",
        "similar_names": null,
        "geo_center_text": "POINT(35.68832407198268 51.48300647735596)",
        "approved": 1
    },
    {
        "id": 9362,
        "name": "پرند",
        "similar_names": "",
        "geo_center_text": "POINT(35.4874 50.9464)",
        "approved": 1
    },
    {
        "id": 11000,
        "name": "پل رومی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7934 51.4341)",
        "approved": 1
    },
    {
        "id": 41655,
        "name": "پلیس",
        "similar_names": null,
        "geo_center_text": "POINT(35.72115161539429 51.44496202468872)",
        "approved": 1
    },
    {
        "id": 3904,
        "name": "پونک",
        "similar_names": "",
        "geo_center_text": "POINT(35.7627 51.3406)",
        "approved": 1
    },
    {
        "id": 356,
        "name": "پیراسته",
        "similar_names": "",
        "geo_center_text": "POINT(35.7975 51.4147)",
        "approved": 1
    },
    {
        "id": 36635,
        "name": "پیکان شهر",
        "similar_names": null,
        "geo_center_text": "POINT(35.73172882216553 51.184444427490234)",
        "approved": 1
    },
    {
        "id": 4751,
        "name": "تجریش",
        "similar_names": "",
        "geo_center_text": "POINT(35.7947 51.4264)",
        "approved": 1
    },
    {
        "id": 7883,
        "name": "تقاطع آزادگان و همت ",
        "similar_names": "",
        "geo_center_text": "POINT(35.7587 51.254)",
        "approved": 1
    },
    {
        "id": 39561,
        "name": "تقی آباد",
        "similar_names": "تقی اباد",
        "geo_center_text": "POINT(35.57991826003964 51.46408081054688)",
        "approved": 1
    },
    {
        "id": 476,
        "name": "تکاوران",
        "similar_names": "",
        "geo_center_text": "POINT(35.7476 51.5072)",
        "approved": 1
    },
    {
        "id": 3348,
        "name": "تهران سر",
        "similar_names": "",
        "geo_center_text": "POINT(35.69341287787123 51.25911712646485)",
        "approved": 1
    },
    {
        "id": 3948,
        "name": "تهران نو",
        "similar_names": "",
        "geo_center_text": "POINT(35.7089 51.5086)",
        "approved": 1
    },
    {
        "id": 11562,
        "name": "تهران ویلا",
        "similar_names": "",
        "geo_center_text": "POINT(35.7236 51.3665)",
        "approved": 1
    },
    {
        "id": 2868,
        "name": "تهرانپارس",
        "similar_names": "تهران پارس",
        "geo_center_text": "POINT(35.74471411489062 51.52896881103516)",
        "approved": 1
    },
    {
        "id": 542,
        "name": "توانیر",
        "similar_names": "",
        "geo_center_text": "POINT(35.7461 51.4073)",
        "approved": 1
    },
    {
        "id": 9355,
        "name": "توحید",
        "similar_names": "",
        "geo_center_text": "POINT(35.6508 51.3248)",
        "approved": 1
    },
    {
        "id": 40227,
        "name": "تولید دارو",
        "similar_names": "",
        "geo_center_text": "POINT(35.66444417555075 51.33681535720826)",
        "approved": 1
    },
    {
        "id": 483,
        "name": "تیر انداز ( حجربن عدی )",
        "similar_names": "",
        "geo_center_text": "POINT(35.7342 51.5309)",
        "approved": 1
    },
    {
        "id": 413,
        "name": "تیموری",
        "similar_names": "",
        "geo_center_text": "POINT(35.7041 51.3537)",
        "approved": 1
    },
    {
        "id": 23703,
        "name": "ثانی",
        "similar_names": "شهید ثانی",
        "geo_center_text": "POINT(35.720855461271306 51.48558139801026)",
        "approved": 1
    },
    {
        "id": 492,
        "name": "جاده تلو",
        "similar_names": "",
        "geo_center_text": "POINT(35.788158639329716 51.62235260009766)",
        "approved": 1
    },
    {
        "id": 3983,
        "name": "جاده دماوند",
        "similar_names": "",
        "geo_center_text": "POINT(35.7293 51.6119)",
        "approved": 1
    },
    {
        "id": 41619,
        "name": "جام جم",
        "similar_names": null,
        "geo_center_text": "POINT(35.780986988089126 51.41311883926392)",
        "approved": 1
    },
    {
        "id": 401,
        "name": "جانبازان",
        "similar_names": "",
        "geo_center_text": "POINT(35.7295 51.3578)",
        "approved": 1
    },
    {
        "id": 2344,
        "name": "جردن",
        "similar_names": "",
        "geo_center_text": "POINT(35.774371784708535 51.42150878906251)",
        "approved": 1
    },
    {
        "id": 486,
        "name": "جشنواره",
        "similar_names": "",
        "geo_center_text": "POINT(35.7336 51.537)",
        "approved": 1
    },
    {
        "id": 12574,
        "name": "جعفرآباد",
        "similar_names": "",
        "geo_center_text": "POINT(35.8103 51.4288)",
        "approved": 1
    },
    {
        "id": 438,
        "name": "جلفا",
        "similar_names": "",
        "geo_center_text": "POINT(35.747 51.4435)",
        "approved": 1
    },
    {
        "id": 12972,
        "name": "جماران",
        "similar_names": "",
        "geo_center_text": "POINT(35.8176 51.4589)",
        "approved": 1
    },
    {
        "id": 9759,
        "name": "جمالزاده",
        "similar_names": "",
        "geo_center_text": "POINT(35.699 51.3876)",
        "approved": 1
    },
    {
        "id": 12869,
        "name": "جمشیدیه",
        "similar_names": "",
        "geo_center_text": "POINT(35.8254 51.4636)",
        "approved": 1
    },
    {
        "id": 8058,
        "name": "جنت آباد جنوبی",
        "similar_names": null,
        "geo_center_text": "POINT(35.7425 51.3045)",
        "approved": 1
    },
    {
        "id": 3233,
        "name": "جنت آباد شمالی",
        "similar_names": "",
        "geo_center_text": "POINT(35.76685067447143 51.30512237548829)",
        "approved": 1
    },
    {
        "id": 12922,
        "name": "جنت آباد مرکزی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7597 51.3098)",
        "approved": 1
    },
    {
        "id": 13680,
        "name": "جهان کودک",
        "similar_names": "",
        "geo_center_text": "POINT(35.75804032147507 51.416573524475105)",
        "approved": 1
    },
    {
        "id": 10864,
        "name": "جوادیه",
        "similar_names": "",
        "geo_center_text": "POINT(35.6532 51.3916)",
        "approved": 1
    },
    {
        "id": 13425,
        "name": "جوزانی",
        "similar_names": "بلوار جوزانی",
        "geo_center_text": "POINT(35.7537 51.2062)",
        "approved": 1
    },
    {
        "id": 8231,
        "name": "چهاردانگه",
        "similar_names": "",
        "geo_center_text": "POINT(35.61494869793896 51.3033891933169)",
        "approved": 1
    },
    {
        "id": 39739,
        "name": "چهارصد دستگاه",
        "similar_names": "چهارصددستگاه",
        "geo_center_text": "POINT(35.688010367845514 51.45768642425538)",
        "approved": 1
    },
    {
        "id": 1835,
        "name": "چیتگر",
        "similar_names": "",
        "geo_center_text": "POINT(35.72672607584755 51.18118286132813)",
        "approved": 1
    },
    {
        "id": 9331,
        "name": "چیتگر شمالی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7266 51.182)",
        "approved": 1
    },
    {
        "id": 12630,
        "name": "چیذر",
        "similar_names": "",
        "geo_center_text": "POINT(35.7951 51.4562)",
        "approved": 1
    },
    {
        "id": 560,
        "name": "حافظ",
        "similar_names": "",
        "geo_center_text": "POINT(35.7014 51.4125)",
        "approved": 1
    },
    {
        "id": 39563,
        "name": "حافظیه",
        "similar_names": null,
        "geo_center_text": "POINT(35.70193415785465 51.49633169174195)",
        "approved": 1
    },
    {
        "id": 409,
        "name": "حبیب الله",
        "similar_names": "",
        "geo_center_text": "POINT(35.7096 51.353)",
        "approved": 1
    },
    {
        "id": 561,
        "name": "حجاب",
        "similar_names": "",
        "geo_center_text": "POINT(35.7143 51.3985)",
        "approved": 1
    },
    {
        "id": 15355,
        "name": "حسن آباد",
        "similar_names": "حسن اباد",
        "geo_center_text": "POINT(35.684977830917674 51.40846252441407)",
        "approved": 1
    },
    {
        "id": 15599,
        "name": "حسن آباد شمالی",
        "similar_names": "حسن آباد، مهران",
        "geo_center_text": "POINT(35.732927204729165 51.32108688354492)",
        "approved": 1
    },
    {
        "id": 390,
        "name": "حسن سیف",
        "similar_names": "",
        "geo_center_text": "POINT(35.7633 51.3733)",
        "approved": 1
    },
    {
        "id": 41614,
        "name": "حسینیه ارشاد",
        "similar_names": null,
        "geo_center_text": "POINT(35.756124898233914 51.44820213317872)",
        "approved": 1
    },
    {
        "id": 11082,
        "name": "حشمتیه",
        "similar_names": "",
        "geo_center_text": "POINT(35.721 51.4567)",
        "approved": 1
    },
    {
        "id": 12970,
        "name": "حصاربوعلی",
        "similar_names": "",
        "geo_center_text": "POINT(35.805 51.4682)",
        "approved": 1
    },
    {
        "id": 39740,
        "name": "حصارک",
        "similar_names": null,
        "geo_center_text": "POINT(35.78401587118335 51.31125926971436)",
        "approved": 1
    },
    {
        "id": 13383,
        "name": "حصاری",
        "similar_names": "",
        "geo_center_text": "POINT(35.7562 51.4393)",
        "approved": 1
    },
    {
        "id": 12572,
        "name": "حکمت",
        "similar_names": "",
        "geo_center_text": "POINT(35.8009 51.4423)",
        "approved": 1
    },
    {
        "id": 10836,
        "name": "حکیمیه",
        "similar_names": "",
        "geo_center_text": "POINT(35.739 51.5857)",
        "approved": 1
    },
    {
        "id": 546,
        "name": "خالد اسلامبلی ( وزرا )",
        "similar_names": "",
        "geo_center_text": "POINT(35.7357 51.4093)",
        "approved": 1
    },
    {
        "id": 3938,
        "name": "خانی آباد نو",
        "similar_names": "",
        "geo_center_text": "POINT(35.634850213324675 51.38408660888672)",
        "approved": 1
    },
    {
        "id": 6082,
        "name": "خاوران",
        "similar_names": null,
        "geo_center_text": "POINT(35.6326 51.4857)",
        "approved": 1
    },
    {
        "id": 41653,
        "name": "خردمند",
        "similar_names": null,
        "geo_center_text": "POINT(35.713660319947124 51.42187356948853)",
        "approved": 1
    },
    {
        "id": 41625,
        "name": "خرمشهر",
        "similar_names": "خرم شهر",
        "geo_center_text": "POINT(35.73560956593549 51.43738746643067)",
        "approved": 1
    },
    {
        "id": 22752,
        "name": "خرمشهر شمالی",
        "similar_names": "",
        "geo_center_text": "POINT(35.67730883242672 51.38503074645997)",
        "approved": 1
    },
    {
        "id": 9692,
        "name": "خزانه",
        "similar_names": "",
        "geo_center_text": "POINT(35.6428 51.4192)",
        "approved": 1
    },
    {
        "id": 522,
        "name": "خلیل آبادی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7459 51.3204)",
        "approved": 1
    },
    {
        "id": 450,
        "name": "خواجه عبد الله انصاری",
        "similar_names": "",
        "geo_center_text": "POINT(35.7504 51.4577)",
        "approved": 1
    },
    {
        "id": 13044,
        "name": "خواجه نصیر",
        "similar_names": "",
        "geo_center_text": "POINT(35.7049 51.4437)",
        "approved": 1
    },
    {
        "id": 4175,
        "name": "خواجه نظام",
        "similar_names": "",
        "geo_center_text": "POINT(35.7169 51.4549)",
        "approved": 1
    },
    {
        "id": 15944,
        "name": "خوش",
        "similar_names": "",
        "geo_center_text": "POINT(35.6879755117541 51.373357772827156)",
        "approved": 1
    },
    {
        "id": 54405,
        "name": "خوش شمالی",
        "similar_names": "",
        "geo_center_text": "POINT(35.70287673584162 51.371598243713386)",
        "approved": 1
    },
    {
        "id": 9025,
        "name": "خيابان بهنام",
        "similar_names": "",
        "geo_center_text": "POINT(35.7298 51.3217)",
        "approved": 1
    },
    {
        "id": 8114,
        "name": "خيابان ناهيد",
        "similar_names": null,
        "geo_center_text": "POINT(35.7307 51.3394)",
        "approved": 1
    },
    {
        "id": 3936,
        "name": "خیابان آذربایجان",
        "similar_names": "",
        "geo_center_text": "POINT(35.6965 51.3804)",
        "approved": 1
    },
    {
        "id": 47402,
        "name": "خیابان آزادی",
        "similar_names": "",
        "geo_center_text": "POINT(35.70056083826599 51.35310173034669)",
        "approved": 1
    },
    {
        "id": 12738,
        "name": "خیابان ارومیه",
        "similar_names": "",
        "geo_center_text": "POINT(35.6977 51.373)",
        "approved": 1
    },
    {
        "id": 4412,
        "name": "خیابان اسکندری",
        "similar_names": "",
        "geo_center_text": "POINT(35.6863 51.383)",
        "approved": 1
    },
    {
        "id": 9306,
        "name": "خیابان انقلاب",
        "similar_names": "",
        "geo_center_text": "POINT(35.7008 51.4134)",
        "approved": 1
    },
    {
        "id": 9018,
        "name": "خیابان ایران ",
        "similar_names": "",
        "geo_center_text": "POINT(35.6863 51.4386)",
        "approved": 1
    },
    {
        "id": 510,
        "name": "خیابان ایرانشهر",
        "similar_names": "",
        "geo_center_text": "POINT(35.7726 51.3115)",
        "approved": 1
    },
    {
        "id": 3966,
        "name": "خیابان بخت آزاد",
        "similar_names": "",
        "geo_center_text": "POINT(35.715 51.4681)",
        "approved": 1
    },
    {
        "id": 406,
        "name": "خیابان پاتریس لومومبا",
        "similar_names": "",
        "geo_center_text": "POINT(35.7223 51.3709)",
        "approved": 1
    },
    {
        "id": 6790,
        "name": "خیابان پیامبر",
        "similar_names": "",
        "geo_center_text": "POINT(35.7365 51.3269)",
        "approved": 1
    },
    {
        "id": 2802,
        "name": "خیابان پیروزی",
        "similar_names": "",
        "geo_center_text": "POINT(35.6939 51.472)",
        "approved": 1
    },
    {
        "id": 516,
        "name": "خیابان تختی (خانی آباد)",
        "similar_names": "",
        "geo_center_text": "POINT(35.66319224484487 51.40914916992188)",
        "approved": 1
    },
    {
        "id": 13265,
        "name": "خیابان ترکمنستان",
        "similar_names": "ترکمنستان",
        "geo_center_text": "POINT(35.7205 51.44)",
        "approved": 1
    },
    {
        "id": 3989,
        "name": "خیابان جمهوری",
        "similar_names": "",
        "geo_center_text": "POINT(35.6938 51.4245)",
        "approved": 1
    },
    {
        "id": 3920,
        "name": "خیابان جیحون",
        "similar_names": "",
        "geo_center_text": "POINT(35.688 51.3628)",
        "approved": 1
    },
    {
        "id": 11998,
        "name": "خیابان حداد عادل",
        "similar_names": "",
        "geo_center_text": "POINT(35.6619 51.4409)",
        "approved": 1
    },
    {
        "id": 3460,
        "name": "خیابان خراسان",
        "similar_names": "",
        "geo_center_text": "POINT(35.6657 51.439)",
        "approved": 1
    },
    {
        "id": 41329,
        "name": "خیابان سمیه",
        "similar_names": "سمیه",
        "geo_center_text": "POINT(35.705440168584104 51.41976760140633)",
        "approved": 1
    },
    {
        "id": 382,
        "name": "خیابان سوری",
        "similar_names": "",
        "geo_center_text": "POINT(35.7858 51.3831)",
        "approved": 1
    },
    {
        "id": 512,
        "name": "خیابان شعراء",
        "similar_names": "",
        "geo_center_text": "POINT(35.7725 51.3135)",
        "approved": 1
    },
    {
        "id": 54478,
        "name": "خیابان شهید رجایی",
        "similar_names": "",
        "geo_center_text": "POINT(35.643583132015124 51.41148877702909)",
        "approved": 1
    },
    {
        "id": 39864,
        "name": "خیابان شورا (فیروز بهرام)",
        "similar_names": "شورا",
        "geo_center_text": "POINT(35.6290469595826 51.24898910522462)",
        "approved": 1
    },
    {
        "id": 301,
        "name": "خیابان صنایع",
        "similar_names": "",
        "geo_center_text": "POINT(35.7933 51.4808)",
        "approved": 1
    },
    {
        "id": 563,
        "name": "خیابان فاطمی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7195 51.3989)",
        "approved": 1
    },
    {
        "id": 545,
        "name": "خیابان فتحی شقاقی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7246 51.4044)",
        "approved": 1
    },
    {
        "id": 468,
        "name": "خیابان فرجام",
        "similar_names": "",
        "geo_center_text": "POINT(35.7394 51.504)",
        "approved": 1
    },
    {
        "id": 515,
        "name": "خیابان فکوری",
        "similar_names": "",
        "geo_center_text": "POINT(35.7735 51.3305)",
        "approved": 1
    },
    {
        "id": 5478,
        "name": "خیابان قزوین",
        "similar_names": "",
        "geo_center_text": "POINT(35.6734 51.3789)",
        "approved": 1
    },
    {
        "id": 3921,
        "name": "خیابان قصرالدشت",
        "similar_names": "",
        "geo_center_text": "POINT(35.689 51.3716)",
        "approved": 1
    },
    {
        "id": 8040,
        "name": "خیابان كامرانیه جنوبی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7951 51.4626)",
        "approved": 1
    },
    {
        "id": 539,
        "name": "خیابان کارگر",
        "similar_names": null,
        "geo_center_text": "POINT(35.7063 51.392)",
        "approved": 1
    },
    {
        "id": 12391,
        "name": "خیابان کارون",
        "similar_names": "",
        "geo_center_text": "POINT(35.689 51.3669)",
        "approved": 1
    },
    {
        "id": 555,
        "name": "خیابان کریم خان زند",
        "similar_names": "",
        "geo_center_text": "POINT(35.718 51.4187)",
        "approved": 1
    },
    {
        "id": 10942,
        "name": "خیابان کمیل",
        "similar_names": "",
        "geo_center_text": "POINT(35.6813 51.3716)",
        "approved": 1
    },
    {
        "id": 479,
        "name": "خیابان کوهستان",
        "similar_names": "",
        "geo_center_text": "POINT(35.7667 51.5263)",
        "approved": 1
    },
    {
        "id": 300,
        "name": "خیابان لنگری ( اقدسیه )",
        "similar_names": "",
        "geo_center_text": "POINT(35.7974 51.4829)",
        "approved": 1
    },
    {
        "id": 11279,
        "name": "خیابان مدنی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7138 51.4598)",
        "approved": 1
    },
    {
        "id": 436,
        "name": "خیابان ملاصدرا",
        "similar_names": "",
        "geo_center_text": "POINT(35.7595 51.4016)",
        "approved": 1
    },
    {
        "id": 571,
        "name": "خیابان نصرت",
        "similar_names": "",
        "geo_center_text": "POINT(35.7075 51.3827)",
        "approved": 1
    },
    {
        "id": 8039,
        "name": "خیابان هاشم ازگلی",
        "similar_names": null,
        "geo_center_text": "POINT(35.7921 51.4994)",
        "approved": 1
    },
    {
        "id": 3834,
        "name": "خیابان هاشمی",
        "similar_names": "",
        "geo_center_text": "POINT(35.6895 51.3522)",
        "approved": 1
    },
    {
        "id": 469,
        "name": "خیابان هنگام",
        "similar_names": "",
        "geo_center_text": "POINT(35.7606 51.5194)",
        "approved": 1
    },
    {
        "id": 10528,
        "name": "خیابان وارسته",
        "similar_names": "",
        "geo_center_text": "POINT(35.7744 51.4479)",
        "approved": 1
    },
    {
        "id": 5168,
        "name": "خیام",
        "similar_names": "",
        "geo_center_text": "POINT(35.6707 51.4208)",
        "approved": 1
    },
    {
        "id": 388,
        "name": "دادمان",
        "similar_names": "",
        "geo_center_text": "POINT(35.7628 51.3658)",
        "approved": 1
    },
    {
        "id": 305,
        "name": "دارآباد",
        "similar_names": "",
        "geo_center_text": "POINT(35.8166 51.4873)",
        "approved": 1
    },
    {
        "id": 9385,
        "name": "داراباد",
        "similar_names": "",
        "geo_center_text": "POINT(35.8207 51.4891)",
        "approved": 1
    },
    {
        "id": 15930,
        "name": "دامپزشکی",
        "similar_names": "",
        "geo_center_text": "POINT(35.69250667592556 51.35902404785157)",
        "approved": 1
    },
    {
        "id": 15371,
        "name": "دانشگاه تهران",
        "similar_names": null,
        "geo_center_text": "POINT(35.70428649806425 51.39472961425781)",
        "approved": 1
    },
    {
        "id": 40025,
        "name": "داوودیه",
        "similar_names": "داودیه",
        "geo_center_text": "POINT(35.76037359294342 51.43635749816895)",
        "approved": 1
    },
    {
        "id": 11220,
        "name": "دبستان",
        "similar_names": "",
        "geo_center_text": "POINT(35.73912785079385 51.45566940307618)",
        "approved": 1
    },
    {
        "id": 9338,
        "name": "درازشیب",
        "similar_names": "",
        "geo_center_text": "POINT(35.8029 51.4493)",
        "approved": 1
    },
    {
        "id": 11474,
        "name": "دربند",
        "similar_names": "",
        "geo_center_text": "POINT(35.8232 51.4251)",
        "approved": 1
    },
    {
        "id": 387,
        "name": "درختی",
        "similar_names": "",
        "geo_center_text": "POINT(35.767 51.3775)",
        "approved": 1
    },
    {
        "id": 11108,
        "name": "دردشت",
        "similar_names": "",
        "geo_center_text": "POINT(35.641 51.4134)",
        "approved": 1
    },
    {
        "id": 7561,
        "name": "درکه",
        "similar_names": "",
        "geo_center_text": "POINT(35.80451872215149 51.382627487182624)",
        "approved": 1
    },
    {
        "id": 18852,
        "name": "دروازه دولت",
        "similar_names": "",
        "geo_center_text": "POINT(35.70156823202855 51.42571449279786)",
        "approved": 1
    },
    {
        "id": 9629,
        "name": "دروازه شمیران",
        "similar_names": "",
        "geo_center_text": "POINT(35.6983 51.4465)",
        "approved": 1
    },
    {
        "id": 9381,
        "name": "دروس",
        "similar_names": "",
        "geo_center_text": "POINT(35.7733 51.4559)",
        "approved": 1
    },
    {
        "id": 39726,
        "name": "دریاچه خلیج فارس (چیتگر)",
        "similar_names": null,
        "geo_center_text": "POINT(35.75110975353587 51.21611595153809)",
        "approved": 1
    },
    {
        "id": 11632,
        "name": "دریان نو",
        "similar_names": "",
        "geo_center_text": "POINT(35.7124 51.3633)",
        "approved": 1
    },
    {
        "id": 365,
        "name": "دزاشیب ( کبیری )",
        "similar_names": "",
        "geo_center_text": "POINT(35.803 51.4477)",
        "approved": 1
    },
    {
        "id": 40242,
        "name": "دستغیب",
        "similar_names": null,
        "geo_center_text": "POINT(35.68630240145625 51.347908973693855)",
        "approved": 1
    },
    {
        "id": 41660,
        "name": "دستور",
        "similar_names": "قلندری",
        "geo_center_text": "POINT(35.78284959078186 51.43996238708497)",
        "approved": 1
    },
    {
        "id": 470,
        "name": "دکتر آیت",
        "similar_names": "",
        "geo_center_text": "POINT(35.7265 51.4988)",
        "approved": 1
    },
    {
        "id": 15346,
        "name": "ده ونک",
        "similar_names": "ده‌ونک",
        "geo_center_text": "POINT(35.76949707214054 51.392240524292)",
        "approved": 1
    },
    {
        "id": 39313,
        "name": "دهقان",
        "similar_names": null,
        "geo_center_text": "POINT(35.71376485449593 51.456527709960945)",
        "approved": 1
    },
    {
        "id": 9383,
        "name": "دهکده المپیک",
        "similar_names": "میدان المپیک",
        "geo_center_text": "POINT(35.75978157531788 51.26349449157715)",
        "approved": 1
    },
    {
        "id": 15755,
        "name": "دوراهی قپان",
        "similar_names": "",
        "geo_center_text": "POINT(35.66482770478926 51.37601852416993)",
        "approved": 1
    },
    {
        "id": 9311,
        "name": "دولاب",
        "similar_names": "",
        "geo_center_text": "POINT(35.6654 51.4549)",
        "approved": 1
    },
    {
        "id": 6866,
        "name": "دولت آباد",
        "similar_names": "دولت اباد",
        "geo_center_text": "POINT(35.6203 51.4485)",
        "approved": 1
    },
    {
        "id": 13463,
        "name": "دیالمه",
        "similar_names": "",
        "geo_center_text": "POINT(35.6863 51.4357)",
        "approved": 1
    },
    {
        "id": 417,
        "name": "دیباجی جنوبی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7694 51.4445)",
        "approved": 1
    },
    {
        "id": 13279,
        "name": "دیباجی شمالی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7949 51.4652)",
        "approved": 1
    },
    {
        "id": 39560,
        "name": "دیلمان",
        "similar_names": null,
        "geo_center_text": "POINT(35.60281152073829 51.43167972564698)",
        "approved": 1
    },
    {
        "id": 9443,
        "name": "راه آهن",
        "similar_names": "",
        "geo_center_text": "POINT(35.6579 51.4025)",
        "approved": 1
    },
    {
        "id": 9368,
        "name": "رباط کریم",
        "similar_names": "",
        "geo_center_text": "POINT(35.4686 51.093)",
        "approved": 1
    },
    {
        "id": 12356,
        "name": "رستم آباد",
        "similar_names": "",
        "geo_center_text": "POINT(35.796 51.4721)",
        "approved": 1
    },
    {
        "id": 39854,
        "name": "رودکی",
        "similar_names": "",
        "geo_center_text": "POINT(35.69724669524734 51.37541770935059)",
        "approved": 1
    },
    {
        "id": 9388,
        "name": "رودهن",
        "similar_names": "",
        "geo_center_text": "POINT(35.7304 51.9092)",
        "approved": 1
    },
    {
        "id": 547,
        "name": "زاگرس",
        "similar_names": "",
        "geo_center_text": "POINT(35.7394 51.4127)",
        "approved": 1
    },
    {
        "id": 559,
        "name": "زرتشت",
        "similar_names": "",
        "geo_center_text": "POINT(35.7173 51.409)",
        "approved": 1
    },
    {
        "id": 13384,
        "name": "زرگنده",
        "similar_names": "",
        "geo_center_text": "POINT(35.7774 51.4304)",
        "approved": 1
    },
    {
        "id": 2326,
        "name": "زعفرانیه",
        "similar_names": "",
        "geo_center_text": "POINT(35.808530724691344 51.41517877578736)",
        "approved": 1
    },
    {
        "id": 430,
        "name": "زمرد",
        "similar_names": "",
        "geo_center_text": "POINT(35.7678 51.4523)",
        "approved": 1
    },
    {
        "id": 11588,
        "name": "زمزم",
        "similar_names": "",
        "geo_center_text": "POINT(35.6473 51.3667)",
        "approved": 1
    },
    {
        "id": 15418,
        "name": "زهتابی",
        "similar_names": null,
        "geo_center_text": "POINT(35.64181268975708 51.359367370605476)",
        "approved": 1
    },
    {
        "id": 36772,
        "name": "زیبا دشت",
        "similar_names": "زیبادشت",
        "geo_center_text": "POINT(35.753401435364786 51.26182079315186)",
        "approved": 1
    },
    {
        "id": 422,
        "name": "سئول",
        "similar_names": "",
        "geo_center_text": "POINT(35.7767 51.3983)",
        "approved": 1
    },
    {
        "id": 494,
        "name": "سازمان آب",
        "similar_names": "",
        "geo_center_text": "POINT(35.7273 51.5702)",
        "approved": 1
    },
    {
        "id": 15516,
        "name": "سازمان برنامه",
        "similar_names": "برنامه و بودجه",
        "geo_center_text": "POINT(35.73055829113529 51.30134582519532)",
        "approved": 1
    },
    {
        "id": 12417,
        "name": "ساقدوش",
        "similar_names": "افشاری",
        "geo_center_text": "POINT(35.7643 51.4702)",
        "approved": 1
    },
    {
        "id": 41623,
        "name": "سبلان جنوبی",
        "similar_names": null,
        "geo_center_text": "POINT(35.713381560479945 51.46794319152833)",
        "approved": 1
    },
    {
        "id": 12053,
        "name": "سبلان شمالی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7235 51.461)",
        "approved": 1
    },
    {
        "id": 14579,
        "name": "سپهر",
        "similar_names": "",
        "geo_center_text": "POINT(35.76688549606507 51.35123491287232)",
        "approved": 1
    },
    {
        "id": 5079,
        "name": "ستارخان",
        "similar_names": "",
        "geo_center_text": "POINT(35.7192 51.3626)",
        "approved": 1
    },
    {
        "id": 39559,
        "name": "سجادیه",
        "similar_names": "شهرک سجادیه",
        "geo_center_text": "POINT(35.64693933531064 51.43813848495484)",
        "approved": 1
    },
    {
        "id": 477,
        "name": "سراج",
        "similar_names": "",
        "geo_center_text": "POINT(35.7456 51.5176)",
        "approved": 1
    },
    {
        "id": 41656,
        "name": "سرباز",
        "similar_names": null,
        "geo_center_text": "POINT(35.70825918170904 51.443803310394294)",
        "approved": 1
    },
    {
        "id": 517,
        "name": "سردار جنگل",
        "similar_names": "",
        "geo_center_text": "POINT(35.7639 51.3266)",
        "approved": 1
    },
    {
        "id": 9380,
        "name": "سرسبز",
        "similar_names": "",
        "geo_center_text": "POINT(35.6333 51.3547)",
        "approved": 1
    },
    {
        "id": 376,
        "name": "سرو شرقی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7853 51.379)",
        "approved": 1
    },
    {
        "id": 377,
        "name": "سرو غربی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7808 51.3655)",
        "approved": 1
    },
    {
        "id": 381,
        "name": "سعادت آباد",
        "similar_names": "",
        "geo_center_text": "POINT(35.7862 51.3719)",
        "approved": 1
    },
    {
        "id": 11233,
        "name": "سعدآباد",
        "similar_names": "",
        "geo_center_text": "POINT(35.8159 51.4239)",
        "approved": 1
    },
    {
        "id": 40244,
        "name": "سعدی",
        "similar_names": null,
        "geo_center_text": "POINT(35.696166274456374 51.42524242401123)",
        "approved": 1
    },
    {
        "id": 8013,
        "name": "سلسبيل",
        "similar_names": "رودکی",
        "geo_center_text": "POINT(35.6948 51.3728)",
        "approved": 1
    },
    {
        "id": 288,
        "name": "سلمان ( سوهانک )",
        "similar_names": "",
        "geo_center_text": "POINT(35.8011 51.5298)",
        "approved": 1
    },
    {
        "id": 34473,
        "name": "سلمان فارسی",
        "similar_names": "",
        "geo_center_text": "POINT(35.70923489828413 51.44880294799805)",
        "approved": 1
    },
    {
        "id": 9609,
        "name": "سلیمانیه",
        "similar_names": "",
        "geo_center_text": "POINT(35.6814 51.4574)",
        "approved": 1
    },
    {
        "id": 17434,
        "name": "سمنگان",
        "similar_names": "",
        "geo_center_text": "POINT(35.731272456329044 51.486954689025886)",
        "approved": 1
    },
    {
        "id": 39862,
        "name": "سنایی",
        "similar_names": "سنائی",
        "geo_center_text": "POINT(35.71745832053955 51.41889095306397)",
        "approved": 1
    },
    {
        "id": 505,
        "name": "سنگان ( سولقان )",
        "similar_names": "",
        "geo_center_text": "POINT(35.7736 51.2707)",
        "approved": 1
    },
    {
        "id": 9762,
        "name": "سنگلج",
        "similar_names": "",
        "geo_center_text": "POINT(35.677 51.4139)",
        "approved": 1
    },
    {
        "id": 8155,
        "name": "سه راه اقدسیه",
        "similar_names": "",
        "geo_center_text": "POINT(35.7975 51.4729)",
        "approved": 1
    },
    {
        "id": 9591,
        "name": "سهروردی جنوبی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7211 51.436)",
        "approved": 1
    },
    {
        "id": 7040,
        "name": "سهروردی شمالی",
        "similar_names": null,
        "geo_center_text": "POINT(35.732 51.4421)",
        "approved": 1
    },
    {
        "id": 11036,
        "name": "سی متری جی",
        "similar_names": "30 متری جی",
        "geo_center_text": "POINT(35.6781 51.3522)",
        "approved": 1
    },
    {
        "id": 8044,
        "name": "سید خندان",
        "similar_names": "سیدخندان",
        "geo_center_text": "POINT(35.7411 51.4454)",
        "approved": 1
    },
    {
        "id": 392,
        "name": "سیمای ایران",
        "similar_names": "",
        "geo_center_text": "POINT(35.7566 51.3606)",
        "approved": 1
    },
    {
        "id": 6096,
        "name": "سیمتری نیرو هوایی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7038 51.4894)",
        "approved": 1
    },
    {
        "id": 17571,
        "name": "سیندخت",
        "similar_names": "سین دخت",
        "geo_center_text": "POINT(35.71408993871176 51.38671595276051)",
        "approved": 1
    },
    {
        "id": 10940,
        "name": "شاپور",
        "similar_names": "",
        "geo_center_text": "POINT(35.6729 51.4134)",
        "approved": 1
    },
    {
        "id": 11111,
        "name": "شادآباد",
        "similar_names": "شاد آباد،شاداباد،شاد اباد",
        "geo_center_text": "POINT(35.6579 51.3038)",
        "approved": 1
    },
    {
        "id": 9346,
        "name": "شادمان",
        "similar_names": "",
        "geo_center_text": "POINT(35.7086 51.3662)",
        "approved": 1
    },
    {
        "id": 411,
        "name": "شادمهر",
        "similar_names": "",
        "geo_center_text": "POINT(35.7096 51.3612)",
        "approved": 1
    },
    {
        "id": 530,
        "name": "شربیانی ( فیروزی )",
        "similar_names": "",
        "geo_center_text": "POINT(35.7396 51.2877)",
        "approved": 1
    },
    {
        "id": 15413,
        "name": "شریف آباد",
        "similar_names": "شریف اباد",
        "geo_center_text": "POINT(35.42151066245934 51.78989410400391)",
        "approved": 1
    },
    {
        "id": 467,
        "name": "شعبانلو",
        "similar_names": "",
        "geo_center_text": "POINT(35.7809 51.4983)",
        "approved": 1
    },
    {
        "id": 9067,
        "name": "شکوفه",
        "similar_names": "",
        "geo_center_text": "POINT(35.6868 51.4499)",
        "approved": 1
    },
    {
        "id": 7038,
        "name": "شمس آباد",
        "similar_names": "",
        "geo_center_text": "POINT(35.666 51.2694)",
        "approved": 1
    },
    {
        "id": 16690,
        "name": "شمشک",
        "similar_names": "",
        "geo_center_text": "POINT(36.01133890448606 51.491117477417)",
        "approved": 1
    },
    {
        "id": 39562,
        "name": "شمشیری",
        "similar_names": "شمشیری",
        "geo_center_text": "POINT(35.674798818289275 51.34057044982911)",
        "approved": 1
    },
    {
        "id": 7059,
        "name": "شمیران نو",
        "similar_names": null,
        "geo_center_text": "POINT(35.7489 51.4946)",
        "approved": 1
    },
    {
        "id": 39741,
        "name": "شهادت",
        "similar_names": null,
        "geo_center_text": "POINT(35.61439524884652 51.44309520721436)",
        "approved": 1
    },
    {
        "id": 366,
        "name": "شهدای شرکت برق",
        "similar_names": "",
        "geo_center_text": "POINT(35.7933 51.3622)",
        "approved": 1
    },
    {
        "id": 404,
        "name": "شهر آرا",
        "similar_names": "",
        "geo_center_text": "POINT(35.7139 51.368)",
        "approved": 1
    },
    {
        "id": 6707,
        "name": "شهر ری",
        "similar_names": "",
        "geo_center_text": "POINT(35.60092726180499 51.44245147705079)",
        "approved": 1
    },
    {
        "id": 9603,
        "name": "شهرآرا",
        "similar_names": "شهرارا",
        "geo_center_text": "POINT(35.7202 51.3728)",
        "approved": 1
    },
    {
        "id": 507,
        "name": "شهران",
        "similar_names": "",
        "geo_center_text": "POINT(35.7603 51.2927)",
        "approved": 1
    },
    {
        "id": 9610,
        "name": "شهران جنوبی",
        "similar_names": "",
        "geo_center_text": "POINT(35.75807514692538 51.290016174316406)",
        "approved": 1
    },
    {
        "id": 9689,
        "name": "شهران شمالی",
        "similar_names": "",
        "geo_center_text": "POINT(35.773 51.288)",
        "approved": 1
    },
    {
        "id": 9382,
        "name": "شهرزیبا",
        "similar_names": "",
        "geo_center_text": "POINT(35.7463 51.2855)",
        "approved": 1
    },
    {
        "id": 15512,
        "name": "شهرک آپادانا",
        "similar_names": "آپادانا،اپادانا",
        "geo_center_text": "POINT(35.71209228526119 51.32357597351075)",
        "approved": 1
    },
    {
        "id": 36615,
        "name": "شهرک آتی شهر",
        "similar_names": "آتی شهر،اتی شهر",
        "geo_center_text": "POINT(35.74985591797737 51.153373718261726)",
        "approved": 1
    },
    {
        "id": 11566,
        "name": "شهرک آزادی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7094 51.2759)",
        "approved": 1
    },
    {
        "id": 15528,
        "name": "شهرک آسمان",
        "similar_names": "آسمان",
        "geo_center_text": "POINT(35.68400181750096 51.26340866088868)",
        "approved": 1
    },
    {
        "id": 15342,
        "name": "شهرک ارغوان",
        "similar_names": null,
        "geo_center_text": "POINT(35.77792317284434 51.329927444458015)",
        "approved": 1
    },
    {
        "id": 9371,
        "name": "شهرک اکباتان",
        "similar_names": "",
        "geo_center_text": "POINT(35.7258 51.2936)",
        "approved": 1
    },
    {
        "id": 14936,
        "name": "شهرک البرز",
        "similar_names": "",
        "geo_center_text": "POINT(35.807094258018395 51.50639533996582)",
        "approved": 1
    },
    {
        "id": 9400,
        "name": "شهرک امید",
        "similar_names": "",
        "geo_center_text": "POINT(35.7675 51.5272)",
        "approved": 1
    },
    {
        "id": 15415,
        "name": "شهرک امیرالمومنین",
        "similar_names": null,
        "geo_center_text": "POINT(35.65938839065544 51.51214599609375)",
        "approved": 1
    },
    {
        "id": 15368,
        "name": "شهرک انصار",
        "similar_names": null,
        "geo_center_text": "POINT(35.711255987480925 51.25843048095703)",
        "approved": 1
    },
    {
        "id": 15422,
        "name": "شهرک بخارایی",
        "similar_names": "بخارایی",
        "geo_center_text": "POINT(35.639022540352755 51.43060684204102)",
        "approved": 1
    },
    {
        "id": 11063,
        "name": "شهرک بعثت",
        "similar_names": "",
        "geo_center_text": "POINT(35.6263 51.4043)",
        "approved": 1
    },
    {
        "id": 15366,
        "name": "شهرک پرواز",
        "similar_names": "شهرک‌پرواز،پرواز",
        "geo_center_text": "POINT(35.72951315979672 51.308212280273445)",
        "approved": 1
    },
    {
        "id": 11147,
        "name": "شهرک چشمه",
        "similar_names": "",
        "geo_center_text": "POINT(35.7485 51.2591)",
        "approved": 1
    },
    {
        "id": 15745,
        "name": "شهرک دانشگاه",
        "similar_names": null,
        "geo_center_text": "POINT(35.77660012521549 51.31756782531739)",
        "approved": 1
    },
    {
        "id": 23191,
        "name": "شهرک دانشگاه صنعتی شریف",
        "similar_names": null,
        "geo_center_text": "POINT(35.75549802243143 51.155390739440925)",
        "approved": 1
    },
    {
        "id": 5138,
        "name": "شهرک راه آهن",
        "similar_names": "",
        "geo_center_text": "POINT(35.753 51.2405)",
        "approved": 1
    },
    {
        "id": 11439,
        "name": "شهرک رضویه",
        "similar_names": "",
        "geo_center_text": "POINT(35.6112 51.497)",
        "approved": 1
    },
    {
        "id": 15597,
        "name": "شهرک ژاندارمری",
        "similar_names": "ژاندارمری",
        "geo_center_text": "POINT(35.73202145196928 51.35644912719727)",
        "approved": 1
    },
    {
        "id": 15362,
        "name": "شهرک شاهین",
        "similar_names": "شاهین",
        "geo_center_text": "POINT(35.742332489823156 51.310787200927734)",
        "approved": 1
    },
    {
        "id": 10937,
        "name": "شهرک شریعتی",
        "similar_names": "",
        "geo_center_text": "POINT(35.6344 51.3758)",
        "approved": 1
    },
    {
        "id": 11475,
        "name": "شهرک شریفی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7502 51.5098)",
        "approved": 1
    },
    {
        "id": 36774,
        "name": "شهرک شهاب شهر",
        "similar_names": "شهاب شهر",
        "geo_center_text": "POINT(35.753735778496434 51.24995470046998)",
        "approved": 1
    },
    {
        "id": 24971,
        "name": "شهرک شهید باقری",
        "similar_names": null,
        "geo_center_text": "POINT(35.75614812923077 51.17387219853712)",
        "approved": 1
    },
    {
        "id": 13421,
        "name": "شهرک شهید چمران",
        "similar_names": "",
        "geo_center_text": "POINT(35.7939 51.4784)",
        "approved": 1
    },
    {
        "id": 36650,
        "name": "شهرک شهید خرازی",
        "similar_names": "شهرک خرازی",
        "geo_center_text": "POINT(35.753812398771174 51.16264343261719)",
        "approved": 1
    },
    {
        "id": 9391,
        "name": "شهرک شهید محلاتی",
        "similar_names": "",
        "geo_center_text": "POINT(35.80427834904489 51.518926620483406)",
        "approved": 1
    },
    {
        "id": 8129,
        "name": "شهرک غرب",
        "similar_names": "",
        "geo_center_text": "POINT(35.75988604933661 51.37473106384278)",
        "approved": 1
    },
    {
        "id": 15600,
        "name": "شهرک غزالی",
        "similar_names": null,
        "geo_center_text": "POINT(35.73303171400012 51.16526126861572)",
        "approved": 1
    },
    {
        "id": 9493,
        "name": "شهرک فردوس",
        "similar_names": "",
        "geo_center_text": "POINT(35.6694 51.3321)",
        "approved": 1
    },
    {
        "id": 15598,
        "name": "شهرک فرهنگیان (غرب)",
        "similar_names": "فرهنگیان",
        "geo_center_text": "POINT(35.71153475438269 51.2809181213379)",
        "approved": 1
    },
    {
        "id": 15527,
        "name": "شهرک کاظمیه",
        "similar_names": "کاظمیه",
        "geo_center_text": "POINT(35.69996510861432 51.264781951904304)",
        "approved": 1
    },
    {
        "id": 15744,
        "name": "شهرک گلستان",
        "similar_names": null,
        "geo_center_text": "POINT(35.76462206077019 51.5342903137207)",
        "approved": 1
    },
    {
        "id": 9315,
        "name": "شهرک گلستان غربی",
        "similar_names": "",
        "geo_center_text": "POINT(35.737595151747826 51.253280639648445)",
        "approved": 1
    },
    {
        "id": 9392,
        "name": "شهرک نفت (منطقه 5)",
        "similar_names": "",
        "geo_center_text": "POINT(35.7933 51.3397)",
        "approved": 1
    },
    {
        "id": 41899,
        "name": "شهرک نفت (منطقه1)",
        "similar_names": null,
        "geo_center_text": "POINT(35.80966971036709 51.512703895568855)",
        "approved": 1
    },
    {
        "id": 36629,
        "name": "شهرک نگین غرب",
        "similar_names": "نگین غرب",
        "geo_center_text": "POINT(35.74897822143965 51.15633487701417)",
        "approved": 1
    },
    {
        "id": 15361,
        "name": "شهرک والفجر (منطقه 5)",
        "similar_names": "والفجر",
        "geo_center_text": "POINT(35.74637293778451 51.30383491516114)",
        "approved": 1
    },
    {
        "id": 9608,
        "name": "شهرک ولیعصر",
        "similar_names": "",
        "geo_center_text": "POINT(35.6499035720968 51.34134292602539)",
        "approved": 1
    },
    {
        "id": 36614,
        "name": "شهرک یاس",
        "similar_names": "یاس",
        "geo_center_text": "POINT(35.7428898051826 51.25070571899415)",
        "approved": 1
    },
    {
        "id": 446,
        "name": "شهید پایدارفرد",
        "similar_names": "",
        "geo_center_text": "POINT(35.77 51.4631)",
        "approved": 1
    },
    {
        "id": 12204,
        "name": "شهید تولایی",
        "similar_names": "",
        "geo_center_text": "POINT(35.6983 51.1796)",
        "approved": 1
    },
    {
        "id": 434,
        "name": "شهید خدامی ( بیژن )",
        "similar_names": "",
        "geo_center_text": "POINT(35.763 51.402)",
        "approved": 1
    },
    {
        "id": 558,
        "name": "شهید قرنی ( ویلا )",
        "similar_names": "",
        "geo_center_text": "POINT(35.7077 51.4177)",
        "approved": 1
    },
    {
        "id": 543,
        "name": "شهید گمنام",
        "similar_names": "",
        "geo_center_text": "POINT(35.7243 51.3916)",
        "approved": 1
    },
    {
        "id": 3922,
        "name": "شوش",
        "similar_names": "",
        "geo_center_text": "POINT(35.6602 51.4345)",
        "approved": 1
    },
    {
        "id": 9389,
        "name": "شیان",
        "similar_names": "",
        "geo_center_text": "POINT(35.7739 51.4923)",
        "approved": 1
    },
    {
        "id": 11423,
        "name": "شیخ الرئیس",
        "similar_names": "",
        "geo_center_text": "POINT(35.6875 51.4568)",
        "approved": 1
    },
    {
        "id": 8146,
        "name": "شیخ بهایی",
        "similar_names": "شیخ بهائی",
        "geo_center_text": "POINT(35.76 51.3964)",
        "approved": 1
    },
    {
        "id": 540,
        "name": "شیخ بهایی جنوبی",
        "similar_names": "شیخ بهائی جنوبی",
        "geo_center_text": "POINT(35.7625 51.3948)",
        "approved": 1
    },
    {
        "id": 8212,
        "name": "شیخ بهایی شمالی",
        "similar_names": "شیخ بهائی شمالی",
        "geo_center_text": "POINT(35.7733 51.3928)",
        "approved": 1
    },
    {
        "id": 9491,
        "name": "شیخ هادی",
        "similar_names": "",
        "geo_center_text": "POINT(35.6906 51.4066)",
        "approved": 1
    },
    {
        "id": 41618,
        "name": "شیرازی",
        "similar_names": "شیراز",
        "geo_center_text": "POINT(35.76037359294342 51.40005111694337)",
        "approved": 1
    },
    {
        "id": 435,
        "name": "شیرازی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7603 51.3992)",
        "approved": 1
    },
    {
        "id": 10998,
        "name": "صابونیان",
        "similar_names": "",
        "geo_center_text": "POINT(35.8072 51.4122)",
        "approved": 1
    },
    {
        "id": 482,
        "name": "صاحب الزمان",
        "similar_names": "",
        "geo_center_text": "POINT(35.7556 51.5418)",
        "approved": 1
    },
    {
        "id": 12007,
        "name": "صاحبقرانیه",
        "similar_names": "",
        "geo_center_text": "POINT(35.8087 51.4743)",
        "approved": 1
    },
    {
        "id": 5094,
        "name": "صادقیه",
        "similar_names": "",
        "geo_center_text": "POINT(35.7215 51.3433)",
        "approved": 1
    },
    {
        "id": 414,
        "name": "صالحی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7051 51.3441)",
        "approved": 1
    },
    {
        "id": 9489,
        "name": "صد دستگاه",
        "similar_names": "",
        "geo_center_text": "POINT(35.6829 51.4745)",
        "approved": 1
    },
    {
        "id": 15635,
        "name": "صفدری",
        "similar_names": "",
        "geo_center_text": "POINT(35.676751058329614 51.377348899841316)",
        "approved": 1
    },
    {
        "id": 10133,
        "name": "صفی علیشاه",
        "similar_names": "",
        "geo_center_text": "POINT(35.69553103029812 51.43172264099121)",
        "approved": 1
    },
    {
        "id": 15345,
        "name": "ضرابخانه",
        "similar_names": null,
        "geo_center_text": "POINT(35.75911990334671 51.46245002746583)",
        "approved": 1
    },
    {
        "id": 371,
        "name": "طالقانی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7763 51.3361)",
        "approved": 1
    },
    {
        "id": 8458,
        "name": "طرشت",
        "similar_names": "",
        "geo_center_text": "POINT(35.7102 51.3492)",
        "approved": 1
    },
    {
        "id": 427,
        "name": "ظفر ( دستگردی )",
        "similar_names": "",
        "geo_center_text": "POINT(35.7681 51.4357)",
        "approved": 1
    },
    {
        "id": 40021,
        "name": "ظهیر آباد",
        "similar_names": "ظهیرآباد",
        "geo_center_text": "POINT(35.598606770862396 51.44899606704712)",
        "approved": 1
    },
    {
        "id": 9350,
        "name": "عباس آباد",
        "similar_names": "",
        "geo_center_text": "POINT(35.7294 51.433)",
        "approved": 1
    },
    {
        "id": 10734,
        "name": "عبدل آباد",
        "similar_names": "عبدالله آباد",
        "geo_center_text": "POINT(35.6196 51.3791)",
        "approved": 1
    },
    {
        "id": 9698,
        "name": "عشرت آباد",
        "similar_names": "",
        "geo_center_text": "POINT(35.7041 51.4416)",
        "approved": 1
    },
    {
        "id": 433,
        "name": "عطار",
        "similar_names": "",
        "geo_center_text": "POINT(35.7662 51.4104)",
        "approved": 1
    },
    {
        "id": 9401,
        "name": "علم و صنعت",
        "similar_names": "",
        "geo_center_text": "POINT(35.7477 51.5017)",
        "approved": 1
    },
    {
        "id": 6933,
        "name": "علی آباد",
        "similar_names": "",
        "geo_center_text": "POINT(35.6289 51.4058)",
        "approved": 1
    },
    {
        "id": 364,
        "name": "عمار",
        "similar_names": "",
        "geo_center_text": "POINT(35.8112 51.4468)",
        "approved": 1
    },
    {
        "id": 39852,
        "name": "فاطمیه",
        "similar_names": null,
        "geo_center_text": "POINT(35.79157016860936 51.43798828125)",
        "approved": 1
    },
    {
        "id": 11388,
        "name": "فدک",
        "similar_names": "",
        "geo_center_text": "POINT(35.6927 51.2368)",
        "approved": 1
    },
    {
        "id": 9697,
        "name": "فرح آباد",
        "similar_names": "",
        "geo_center_text": "POINT(35.6696 51.479)",
        "approved": 1
    },
    {
        "id": 12338,
        "name": "فرحزاد",
        "similar_names": "",
        "geo_center_text": "POINT(35.7883 51.3436)",
        "approved": 1
    },
    {
        "id": 25344,
        "name": "فرزان",
        "similar_names": null,
        "geo_center_text": "POINT(35.76678103123842 51.42144441604615)",
        "approved": 1
    },
    {
        "id": 9831,
        "name": "فرشته",
        "similar_names": "",
        "geo_center_text": "POINT(35.7905 51.4208)",
        "approved": 1
    },
    {
        "id": 6830,
        "name": "فرمانیه",
        "similar_names": "",
        "geo_center_text": "POINT(35.7967 51.4564)",
        "approved": 1
    },
    {
        "id": 375,
        "name": "فرهنگ",
        "similar_names": "",
        "geo_center_text": "POINT(35.7778 51.3853)",
        "approved": 1
    },
    {
        "id": 15520,
        "name": "فرودگاه مهرآباد",
        "similar_names": "مهرآباد، مهر آباد",
        "geo_center_text": "POINT(35.69034569127357 51.32434844970704)",
        "approved": 1
    },
    {
        "id": 12897,
        "name": "فشم",
        "similar_names": "فشم",
        "geo_center_text": "POINT(35.9194 51.5297)",
        "approved": 1
    },
    {
        "id": 13509,
        "name": "فلاح",
        "similar_names": "",
        "geo_center_text": "POINT(35.65959760189677 51.35971069335938)",
        "approved": 1
    },
    {
        "id": 394,
        "name": "فلاح زاده",
        "similar_names": "",
        "geo_center_text": "POINT(35.7605 51.3356)",
        "approved": 1
    },
    {
        "id": 11594,
        "name": "فلاحی",
        "similar_names": "",
        "geo_center_text": "POINT(35.8048 51.442)",
        "approved": 1
    },
    {
        "id": 568,
        "name": "فلسطین",
        "similar_names": "",
        "geo_center_text": "POINT(35.707 51.4016)",
        "approved": 1
    },
    {
        "id": 50784,
        "name": "فلکه سوم تهرانپارس",
        "similar_names": "",
        "geo_center_text": "POINT(35.74362454114921 51.53454780578614)",
        "approved": 1
    },
    {
        "id": 4756,
        "name": "فیروز بهرام",
        "similar_names": "",
        "geo_center_text": "POINT(35.6316 51.2451)",
        "approved": 1
    },
    {
        "id": 552,
        "name": "قائم مقام فراهانی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7205 51.4176)",
        "approved": 1
    },
    {
        "id": 13241,
        "name": "قاسم مهاجر",
        "similar_names": "",
        "geo_center_text": "POINT(35.6603 51.4469)",
        "approved": 1
    },
    {
        "id": 41616,
        "name": "قبا",
        "similar_names": null,
        "geo_center_text": "POINT(35.7600949969625 51.449275016784675)",
        "approved": 1
    },
    {
        "id": 569,
        "name": "قدس",
        "similar_names": "",
        "geo_center_text": "POINT(35.7042 51.3984)",
        "approved": 1
    },
    {
        "id": 565,
        "name": "قریب",
        "similar_names": "",
        "geo_center_text": "POINT(35.7047 51.3829)",
        "approved": 1
    },
    {
        "id": 15372,
        "name": "قزل قلعه",
        "similar_names": null,
        "geo_center_text": "POINT(35.72839833791958 51.39301300048829)",
        "approved": 1
    },
    {
        "id": 15385,
        "name": "قصر",
        "similar_names": null,
        "geo_center_text": "POINT(35.72644736208901 51.45257949829102)",
        "approved": 1
    },
    {
        "id": 15381,
        "name": "قصر فیروزه 1",
        "similar_names": null,
        "geo_center_text": "POINT(35.67152173657823 51.49884223937989)",
        "approved": 1
    },
    {
        "id": 15423,
        "name": "قصر فیروزه 2",
        "similar_names": null,
        "geo_center_text": "POINT(35.653530253369816 51.49240493774415)",
        "approved": 1
    },
    {
        "id": 9625,
        "name": "قلعه مرغی",
        "similar_names": "",
        "geo_center_text": "POINT(35.6574 51.3769)",
        "approved": 1
    },
    {
        "id": 11224,
        "name": "قلهک",
        "similar_names": "",
        "geo_center_text": "POINT(35.7735 51.4445)",
        "approved": 1
    },
    {
        "id": 9444,
        "name": "قنات کوثر",
        "similar_names": "",
        "geo_center_text": "POINT(35.7596 51.5316)",
        "approved": 1
    },
    {
        "id": 9352,
        "name": "قیامدشت",
        "similar_names": "",
        "geo_center_text": "POINT(35.527 51.651)",
        "approved": 1
    },
    {
        "id": 354,
        "name": "قیطریه",
        "similar_names": "",
        "geo_center_text": "POINT(35.792 51.4427)",
        "approved": 1
    },
    {
        "id": 544,
        "name": "کاج",
        "similar_names": "",
        "geo_center_text": "POINT(35.717249260994514 51.44468307495118)",
        "approved": 1
    },
    {
        "id": 8308,
        "name": "کاشانک",
        "similar_names": "",
        "geo_center_text": "POINT(35.8113 51.4746)",
        "approved": 1
    },
    {
        "id": 40026,
        "name": "کاظم آباد (بنی هاشم)",
        "similar_names": null,
        "geo_center_text": "POINT(35.74978625986715 51.46991729736328)",
        "approved": 1
    },
    {
        "id": 15380,
        "name": "کالاد (کوهک)",
        "similar_names": "",
        "geo_center_text": "POINT(35.74190697366525 51.488846896156254)",
        "approved": 1
    },
    {
        "id": 347,
        "name": "کامرانیه",
        "similar_names": "",
        "geo_center_text": "POINT(35.802 51.4603)",
        "approved": 1
    },
    {
        "id": 12893,
        "name": "کامرانیه شمالی",
        "similar_names": "کامرانیه شمالی",
        "geo_center_text": "POINT(35.795 51.4611)",
        "approved": 1
    },
    {
        "id": 21544,
        "name": "کاووسیه",
        "similar_names": "کاوسیه",
        "geo_center_text": "POINT(35.76120937503265 51.41378402709962)",
        "approved": 1
    },
    {
        "id": 15373,
        "name": "کتابخانه ملی ایران",
        "similar_names": "کتابخانه ملی",
        "geo_center_text": "POINT(35.756124898233914 51.434297561645515)",
        "approved": 1
    },
    {
        "id": 41657,
        "name": "کلیم کاشانی",
        "similar_names": null,
        "geo_center_text": "POINT(35.71954888582276 51.44569158554078)",
        "approved": 1
    },
    {
        "id": 53000,
        "name": "کمالی",
        "similar_names": "خیابان کمالی",
        "geo_center_text": "POINT(35.68174937043047 51.39153242111207)",
        "approved": 1
    },
    {
        "id": 3906,
        "name": "کن",
        "similar_names": null,
        "geo_center_text": "POINT(35.7651 51.2805)",
        "approved": 1
    },
    {
        "id": 53619,
        "name": "کهریزک",
        "similar_names": "",
        "geo_center_text": "POINT(35.517600455574005 51.3614280793552)",
        "approved": 1
    },
    {
        "id": 379,
        "name": "کوهستان",
        "similar_names": "",
        "geo_center_text": "POINT(35.7805 51.3509)",
        "approved": 1
    },
    {
        "id": 10913,
        "name": "کوی بیمه",
        "similar_names": "",
        "geo_center_text": "POINT(35.7071 51.3232)",
        "approved": 1
    },
    {
        "id": 15350,
        "name": "کوی دانشگاه",
        "similar_names": null,
        "geo_center_text": "POINT(35.73160340875959 51.386575698852546)",
        "approved": 1
    },
    {
        "id": 15352,
        "name": "کوی زینبیه",
        "similar_names": "زینبیه",
        "geo_center_text": "POINT(35.71097721960411 51.510944366455085)",
        "approved": 1
    },
    {
        "id": 12241,
        "name": "کوی فراز",
        "similar_names": "",
        "geo_center_text": "POINT(35.7901 51.3696)",
        "approved": 1
    },
    {
        "id": 15517,
        "name": "کوی مهرآباد",
        "similar_names": "مهرآباد، مهرآباد",
        "geo_center_text": "POINT(35.69522525087309 51.33653640747071)",
        "approved": 1
    },
    {
        "id": 11558,
        "name": "کوی هفدهم شهریور",
        "similar_names": "",
        "geo_center_text": "POINT(35.6595 51.443)",
        "approved": 1
    },
    {
        "id": 11081,
        "name": "کیانشهر",
        "similar_names": "شهرک کیانشهر",
        "geo_center_text": "POINT(35.6387 51.4515)",
        "approved": 1
    },
    {
        "id": 440,
        "name": "گاندی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7494 51.4085)",
        "approved": 1
    },
    {
        "id": 41624,
        "name": "گرگان (نامجو)",
        "similar_names": null,
        "geo_center_text": "POINT(35.708886429449805 51.447601318359375)",
        "approved": 1
    },
    {
        "id": 429,
        "name": "گل نبی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7573 51.4512)",
        "approved": 1
    },
    {
        "id": 412,
        "name": "گلاب",
        "similar_names": "",
        "geo_center_text": "POINT(35.7169 51.3369)",
        "approved": 1
    },
    {
        "id": 9226,
        "name": "گلاب دره ",
        "similar_names": "گلابدره",
        "geo_center_text": "POINT(35.8188 51.4385)",
        "approved": 1
    },
    {
        "id": 566,
        "name": "گلبار",
        "similar_names": "",
        "geo_center_text": "POINT(35.7047 51.3803)",
        "approved": 1
    },
    {
        "id": 11477,
        "name": "گلبرگ ",
        "similar_names": "",
        "geo_center_text": "POINT(35.73 51.5164)",
        "approved": 1
    },
    {
        "id": 449,
        "name": "گلزار",
        "similar_names": "",
        "geo_center_text": "POINT(35.7561 51.4124)",
        "approved": 1
    },
    {
        "id": 448,
        "name": "گلستان ( موسوی )",
        "similar_names": "",
        "geo_center_text": "POINT(35.7678 51.4623)",
        "approved": 1
    },
    {
        "id": 53004,
        "name": "گلوبندک",
        "similar_names": "",
        "geo_center_text": "POINT(35.678269131626 51.41846179962158)",
        "approved": 1
    },
    {
        "id": 9398,
        "name": "گمرک",
        "similar_names": "",
        "geo_center_text": "POINT(35.6633 51.394)",
        "approved": 1
    },
    {
        "id": 451,
        "name": "گیلان",
        "similar_names": "",
        "geo_center_text": "POINT(35.7608 51.4622)",
        "approved": 1
    },
    {
        "id": 556,
        "name": "لارستان",
        "similar_names": "",
        "geo_center_text": "POINT(35.7178 51.4123)",
        "approved": 1
    },
    {
        "id": 289,
        "name": "لاله ( منطقه 1 )",
        "similar_names": "",
        "geo_center_text": "POINT(35.7988 51.5335)",
        "approved": 1
    },
    {
        "id": 397,
        "name": "لاله ( منطقه 2 )",
        "similar_names": "",
        "geo_center_text": "POINT(35.7367 51.347)",
        "approved": 1
    },
    {
        "id": 495,
        "name": "لاله ( منطقه4 )",
        "similar_names": "",
        "geo_center_text": "POINT(35.7393 51.5858)",
        "approved": 1
    },
    {
        "id": 3825,
        "name": "لواسان",
        "similar_names": "",
        "geo_center_text": "POINT(35.8203 51.625)",
        "approved": 1
    },
    {
        "id": 17863,
        "name": "مالک اشتر",
        "similar_names": "مالک اشتر",
        "geo_center_text": "POINT(35.68626754461858 51.36902332305909)",
        "approved": 1
    },
    {
        "id": 5512,
        "name": "مامازند",
        "similar_names": "",
        "geo_center_text": "POINT(35.489188293343325 51.6848373413086)",
        "approved": 1
    },
    {
        "id": 15351,
        "name": "مجیدآباد",
        "similar_names": "مجید آباد",
        "geo_center_text": "POINT(35.76322914549896 51.54561996459962)",
        "approved": 1
    },
    {
        "id": 455,
        "name": "مجیدیه",
        "similar_names": "",
        "geo_center_text": "POINT(35.7326 51.4699)",
        "approved": 1
    },
    {
        "id": 26733,
        "name": "محله ساعی",
        "similar_names": null,
        "geo_center_text": "POINT(35.737595151747826 51.409835815429695)",
        "approved": 1
    },
    {
        "id": 13382,
        "name": "محمدیه",
        "similar_names": "",
        "geo_center_text": "POINT(35.6675 51.416)",
        "approved": 1
    },
    {
        "id": 9259,
        "name": "محمودیه",
        "similar_names": "",
        "geo_center_text": "POINT(35.7966 51.4119)",
        "approved": 1
    },
    {
        "id": 13420,
        "name": "مدائن",
        "similar_names": "",
        "geo_center_text": "POINT(35.729 51.4981)",
        "approved": 1
    },
    {
        "id": 41626,
        "name": "مرتضوی",
        "similar_names": null,
        "geo_center_text": "POINT(35.68476868619067 51.38116836547852)",
        "approved": 1
    },
    {
        "id": 396,
        "name": "مرزداران",
        "similar_names": "",
        "geo_center_text": "POINT(35.734390322042174 51.355419158935554)",
        "approved": 1
    },
    {
        "id": 41654,
        "name": "مرودشت",
        "similar_names": "مرو دشت",
        "geo_center_text": "POINT(35.725018938770674 51.450777053833015)",
        "approved": 1
    },
    {
        "id": 11064,
        "name": "مسعودیه",
        "similar_names": "",
        "geo_center_text": "POINT(35.627 51.5024)",
        "approved": 1
    },
    {
        "id": 3465,
        "name": "مشیریه",
        "similar_names": "",
        "geo_center_text": "POINT(35.6177 51.4833)",
        "approved": 1
    },
    {
        "id": 480,
        "name": "مطهری ( منطقه 4 )",
        "similar_names": "",
        "geo_center_text": "POINT(35.7571 51.5251)",
        "approved": 1
    },
    {
        "id": 554,
        "name": "مطهری ( منطقه 6 )",
        "similar_names": "",
        "geo_center_text": "POINT(35.7236 51.4297)",
        "approved": 1
    },
    {
        "id": 39849,
        "name": "مظاهری",
        "similar_names": null,
        "geo_center_text": "POINT(35.73682879116104 51.49759769439698)",
        "approved": 1
    },
    {
        "id": 496,
        "name": "معراج",
        "similar_names": "",
        "geo_center_text": "POINT(35.7383 51.5953)",
        "approved": 1
    },
    {
        "id": 41659,
        "name": "معلم",
        "similar_names": null,
        "geo_center_text": "POINT(35.727840921129726 51.446871757507324)",
        "approved": 1
    },
    {
        "id": 466,
        "name": "مغان",
        "similar_names": "",
        "geo_center_text": "POINT(35.7817 51.4757)",
        "approved": 1
    },
    {
        "id": 17454,
        "name": "مفتح جنوبی",
        "similar_names": "",
        "geo_center_text": "POINT(35.71327702542838 51.42545700073243)",
        "approved": 1
    },
    {
        "id": 8309,
        "name": "مفتح شمالی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7272 51.4268)",
        "approved": 1
    },
    {
        "id": 13216,
        "name": "مقدس اردبیلی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7981 51.4128)",
        "approved": 1
    },
    {
        "id": 9471,
        "name": "منظریه",
        "similar_names": "",
        "geo_center_text": "POINT(35.8165 51.4668)",
        "approved": 1
    },
    {
        "id": 17375,
        "name": "منوچهری",
        "similar_names": "منوچهری",
        "geo_center_text": "POINT(35.777679455198516 51.440520286560066)",
        "approved": 1
    },
    {
        "id": 4968,
        "name": "منیریه",
        "similar_names": "",
        "geo_center_text": "POINT(35.6839 51.4022)",
        "approved": 1
    },
    {
        "id": 9582,
        "name": "مهر آباد جنوبی",
        "similar_names": "",
        "geo_center_text": "POINT(35.6772 51.3377)",
        "approved": 1
    },
    {
        "id": 12665,
        "name": "مهران",
        "similar_names": "",
        "geo_center_text": "POINT(35.7515 51.4706)",
        "approved": 1
    },
    {
        "id": 304,
        "name": "موحد دانش",
        "similar_names": "",
        "geo_center_text": "POINT(35.8052 51.477)",
        "approved": 1
    },
    {
        "id": 11087,
        "name": "مولوی",
        "similar_names": "",
        "geo_center_text": "POINT(35.6665 51.4204)",
        "approved": 1
    },
    {
        "id": 11389,
        "name": "میدان آزادی",
        "similar_names": "",
        "geo_center_text": "POINT(35.6998 51.338)",
        "approved": 1
    },
    {
        "id": 17035,
        "name": "میدان الف",
        "similar_names": "الف",
        "geo_center_text": "POINT(35.79874086491962 51.41180992126465)",
        "approved": 1
    },
    {
        "id": 5071,
        "name": "میدان امام ( توپخانه )",
        "similar_names": null,
        "geo_center_text": "POINT(35.6846 51.4213)",
        "approved": 1
    },
    {
        "id": 40022,
        "name": "میدان بوعلی",
        "similar_names": "میدان بو علی",
        "geo_center_text": "POINT(35.78927262417661 51.36754274368287)",
        "approved": 1
    },
    {
        "id": 8060,
        "name": "میدان جهاد",
        "similar_names": "میدان فاطمی",
        "geo_center_text": "POINT(35.7228 51.4051)",
        "approved": 1
    },
    {
        "id": 9390,
        "name": "میدان حر",
        "similar_names": "",
        "geo_center_text": "POINT(35.6826 51.3861)",
        "approved": 1
    },
    {
        "id": 11059,
        "name": "میدان خراسان",
        "similar_names": "",
        "geo_center_text": "POINT(35.6651 51.4457)",
        "approved": 1
    },
    {
        "id": 7060,
        "name": "میدان ساحل",
        "similar_names": null,
        "geo_center_text": "POINT(35.7544 51.2182)",
        "approved": 1
    },
    {
        "id": 9314,
        "name": "میدان سازمان برنامه",
        "similar_names": "",
        "geo_center_text": "POINT(35.7361 51.3011)",
        "approved": 1
    },
    {
        "id": 41658,
        "name": "میدان سپاه",
        "similar_names": null,
        "geo_center_text": "POINT(35.70615089618302 51.4402198791504)",
        "approved": 1
    },
    {
        "id": 9764,
        "name": "میدان سرآسیاب",
        "similar_names": "",
        "geo_center_text": "POINT(35.681 51.4627)",
        "approved": 1
    },
    {
        "id": 13643,
        "name": "میدان صد",
        "similar_names": "",
        "geo_center_text": "POINT(35.74142684404291 51.49867057800294)",
        "approved": 1
    },
    {
        "id": 13098,
        "name": "میدان فردوسی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7015 51.4192)",
        "approved": 1
    },
    {
        "id": 11568,
        "name": "میدان فلاح",
        "similar_names": "",
        "geo_center_text": "POINT(35.779 51.4993)",
        "approved": 1
    },
    {
        "id": 9353,
        "name": "میدان قدس",
        "similar_names": "",
        "geo_center_text": "POINT(35.8026 51.4341)",
        "approved": 1
    },
    {
        "id": 10761,
        "name": "میدان قزوین",
        "similar_names": "",
        "geo_center_text": "POINT(35.6752 51.395)",
        "approved": 1
    },
    {
        "id": 6273,
        "name": "میدان قیام",
        "similar_names": "",
        "geo_center_text": "POINT(35.6659 51.4364)",
        "approved": 1
    },
    {
        "id": 3459,
        "name": "میدان گلها",
        "similar_names": "",
        "geo_center_text": "POINT(35.7218 51.4014)",
        "approved": 1
    },
    {
        "id": 9724,
        "name": "میدان ولیعصر ",
        "similar_names": "",
        "geo_center_text": "POINT(35.712 51.4079)",
        "approved": 1
    },
    {
        "id": 557,
        "name": "میرزای شیرازی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7203 51.4178)",
        "approved": 1
    },
    {
        "id": 41620,
        "name": "میرعماد",
        "similar_names": "میر عماد",
        "geo_center_text": "POINT(35.72763188882785 51.42567157745362)",
        "approved": 1
    },
    {
        "id": 21078,
        "name": "میگون",
        "similar_names": "",
        "geo_center_text": "POINT(35.953831149283445 51.491246223449714)",
        "approved": 1
    },
    {
        "id": 8327,
        "name": "مینی سیتی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7999 51.509)",
        "approved": 1
    },
    {
        "id": 2971,
        "name": "نارمک",
        "similar_names": "",
        "geo_center_text": "POINT(35.74491004065478 51.51489257812501)",
        "approved": 1
    },
    {
        "id": 303,
        "name": "نارنجستان",
        "similar_names": "",
        "geo_center_text": "POINT(35.7991 51.4761)",
        "approved": 1
    },
    {
        "id": 3335,
        "name": "نازی آباد",
        "similar_names": "",
        "geo_center_text": "POINT(35.6371 51.4022)",
        "approved": 1
    },
    {
        "id": 22078,
        "name": "ناصر خسرو",
        "similar_names": "ناصرخسرو",
        "geo_center_text": "POINT(35.68002792532182 51.42245292663574)",
        "approved": 1
    },
    {
        "id": 34622,
        "name": "نامجو",
        "similar_names": "",
        "geo_center_text": "POINT(35.70038331782986 51.43867492675781)",
        "approved": 1
    },
    {
        "id": 41284,
        "name": "نامجو شمالی",
        "similar_names": null,
        "geo_center_text": "POINT(35.712789193374775 51.45146369934083)",
        "approved": 1
    },
    {
        "id": 11318,
        "name": "نبرد شمالی ",
        "similar_names": "",
        "geo_center_text": "POINT(35.6834 51.4796)",
        "approved": 1
    },
    {
        "id": 294,
        "name": "نخل",
        "similar_names": "",
        "geo_center_text": "POINT(35.8028 51.5101)",
        "approved": 1
    },
    {
        "id": 400,
        "name": "نصر (گیشا)",
        "similar_names": "",
        "geo_center_text": "POINT(35.7217 51.371)",
        "approved": 1
    },
    {
        "id": 6768,
        "name": "نظام آباد",
        "similar_names": "",
        "geo_center_text": "POINT(35.7135 51.4521)",
        "approved": 1
    },
    {
        "id": 9769,
        "name": "نعمت آباد",
        "similar_names": "",
        "geo_center_text": "POINT(35.6313 51.3535)",
        "approved": 1
    },
    {
        "id": 9495,
        "name": "نواب",
        "similar_names": "",
        "geo_center_text": "POINT(35.6615 51.3865)",
        "approved": 1
    },
    {
        "id": 9751,
        "name": "نوبنیاد",
        "similar_names": "",
        "geo_center_text": "POINT(35.7907 51.4787)",
        "approved": 1
    },
    {
        "id": 363,
        "name": "نیاوران",
        "similar_names": "",
        "geo_center_text": "POINT(35.81718676924631 51.470603942871094)",
        "approved": 1
    },
    {
        "id": 534,
        "name": "نیروگاه",
        "similar_names": "",
        "geo_center_text": "POINT(35.7685 51.2915)",
        "approved": 1
    },
    {
        "id": 3029,
        "name": "نیروی هوایی",
        "similar_names": "نیرو هوایی",
        "geo_center_text": "POINT(35.7029 51.4803)",
        "approved": 1
    },
    {
        "id": 15417,
        "name": "هاشم آباد",
        "similar_names": "هاشم اباد",
        "geo_center_text": "POINT(35.64467249179072 51.470603942871094)",
        "approved": 1
    },
    {
        "id": 506,
        "name": "هاشمی زاده",
        "similar_names": "",
        "geo_center_text": "POINT(35.7716 51.2876)",
        "approved": 1
    },
    {
        "id": 12612,
        "name": "هرندی",
        "similar_names": "",
        "geo_center_text": "POINT(35.66545529411458 51.41764640808106)",
        "approved": 1
    },
    {
        "id": 10152,
        "name": "هروی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7671 51.4706)",
        "approved": 1
    },
    {
        "id": 11565,
        "name": "هفت تیر",
        "similar_names": "",
        "geo_center_text": "POINT(35.716 51.4255)",
        "approved": 1
    },
    {
        "id": 9701,
        "name": "هفت حوض",
        "similar_names": "",
        "geo_center_text": "POINT(35.7287 51.4864)",
        "approved": 1
    },
    {
        "id": 11130,
        "name": "هفدهم شهریور",
        "similar_names": "17 شهریور،هفده شهریور",
        "geo_center_text": "POINT(35.6689 51.3027)",
        "approved": 1
    },
    {
        "id": 22984,
        "name": "هلال احمر",
        "similar_names": "",
        "geo_center_text": "POINT(35.667512357871644 51.39215469360352)",
        "approved": 1
    },
    {
        "id": 15547,
        "name": "همدانی",
        "similar_names": "",
        "geo_center_text": "POINT(35.64285897066725 51.41498565673829)",
        "approved": 1
    },
    {
        "id": 487,
        "name": "واثقی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7449 51.5566)",
        "approved": 1
    },
    {
        "id": 474,
        "name": "وارباز",
        "similar_names": "",
        "geo_center_text": "POINT(35.7513 51.5001)",
        "approved": 1
    },
    {
        "id": 23336,
        "name": "وحدت اسلامی",
        "similar_names": "",
        "geo_center_text": "POINT(35.664618507251205 51.4061450958252)",
        "approved": 1
    },
    {
        "id": 6421,
        "name": "وحیدیه",
        "similar_names": "",
        "geo_center_text": "POINT(35.7153 51.4666)",
        "approved": 1
    },
    {
        "id": 11319,
        "name": "ورامین",
        "similar_names": "",
        "geo_center_text": "POINT(35.3253 51.6458)",
        "approved": 1
    },
    {
        "id": 11616,
        "name": "وردآورد",
        "similar_names": "",
        "geo_center_text": "POINT(35.7372 51.1348)",
        "approved": 1
    },
    {
        "id": 15369,
        "name": "ورزشگاه آزادی",
        "similar_names": "مجموعه ورزشی آزادی",
        "geo_center_text": "POINT(35.73062796607026 51.27353668212891)",
        "approved": 1
    },
    {
        "id": 562,
        "name": "وصال شیرازی",
        "similar_names": "",
        "geo_center_text": "POINT(35.7059 51.3983)",
        "approved": 1
    },
    {
        "id": 15306,
        "name": "وصفنارد",
        "similar_names": "",
        "geo_center_text": "POINT(35.645648986115525 51.351127624511726)",
        "approved": 1
    },
    {
        "id": 445,
        "name": "وفامنش",
        "similar_names": "",
        "geo_center_text": "POINT(35.7736 51.4814)",
        "approved": 1
    },
    {
        "id": 359,
        "name": "ولنجک",
        "similar_names": "",
        "geo_center_text": "POINT(35.805249625952506 51.40142440795899)",
        "approved": 1
    },
    {
        "id": 432,
        "name": "ونک",
        "similar_names": "",
        "geo_center_text": "POINT(35.7689 51.3998)",
        "approved": 1
    },
    {
        "id": 3913,
        "name": "ویلاشهر",
        "similar_names": "",
        "geo_center_text": "POINT(35.7271 51.1802)",
        "approved": 1
    },
    {
        "id": 12163,
        "name": "يوسف آباد",
        "similar_names": "",
        "geo_center_text": "POINT(35.7298 51.4043)",
        "approved": 1
    },
    {
        "id": 13714,
        "name": "یاخچی آباد",
        "similar_names": "",
        "geo_center_text": "POINT(35.62716331859532 51.403312683105476)",
        "approved": 1
    },
    {
        "id": 7110,
        "name": "یافت آباد",
        "similar_names": "",
        "geo_center_text": "POINT(35.66531583024641 51.33301734924317)",
        "approved": 1
    },
    {
        "id": 421,
        "name": "یخچال",
        "similar_names": "",
        "geo_center_text": "POINT(35.7734 51.4442)",
        "approved": 1
    },
    {
        "id": 357,
        "name": "یمن",
        "similar_names": "",
        "geo_center_text": "POINT(35.7958 51.4065)",
        "approved": 1
    },
    {
        "id": 3903,
        "name": "یوسف آباد",
        "similar_names": "",
        "geo_center_text": "POINT(35.73689846061006 51.40545845031739)",
        "approved": 1
    }
]

function classNames1(...classes) {
    return classes.filter(Boolean).join(' ')
}

function classNames2(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Step3({ currentStep, setCurrentStep }) {
    const [query1, setQuery1] = useState('')
    const [query2, setQuery2] = useState('')
    const [selectedService, setSelectedService] = useState('')
    const [selectedPart, setSelectedPart] = useState('')
    const [selectedItems, setSelectedItems] = useState([])

    const filteredService =
        query1 === ''
            ? services
            : services.filter((service) => {
                return service.name.toLowerCase().includes(query1.toLowerCase())
            })

    const filteredParts =
        query2 === ''
            ? parts
            : parts.filter((part) => {
                return part.name.toLowerCase().includes(query2.toLowerCase())
            })

    const addItem = () => {
        selectedService.name && selectedPart.name &&
            setSelectedItems([...selectedItems, selectedService.name + "-" + selectedPart.name])
        setSelectedPart('')
    }

    const removeItem = (item) => {
        const newSelectedItems = [...selectedItems]
        newSelectedItems.splice(item, 1)
        setSelectedItems(newSelectedItems)
    }

    const submitHandler = () => {
        setCurrentStep(currentStep + 1)
    }

    return (
        <div>
            <div className='flex flex-col items-end'>
                <div className='flex items-end w-full mb-4'>
                    <Combobox as="div" value={selectedService} onChange={setSelectedService} className='w-1/2 ml-[5px]' >
                        <Combobox.Label className="block sm:text-base text-sm font-medium leading-6 text-gray-900">
                            در کدام حوزه ساختمانی فعالیت دارید ؟
                        </Combobox.Label>
                        <div className="relative mt-2">
                            <Image
                                src={Clipboard}
                                alt='Clipboard_list'
                                className='absolute right-2 h-full'
                            />
                            <Combobox.Input
                                className="w-full h-11 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-secondary-500 sm:text-sm sm:leading-6"
                                onChange={(event) => setQuery1(event.target.value)}
                                displayValue={(service) => service?.name}
                                placeholder='به طور مثال : نیرو های پیمانکار'
                                autoComplete='off'
                            />
                            <Combobox.Button className="absolute inset-y-0 left-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </Combobox.Button>

                            {filteredService.length > 0 && (
                                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-xs shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {filteredService.map((service) => (
                                        <Combobox.Option
                                            key={service.id}
                                            value={service}
                                            className={({ active }) =>
                                                classNames1(
                                                    'relative cursor-default select-none py-2 pl-3 pr-9',
                                                    active ? 'bg-secondary-500 text-white' : 'text-gray-900'
                                                )
                                            }
                                        >
                                            {({ active, selected }) => (
                                                <>
                                                    <span className={classNames1('block truncate', selected && 'font-semibold')}>{service.name}</span>

                                                    {selected && (
                                                        <span
                                                            className={classNames1(
                                                                'absolute inset-y-0 left-0 flex items-center pl-4',
                                                                active ? 'text-white' : 'text-secondary-500'
                                                            )}
                                                        >
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    )}
                                                </>
                                            )}
                                        </Combobox.Option>
                                    ))}
                                </Combobox.Options>
                            )}
                        </div>
                    </Combobox>

                    <Combobox as="div" value={selectedPart} onChange={setSelectedPart} className='w-1/2 mr-[5px]' >
                        <Combobox.Label className="block sm:text-base text-sm font-medium leading-6 text-gray-900">
                            در کدام بخش های این حوزه ساختمانی فعالیت دارید ؟
                        </Combobox.Label>
                        <div className="relative mt-2">
                            <Image
                                src={Clipboard_list}
                                alt='Clipboard_list'
                                className='absolute right-2 h-full'
                            />
                            <Combobox.Input
                                className="w-full h-11 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-secondary-500 sm:text-sm sm:leading-6"
                                onChange={(event) => setQuery2(event.target.value)}
                                displayValue={(part) => part?.name}
                                placeholder='به طور مثال : نقاشی ساختمان'
                                autoComplete='off'
                            />
                            <Combobox.Button className="bg-black absolute inset-y-0 left-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </Combobox.Button>

                            {filteredParts.length > 0 && (
                                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-xs shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {filteredParts.map((part) => (
                                        <Combobox.Option
                                            key={part.id}
                                            value={part}
                                            className={({ active }) =>
                                                classNames2(
                                                    'relative cursor-default select-none py-2 pl-3 pr-9',
                                                    active ? 'bg-secondary-500 text-white' : 'text-gray-900'
                                                )
                                            }
                                        >
                                            {({ active, selected }) => (
                                                <>
                                                    <span className={classNames2('block truncate', selected && 'font-semibold')}>{part.name}</span>

                                                    {selected && (
                                                        <span
                                                            className={classNames2(
                                                                'absolute inset-y-0 left-0 flex items-center pl-4',
                                                                active ? 'text-white' : 'text-secondary-500'
                                                            )}
                                                        >
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    )}
                                                </>
                                            )}
                                        </Combobox.Option>
                                    ))}
                                </Combobox.Options>
                            )}
                        </div>
                    </Combobox>
                    <div onClick={addItem} className='cursor-pointer w-11 h-11 min-w-[44px] rounded-md bg-secondary-500 mr-2 fcc'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M12 4.52527V20.5253M20 12.5253L4 12.5253" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <span className='flex mb-2 sm:text-base text-sm'>حوزه های انتخابی شما</span>
                    <div className='flex content-start items-start justify-start flex-wrap w-full h-36 border border-cf-300 rounded-md p-2 overflow-hidden overflow-y-auto'>
                        <Image src={Clipboard_check} alt='Clipboard_check' className='ml-2' />
                        {selectedItems.map((item, i) => (
                            <div key={i} className='fcc px-2 py-1 bg-secondary-500 rounded-md mx-1 text-xs text-white mt-1'>
                                {item}
                                <svg onClick={() => { removeItem(i) }} className='mr-2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 4.31816C4.68342 3.92764 5.31658 3.92764 5.70711 4.31816L10 8.61106L14.2929 4.31816C14.6834 3.92764 15.3166 3.92764 15.7071 4.31816C16.0976 4.70869 16.0976 5.34185 15.7071 5.73238L11.4142 10.0253L15.7071 14.3182C16.0976 14.7087 16.0976 15.3419 15.7071 15.7324C15.3166 16.1229 14.6834 16.1229 14.2929 15.7324L10 11.4395L5.70711 15.7324C5.31658 16.1229 4.68342 16.1229 4.29289 15.7324C3.90237 15.3419 3.90237 14.7087 4.29289 14.3182L8.58579 10.0253L4.29289 5.73238C3.90237 5.34185 3.90237 4.70869 4.29289 4.31816Z" fill="white" />
                                </svg>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <StepController currentStep={currentStep} setCurrentStep={setCurrentStep} onsubmit={submitHandler} />
        </div>
    )
}
