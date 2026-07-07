import { getAboutHistoryById, createAboutHistory, updateAboutHistory } from "@/app/actions/about.action";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiSave } from "react-icons/fi";

export default async function AdminAboutHistoryFormPage({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
  const { id } = await searchParams;
  const historyId = id ? parseInt(id) : null;
  const history = historyId ? await getAboutHistoryById(historyId) : null;

  async function handleSave(formData: FormData) {
    "use server";
    
    const data = {
      year: formData.get("year") as string,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      order: parseInt(formData.get("order") as string) || 0,
    };

    if (historyId) {
      await updateAboutHistory(historyId, data);
    } else {
      await createAboutHistory(data);
    }
    
    redirect("/admin/tentang-kami");
  }

  return (
    <div className="flex flex-col gap-8 max-w-3xl">
      <div className="flex flex-col gap-2">
        <Link href="/admin/tentang-kami" className="text-xs text-zinc-500 flex items-center gap-2 hover:text-white transition-colors uppercase tracking-widest font-semibold w-fit">
          <FiArrowLeft /> Kembali
        </Link>
        <h2 className="text-2xl font-bold tracking-wide uppercase mt-2">
          {historyId ? "Edit Sejarah OLO" : "Tambah Sejarah OLO Baru"}
        </h2>
      </div>

      <form action={handleSave} className="bg-[#111322]/50 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Tahun *</label>
          <input required type="text" name="year" defaultValue={history?.year || ""} placeholder="Contoh: 2018" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Judul *</label>
          <input required type="text" name="title" defaultValue={history?.title || ""} placeholder="Contoh: Awal Berdiri" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Deskripsi Singkat *</label>
          <textarea required name="description" defaultValue={history?.description || ""} rows={4} placeholder="Contoh: OLO didirikan dengan misi..." className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Urutan (Order)</label>
          <input type="number" name="order" defaultValue={history?.order || 0} className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
          <p className="text-[10px] text-zinc-500">Angka lebih kecil akan ditampilkan lebih dulu (0, 1, 2) sebagai urutan timeline.</p>
        </div>

        <div className="flex justify-end mt-4 pt-6 border-t border-white/10">
          <button type="submit" className="bg-[#004AC6] hover:bg-[#003cb0] text-white px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-blue-900/20">
            <FiSave className="text-lg" />
            Simpan Sejarah
          </button>
        </div>
      </form>
    </div>
  );
}
