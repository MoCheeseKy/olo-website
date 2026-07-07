import Link from "next/link";
import Image from "next/image";
import { FiPlus, FiEdit2, FiTrash2, FiSave } from "react-icons/fi";
import { getSiteSettings, updateSiteSettings } from "@/app/actions/setting.action";
import { getAboutOffers, deleteAboutOffer, getAboutHistories, deleteAboutHistory } from "@/app/actions/about.action";
import { AboutOffer, AboutHistory } from "@/generated/prisma/client";

export const metadata = {
  title: "Kelola Tentang Kami - Admin OLO",
};

export default async function AdminTentangKamiPage() {
  const settings = await getSiteSettings();
  const offers = await getAboutOffers();
  const histories = await getAboutHistories();

  async function handleSaveSettings(formData: FormData) {
    "use server";
    const data = {
      about_apa_itu_title: formData.get("about_apa_itu_title") as string,
      about_apa_itu_desc: formData.get("about_apa_itu_desc") as string,
      about_visi: formData.get("about_visi") as string,
      about_misi: formData.get("about_misi") as string,
    };
    await updateSiteSettings(data);
  }

  async function handleDeleteOffer(formData: FormData) {
    "use server";
    const id = Number(formData.get("id"));
    await deleteAboutOffer(id);
  }

  async function handleDeleteHistory(formData: FormData) {
    "use server";
    const id = Number(formData.get("id"));
    await deleteAboutHistory(id);
  }

  return (
    <div className="flex flex-col gap-10 max-w-5xl">
      <div>
        <h2 className="text-2xl font-bold tracking-wide uppercase">Kelola Tentang Kami</h2>
        <p className="text-zinc-400 text-sm mt-1">Atur konten halaman Tentang Kami (Apa itu OLO, Visi & Misi, dan Yang Ditawarkan).</p>
      </div>

      {/* Teks Pengaturan */}
      <form action={handleSaveSettings} className="bg-[#111322]/50 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-8 shadow-xl">
        
        {/* Apa Itu OLO */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-[#004AC6]">1. Apa Itu OLO? (Hero Section)</h3>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Judul Utama</label>
              <input 
                required 
                type="text" 
                name="about_apa_itu_title" 
                defaultValue={settings.about_apa_itu_title || "PILIH SENSASIMU"} 
                className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" 
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Deskripsi (Paragraf)</label>
              <textarea 
                required 
                name="about_apa_itu_desc" 
                defaultValue={settings.about_apa_itu_desc || "Kami berkomitmen untuk menghadirkan tingkat kenyamanan dan keamanan tertinggi..."} 
                rows={4} 
                className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" 
              />
            </div>
          </div>
        </div>

        {/* Visi & Misi */}
        <div className="pt-6 border-t border-white/10">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-[#004AC6]">2. Visi & Misi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Visi OLO</label>
              <textarea 
                required 
                name="about_visi" 
                defaultValue={settings.about_visi || "Menjadi pionir dalam industri kesehatan intim dengan inovasi tanpa batas."} 
                rows={5} 
                className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Misi OLO</label>
              <textarea 
                required 
                name="about_misi" 
                defaultValue={settings.about_misi || "Memberikan produk berkualitas tinggi yang menjamin keamanan dan kenyamanan."} 
                rows={5} 
                className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" 
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-2">
          <button type="submit" className="bg-[#004AC6] hover:bg-[#003cb0] text-white px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-blue-900/20">
            <FiSave className="text-lg" />
            Simpan Teks Konten
          </button>
        </div>
      </form>

      {/* Yang Ditawarkan OLO */}
      <div className="bg-[#111322]/50 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-xl">
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#004AC6]">3. Yang Ditawarkan OLO</h3>
            <p className="text-xs text-zinc-400 mt-1">Daftar layanan atau nilai jual (misal: Inovasi Teknologi, Kualitas Premium).</p>
          </div>
          <Link 
            href="/admin/tentang-kami/offer/form" 
            className="bg-white text-black px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-zinc-200 transition-colors"
          >
            <FiPlus /> Tambah Offer
          </Link>
        </div>

        {offers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {offers.map((offer: AboutOffer) => (
              <div key={offer.id} className="bg-black/40 border border-white/5 rounded-xl p-5 flex flex-col gap-4 relative group">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center p-2">
                  <Image src={offer.image} alt={offer.title} fill className="object-contain" />
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider line-clamp-1">{offer.title}</h4>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-3 leading-relaxed">{offer.description}</p>
                </div>

                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link 
                    href={`/admin/tentang-kami/offer/form?id=${offer.id}`} 
                    className="p-2 bg-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition-colors"
                    title="Edit Offer"
                  >
                    <FiEdit2 className="text-sm" />
                  </Link>
                  <form action={handleDeleteOffer}>
                    <input type="hidden" name="id" value={offer.id} />
                    <button 
                      type="submit" 
                      className="p-2 bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white rounded-lg transition-colors cursor-pointer"
                      title="Hapus Offer"
                    >
                      <FiTrash2 className="text-sm" />
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-black/20 rounded-xl border border-white/5 border-dashed">
            <p className="text-zinc-500 text-sm">Belum ada data penawaran.</p>
          </div>
        )}
      </div>

      {/* Sejarah OLO Timeline */}
      <div className="bg-[#111322]/50 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-xl">
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#004AC6]">4. Sejarah OLO (Timeline)</h3>
            <p className="text-xs text-zinc-400 mt-1">Daftar momen penting atau pencapaian OLO dari tahun ke tahun.</p>
          </div>
          <Link 
            href="/admin/tentang-kami/history/form" 
            className="bg-white text-black px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-zinc-200 transition-colors"
          >
            <FiPlus /> Tambah Sejarah
          </Link>
        </div>

        {histories.length > 0 ? (
          <div className="flex flex-col gap-4 mt-4">
            {histories.map((history: AboutHistory) => (
              <div key={history.id} className="bg-black/40 border border-white/5 rounded-xl p-5 flex justify-between items-center relative group">
                <div className="flex gap-6 items-center">
                  <div className="text-xl font-black text-[#004AC6] min-w-[80px]">
                    {history.year}
                  </div>
                  <div className="flex flex-col gap-1 border-l border-white/10 pl-6">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">{history.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">{history.description}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link 
                    href={`/admin/tentang-kami/history/form?id=${history.id}`} 
                    className="p-2 bg-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition-colors"
                    title="Edit Sejarah"
                  >
                    <FiEdit2 className="text-sm" />
                  </Link>
                  <form action={handleDeleteHistory}>
                    <input type="hidden" name="id" value={history.id} />
                    <button 
                      type="submit" 
                      className="p-2 bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white rounded-lg transition-colors cursor-pointer"
                      title="Hapus Sejarah"
                    >
                      <FiTrash2 className="text-sm" />
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-black/20 rounded-xl border border-white/5 border-dashed">
            <p className="text-zinc-500 text-sm">Belum ada data sejarah.</p>
          </div>
        )}
      </div>
    </div>
  );
}
