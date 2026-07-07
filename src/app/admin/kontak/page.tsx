import { getSiteSettings, updateSiteSettings } from "@/app/actions/setting.action";
import { FiSave } from "react-icons/fi";

export default async function AdminKontakPage() {
  const settings = await getSiteSettings();

  async function handleSave(formData: FormData) {
    "use server";
    
    const data = {
      email: formData.get("email") as string,
      telepon: formData.get("telepon") as string,
      alamat: formData.get("alamat") as string,
      alamat_link: formData.get("alamat_link") as string,
      instagram: formData.get("instagram") as string,
      shopee_name: formData.get("shopee_name") as string,
      shopee: formData.get("shopee") as string,
      tokopedia_name: formData.get("tokopedia_name") as string,
      tokopedia: formData.get("tokopedia") as string,
    };

    await updateSiteSettings(data);
  }

  return (
    <div className="flex flex-col gap-8 max-w-4xl">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-wide uppercase">Pengaturan Kontak & Social Media</h2>
          <p className="text-zinc-400 text-sm mt-1">Informasi ini akan ditampilkan di halaman Kontak dan bagian footer website.</p>
        </div>
      </div>

      <form action={handleSave} className="bg-[#111322]/50 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-8">
        
        {/* Kontak Utama */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-[#004AC6]">Kontak Utama</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Email *</label>
              <input required type="email" name="email" defaultValue={settings.email || "olocondom@gmail.com"} placeholder="olocondom@gmail.com" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Nomor Telepon / WhatsApp *</label>
              <input required type="text" name="telepon" defaultValue={settings.telepon || "0812-3456-7890"} placeholder="0812-3456-7890" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Alamat Lengkap *</label>
              <textarea required name="alamat" defaultValue={settings.alamat || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."} rows={3} placeholder="Alamat lengkap..." className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Link Google Maps Alamat *</label>
              <input required type="url" name="alamat_link" defaultValue={settings.alamat_link || "https://maps.google.com"} placeholder="https://maps.google.com/..." className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
          </div>
        </div>

        {/* Social Media & E-Commerce */}
        <div className="pt-6 border-t border-white/10">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-[#004AC6]">Social Media & E-Commerce</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Username Instagram</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">@</span>
                <input type="text" name="instagram" defaultValue={settings.instagram || "olocondom"} placeholder="olocondom" className="w-full bg-black/50 border border-white/10 rounded-lg pl-8 pr-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Nama Toko Shopee</label>
              <input type="text" name="shopee_name" defaultValue={settings.shopee_name || "olocondom"} placeholder="olocondom" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#EE4D2D] transition-colors" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Link Shopee</label>
              <input type="url" name="shopee" defaultValue={settings.shopee || "https://shopee.co.id/olocondom"} placeholder="https://shopee.co.id/olocondom" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#EE4D2D] transition-colors" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Nama Toko Tokopedia</label>
              <input type="text" name="tokopedia_name" defaultValue={settings.tokopedia_name || "olocondom"} placeholder="olocondom" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#03AC0E] transition-colors" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Link Tokopedia</label>
              <input type="url" name="tokopedia" defaultValue={settings.tokopedia || "https://tokopedia.com/olocondom"} placeholder="https://tokopedia.com/olocondom" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#03AC0E] transition-colors" />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4 pt-6 border-t border-white/10">
          <button type="submit" className="bg-[#004AC6] hover:bg-[#003cb0] text-white px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-blue-900/20">
            <FiSave className="text-lg" />
            Simpan Pengaturan
          </button>
        </div>
      </form>
    </div>
  );
}
