import { getAboutOfferById, createAboutOffer, updateAboutOffer } from "@/app/actions/about.action";
import { uploadImageAction } from "@/app/actions/upload.action";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiSave } from "react-icons/fi";

export default async function AdminAboutOfferFormPage({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
  const { id } = await searchParams;
  const offerId = id ? parseInt(id) : null;
  const offer = offerId ? await getAboutOfferById(offerId) : null;

  async function handleSave(formData: FormData) {
    "use server";
    
    let imageUrl = formData.get("existingImage") as string;
    const imageFile = formData.get("imageFile") as File | null;

    if (imageFile && imageFile.size > 0) {
      const uploadFormData = new FormData();
      uploadFormData.append("file", imageFile);
      const uploadResult = await uploadImageAction(uploadFormData);
      if (uploadResult.success && uploadResult.url) {
        imageUrl = uploadResult.url;
      } else {
        console.error("Failed to upload image:", uploadResult.error);
        if (!imageUrl) imageUrl = "";
      }
    }
    
    const data = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      image: imageUrl,
      order: parseInt(formData.get("order") as string) || 0,
    };

    if (offerId) {
      await updateAboutOffer(offerId, data);
    } else {
      await createAboutOffer(data);
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
          {offerId ? "Edit Penawaran OLO" : "Tambah Penawaran OLO Baru"}
        </h2>
      </div>

      <form action={handleSave} className="bg-[#111322]/50 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Gambar / Ikon *</label>
          <input type="hidden" name="existingImage" value={offer?.image || ""} />
          {offer?.image && (
            <div className="mb-2 w-24 h-24 relative rounded-xl overflow-hidden bg-white/5 border border-white/10 p-2">
              <img src={offer.image} alt="Preview" className="w-full h-full object-contain" />
            </div>
          )}
          <input type="file" name="imageFile" accept="image/*" required={!offer?.image} className="bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer text-zinc-400" />
          <p className="text-[10px] text-zinc-500">Rekomendasi ikon resolusi 200x200px atau sejenisnya (Format: JPG, PNG).</p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Judul *</label>
          <input required type="text" name="title" defaultValue={offer?.title || ""} placeholder="Contoh: Inovasi Teknologi" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Deskripsi *</label>
          <textarea required name="description" defaultValue={offer?.description || ""} rows={4} placeholder="Contoh: Penjelasan singkat mengenai inovasi..." className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Urutan (Order)</label>
          <input type="number" name="order" defaultValue={offer?.order || 0} className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
          <p className="text-[10px] text-zinc-500">Angka lebih kecil akan ditampilkan lebih dulu (0, 1, 2).</p>
        </div>

        <div className="flex justify-end mt-4 pt-6 border-t border-white/10">
          <button type="submit" className="bg-[#004AC6] hover:bg-[#003cb0] text-white px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-blue-900/20">
            <FiSave className="text-lg" />
            Simpan Offer
          </button>
        </div>
      </form>
    </div>
  );
}
