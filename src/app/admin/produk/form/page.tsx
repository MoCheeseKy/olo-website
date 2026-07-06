import { getProductById, createProduct, updateProduct } from "@/app/actions/product.action";
import { uploadImageAction } from "@/app/actions/upload.action";
import { getProductTypes } from "@/app/actions/productType.action";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiSave } from "react-icons/fi";

export default async function AdminProdukFormPage({ searchParams }: { searchParams: Promise<{ id?: string, category?: string }> }) {
  const { id, category: queryCategory } = await searchParams;
  const productId = id ? parseInt(id) : null;
  const product = productId ? await getProductById(productId) : null;

  const formCategory = product?.category || queryCategory || "Kondom";
  const productTypes = await getProductTypes(formCategory);

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
        // Fallback to empty string if no existing image, or we could throw an error
        if (!imageUrl) imageUrl = "";
      }
    }
    
    const typeIdStr = formData.get("typeId") as string;
    
    const data = {
      name: formData.get("name") as string,
      category: formData.get("category") as string,
      image: imageUrl,
      description: formData.get("description") as string,
      width: formData.get("width") as string,
      length: formData.get("length") as string,
      material: formData.get("material") as string,
      lubricant: formData.get("lubricant") as string,
      shopeeUrl: formData.get("shopeeUrl") as string,
      tokopediaUrl: formData.get("tokopediaUrl") as string,
      typeId: typeIdStr ? parseInt(typeIdStr) : null,
    };

    if (productId) {
      await updateProduct(productId, data);
    } else {
      await createProduct(data);
    }
    
    redirect("/admin/produk");
  }

  return (
    <div className="flex flex-col gap-8 max-w-3xl">
      <div className="flex flex-col gap-2">
        <Link href="/admin/produk" className="text-xs text-zinc-500 flex items-center gap-2 hover:text-white transition-colors uppercase tracking-widest font-semibold w-fit">
          <FiArrowLeft /> Kembali
        </Link>
        <h2 className="text-2xl font-bold tracking-wide uppercase mt-2">
          {productId ? "Edit Produk" : "Tambah Produk Baru"}
        </h2>
      </div>

      <form action={handleSave} className="bg-[#111322]/50 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Nama Produk *</label>
            <input required type="text" name="name" defaultValue={product?.name || ""} className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Kategori *</label>
            <select required name="category" defaultValue={formCategory} className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none">
              <option value="Kondom">Kondom</option>
              <option value="Pelumas">Pelumas</option>
              <option value="Aksesoris">Aksesoris</option>
            </select>
          </div>

          {(formCategory === "Kondom" || formCategory === "Aksesoris") && (
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Jenis Produk (Opsional)</label>
              <select name="typeId" defaultValue={product?.typeId || ""} className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                <option value="">-- Pilih Jenis --</option>
                {productTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Gambar *</label>
          <input type="hidden" name="existingImage" value={product?.image || ""} />
          {product?.image && (
            <div className="mb-2">
              <img src={product.image} alt="Preview" className="w-24 h-24 object-contain bg-white/5 rounded-lg border border-white/10" />
            </div>
          )}
          <input type="file" name="imageFile" accept="image/*" required={!product?.image} className="bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer text-zinc-400" />
          <p className="text-[10px] text-zinc-500">Pilih file gambar dari komputer Anda.</p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Deskripsi Produk *</label>
          <textarea required name="description" defaultValue={product?.description || ""} rows={4} className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
        </div>

        <div className="border-t border-white/10 pt-6 mt-2">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-[#004AC6]">Spesifikasi Detail (Opsional)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Lebar</label>
              <input type="text" name="width" defaultValue={product?.width || ""} placeholder="52 ± 2mm" className="bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Panjang</label>
              <input type="text" name="length" defaultValue={product?.length || ""} placeholder="160 ± 2mm" className="bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Material</label>
              <input type="text" name="material" defaultValue={product?.material || ""} placeholder="Lateks Alami Premium" className="bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Lubricant</label>
              <input type="text" name="lubricant" defaultValue={product?.lubricant || ""} placeholder="Silicone Oil Premium" className="bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 mt-2">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-[#004AC6]">Tautan E-Commerce (Opsional)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Link Shopee</label>
              <input type="url" name="shopeeUrl" defaultValue={product?.shopeeUrl || ""} placeholder="https://shopee.co.id/..." className="bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#EE4D2D] transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Link Tokopedia</label>
              <input type="url" name="tokopediaUrl" defaultValue={product?.tokopediaUrl || ""} placeholder="https://tokopedia.com/..." className="bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#03AC0E] transition-colors" />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4 pt-6 border-t border-white/10">
          <button type="submit" className="bg-[#004AC6] hover:bg-[#003cb0] text-white px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-blue-900/20">
            <FiSave className="text-lg" />
            Simpan Produk
          </button>
        </div>
      </form>
    </div>
  );
}
