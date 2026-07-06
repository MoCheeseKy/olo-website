import { getProductTypeById, createProductType, updateProductType } from "@/app/actions/productType.action";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiSave } from "react-icons/fi";

export default async function AdminJenisProdukFormPage({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
  const { id } = await searchParams;
  const typeId = id ? parseInt(id) : null;
  const type = typeId ? await getProductTypeById(typeId) : null;

  async function handleSave(formData: FormData) {
    "use server";
    
    const data = {
      name: formData.get("name") as string,
      category: formData.get("category") as string,
    };

    if (typeId) {
      await updateProductType(typeId, data);
    } else {
      await createProductType(data);
    }
    
    redirect("/admin/jenis-produk");
  }

  return (
    <div className="flex flex-col gap-8 max-w-3xl">
      <div className="flex flex-col gap-2">
        <Link href="/admin/jenis-produk" className="text-xs text-zinc-500 flex items-center gap-2 hover:text-white transition-colors uppercase tracking-widest font-semibold w-fit">
          <FiArrowLeft /> Kembali
        </Link>
        <h2 className="text-2xl font-bold tracking-wide uppercase mt-2">
          {typeId ? "Edit Jenis Produk" : "Tambah Jenis Produk Baru"}
        </h2>
      </div>

      <form action={handleSave} className="bg-[#111322]/50 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Nama Jenis *</label>
            <input required type="text" name="name" defaultValue={type?.name || ""} placeholder="Contoh: Seri 001 Premium" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Kategori Induk *</label>
            <select required name="category" defaultValue={type?.category || "Kondom"} className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none">
              <option value="Kondom">Kondom</option>
              <option value="Aksesoris">Aksesoris</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end mt-4 pt-6 border-t border-white/10">
          <button type="submit" className="bg-[#004AC6] hover:bg-[#003cb0] text-white px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-blue-900/20">
            <FiSave className="text-lg" />
            Simpan Jenis
          </button>
        </div>
      </form>
    </div>
  );
}
