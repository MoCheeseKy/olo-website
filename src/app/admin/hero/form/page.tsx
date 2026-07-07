import { getHeroBannerById, createHeroBanner, updateHeroBanner } from "@/app/actions/hero.action";
import { uploadImageAction } from "@/app/actions/upload.action";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import SubmitButton from "@/components/_shared/SubmitButton/SubmitButton";

export default async function AdminHeroFormPage({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
  const { id } = await searchParams;
  const bannerId = id ? parseInt(id) : null;
  const banner = bannerId ? await getHeroBannerById(bannerId) : null;

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

    if (bannerId) {
      await updateHeroBanner(bannerId, data);
    } else {
      await createHeroBanner(data);
    }
    
    redirect("/admin/hero");
  }

  return (
    <div className="flex flex-col gap-8 max-w-3xl">
      <div className="flex flex-col gap-2">
        <Link href="/admin/hero" className="text-xs text-zinc-500 flex items-center gap-2 hover:text-white transition-colors uppercase tracking-widest font-semibold w-fit">
          <FiArrowLeft /> Kembali
        </Link>
        <h2 className="text-2xl font-bold tracking-wide uppercase mt-2">
          {bannerId ? "Edit Hero Banner" : "Tambah Hero Banner Baru"}
        </h2>
      </div>

      <form action={handleSave} className="bg-[#111322]/50 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Gambar Banner *</label>
          <input type="hidden" name="existingImage" value={banner?.image || ""} />
          {banner?.image && (
            <div className="mb-2">
              <img src={banner.image} alt="Preview" className="w-full max-h-48 object-cover bg-white/5 rounded-lg border border-white/10" />
            </div>
          )}
          <input type="file" name="imageFile" accept="image/*" required={!banner?.image} className="bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer text-zinc-400" />
          <p className="text-[10px] text-zinc-500">Rekomendasi resolusi: 1920x1080px (Format: JPG, PNG).</p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Judul (Title) *</label>
          <input required type="text" name="title" defaultValue={banner?.title || ""} placeholder="Contoh: LOREM IPSUM DOLOR" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Deskripsi Singkat *</label>
          <textarea required name="description" defaultValue={banner?.description || ""} rows={2} placeholder="Contoh: PROTECTION THAT FEELS AS NATURAL AS YOU." className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Urutan (Order)</label>
          <input type="number" name="order" defaultValue={banner?.order || 0} className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
          <p className="text-[10px] text-zinc-500">Angka lebih kecil akan ditampilkan lebih dulu (0, 1, 2).</p>
        </div>

        <div className="flex justify-end mt-4 pt-6 border-t border-white/10">
          <SubmitButton>Simpan Banner</SubmitButton>
        </div>
      </form>
    </div>
  );
}
