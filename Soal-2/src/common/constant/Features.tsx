import { FeaturesProps } from "../types/features";

import { KeyIcon, DocumentChartBarIcon, PresentationChartBarIcon, ClockIcon, DocumentArrowDownIcon, LightBulbIcon } from '@heroicons/react/24/solid'

export const FEATURES: FeaturesProps[] = [
    {
        name: "Fleksibilitas",
        description: "Altech ERP menawarkan tiga tingkat layanan yang dapat disesuaikan dengan kebutuhan bisnis Anda. Anda dapat memilih solusi yang paling sesuai dengan ukuran dan kompleksitas bisnis Anda.",
        icon: KeyIcon,
    },
    {
        name: "Manajemen Bisnis yang Lebih Efisien",
        description: "Dengan Altech ERP, Anda dapat mencatat barang masuk, keluar, dan mengelola keuntungan dengan mudah. Ini membantu Anda mengoptimalkan operasi bisnis Anda, meningkatkan efisiensi, dan menghemat waktu berharga.",
        icon: DocumentChartBarIcon,
    },
    {
        name: "Analisis yang Mendalam",
        description: "Pilihan TIER 2 dan TIER 3 Altech ERP memungkinkan Anda menganalisis hasil penjualan dengan CHART yang informatif. Ini memberi Anda wawasan yang lebih mendalam tentang kinerja bisnis Anda.",
        icon: PresentationChartBarIcon,
    },
    {
        name: "Dukungan 7x24 Jam",
        description: "Kami mengutamakan kepuasan pelanggan. Altech ERP memberikan dukungan 7x24 jam yang responsif dan kompeten, sehingga Anda selalu memiliki akses ke bantuan yang Anda butuhkan",
        icon: ClockIcon,
    },
    {
        name: "Ekspor Data yang Mudah",
        description: "Dengan TIER 3/Entrepreneur, Anda dapat dengan mudah mengekspor data ke Excel. Ini memberi Anda fleksibilitas dalam mengelola data bisnis Anda.",
        icon: DocumentArrowDownIcon,
    },
    {
        name: "AI Prediksi",
        description: "Altech ERP di TIER 3/Entrepreneur menawarkan kemampuan AI prediksi penghasilan. Ini membantu Anda membuat keputusan yang lebih cerdas dan berbasis data untuk pertumbuhan bisnis yang berkelanjutan.",
        icon: LightBulbIcon,
    }
];


