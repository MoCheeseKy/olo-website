export interface IProduct {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  specs?: {
    width?: string;
    length?: string;
    material?: string;
    lubricant?: string;
  };
  shopeeUrl?: string;
  tokopediaUrl?: string;
}

export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    name: "OLO Hyaluronic Acid Zero One",
    category: "Ultra Thin",
    image: "/images/ads_product_1.png",
    description: "Nikmati kelembutan alami dan hidrasi ekstra dengan kandungan Hyaluronic Acid premium. Dirancang sangat tipis untuk kenyamanan maksimal yang terasa alami layaknya kulit asli.",
    specs: {
      width: "52 ± 2mm",
      length: "160 ± 2mm",
      material: "Lateks Alami Premium",
      lubricant: "Hyaluronic Acid Fluid",
    },
    shopeeUrl: "https://shopee.co.id/olocondom",
    tokopediaUrl: "https://tokopedia.com/olocondom",
  },
  {
    id: 2,
    name: "OLO Ultra Thin Feather",
    category: "Ultra Thin",
    image: "/images/category_1.png",
    description: "Ketipisan maksimal yang menyerupai sehelai bulu. Memberikan sensasi sentuhan yang begitu intim dan alami, memberikan kepuasan sejati tanpa mengorbankan keamanan.",
    specs: {
      width: "52 ± 2mm",
      length: "160 ± 2mm",
      material: "Lateks Alami Premium",
      lubricant: "Silicone Oil Premium",
    },
    shopeeUrl: "https://shopee.co.id/olocondom",
    tokopediaUrl: "https://tokopedia.com/olocondom",
  },
  {
    id: 3,
    name: "OLO Extra Sensation",
    category: "Textured",
    image: "/images/ads_product_1.png",
    description: "Hadir dengan kombinasi tekstur gerigi (ribbed) dan bintil (dotted) untuk sensasi stimulasi yang lebih berani. Dirancang khusus untuk memanjakan pasangan Anda dengan keintiman seru.",
    specs: {
      width: "52 ± 2mm",
      length: "160 ± 2mm",
      material: "Lateks Alami Premium",
      lubricant: "Silicone Oil Premium",
    },
    shopeeUrl: "https://shopee.co.id/olocondom",
    tokopediaUrl: "https://tokopedia.com/olocondom",
  },
  {
    id: 4,
    name: "OLO Ribbed G-Spot",
    category: "Textured",
    image: "/images/category_1.png",
    description: "Varian premium dengan tekstur ulir yang presisi untuk stimulasi mendalam pada area sensitif pasangan. Meningkatkan sensasi gesekan secara lembut dan menyenangkan.",
    specs: {
      width: "52 ± 2mm",
      length: "160 ± 2mm",
      material: "Lateks Alami Premium",
      lubricant: "Silicone Oil Premium",
    },
    shopeeUrl: "https://shopee.co.id/olocondom",
    tokopediaUrl: "https://tokopedia.com/olocondom",
  },
  {
    id: 5,
    name: "OLO Lembut Silky Touch",
    category: "lembut idk",
    image: "/images/ads_product_1.png",
    description: "Tekstur lateks yang sangat halus memberikan pengalaman sentuhan selembut sutra. Cocok untuk keintiman yang lembut, penuh kasih sayang, dan menenangkan.",
    specs: {
      width: "52 ± 2mm",
      length: "160 ± 2mm",
      material: "Lateks Alami Premium",
      lubricant: "Silicone Oil Premium",
    },
    shopeeUrl: "https://shopee.co.id/olocondom",
    tokopediaUrl: "https://tokopedia.com/olocondom",
  },
  {
    id: 6,
    name: "OLO Lorem Ipsum Max",
    category: "Lorem ipsum",
    image: "/images/category_1.png",
    description: "Varian klasik dengan tingkat perlindungan ekstra tinggi. Keamanan berlapis berpadu dengan kenyamanan maksimal untuk keintiman tanpa khawatir.",
    specs: {
      width: "52 ± 2mm",
      length: "160 ± 2mm",
      material: "Lateks Alami Premium",
      lubricant: "Silicone Oil Premium",
    },
    shopeeUrl: "https://shopee.co.id/olocondom",
    tokopediaUrl: "https://tokopedia.com/olocondom",
  },
  {
    id: 7,
    name: "OLO Platinum Zero Zero One",
    category: "Ultra Thin",
    image: "/images/ads_product_1.png",
    description: "Karya seni perlindungan tertipis dari OLO dengan ketebalan hanya 0.01mm. Merupakan varian mahakarya untuk sensasi sentuhan yang paling murni dan paling intim.",
    specs: {
      width: "52 ± 2mm",
      length: "160 ± 2mm",
      material: "Lateks Alami Premium",
      lubricant: "Hyaluronic Acid Fluid",
    },
    shopeeUrl: "https://shopee.co.id/olocondom",
    tokopediaUrl: "https://tokopedia.com/olocondom",
  },
  {
    id: 8,
    name: "OLO Dot & Ribbed Combo",
    category: "Textured",
    image: "/images/category_1.png",
    description: "Kombinasi stimulasi tak tertandingi dengan pola bintil besar dan gerigi melingkar. Memberikan sensasi klimaks yang intens bagi Anda dan pasangan.",
    specs: {
      width: "52 ± 2mm",
      length: "160 ± 2mm",
      material: "Lateks Alami Premium",
      lubricant: "Silicone Oil Premium",
    },
    shopeeUrl: "https://shopee.co.id/olocondom",
    tokopediaUrl: "https://tokopedia.com/olocondom",
  },
  {
    id: 9,
    name: "OLO Soft Sensual",
    category: "lembut idk",
    image: "/images/ads_product_1.png",
    description: "Diformulasikan khusus dengan pelumas ekstra lembut yang memberikan rasa nyaman tahan lama tanpa rasa kering, mengurangi iritasi pada area sensitif.",
    specs: {
      width: "52 ± 2mm",
      length: "160 ± 2mm",
      material: "Lateks Alami Premium",
      lubricant: "Silicone Oil Premium",
    },
    shopeeUrl: "https://shopee.co.id/olocondom",
    tokopediaUrl: "https://tokopedia.com/olocondom",
  },
  {
    id: 10,
    name: "OLO Warming Pleasure",
    category: "Lorem ipsum",
    image: "/images/category_1.png",
    description: "Memberikan sensasi hangat yang eksotis saat bersentuhan, memicu gairah lebih dalam dan keintiman yang lebih hangat bersama pasangan tercinta.",
    specs: {
      width: "52 ± 2mm",
      length: "160 ± 2mm",
      material: "Lateks Alami Premium",
      lubricant: "Warming Silicone Fluid",
    },
    shopeeUrl: "https://shopee.co.id/olocondom",
    tokopediaUrl: "https://tokopedia.com/olocondom",
  },
  {
    id: 11,
    name: "OLO Gold Luxury Edition",
    category: "Ultra Thin",
    image: "/images/ads_product_1.png",
    description: "Varian edisi mewah dengan kemasan emas eksklusif. Menggunakan bahan lateks pilihan dengan elastisitas super tinggi untuk kenyamanan tiada tanding.",
    specs: {
      width: "52 ± 2mm",
      length: "160 ± 2mm",
      material: "Lateks Alami Premium",
      lubricant: "Silicone Oil Premium",
    },
    shopeeUrl: "https://shopee.co.id/olocondom",
    tokopediaUrl: "https://tokopedia.com/olocondom",
  },
  {
    id: 12,
    name: "OLO Ribbed Pearl Stimulator",
    category: "Textured",
    image: "/images/category_1.png",
    description: "Dilengkapi dengan mutiara lateks lembut di bagian luar untuk sensasi stimulasi bergelombang yang merata, menciptakan kepuasan sensual yang mendalam.",
    specs: {
      width: "52 ± 2mm",
      length: "160 ± 2mm",
      material: "Lateks Alami Premium",
      lubricant: "Silicone Oil Premium",
    },
    shopeeUrl: "https://shopee.co.id/olocondom",
    tokopediaUrl: "https://tokopedia.com/olocondom",
  },
];
