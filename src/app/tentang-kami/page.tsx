import Image from "next/image";
import Wrapper from "@/components/_shared/Wrapper";
import { getSiteSettings } from "@/app/actions/setting.action";
import { getAboutOffers, getAboutHistories } from "@/app/actions/about.action";
import { AboutOffer, AboutHistory } from "@/generated/prisma/client";

export const metadata = {
  title: "Tentang Kami - OLO Website",
  description: "Pelajari lebih lanjut tentang OLO, visi, misi, dan nilai yang kami tawarkan.",
};

export default async function TentangKamiPage() {
  const settings = await getSiteSettings();
  const offers = await getAboutOffers();
  const histories = await getAboutHistories();

  // Parse judul agar ada pemisahan baris jika mengandung <br /> (atau kita tampilkan saja biasa)
  // Untuk sederhana, kita tampilkan judul biasa.
  
  const heroTitle = settings.about_apa_itu_title || "PILIH SENSASIMU";
  const heroDesc = settings.about_apa_itu_desc || "Kami berkomitmen untuk menghadirkan tingkat kenyamanan dan keamanan tertinggi. Produk kami dirancang dengan cermat, menggabungkan inovasi material dengan pemahaman mendalam tentang koneksi antar manusia, memastikan setiap pengalaman terasa alami dan tak terlupakan.";
  
  const visi = settings.about_visi || "Menjadi pionir dalam industri kesehatan intim dengan inovasi tanpa batas.";
  const misi = settings.about_misi || "Memberikan produk berkualitas tinggi yang menjamin keamanan dan kenyamanan.";

  return (
    <div className="w-full bg-[#070707] text-white min-h-screen pb-24 font-poppins relative">
      {/* Decorative Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none -z-10" />

      {/* 1. Apa Itu OLO (Hero Banner) */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden border-b border-zinc-900 py-20">
        {/* Background Cover Image */}
        <div className="absolute inset-0 w-full h-full -z-20">
          <Image
            src="/images/about_hero.png"
            alt="About Us Background"
            fill
            priority
            className="object-cover object-center brightness-[0.3]"
          />
        </div>

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-black/35 to-black/10 -z-10" />

        <Wrapper backgroundColor="bg-transparent" className="flex flex-col items-center text-center">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#0043ff] uppercase mb-4">
            APA ITU OLO?
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-wide leading-tight max-w-5xl uppercase">
            {heroTitle}
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-3xl mt-6 leading-relaxed tracking-wide">
            {heroDesc}
          </p>
        </Wrapper>
      </section>

      {/* 2. Visi & Misi */}
      <section className="w-full py-20 bg-black/20">
        <Wrapper backgroundColor="bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Visi */}
            <div className="rounded-3xl bg-gradient-to-br from-[#111322]/60 to-[#0a0b14] border border-white/5 p-10 md:p-12 flex flex-col items-center text-center gap-6 group hover:border-blue-500/20 transition-all duration-500 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[40px] rounded-full group-hover:bg-blue-500/20 transition-colors" />
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl text-blue-400 font-black">V</span>
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-black text-white tracking-widest uppercase mb-4">VISI</h2>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  {visi}
                </p>
              </div>
            </div>

            {/* Misi */}
            <div className="rounded-3xl bg-gradient-to-br from-[#111322]/60 to-[#0a0b14] border border-white/5 p-10 md:p-12 flex flex-col items-center text-center gap-6 group hover:border-blue-500/20 transition-all duration-500 shadow-2xl relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 blur-[40px] rounded-full group-hover:bg-purple-500/20 transition-colors" />
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl text-purple-400 font-black">M</span>
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-black text-white tracking-widest uppercase mb-4">MISI</h2>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  {misi}
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* 3. Yang Ditawarkan OLO */}
      <section className="w-full py-20 border-t border-zinc-950">
        <Wrapper backgroundColor="bg-transparent" className="flex flex-col gap-16">
          <div className="flex flex-col items-center text-center gap-3">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#0043ff] uppercase">
              KEUNGGULAN KAMI
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide uppercase">
              YANG DITAWARKAN OLO
            </h2>
          </div>

          {offers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offers.map((offer: AboutOffer) => (
                <div
                  key={offer.id}
                  className="rounded-2xl bg-[#111322]/40 border border-white/5 p-8 flex flex-col gap-6 hover:border-white/10 hover:bg-[#111322]/60 hover:shadow-lg transition-all duration-300 group items-center text-center"
                >
                  {/* Icon Container */}
                  <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors group-hover:bg-blue-600/10 group-hover:border-blue-500/20 overflow-hidden p-3 relative">
                    {offer.image ? (
                      <Image src={offer.image} alt={offer.title} fill className="object-contain p-2" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-blue-500/50" />
                    )}
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-bold text-white tracking-wide uppercase transition-colors group-hover:text-blue-400">
                      {offer.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {offer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 opacity-50">
              <p className="text-sm text-zinc-400">Belum ada data penawaran.</p>
            </div>
          )}
        </Wrapper>
      </section>
      {/* 4. Sejarah OLO (Timeline) */}
      <section className="w-full py-20">
        <Wrapper backgroundColor="bg-transparent" className="flex flex-col gap-16">
          <div className="flex flex-col items-center text-center gap-3">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#0043ff] uppercase">
              PERJALANAN KAMI
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide uppercase">
              SEJARAH OLO
            </h2>
          </div>

          <div className="relative w-full max-w-4xl mx-auto mt-4">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0 -translate-x-1/2" />

            <div className="flex flex-col gap-12 md:gap-20">
              {histories.map((history: AboutHistory, idx: number) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={history.id} className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''} group`}>
                    
                    {/* Glowing Dot on the timeline */}
                    <div className="absolute left-8 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-[#111322] border-2 border-blue-500 rounded-full flex items-center justify-center z-10 transition-colors duration-500 group-hover:border-white">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-white transition-colors duration-500" />
                      <div className="absolute w-8 h-8 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Timeline Content */}
                    <div className={`w-full md:w-1/2 flex flex-col pl-20 md:pl-0 ${isEven ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                      <div className={`bg-gradient-to-br from-[#111322]/40 to-transparent border border-white/5 rounded-2xl p-6 md:p-8 hover:border-blue-500/20 hover:bg-[#111322]/80 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden max-w-[400px] w-full ${isEven ? 'mr-auto md:ml-12' : 'ml-auto md:mr-12'}`}>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-[30px] rounded-full group-hover:bg-blue-500/10 transition-colors" />
                        
                        <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600/50 uppercase mb-2 ${isEven ? 'text-left' : 'text-right'}`}>
                          {history.year}
                        </div>
                        <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">
                          {history.title}
                        </h4>
                        <p className="text-xs text-zinc-400 leading-relaxed font-light">
                          {history.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {histories.length === 0 && (
                <div className="text-center py-20 text-zinc-500 text-sm border border-white/5 border-dashed rounded-xl bg-black/20">
                  Belum ada sejarah yang ditambahkan.
                </div>
              )}
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
