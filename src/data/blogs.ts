export interface IBlog {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  content: string[];
}

export const BLOG_POSTS: IBlog[] = [
  {
    id: 1,
    image: "/images/blog_couple.png",
    category: "Tips Hubungan",
    title: "Consent dalam Hubungan: Hal Kecil yang Penting",
    description: "Memahami pentingnya persetujuan (consent) dan komunikasi yang jujur sebagai pondasi utama hubungan yang sehat, harmonis, dan saling menghormati.",
    author: "Admin OLO",
    date: "28 Mei 2026",
    content: [
      "Persetujuan atau consent adalah elemen fundamental dalam setiap bentuk keintiman fisik. Banyak hubungan yang mengalami kendala komunikasi karena menganggap persetujuan sebagai sesuatu yang implisit atau tidak perlu dibahas secara terbuka. Padahal, komunikasi yang transparan tentang kenyamanan masing-masing adalah kunci utama untuk menciptakan hubungan yang harmonis.",
      "Membangun budaya consent berarti saling mendengarkan keinginan dan batasan pasangan tanpa adanya paksaan atau tekanan sosial. Ini bukan hanya tentang kata 'Ya' atau 'Tidak', melainkan sebuah dialog yang berkelanjutan sebelum, selama, dan setelah momen-momen intim.",
      "Bagaimana cara menerapkannya dalam kehidupan sehari-hari? Mulailah dengan menanyakan kenyamanan pasangan Anda dengan pertanyaan sederhana seperti 'Apakah kamu menyukai ini?' atau 'Apakah kamu merasa nyaman jika kita mencoba hal baru?'. Keterbukaan semacam ini tidak hanya melindungi batas-batas individu, tetapi juga memperdalam rasa saling percaya dan keintiman emosional.",
    ],
  },
  {
    id: 2,
    image: "/images/blog_couple.png",
    category: "Produk",
    title: "Apa Bedanya Kondom Tipis, Bertekstur, dan Extra Safe?",
    description: "Panduan lengkap mengenali berbagai varian kondom OLO mulai dari sensasi ultra-tipis, tekstur stimulasi, hingga jaminan keamanan ekstra.",
    author: "Tim Ahli OLO",
    date: "25 Mei 2026",
    content: [
      "Saat memilih kondom, Anda mungkin sering dihadapkan pada berbagai pilihan label seperti 'Ultra Thin', 'Textured', atau 'Extra Safe'. Memahami fungsi dari masing-masing tipe ini akan membantu Anda dan pasangan menemukan kecocokan yang sempurna demi meningkatkan kualitas hubungan intim Anda.",
      "1. Kondom Ultra Thin (Tipis): Dirancang untuk memberikan sensasi yang sangat alami seolah-olah tidak mengenakan apa-apa. Sangat direkomendasikan bagi mereka yang memprioritaskan rasa sentuhan alami (skin-to-skin feeling). Varian OLO Zero One atau Platinum adalah contoh dari inovasi ketipisan ekstrem ini.",
      "2. Kondom Bertekstur (Textured): Memiliki kontur bintil (dotted) atau ulir (ribbed) pada permukaan luarnya. Tekstur ini berfungsi untuk memberikan stimulasi gesekan tambahan pada pasangan, membantu mempercepat atau mengintensifkan klimaks sensual.",
      "3. Kondom Extra Safe: Dibuat dengan dinding lateks yang sedikit lebih tebal atau bahan lateks dengan ketahanan tarik tinggi. Varian ini mengedepankan keamanan maksimal untuk mencegah kebocoran, sangat cocok bagi pasangan yang ingin menikmati keintiman dengan rasa tenang tanpa kekhawatiran.",
    ],
  },
  {
    id: 3,
    image: "/images/blog_couple.png",
    category: "Kesehatan",
    title: "Pentingnya Seks Aman untuk Menjaga Kesehatan Reproduksi",
    description: "Mengapa seks aman dan penggunaan alat kontrasepsi berkualitas adalah investasi jangka panjang untuk kesehatan tubuh, pikiran, dan masa depan Anda.",
    author: "Dokter Konsultan OLO",
    date: "20 Mei 2026",
    content: [
      "Kesehatan reproduksi sering kali diabaikan hingga timbul masalah medis yang serius. Praktik seks aman (safe sex) bukan hanya sekadar mencegah kehamilan yang tidak direncanakan, melainkan pertahanan utama terhadap penyebaran Infeksi Menular Seksual (IMS) seperti HIV, klamidia, dan sifilis.",
      "Menggunakan kondom lateks berkualitas tinggi secara konsisten dan benar terbukti secara klinis dapat menurunkan risiko penularan IMS hingga lebih dari 90%. Ini menjadikannya salah satu metode proteksi paling efisien yang mudah diakses oleh semua orang.",
      "Selain perlindungan fisik, seks aman memberikan ketenangan mental (peace of mind). Rasa khawatir yang berlebihan selama hubungan intim dapat menghambat kepuasan dan mengurangi ikatan emosional antar pasangan. Dengan menerapkan seks aman, Anda berinvestasi pada kesehatan fisik sekaligus kesejahteraan psikologis hubungan Anda.",
    ],
  },
];
