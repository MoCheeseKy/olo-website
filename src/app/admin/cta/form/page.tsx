import { getPromoCardById, createPromoCard, updatePromoCard } from "@/app/actions/promo.action";
import { uploadImageAction } from "@/app/actions/upload.action";
import { FiArrowLeft } from "react-icons/fi";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SubmitButton from "@/components/_shared/SubmitButton/SubmitButton";

export const metadata = {
  title: "Form Kartu Promo - Admin OLO",
};

export default async function AdminCtaFormPage({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
  const { id } = await searchParams;
  const cardId = id ? parseInt(id) : null;
  const card = cardId ? await getPromoCardById(cardId) : null;

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
    
    if (!imageUrl && !cardId) {
      // For new cards, image is required
      return; 
    }

    const data = {
      image: imageUrl,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      order: parseInt(formData.get("order") as string) || 0,
    };

    if (cardId) {
      await updatePromoCard(cardId, data);
    } else {
      await createPromoCard(data);
    }
    
    redirect("/admin/cta");
  }

  return (
    <div className="flex flex-col gap-8 max-w-3xl">
      <div className="flex flex-col gap-2">
        <Link href="/admin/cta" className="text-xs text-zinc-500 flex items-center gap-2 hover:text-white transition-colors uppercase tracking-widest font-semibold w-fit">
          <FiArrowLeft /> Kembali
        </Link>
        <h2 className="text-2xl font-bold tracking-wide uppercase mt-2">
          {cardId ? "Edit Kartu Promo" : "Tambah Kartu Promo"}
        </h2>
      </div>

      <form action={handleSave} className="bg-[#111322]/50 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-xl">
        
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Gambar Background *</label>
          <input type="hidden" name="existingImage" value={card?.image || ""} />
          {card?.image && (
            <div className="mb-2 relative w-48 h-32 bg-white/5 rounded-lg border border-white/10 overflow-hidden">
              <Image src={card.image} alt="Preview" fill className="object-cover" />
            </div>
          )}
          <input type="file" name="imageFile" accept="image/*" required={!cardId} className="bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer text-zinc-400" />
          <p className="text-[10px] text-zinc-500">Gambar akan diletakkan di sisi kiri kartu dan memudar ke kanan.</p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Judul *</label>
          <input required type="text" name="title" defaultValue={card?.title || ""} placeholder="Contoh: BEST CONDOM OF 2025" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Deskripsi *</label>
          <textarea required name="description" defaultValue={card?.description || ""} rows={5} placeholder="Deskripsi mengenai produk promo..." className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Urutan (Order)</label>
          <input type="number" name="order" defaultValue={card?.order || 0} className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
          <p className="text-[10px] text-zinc-500">Angka lebih kecil akan ditampilkan lebih dulu (0, 1, 2) dari atas ke bawah.</p>
        </div>

        <div className="flex justify-end mt-4 pt-6 border-t border-white/10">
          <SubmitButton>Simpan Kartu</SubmitButton>
        </div>
      </form>
    </div>
  );
}
