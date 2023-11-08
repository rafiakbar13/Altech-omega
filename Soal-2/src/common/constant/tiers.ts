import { TierProps } from "../types/tiers";

export const TIERS: TierProps[] = [
    {
        name: "Basic",
        path: "#basic",
        price: "1.200.000",
        description: "Layanan Basic adalah solusi dasar untuk mencatat barang masuk, barang keluar, dan mengelola keuntungan. Ideal untuk bisnis dengan kebutuhan manajemen inventaris dan keuangan dasar.",
        features: [
            "Mencatat barang masuk",
            "Mencatat barang masuk",
            "Mencatat hasil keuntungan",
        ],
        recommended: false,
    },
    {
        name: "Business",
        path: "#business",
        price: "2.400.000",
        description: "Layanan Business mencakup fitur TIER 1 dan menambahkan analisis penjualan dengan CHART. Cocok untuk bisnis yang ingin mengambil keputusan yang lebih cerdas dan efisien",
        features: [
            "Fitur-fitur pada tier Basic",
            "Dapat menganalisa hasil penjualan dengan Grafik",
            "Support 7x24 Jam",
        ],
        recommended: true,
    },
    {
        name: "Enterpreneur",
        path: "#enterpreneur",
        price: "4.800.000",
        description: "Layanan Enterpreneur adalah solusi paling canggih dengan dukungan 7x24 jam, ekspor data ke Excel, dan kecerdasan buatan (AI) untuk prediksi penghasilan. Ideal untuk bisnis yang mencari keunggulan kompetitif dan pertumbuhan yang berkelanjutan",
        features: [
            "Semua fitur dalam tier Business",
            "Export data ke Excel",
            "AI Prediksi penghasilan",
        ],
        recommended: false,
    }
];